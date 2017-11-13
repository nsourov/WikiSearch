$(document).ready(function(){
  //clicking button search box appear
$('#hide').click(function(){
  $(this).addClass('animated fadeOut');
  $('form').css({'display': 'block'})
  $('form').addClass('animated fadeIn');
});
  
$('#search').on('click', function(){
 var searchInput = $('#search-val').val();
 var url = 'https://en.wikipedia.org/w/api.php?&action=opensearch&search='+ searchInput+'&format=json&callback=?'
      $.getJSON(url, function(d){
          $('#searched-item').html('');
          for(var i = 0; i <= d[1].length; i++){
              var title = d[1][i];
              var des  = d[2][i];
              var link = d[3][i];

            $('#searched-item').append('<div class="well"><h3><a target ="_blank" href="'+link+'">'+title+'</a></h3>'+'<br><h4>'+des+'</h4></div>');
             
              
           }
      })
})     
  
  
});
