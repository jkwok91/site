$(window).load(function () {
    //generateRows();
    rows = $('.row');
    pos = [];
    rows.each(function () {
        pos.push(parseInt($(this).offset().top) - 8);
    });
    console.log(pos);
    docked = false;
});

/*
function generateRows() {
    for (var i = 1; i <= 10; i++) {
        $('<img src="img/photo' + i + '.png" class="nonfunc"/>').appendTo('#photo-row');
        $('<img src="img/paint' + i + '.png" class="nonfunc"/>').appendTo('#paint-row');
        $('<img src="img/webdev' + i + '.png" class="nonfunc"/>').appendTo('#webdev-row');
    }
}*/

window.onscroll = function () {
    row_counter = 0;
    rows.each(function () {
        docked = ($(this).attr('value') == 'docked');
        console.log(docked);
        var initialpos = pos[row_counter];
        if (!docked && ($(this).offset().top - $(window).scrollTop() < 0)) {
            $(this).css('top', '0px');
            $(this).css('position', 'fixed');
            $(this).attr('value', 'docked');
            $(this).find('.nonfunc').fadeOut(300);
            docked = true;
        } else if (docked && $(window).scrollTop() <= initialpos) {
            $(this).css('position', 'absolute');
            $(this).css('top', initialpos+'px');
            $(this).attr('value', '');
	     $(this).find('.nonfunc').fadeIn(300);
            docked = false;
        }
	row_counter++;
    });
}