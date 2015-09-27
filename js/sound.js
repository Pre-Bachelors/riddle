$(function() {
    var $button = $('button');
    var $audio = $('audio');

    function stopMusic() {
        $button.attr('data-state', 'off');
        $audio.trigger('pause');
    }

    function startMusic() {
        $button.attr('data-state', 'on');
        $audio.trigger('play');
    }



    $button.on('click', function(e){
        if ($button.attr('data-state') == 'on') {
                stopMusic();
        } else {
                startMusic();
        }
    });
});