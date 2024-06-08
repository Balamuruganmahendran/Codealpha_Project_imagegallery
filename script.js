let slideIndex = 1;

function openLightbox() {
    document.getElementById('lightbox').style.display = 'flex';
    showSlides(slideIndex);
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function setCurrentSlide(n) {
    showSlides(slideIndex = n);
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName('slides');
    let thumbnails = document.querySelectorAll('.lightbox-thumbnails img');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove('active');
    }
    slides[slideIndex - 1].style.display = 'block';
    thumbnails[slideIndex - 1].classList.add('active');
}

function toggleFullscreen() {
    let elem = document.getElementById('lightbox');
    if (!document.fullscreenElement) {
        elem.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Initial display
showSlides(slideIndex);
