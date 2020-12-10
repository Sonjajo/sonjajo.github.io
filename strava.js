var content = 'If life is so blue, then select another colour from the rainbow';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';
console.log("javascript is working!")

$(ele).hide().appendTo('p').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});