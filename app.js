$(function(){
    console.log(`let's get ready to party with jQuery!`)
})

$('img').addClass('image-center')

$('article p:last-child').remove()

$('h1').css('font-size', Math.floor(Math.random())*100)

$('ol').append($('<li>',{text:'Whatever you want'}))

$('aside').empty().append($('<p>',{text:'Apologies for the existence of the list'}))

$('.form-control').on('change',function(){
    let red = $('.form-control').eq(0).val();
    let green = $('.form-control').eq(2).val();
    let blue = $('.form-control').eq(1).val();
    $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')')
})


$('img').on('click',function(){
    $(e.target).remove()
})