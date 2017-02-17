(function(){
    ajaxCall();

    function ajaxCall(){
        $.ajax({
            url:"api/products.json",
            methid:"GET",
            success:function(responce){
               console.log(responce);
            },
            error:function(err){
                console.log(err);
            }
        })
    }
})();