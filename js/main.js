/*
* @Author: Fasthro
* @Date:   2017-06-14 17:02:46
* @Last Modified by:   Fasthro
* @Last Modified time: 2017-06-24 11:12:57
*/

window.onload = function(){
    // fix menu
    var navFix = $("#nav-fix-wrapper");

    // 标志fix menu 界面是否打开
    var isShowFixMenu = false;

    // 滚动条滚动距离
    var scrollShowOffset = 200;

    // 滚动条滚动距离
    var scrollHideOffset = 120;

    // 检查fix menu 状态
    function CheckFixMenuState(){

        // 滚动条滚动位移
        var top = $(document).scrollTop();

        if(top >= scrollShowOffset && isShowFixMenu == false)
        {
            isShowFixMenu = true;
            navFix.removeClass('nav-fix-hide');
            navFix.removeClass('nav-fix-default');
            navFix.addClass('nav-fix-show');
        }
        else if(top < scrollHideOffset){
            if(isShowFixMenu)
            {
                isShowFixMenu = false;
                navFix.removeClass('nav-fix-show');
                navFix.removeClass('nav-fix-default');
                navFix.addClass('nav-fix-hide');
            }
        }
    }

    // 背景
    var bgImage = $(".banner-image");

    function SetBGImagePosition(){
        // 滚动条滚动位移
        var top = $(document).scrollTop();
        var y = -top * 0.1;
        var height = "translate3d(0px, "+ y + "px, 0px)";
        bgImage.css('transform', height);
    }

    // 检查fix menu 状态
    CheckFixMenuState();

    // 调整背景位移
    SetBGImagePosition();

    // 监听滑动事件
    $(window).scroll(function(){
        CheckFixMenuState();

        // 调整背景位移
        SetBGImagePosition();
    });
}

