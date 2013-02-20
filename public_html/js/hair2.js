$(document).ready(function() {
    getTweets('http://search.twitter.com/search.json?q=%22new%20hair%22%20filter%3Alinks&rpp=5&include_entities=1');
    //getTweets('https://api.twitter.com/1.1/statuses/user_timeline.json?count=10&user_id=177071884&screen_name=noblekwok');
});

function getTweets(link) {
    $.ajax({
        url: link,
        dataType: 'jsonp',
        success: function(data) {
            var returns = $('div#content');
            returns.html('');
            for (res in data['results']) {
//                if ('media' in data['results'][res]['entities']){
//                    var pic = data['results'][res]['entities']['media']['media_url'];
//                    console.log(pic);
//                }
//                else {
//                    var tweet = data['results'][res]['text'];
//                    var pic = tweet.match(/http.*/g);
//                }
                returns.append('<div class="tweet"><p>'+data['results'][res]['from_user'] + ': ' + data['results'][res]['text'] + '</p></div>');
            }
        }
    });
}
