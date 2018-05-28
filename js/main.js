$(function () {

    // facts
    $('#facts-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]

    });


    // Banners
    $('.slider-bottom').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
        ]
    });


    // videos
    $('.main-page-videos').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    dots: false
                }
            }
        ]
    });

    // home page: news/events switcher
    $('[data-tab-switcher]').click(function () {
        var tab = $(this).data('tab-switcher');

        // turn off all switchers
        $(this).closest('.articles').find('[data-tab-switcher]').addClass('inactive');
        // turn on current switcher
        $(this).removeClass('inactive');

        // turn off all tabs
        $(this).closest('.articles').find('[data-tab]').hide().end()
            // turn on current tabs
            .find('[data-tab="'+tab+'"]').show();
    });

    //FAG li

    $('.faq-li').click(function(){
        //$(this).siblings().removeClass('active');
        //$(this).addClass('active');

        $('.answer').slideUp();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(this).find('.answer').slideDown();

    });

    $('select').selectric({
        arrowButtonMarkup: '<b class="select-arrow"></b>'
    });


    $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'));
        $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });

});