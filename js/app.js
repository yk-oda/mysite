$(function () {
    $('#file').turn({
        elevation: 50,
        duration: 1000,
        gradients: true,
        autoCenter: true,
        direction: 'ltr',
    });
    $('#prevpage').click(function () {
        $('#file').turn('previous');
    });

    $('#nextpage').click(function () {
        $('#file').turn('next');
    });

});


//$(function () {
//var windowWidth = $(window).width();
//var windowSm = 767;
//if (windowWidth <= windowSm) {
//    //横幅768px以下（スマホ）に適用させるJavaScriptを記述
//} else {
//    $("#file").turn({
//        display:'single',
//    });
//    //横幅768px以上（PC、タブレット）に適用させるJavaScriptを記述
//     $('#file').turn({
//        elevation: 50,
//        duration: 1000,
//        gradients: true,
//        autoCenter: true,
//        direction: 'ltr',
//    });
//    $('#prevpage').click(function () {
//        $('#file').turn('previous');
//    });
//
//    $('#nextpage').click(function () {
//        $('#file').turn('next');
//    });
//
//    
//}
//    });
