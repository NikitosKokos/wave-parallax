var myWave = $('#myID').wavify({
    height: 550,
    bones: 6,
    amplitude: 80,
    color: '#62a6ff',
    speed: .25
  });
  var myWave = $('#svg').wavify({
    height: 50,
    bones: 5,
    amplitude: 100,
    color: '#111',
    speed: .25
  });

  $(window).scroll(function(event){
    let s = $(this).scrollTop();
    let w = $(this).outerWidth();
    let h = $(".wrapper").outerHeight();
    let p = s/h*100;
    let t = p;
    // console.log(t);
    // console.log(s);
    console.log(p);
    $(".svg-parallax").css('transform', `translateY(${100-p}%)`)
  });