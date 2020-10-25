## 文件目录解释
+ css
    - app.css   // 由app.less编译出来的文件，在index.html头部引入
    - app.less  // 项目样式编写在这个文件里面
    - animate.css   // 由animate.less编译出来的文件，在index.html头部引入（如果没有动画或者动画比较少可以删除本文件及animate.less）  
    - animate.less  // 项目所有动画都编写在这个文件里面
+ font
    - // 如果项目引入字体文件，本文件夹用来放置字体文件
+ img
    - // 本文件用来存放图片
+ js
    - app.js    // 项目编写的js逻辑都放在这里面，可以把自己经常用到的当作模板放里面
    **注释：其他插件用cdn引入，请看下面。**
+ media
    -   // 项目所需背景音乐MP3及视频MP4，所有项目所需的音视频放到本文件夹
+ index.html
    -   // 单页面唯一文件,布局都放里面。如果存在多页面另说。


## 常用JS插件
1. html2canvas
    - html2canvas.rc4.js 这个版本是为了适用于移动端设备 ios13.4 以上系统（现阶段用这个版本）
        * 地址：//common.yscase.com/js/libs/html2canvas/html2canvas.rc4.js
    - html2canvas.rc5.js 正常版本
        * 地址：//common.yscase.com/js/libs/html2canvas/html2canvas.rc5.js
2. jroll.js
    - 滚动条插件（只适用于移动端，需要根据文档使用）
        * 地址：//common.yscase.com/js/libs/jroll/jroll.min.js
3. swiper
    - 轮播图、滚动条都可以使用这个插件，官网实例很多功能很强大。
        * 地址：//common.yscase.com/js/libs/swiper/swiper.min.js
    - swiper不仅需要引入js文件，还得引入css文件
        * 地址：//common.yscase.com/css/libs/swiper/swiper.min.css
4. vconsole.js
    - 用于手机调试的插件， new VConsole() 即可使用
        * 地址：//common.yscase.com/js/libs/vconsole/vconsole.min.js
5. zepto.js
    - 移动端版jquery，api和jquery一样，更加轻量化（移动端推荐使用这个）
        * 地址：//common.yscase.com/js/libs/zepto/zepto.min.js
6. jquery.js
    - 有的插件依赖jquery，这个时候zepto.js就没用了，需要引入jquery，这里有3个版本的jquery根据项目需求引入。
        * 地址1：//common.yscase.com/js/libs/jquery/jquery.min.1.11.js
        * 地址2：//common.yscase.com/js/libs/jquery/jquery.min.2.1.0.js
        * 地址3：//common.yscase.com/js/libs/jquery/jquery.min.3.5.1.js


