$('#submit').click(function () {
    let vlData = $('#data').val();
    console.log(vlData)
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=8AGE5N7zUVGcasuuqBL0inBRkd7VYnSTrZ1ste1A&date=${vlData}`,
        type: 'GET',
        success: function (dado) {
            console.log(dado);
            $('#tituloImg').text(dado.title);
            $('#direitosFoto').text('Copyright: ' + dado.copyright);
            $('#direitosFoto').css({
                'font-weight': '600',
            });
            $('#resultImg').css('display', 'none');
            $('#vidYT').css('display', 'none');

            if (dado.media_type == 'video') {
                $('#vidYT').attr('src', dado.url);
                $('#vidYT').css('display', 'flex');
            } else {
                $('#resultImg').attr('src', dado.url);
                $('#resultImg').css('display', 'flex');
                $('#resultImg').css({
                    "border-color": "white",
                    "border-width": "3px",
                    "border-style": "solid"
                });
            }
            $('#explicacao').text(dado.explanation);
        },
    });
});

$('#todayPic').click(function () {
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=8AGE5N7zUVGcasuuqBL0inBRkd7VYnSTrZ1ste1A`,
        type: 'GET',
        success: function (dado) {
            console.log(dado);
            $('#tituloImg').text(dado.title);
            $('#direitosFoto').text('Copyright: ' + dado.copyright);
            $('#direitosFoto').css({
                'font-weight': '600',
            });
            $('#resultImg').css('display', 'none');
            $('#vidYT').css('display', 'none');

            if (dado.media_type == 'video') {
                $('#vidYT').attr('src', dado.url);
                $('#vidYT').css('display', 'flex');
            } else {
                $('#resultImg').attr('src', dado.url);
                $('#resultImg').css('display', 'flex');
                $('#resultImg').css({
                    "border-color": "white",
                    "border-width": "3px",
                    "border-style": "solid"
                });
            }
            $('#explicacao').text(dado.explanation);
        },
    });
});