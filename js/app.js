$(document).ready(function(){

    const endPoint = "https://www.cheapshark.com/api/1.0/games?title=batman&limit=60&exact=0";
    $('#doSomething').click(function (){
       $.ajax({
           url : endPoint,
           type : "GET",
           success : function (result){
               for (i = 0; i < result.length; i++){
                   let names = result[i]['external']
                   console.log(names);
                   $('.list').append('<ul><li>' + names + '</li></ul>');
               }

               // let names = result[12]['external'];
               // $.each(names, function (key, value){
               //    $('p').html('<p>' + key + ':' + value + '<p>')
               // });
               // $('p').html(result[12]['external']);
           },
           error : function (error){
               console.log(`Error ${error}`);
           }
       });
    });
});