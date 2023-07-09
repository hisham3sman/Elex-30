$(() => {
    $('p.typer').each(function () {

        let typerText = $(this).data('text'), n = 0,
            typeInterval = setInterval(() => {
                $(this).each(function () {
                    if (n === typerText.length) {
                        clearInterval(typeInterval)
                    } else {
                        $(this).html($(this).html() + typerText[n])
                    }
                })
                n++;
            }, 70);
    });
    $('header ul li:nth-child(5)').on('click', function () {
        $('header ul .links').toggle()
    });

    $(window).scroll(() => {
        if ($('header').offset().top >= 600) {
            // console.log('HI');
            $('header *').css('color', 'black');
            $('header ,header ul .links').css({
                'background-color': 'rgb(255 255 255 / 35%)',
                'backdrop-filter': 'blur(10px)',
                'border-radius': '12px',
                'box-shadow': '0 5px 10px #0000001f'
            });
            $('header ul li a::after').css('background-color', 'black');
        } else {
            $('header *').css('color', 'white');
            $('header').css({
                'background-color': 'transparent',
                'backdrop-filter': 'none',
                'border-radius': '0',
                'box-shadow': 'none'
            })
        }
        if (dropmenu.hasClass('open')) {
            $('header').css({
                'background-color': 'rgb(255 255 255 / 35%)',
                'backdrop-filter': 'blur(10px)',
                'border-radius': '12px',
                'box-shadow': '0 5px 10px #0000001f'
            })
        }
        if ($(window).scrollTop() > 1341.25) {
            $('.association-sec .box').animate({
                opacity: 1,
                marginTop: 50,
            })
        }
        if ($(window).scrollTop() >= 3813.33349609375) {
            $('.my-sec p').addClass('typer');
        }
    });
    $('.head-nav a').click(function (e) {
        e.preventDefault();
        $('html').animate({
            scrollTop: $(`#${$(this).data('scroll')}`).offset().top
        })
    })
    let dropmenu = $('header .dropdown-menu');
    $('header .drop').click(function () {
        dropmenu.slideToggle();
        dropmenu.toggleClass('open');
        $('header').css({
            'background-color': 'rgb(255 255 255 / 35%)',
            'backdrop-filter': 'blur(10px)',
            'border-radius': '12px',
            'box-shadow': '0 5px 10px #0000001f'
        })
    });
    // $('.game a').on('click', function (e) {
    //     e.preventDefault()
    //     window.location.replace('images/3.jpg')
    // })

    /////////////////////// set time for the game 
    // date elements 

    let hoursEle = document.querySelector('.games-cont .declare .time .hours');
    let minutesEle = document.querySelector('.games-cont .declare .time .minutes');
    let secondsEle = document.querySelector('.games-cont .declare .time .seconds');

    let declare = document.querySelector('.games-cont .declare');
    let gameOne = document.querySelector('.games-cont .game.one')

    // date
    let gameDate = new Date('10 july 4:00:00 2023').getTime();
    // console.log(gameDate)
    let countDown = setInterval(() => {
        let nowDate = new Date().getTime()
        let difference = gameDate - nowDate;
        if (difference <= 0) {
            timeUp(gameOne);
            clearInterval(countDown);
        }
        // console.log(difference)
        let hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60))
        let seconds = Math.floor(difference % (1000 * 60) / 1000)
        //put time to elements 
        hoursEle.innerHTML = hours < 10 ? `0${hours}` : hours;
        minutesEle.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        secondsEle.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
        // console.log(seconds)
    }, 1000);
    function timeUp(game) {
        declare.remove();
        game.style.display = 'block';
    }
})