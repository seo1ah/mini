
let userInfo = [{
    id: "ailmall",
    pw: "ailmall"
}]; // 아이디 비번 객체로 저장
let inputInfo = {}

let $userId = $("input[type='text']").val();
let saveId = $userId;

let $userPw = $("input[type='password']").val();




// 로그인 버튼 기능
$(".btnLogin").on("click", () => {
    let $userId = $("input[type='text']").val();
    let saveId = $userId;
    // 아이디 입력값
    console.log(saveId)
    let $userPw = $("input[type='password']").val();
    // 비밀번호 입력값
    
    if($userId == ""){
        $(".xans-member-login .login fieldset .id").css("border", "2px solid #db4455")
    }
    else if($userPw == ""){
        $(".xans-member-login .login fieldset .id").css("border", "1px solid #d9d9d9")
        $(".xans-member-login .login fieldset .password").css("border", "2px solid #db4455")
    }


    // userInfo.push({
    //     id: $userId,
    //     pw: $userPw
    // })

    // 입력받는 id, pw 객체 초기화
    
    for(i = 0; i < userInfo.length; i++){
        if($userId === userInfo[i].id && $userPw === userInfo[i].pw){
            // 메인화면으로 이동
            alert(`${$userId}님 환영합니다.`)
            window.location.href = "./main_AfterLogin.html"
            return
        }

        // 아이디 저장기능
        if($("input:checkbox[id='member_check_save_id0']").is(":checked") == true){
            console.log("check")
            console.log(saveId);
            $("input[type='text']").val(saveId)
            $("input[type='password']").val("")
            alert("아이디 또는 비밀번호를 다시 입력해주세요.")       
        }
        else{
            alert("아이디 또는 비밀번호를 다시 입력해주세요.")       
            $("input[type='text']").val("")
            $("input[type='password']").val("")
        }
    }
    // 아이디 저장 기능
$("input:checkbox[id='member_check_save_id0']").change(() => {
    if($("input:checkbox[id='member_check_save_id0']").is(":checked") == true){
        console.log("check")
        $("input[type='text']").val(saveId)
    }
    else{
        $("input[type='text']").val("")
    }
})
    // 입력값 초기화
    inputInfo = {}
       
})

//

$(".headerLogin").on("click", () => {
    window.location.href = "http://127.0.0.1:5500/web/html/login.html#"
})







