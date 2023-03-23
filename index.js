// $('h1').click(function(){
//     $('h1').addClass('big-title');
//     $('h1').css("color","purple");
// })

// $('h1').addClass("big-title");
// $('h1').css("color",'purple');

// $('.inc').click(function(){
//     // $('h1').css("color",'purple');
//     $('h1').addClass("big-title");
// })
// $('.dec').click(function(){
//     $('h1').removeClass('big-title');
// })

// $(document).keypress(function(event){
//     $('h1').text(event.key);
// })

// $("h1").on('mouseover',function(){
//     $('h1').text(" ");
// })

$('button').click(function(){
    $('h1').slideToggle();
})