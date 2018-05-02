import { fetchPermission } from '@/api/permission'
import router, { DynamicRoutes } from '@/router/index'
import { recursionRouter, setDefaultRoute } from '@/utils/recursion-router'
import dynamicRouter from '@/router/dynamic-router'

export default {
    namespaced: true,
    state: {
        permissionList: null /** 所有路由 */,
        sidebarMenu: [] /** 导航菜单 */,
        currentMenu: '' /** 当前active导航菜单 */
    },
    getters: {},
    mutations: {
        SET_PERMISSION(state, routes) {
            state.permissionList = routes
        },
        CLEAR_PERMISSION(state) {
            state.permissionList = null
        },
        SET_MENU(state, menu) {
            state.sidebarMenu = menu
        },
        CLEAR_MENU(state) {
            state.sidebarMenu = []
        },
        SET_CURRENT_MENU(state, currentMenu) {
            state.currentMenu = currentMenu
        }
    },
    actions: {
        async FETCH_PERMISSION({ commit, state }) {
            let permissionList = await fetchPermission()

            /*  根据权限筛选出我们设置好的路由并加入到path=''的children */
            let routes = recursionRouter(permissionList, dynamicRouter)
            let MainContainer = DynamicRoutes.find(v => v.path === '')
            let children = MainContainer.children
            children.push(...routes)

            /* 生成左侧导航菜单 */
            commit('SET_MENU', children)

            /*
                为所有有children的菜单路由设置第一个children为默认路由
                主要是供面包屑用，防止点击面包屑后进入某个路由下的 '' 路由,比如/manage/
                而我们的路由是
                [
                    /manage/menu1,
                    /manage/menu2
                ]
            */
            setDefaultRoute([MainContainer])

            /*  初始路由 */
            let initialRoutes = router.options.routes

            /*  动态添加路由 */
            router.addRoutes(DynamicRoutes)

            /* 完整的路由表 */
            commit('SET_PERMISSION', [...initialRoutes, ...DynamicRoutes])
        }
    }
}
