function randomValues() {
  anime({
    targets: 'div.animating',
    translateX: function() {
      return anime.random(0, 1500);
    },
    scale: .5,
    rotate: '1turn',
    easing: 'easeInOutQuad',
    duration: 750,
    complete: randomValues
  });
}

randomValues();
