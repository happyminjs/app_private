//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        scrollH: 0, // scrollview滚动高度
        loadingCount: 0,
        images: [],
        col1: [],
        col2: [],
        column:[[],[]], // 展示数据
        ww: 0,      // 显示区总宽度
        wh: 0,      // 显示区总高度
        columnWidth:0,   // 每列的宽度
        columnNum: 10,   // 每次加载的总数据
        columnNumber: 2, // 列数
        indexImage: 0 ,  // 第几条数据
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: (res) => {
                that.data.ww = res.windowWidth;// 显示区总宽度
                that.data.wh = res.windowHeight; // 显示区总高度
                that.data.columnWidth = res.windowWidth / that.data.columnNumber ; // 每列的宽度
                that.data.scrollH = res.windowHeight; // 列表滚动区域的高度
                //加载首组图片
                that.waterFall()
            }
        })
    },
    waterFall:function(){
        var htmlColumn = [[],[]], self = this;
        for (let i = 0, iLen = self.data.columnNumber; i < iLen; i++){
            for (let j = 0, jLen = self.data.columnNum / self.data.columnNumber; j < jLen ; j++){
                self.data.indexImage = i + self.data.columnNumber * j;
                var index = self.getIndex();
                var imgInfo = {
                    imgUrl: 'http://cued.xunlei.com/demos/publ/img/P_' + index + '.jpg',
                }
                htmlColumn[i].push(imgInfo);
            }
        }
        var templist = self.data.column;
        templist[0] = templist[0].concat(htmlColumn[0]);
        templist[1] = templist[1].concat(htmlColumn[1]);
        self.setData({
            column: self.data.column.concat(templist)
        })
    },



    // 返回固定格式的图片名
    getIndex: function () {
        var index = this.data.indexImage;
        if (index < 10) {
            index = "00" + index;
        } else if (index < 100) {
            index = "0" + index;
        }
        return index;
    },

})
