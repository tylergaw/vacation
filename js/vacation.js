(function () {
    var tracks = [];

    var getCurrentTrack = function () {
        return $('body').attr('class');
    };

    $('#tracks a').each(function (i, val) {

        $(this).click(function (e) {
            var loc = $(this).attr('href');
            window.location.href = e.target.href;
        });

        tracks.push($(this).attr('href').replace('./', ''));
    });

    var audio = document.getElementById('track');

    var nextTrack = function () {
        var curr = tracks.indexOf(getCurrentTrack());

        var next = curr + 1;
        $('#tracks a:eq(' + next + ')').click();
    };

    audio.addEventListener('play', function (e) {
        //console.log(e);
    }, false);

    audio.addEventListener('pause', function (e) {
        //console.log(e);
    }, false);

    audio.addEventListener('ended', nextTrack, false);
}());