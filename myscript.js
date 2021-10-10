function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function stopSpin() {
    $(this).css('-webkit-animation-play-state','paused');
    $(this).css('animation-play-state','paused');
}

function startSpin() {
    $(this).css('-webkit-animation-play-state','running');
    $(this).css('animation-play-state','running');
}


$(document).ready(function(){
    document.getElementById("demo").innerHTML = "document ready.";
});
