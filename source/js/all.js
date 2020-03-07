$(document).ready(function () {
   
    //色彩模式切換
    $('.toggle-bright-group a').click(function (e) {
        e.preventDefault();

        var text = $(this).find('i').text();
        console.log(text);
        $('.material-icons.toggle').text(text == "toggle_off" ? "toggle_on" : "toggle_off");

        if (text == "toggle_off") {
            $('.outer').addClass('dark');
            $('.main-left').addClass('dark');
            $('.card').addClass('dark');
            $('.card-footer').addClass('dark');
        }
        else if(text =="toggle_on"){
            $('.outer').removeClass('dark');
            $('.main-left').removeClass('dark');
            $('.card').removeClass('dark');
            $('.card-footer').removeClass('dark');
        }


    })


});