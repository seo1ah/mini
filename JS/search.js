$(function()
{
    var ticker = function()
    {
        setTimeout(function(){
            $('#ticker li:first').animate( {marginTop: '-20px'}, 400, function()
            {
                $(this).detach().appendTo('ul#ticker').removeAttr('style');
            });
            ticker();
        }, 3000);
    };
    ticker();
});


$(".block").on("mouseenter",()=>{
    $(".popUp").css("display", "inline")
});
$(".block").on("mouseleave",()=>{
    $(".popUp").css("display", "none")
});


$("#end-Btn").on("click",()=>{
    if($("input[type='text']").val().length == 0){
        alert("정보를 입력해주세요")
    }
    else{
        alert("AILMALL 회원가입이 완료되었습니다.")
        location.href = "./login.html"
    }
})
$("#reset-Btn").on("click",()=>{
    location.href = "./login.html"
    
})


