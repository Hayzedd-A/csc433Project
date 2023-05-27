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

let hrWidth = ($('.hrBar #background').width() / 19) 
let currentPage = 1

$('button').click(function(id) {
    if(id.currentTarget['id'] == 'submit') {
        console.log(result)
        if (Object.keys(result).length == 19) {
            console.log('submitting to API')
        }
        else {
            currentPage = 0
            $('.eachPage').each(function() {
                let pageName = $(this).attr('class').split(' ')[1]
                if (!(pageName in result)) {
                    console.log('this is not selected' + pageName)
                    $('.allPage').css('transform', 'translateY('+ currentPage * -60 +'vh)')
                    currentPage ++
                    return false
                    
                }
                currentPage ++
            })
        }

    }
    else {
        hrWidth = ($('.hrBar #background').width() / 19) 
        let translateValue = $('.allPage').css('transform').split(' ')[5].slice(0, -1) / $(window).height() * 100


        if (id.currentTarget['id'] == 'up' && translateValue <= -60) {
            translateValue += 60
            currentPage --
        }


        if (id.currentTarget['id'] == 'down' && translateValue > -60 * 18) {
            translateValue -= 60
            currentPage ++
        }

        $('.allPage').css('transform', 'translateY('+ translateValue +'vh)')
        
    }
    $('hr#progress').width(currentPage * hrWidth)
    $('span#currentNumber').text(currentPage)
})
