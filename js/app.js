$(document).ready(function(){
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
                let thumb = result[i]['thumb'];
                $('.container .row').append(
                    '<div class="col-md-4">' +
                    '<div class="card-item shadow mt-3 pb-3">' +
                    '<div class="image">' +
                    '<img class="w-100 cover" src="'+ thumb +'">' +
                    '</div>' +
                    '<div class="title pt-4 pl-3 border-bottom border-2">' +
                    '<h3 class="font font-weight-bold">' + names + '</h3>' +
                    '</div>' +
                    '<div class="price text-right pt-2 pr-3">' +
                    '<span>' + prices + ' TL' +  '</span>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                );
            }
        },
        error : function (error){
            console.log(`Error ${error}`);
        }
    });











    $('.discount').on('click', function (){
        const endPoint = "https://www.cheapshark.com/api/1.0/games?title=batman&limit=60&exact=0";
        var arr = [];

        function get(response){
            if (response['deals'].length < 2 ){
                // let noDiscount = response['deals']
                // console.log(noDiscount[0])
            }else{
                let discountPrice = response['deals'][1]['price']
                console.log(discountPrice)
            }
        }

        $.ajax({
            url : endPoint,
            type : "GET",
            success : function (result){
                for (i = 0; i < result.length; i++){
                    arr.push(result[i]['gameID']);
                }
                arr.forEach(function (x){
                    const secondPoint = "https://www.cheapshark.com/api/1.0/games?id=" + x ;
                    $.ajax({
                        url : secondPoint,
                        type : "GET",
                        success : function (response){
                            get(response);
                        }
                    })


                })
            },
            error : function (error){
                console.log(`Error ${error}`);
            }
        });
    })
















});