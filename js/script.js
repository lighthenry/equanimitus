//hello
//this file needs to write.

document.addEventListener("DOMContentLoaded", function () {
    var posts = document.getElementsByClassName('post-content');
    for (var i = 0; i < posts.length; i++) {
        var paragraphs = posts[i].getElementsByTagName('p');
        if (paragraphs.length > 0) {
            paragraphs[0].className += ' drop-cap-jerusalem';
        }
    }
});
