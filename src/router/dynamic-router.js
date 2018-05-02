/* 订单管理 */
import Order from 'pages/order-manage'
import OrderList from 'pages/order-manage/order-list'
import ProductManage from 'pages/order-manage/product-manage'
import ProductionList from 'pages/order-manage/product-manage/production-list'
import ReviewManage from 'pages/order-manage/product-manage/review-manage'
import ReturnGoods from 'pages/order-manage/return-goods'

/* 产品管理 */
import Goods from 'pages/goods-manage'
import GoodsList from 'pages/goods-manage/goods-list'
import GoodsClassify from 'pages/goods-manage/goods-classify'

/* 需要权限判断的路由 */
const dynamicRoutes = [
    {
        path: '/order',
        component: Order,
        name: 'order-manage',
        meta: {
            name: '订单管理'
        },
        children: [
            {
                path: 'list',
                name: 'order-list',
                component: OrderList,
                meta: {
                    name: '订单列表'
                }
            },
            {
                path: 'product',
                name: 'product-manage',
                component: ProductManage,
                meta: {
                    name: '生产管理'
                },
                children: [
                    {
                        path: 'list',
                        name: 'product-list',
                        component: ProductionList,
                        meta: {
                            name: '生产列表'
                        }
                    },
                    {
                        path: 'review',
                        name: 'review-manage',
                        component: ReviewManage,
                        meta: {
                            name: '审核管理'
                        }
                    }
                ]
            },
            {
                path: 'returnGoods',
                name: 'return-goods',
                component: ReturnGoods,
                meta: {
                    name: '退货管理'
                }
            }
        ]
    },
    {
        path: '/goods',
        component: Goods,
        name: 'goods',
        meta: {
            name: '产品管理'
        },
        children: [
            {
                path: 'list',
                name: 'goods-list',
                component: GoodsList,
                meta: {
                    name: '产品列表'
                }
            },
            {
                path: 'classify',
                name: 'goods-classify',
                component: GoodsClassify,
                meta: {
                    name: '产品分类'
                }
            }
        ]
    }
]

export default dynamicRoutes
