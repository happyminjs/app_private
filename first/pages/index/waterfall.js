var waterFall = {
    columnNumber: 1, // 列数
    columnWidth: 172,// 每列的宽度
    columnNum: 10,// 每次渲染总数据条数
    rootImage: "http://cued.xunlei.com/demos/publ/img/", // 图片源
    indexImage: 0,// 第几个图片
    scrollTop: document.documentElement.scrollTop || document.body.scrollTop, // 滚动高度
    detectLeft: 0,
    loadFinish: false, // 是否已加载完
    init:function(){
        this.create().scroll().resize();
    },
    create:function(){
        
    }
};