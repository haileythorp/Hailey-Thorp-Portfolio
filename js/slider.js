window.onload = function() {
  $('.picture-slide').slick({
    dots: true,
  });

  window.addEventListener( 'scroll', function (e) {
    var top  = window.pageYOffset || document.documentElement.scrollTop;

    if ( top >= window.innerHeight - 80 ) {
      document.querySelector( '.hero-nav' ).className = 'hero-nav sticky is-stuck';
      document.querySelector( '.hero-nav__image' ).src = './images/BEETLE_LOGO_MEDIUM.png';

    } else {

      document.querySelector( '.hero-nav' ).className = 'hero-nav sticky';
      document.querySelector( '.hero-nav__image' ).src = './images/BEETLE_LOGO_LIGHT.png';
    }

  });

};
