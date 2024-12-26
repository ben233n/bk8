

window.onload = function(){
    $(".loader_bg").addClass("loading_animation");
    setInterval(function(){
        $(".loader_bg").css({
            display:"none"
        });
    },800);

}