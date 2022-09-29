$(function(){

    $('#submit').on('click', function(){
        let title = $('#title').val();
        let rating = $('#rating').val();
        let html = `        
        <li>
        Movie: ${title}, 
        Rating: ${rating}
        <button class="delete">delete</button>
    </li>`
        $('ul').append($(html));
        $('#title').val('');
        $('#rating').val('');
    })

    $('ul').on('click','.delete',function(e){
        $(e.target).parent().remove();
        $(e.target).remove();
    })

})
