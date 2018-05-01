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

const dynamicRoutes = [
    {
        path: '/order',
        component: Order,
        name: '订单管理',
        children: [
            {
                path: 'list',
                name: '订单列表',
                component: OrderList
            },
            {
                path: 'product',
                name: '生产管理',
                component: ProductManage,
                children: [
                    {
                        path: 'list',
                        name: '生产列表',
                        component: ProductionList
                    },
                    {
                        path: 'review',
                        name: '审核管理',
                        component: ReviewManage
                    }
                ]
            },
            {
                path: 'returnGoods',
                name: '退货管理',
                component: ReturnGoods
            }
        ]
    },
    {
        path: '/goods',
        component: Goods,
        name: '产品管理',
        children: [
            {
                path: 'list',
                name: '产品列表',
                component: GoodsList
            },
            {
                path: 'classify',
                name: '产品分类',
                component: GoodsClassify
            }
        ]
    }
]

export default dynamicRoutes
