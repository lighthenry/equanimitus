//hello
//this file needs to write.

document.addEventListener("DOMContentLoaded", function() {
    const posts = document.querySelectorAll('.post-content'); 
    posts.forEach(post => {
        const firstParagraph = post.querySelector('p');
        if(firstParagraph) {
            firstParagraph.classList.add('drop-cap-jerusalem');
        }
    });
});
