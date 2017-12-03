const ajaxDomain = 'http://www.linkbibi.com:8080/';

var ajaxfn = function(options){
    if(!options.url){
        console.log('缺少接口参数url');
    }
    wx.request({
        url: ajaxDomain + options.url,
        data:options.data || {},
        header: options.header || {
            'content-type': 'application/json'
        },
        method:options.method || 'POST',
        success:function(res){
            res = typeof res == 'string' ? JSON.parse(res) : res;
            typeof options.success == 'function' && options.success(res);
        },
        fail:function(err){
            console.log(err.msg);
        }
    })
}