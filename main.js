$(()=>{
    $('p.typer').each(function(){

        let typerText = $(this).data('text'),n=0,
        typeInterval= setInterval(() => {
            $(this).each(function(){
                if(n===typerText.length){
                    clearInterval(typeInterval)
                }else {
                    $(this).html($(this).html()+typerText[n])
                }
            })
            n++;
        },70);
    });
    $(window).scroll(()=>{
        if($('header').offset().top>=600){
            // console.log('HI');
            $('header *').css('color','black');
            $('header').css({
                'background-color': '#ffffffc9',
                'border-radius': '12px',
                'box-shadow': '0 5px 10px #0000001f'
            });
            $('header ul li a::after').css('background-color','black');
        }else {
            $('header *').css('color','white');
            $('header').css({
                'background-color': 'transparent',
                'border-radius': '0',
                'box-shadow': 'none'
            })
        }
        if($(window).scrollTop()>1341.25){
            $('.association-sec .box').animate({
                opacity:1,
                marginTop:50,
            })
        }
        if($(window).scrollTop()>=3813.33349609375){
            $('.my-sec p').addClass('typer');
        }
    });
    $('.head-nav a').click(function(e){
        e.preventDefault();
        $('html').animate({
            scrollTop:$(`#${$(this).data('scroll')}`).offset().top
        })
    })
})