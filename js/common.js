window.app = {
    // 获取 屏幕宽高
    winW : window.innerWidth,
    winH : window.innerHeight,
    init:function(){
         // 默认设备横屏的时候出现提示
         new LandscapeTip();
         // 解决手机 键盘
         $('input').blur(function () {
            setTimeout(() => {
                var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0
                window.scrollTo(0, Math.max(scrollHeight, 0))
            }, 100)
        });
    },
    getQueryString: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return unescape(r[2]);
        return null;
    },
    tab : function(opt) {
        var opt_top = [...document.querySelector(opt.top).children];
        var opt_bottom = [...document.querySelector(opt.bottom).children];
        opt_top[0].classList.add(opt.active);
        opt_bottom[0].style.display = "block";
        opt_top.forEach((ele,i)=>{
            ele.setAttribute("data-index",i);
            ele.onclick = function() {
                event.stopPropagation();
                for(let j = 0;j<opt_top.length;j++) {
                    opt_top[j].classList.remove(opt.active);
                }
                this.classList.add(opt.active);
        
                for(var t =0;t<opt_bottom.length;t++){
                    opt_bottom[t].style.display = "none";
                    if(this.getAttribute("data-index") == t){
                        opt_bottom[t].style.display = "block";
                    }
                }
                callback&&callback();
            }
        })
    }

    /* 
        举例:
        app.tab(
            {
                top : ".tab-top",
                bottom : ".tab-bottom",
                active : "active",
                callback : function(){},
            }
        )

        注:
            初始化默认是显示第一个
            top为点击的li的大盒子的类名或者id,如果是类名,请确保唯一
            bottom为下面切换的大盒子的类名或者id,如果是类名,请确保唯一
            重中之重,active 为加在top里的li的类名,一定要确保active的层级不会被覆盖
            callback为回调函数,点击完后执行,可写可不写
            top和bottom的盒子不一定为ul,也可以为div
    */  
};

// app.init();
