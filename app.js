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
