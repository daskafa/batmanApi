$(document).ready(function(){

    function test(arr){
        arr.forEach(function (x){
            const endPoint2 = "https://www.cheapshark.com/api/1.0/games?id=" + x;
            $.ajax({
                url: endPoint2,
                type: "GET",
                success : function (result){
                    let a = result['deals'];
                    if (a.length < 2){
                        // console.log(b);
                        // $('.container .price').append(
                        //     '<span>' + 'x' + '</span>'
                        // )
                    }else {
                        let lastPrice = a[1]['price']
                        console.log('Önceki Fiyatı Olanlar: ' + lastPrice)
                        $('.container .price').append(
                            '<span>' + lastPrice + '</span>'
                        )
                    }

                },
                error : function (error){
                    console.log(`Error ${error}`);
                }
            })
        })
    }

    const endPoint = "https://www.cheapshark.com/api/1.0/games?title=batman&limit=60&exact=0";
    var arr = [];
       $.ajax({
           url : endPoint,
           type : "GET",
           success : function (result){
               for (i = 0; i < result.length; i++){
                   arr.push(result[i]['gameID']);
                   let names = result[i]['external'];
                   let prices = result[i]['cheapest'];
                   $('.container .row').append(
                           '<div class="col-md-4">' +
                                '<div class="card-item p-0 shadow mt-3">' +
                                       '<div class="image">' +
                                           '<img class="w-100" src="https://picsum.photos/500/500">' +
                                       '</div>' +
                                       '<div class="title pt-2 pl-3">' +
                                           '<h3 class="font">' + names + '</h3>' +
                                       '</div>' +
                                       '<div class="price">' +
                                           '<span>' + prices + '</span>' +
                                       '</div>' +
                                '</div>' +
                           '</div>'
                   );
               }
               test(arr);
               // for (i = 0; i < arr.length; i++){
               //     console.log(arr[i][0]);
               // }
               // console.log(arr);
           },
           error : function (error){
               console.log(`Error ${error}`);
           }
       });





});