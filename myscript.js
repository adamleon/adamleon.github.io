$('#img').on('mouseout', function () {
    $(this).css('-webkit-animation-play-state','paused');
    $(this).css('animation-play-state','paused');
});

$('#img').on('mouseover', function () {
    $(this).css('-webkit-animation-play-state','running');
    $(this).css('animation-play-state','running');
})
