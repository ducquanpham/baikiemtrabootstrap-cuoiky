
$( function () {
    $("#header").load("header.html");
    $("#product").load("product.html");
    $("#product-detail").load("product-detail.html");
    $("#contact").load("contact.html");
    $("#shopping-card").load("shopping-card.html");

    // $("#about").load("about.html");
    // $("#blog").load("blog.html");

});

$(window).scroll(function(){
    if ($(this).scrollTop()>300){
        $('.fied').show();
    }
    else{
        $('.fied').hide()
    }
})
$('.fied').click(function(){
    $(window).scrollTop(0);
})
//

