var aboutBottom = $('#aboutMe').offset().top + $('#aboutMe').height() - 10;
var portfolioBottom = aboutBottom + $('#portfolio').height() - 10;
var aboutOne = portfolioBottom + $('#one').height() - 10;
var aboutTwo = aboutOne + $('#two').height() - 10;
var aboutThree = aboutTwo + $('#three').height() - 10;

console.log('START OF EACH SECTION: '
            + '\nHOME: ' + 0
            + '\nPORTFOLIO: ' + aboutBottom
            + '\nONE: ' + portfolioBottom
            + '\nTWO: ' + aboutOne
            + '\nTHREE: ' + aboutTwo
            + '\nCONTACT: ' + aboutThree);

$(window).on('scroll',function(){
  $('li').attr('class','');
  var stop = Math.round($(window).scrollTop());

  console.log(stop);

  const arrLen = [aboutThree, aboutTwo, aboutOne, portfolioBottom, aboutBottom, -1];
  const arrIds = ['#cont', '#threel', '#twol', '#onel', '#port', '#top'];

  let i;
  for (i = 0; i < arrLen.length; i++) {
    // console.log(i+1);
    // console.log(arrLen.length);
    if (i - 1 !== -1) {
      if (stop < arrLen[i - 1] && stop > arrLen[i]) {
        // console.log('WORKS!');
        $(arrIds[i]).attr('class','custom-active');
      }
    } else if (stop > arrLen[i]) {
        // console.log('This is the beggining  of the Array.');
        $(arrIds[i]).attr('class','custom-active');
    }
  }
});
