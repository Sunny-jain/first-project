$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 3000 } );
    $("#carouselbutton").click(function(){
        if($('#carouselbutton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselbutton').children('span').removeClass('fa-pause');
            $('#carouselbutton').children('span').addClass('fa-play');
        }
        else{
            $('#mycarousel').carousel('cycle');
            $('#carouselbutton').children('span').removeClass('fa-play');
            $('#carouselbutton').children('span').addClass('fa-pause');
        }
    });
    $("#loginbutton").click(function(){
        $("#loginModal").modal("show");
    })

    $("#reservebutton").click(function(){
        $("#reserve").modal("show");
    })

    $("#dis").click(function(){
        $("#reserve").modal("hide");
    })

    $("#dis2").click(function(){
        $("#loginModal").modal("hide");
    })
});