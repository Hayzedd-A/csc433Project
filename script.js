$('button').click(function(id) {
    if(id.currentTarget['id'] == 'submit') {
        console.log('submitting')
    }
    else {
        let hrWidth = $('.progressBar').width() / 21
        let translateValue = $('.allPage').css('transform').split(' ')[5].slice(0, -1) / $(window).height() * 100

        if (id.currentTarget['id'] == 'up' && translateValue < 0) {
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

