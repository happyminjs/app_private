//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        scrollH: 0, // scrollview滚动高度
        column:[], // 展示数据
        ww: 0,      // 显示区总宽度
        wh: 0,      // 显示区总高度
        columnWidth:0,   // 每列的宽度
        columnNum: 10,   // 每次加载的总数据
        columnNumber: 2, // 列数
        indexImage: 0 ,  // 第几条数据
        isloading: false, // 是否加载中
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: (res) => {
                that.data.ww = res.windowWidth;// 显示区总宽度
                that.data.wh = res.windowHeight; // 显示区总高度
                that.setData({
                    columnWidth: res.windowWidth / that.data.columnNumber , // 每列的宽度
                    scrollH: res.windowHeight + 'px'  // 列表滚动区域的高度
                })
                //加载首组图片
                that.waterFall()
            }
        })
    },
    waterFall:function(){
        var htmlColumn = [], self = this;
        for (let i = 0, iLen = self.data.columnNumber; i < iLen; i++){
            htmlColumn.push([]);
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
        templist[0] = templist[0] ? templist[0] : new Object;
        templist[1] = templist[1] ? templist[1] : new Object;
        templist[0] = {
            data: templist[0].data ? templist[0].data.concat(htmlColumn[0]) : htmlColumn[0],
            height:0
        };
        templist[1] = {
            data: templist[1].data ? templist[1].data.concat(htmlColumn[1]) : htmlColumn[1],
            height: 0
        } 
        self.setData({
            column: templist
        })
        self.data.isloading = false;
    },
    scrolling:function(e){
        this.scrollTop = e.detail.scrollTop;
    },
    imgScroll:function(){
        let self = this;
        if(!self.isloading){
            // self.isloading = true;
            self.appendImg();
            self.data.isloading = false;
        }
    },
    appendImg:function(){
        let htmlColumn = this.data.column,that = this;
        that.data.indexImage = that.data.indexImage - 0 + 1;
        var index = that.getIndex();
        var imgInfo = {
            imgUrl: 'http://cued.xunlei.com/demos/publ/img/P_' + index + '.jpg',
        }
        if(htmlColumn[0].height - htmlColumn[1].height > 200){
            htmlColumn[1].data.push(imgInfo);
        } else if (htmlColumn[1].height - htmlColumn[0].height > 200){
            htmlColumn[0].data.push(imgInfo);
        }else{
            htmlColumn[0].data.push(imgInfo);
            that.data.indexImage = that.data.indexImage - 0 + 1;
            index = that.getIndex();
            imgInfo = {
                imgUrl: 'http://cued.xunlei.com/demos/publ/img/P_' + index + '.jpg',
            }
            htmlColumn[1].data.push(imgInfo);
        }
        that.setData({
            column: htmlColumn
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
    /**
     * @imgLoad 瀑布流中图片加载完成事件
     */
    imgLoad:function(e){
        let oImgW = e.detail.width;
        let oImgH = e.detail.height;
        let imgH = oImgH * 345 / oImgW;
        this.data.column[e.target.dataset.columnindex].data[e.target.dataset.imgindex].height = imgH + 'rpx';
        this.data.column[e.target.dataset.columnindex].height = this.data.column[e.target.dataset.columnindex].height + (imgH + 56) * this.data.ww / 750;
        this.setData({
            column: this.data.column
        })
    },
    gotoDetail:function(e){
        // console.log(e);
        let columnIndex = e.target.dataset.columnindex;
        let imgIndex = e.target.dataset.imgindex;
        console.log(this.data.column[columnIndex].data[imgIndex]);
        wx.navigateTo({
            url: '/pages/shop/detail/detail',
        })
    }
})
