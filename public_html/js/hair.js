function searchInsta(what){
    $.ajax({
        url: 'https://api.instagram.com/v1/tags/'+what+'/media/recent?access_token=38884196.f59def8.93f650fadb7c455ba357b9502635d145',
        dataType: 'jsonp',
        success: function(data) {
            var hairs = $('div#content');
            var mostPopular = 1;
            for (photo in data['data']){
                var likes = parseFloat(data['data'][photo]['likes']['count']);
                if (likes>mostPopular){
                    mostPopular = likes;
                }
                var imgURL = data['data'][photo]['images']['low_resolution']['url'];
                var newWidth = (likes*(photo+1))/(mostPopular);
                var size = newWidth>10 ? size='large' : size='small';
                hairs.append('<div class="hairs"><img class="'+size+'" src="' + imgURL + '" /></div>');
                console.log(newWidth,size);
            }
        }
    });
}

$(document).ready(function() {
    searchInsta('blonde');
    searchInsta('newhair');
});
