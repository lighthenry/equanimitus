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


// Markdown: [Hakyll]{.glossary definition="A static site generator."}
document.addEventListener('DOMContentLoaded', function () {
    const terms = document.querySelectorAll('.glossary, .hover-preview');
    const popup = document.createElement('div');
    popup.className = 'glossary-popup';
    popup.id = 'glossary-definition';
    popup.setAttribute('role', 'tooltip');
    popup.hidden = true;
    document.body.appendChild(popup);
    let active = null;
    let pinned = false;
    let timer;
    function close() {
        clearTimeout(timer);
        if (active) {
            active.setAttribute('aria-expanded', 'false');
            active.removeAttribute('aria-describedby');
        }
        active = null;
        pinned = false;
        popup.hidden = true;
    }
    function position() {
        const rect = active.getBoundingClientRect();
        const width = popup.offsetWidth;
        const height = popup.offsetHeight;
        const gap = 10;
        popup.style.left = Math.max(gap, Math.min(rect.left, innerWidth - width - gap)) + 'px';
        const below = rect.bottom + gap;
        const top = below + height <= innerHeight - gap ? below : rect.top - height - gap;
        popup.style.top = Math.max(gap, Math.min(top, innerHeight - height - gap)) + 'px';
    }
    function open(term) {
        clearTimeout(timer);
        if (active !== term) close();
        active = term;
        popup.textContent = term.dataset.definition || term.dataset.preview || term.getAttribute('definition');
        popup.hidden = false;
        term.setAttribute('aria-expanded', 'true');
        term.setAttribute('aria-describedby', popup.id);
        position();
    }
    function leave() {
        clearTimeout(timer);
        timer = setTimeout(function () {
            if (!pinned && active !== document.activeElement && !popup.matches(':hover')) close();
        }, 180);
    }
    terms.forEach(function (term) {
        const definition = term.dataset.definition || term.dataset.preview || term.getAttribute('definition');
        if (!definition || !definition.trim()) return;
        term.classList.add('glossary-trigger');
        term.tabIndex = 0;
        term.setAttribute('role', 'button');
        term.setAttribute('aria-expanded', 'false');
        term.setAttribute('aria-controls', popup.id);
        term.addEventListener('pointerenter', function (event) {
            if (event.pointerType === 'mouse') open(term);
        });
        term.addEventListener('pointerleave', leave);
        term.addEventListener('focus', function () { open(term); });
        term.addEventListener('blur', function () { if (active === term) close(); });
        function toggle() {
            if (active === term && pinned) close();
            else { open(term); pinned = true; }
        }
        term.addEventListener('click', toggle);
        term.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggle();
            }
        });
    });
    popup.addEventListener('pointerenter', function () { clearTimeout(timer); });
    popup.addEventListener('pointerleave', leave);
    document.addEventListener('keydown', function (event) { if (event.key === 'Escape') close(); });
    document.addEventListener('pointerdown', function (event) {
        if (active && !active.contains(event.target) && !popup.contains(event.target)) close();
    });
    window.addEventListener('resize', close);
    window.addEventListener('scroll', function (event) {
        if (!popup.contains(event.target)) close();
    }, true);
});
