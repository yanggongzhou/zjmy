/**
 * Created by Administrator on 2018/8/7.
 */
$(function () {
    // 产品方案
    $("#cpfa").hover(function () {
        $("#cpfa-msg").show();
    },function () {
        $("#cpfa-msg").hide();
    });
    $("#cpfa-msg").hover(function () {
        $(this).show();
    },function () {
        $(this).hide();
    });
    // 成功案例
    $("#cgal").hover(function () {
        $("#cgal-msg").show();
    },function () {
        $("#cgal-msg").hide();
    });
    $("#cgal-msg").hover(function () {
        $(this).show();
    },function () {
        $(this).hide();
    });
    // 客户中心
    $("#khzx").hover(function () {
        $("#khzx-msg").show();
    },function () {
        $("#khzx-msg").hide();
    });
    $("#khzx-msg").hover(function () {
        $(this).show();
    },function () {
        $(this).hide();
    });
    // 关于我们
    $("#aboutus").hover(function () {
        $("#aboutus-msg").show();
    },function () {
        $("#aboutus-msg").hide();
    });
    $("#aboutus-msg").hover(function () {
        $(this).show();
    },function () {
        $(this).hide();
    });
    // 视频
    $("#video-img").click(function(){
        $(this).hide();
        $("#img-video").show();
    });
    $("#img-video").click(function(){
        $(this).hide();
        $("#video-img").show();
    });
    // 回到顶部
    $(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
        if ($(window).scrollTop() > $(window).height())
            $("#topback").fadeIn();
        else
            $("#topback").fadeOut();
    });
    $(window).trigger('scroll');/*触发滚动事件，避免刷新的时候显示回到顶部按钮*/
    // 产品方案

});