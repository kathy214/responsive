/**
 * Created by Administrator on 2017/6/27.
 */
window.onload=function(){
/*轮播图，图片自适应*/
    ;(function(){
        var screenWidth=$(window).width();
        var smallScreen=640;
        var carouselInner=$(".carousel-inner");
        var items=$(".item",carouselInner);
        var img=$("img",carouselInner);
        $(window).on("resize",function(){
            screenWidth=$(window).width();
            img.each(function(index,el){
                var src=screenWidth<smallScreen?$(this).data("msrc"):$(this).data("psrc");
                $(this).attr("src",src);
            });
            img.css({
                'width':screenWidth<smallScreen ? '100%' : 'auto',
                'height':screenWidth<smallScreen ? 'auto' : '410px',
                'position':screenWidth<smallScreen ? 'static' : 'absolute',
                'transform':screenWidth<smallScreen ? 'none' : 'translateX(-50%)'
            })
                items.css('height',screenWidth<smallScreen ? 'auto' : '410px');
           /* if(screenWidth<smallScreen){
                img.css({
                    'width':'100%',
                    'height':'auto',
                    'position':'static',
                    'transform':'none'
                })
                items.css("height","auto");
            }else{
                img.css({
                    'width':'auto',
                    'height':'410px',
                    'position':'absolute',
                    'transform':'translateX(-50%)'
                })
                items.css("height","410px")
            }*/
        }).trigger("resize")



        /*出现滚动条，动态获取ul的长度*/
        var wjsChange=$(".wjs-change");
        var navTabs=$(".nav-tabs",wjsChange);
        var li=$("li",navTabs);
        var sum=0;
        li.each(function(index,el){
            sum+=$(this).width();
        })
        navTabs.width(sum);


        /*触摸滑动事件*/
        var carousel=$(".carousel");
        var startX=0;
        var startTime=null;
        carousel.on("touchstart",function(e){
            /*originalEvent 原生的event的事件对象*/
             startX=e.originalEvent.changedTouches[0].clientX;
            startTime=new Date();
        })
        carousel.on("touchend",function(e){
            var dx= e.originalEvent.changedTouches[0].clientX-startX;
            var dTime=new Date()-startTime;
            if(Math.abs(dx)>screenWidth/3 || (Math.abs(dx)>30 && dTime<300)){
                if(dx>0){
                    carousel.carousel('prev');
                }else{
                    carousel.carousel('next');
                }
            }
        })
    })()

}
