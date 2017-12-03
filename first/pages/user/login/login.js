// import '/utils/ajax.js'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        nowpage:'login', // login:登录； registe：注册； forgetPsw：找回密码
        login_phone:'',
        login_psw:'',
        register_phone:'',
        register_psw:'',
        register_deal:'', // 注册时同意使用协议
        find_psw_phone:'',
        find_psw_psw:'',
        toast_content:''

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    toastfn:function(str){
        let that = this;
        if(!str){
            return false;
        }
        this.setData({
            toast_content: str
        })
        setTimeout(function () {
            that.setData({
                toast_content: ''
            })
        }, 2000);
    },
    check_agree: function (e) {
        this.data.register_deal = e.detail.value[0];
    },
    goRegiste:function(){
        this.setData({
            nowpage:'registe'
        })
    },
    goFindPwd:function(){
        this.setData({
            nowpage: 'forgetPsw'
        })
    },
    /**
     * 登录操作
     */
    login_input_phone:function(e){
        this.data.login_phone = e.detail.value;
    },
    login_input_psw:function(e){
        this.data.login_psw = e.detail.value;
    },
    goLogin:function(){
        // todo 登录操作
        // 
    },
    /**
     * 注册／找回密码操作
     */
    registe_input_phone: function (e) {
        this.data.register_phone = e.detail.value;
    },
    registe_input_psw: function (e) {
        this.data.register_psw = e.detail.value;
    },
    registefn: function () {
        let that = this;
        // todo 注册操作
        if (!this.data.register_deal){
            this.toastfn('请同意掌上美店使用协议');
        }
    },
    find_psw:function(){
        // todo 找回密码操作
    }
})