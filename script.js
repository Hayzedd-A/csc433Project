let result = {}
let answer;
$('li').click(function() {
    let $lis = $(this).parent().children()
    let pageName = $(this).parent().parent().parent().attr('class').split(' ')[1]
    $lis.children().remove()
    $(this).append('<img src="mark.svg" >')
    answer = $(this).text()
    result[pageName] = answer
})

$('button').click(function(id) {
    if(id.currentTarget['id'] == 'submit') {
        console.log(result)
        if (result.length == 19) {
            console.log('submitting to API')
        }
        else {
            $('.eachPage').each(function() {
                let pageName = $(this).attr('class').split(' ')[1]
                if (!(pageName in result)) {
                    console.log('this is not selected' + pageName)
                    $('html, .allPage').animate({
                        scrollTop: $('.'+ pageName).offset().top
                    })
                    // $('.'+pageName).scrollIntoView({behavior: 'smooth'})

                }
                console.log(pageName)
            })
        }

    }
    else {
        let hrWidth = ($('.hrBar #background').width() / 19) + 0.05
        let translateValue = $('.allPage').css('transform').split(' ')[5].slice(0, -1) / $(window).height() * 100

        if (id.currentTarget['id'] == 'up' && translateValue <= -60) {
        translateValue += 60
            $('hr#progress').width($('hr#progress').width() - hrWidth)
            $('span#currentNumber').text(parseInt($('span#currentNumber').text()) - 1)
        }

        if (id.currentTarget['id'] == 'down' && translateValue > -60 * 18) {
            translateValue -= 60
            $('hr#progress').width($('hr#progress').width() + hrWidth)
            $('span#currentNumber').text(parseInt($('span#currentNumber').text()) + 1)
        }

        $('.allPage').css('transform', 'translateY('+ translateValue +'vh)')

    }
})
