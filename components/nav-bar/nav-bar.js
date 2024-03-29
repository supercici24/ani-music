// components/nav-bar/nav-bar.js
const app = getApp()

Component({
    options:{
        multipleSlots: true
    },

    /**
     * 组件的属性列表
     */
    properties: {
        title:{
            type:String,
            value:"导航标题"
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        statusHeight: 20,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onLeftClick(){
            this.triggerEvent("leftClick")
        }
    },
    lifetimes: {
        attached() {
            this.setData({
                statusHeight: app.globalData.statusHeight
            })
        }
    }
})