const socket=io("/")
const user=prompt("Enter your name: ")
$(function(){
    $("#show_chat").click(function(){
        $(".left-window").css("display", "none")
        $(".right-window").css("display", "block")
        $(".header_back").css("display", "block")
    })
    $(".header_back").click(function(){
        $(".left-window").css("display", "block")
        $(".right-window").css("display", "none")
        $(".header_back").css("display", "none")
    })
    $("#send").click(function(){
        if ($("#chat_message").val().length!==0){
            socket.emit("message", $("#chat_message").val())
            $("#chat_message").val()=""
        }
    })
    $("#chat_message").keydown(function(bob){
        if (bob.key=="Enter" && $("#chat_message").val().length!==0){
            socket.emit("message", $("#chat_message").val())
            $("#chat_message").val()=""
        }       
    })
})

socket.on("createMessage",(message)=>{
    $(".messages").append(`
    <div>

    <span>
    ${message}
    </span>
    
    </div>
    `)
})