
  var i = 0;//start point
  var images = [];
  var time = 2000;

  //Image list
  images[0] = './img/norway2.jpg';
  images[1] = './img/norway4.jpg';
  images[2] = './img/norway7.jpg';
  images[3] = './img/norway1.jpg';
  images[4] = './img/norway11.jpg';
  images[5] = './img/puertorico.jpg';
  images[6] = './img/rockclimbing1.jpg';
  images[7] = './img/scotland2.jpg';
  images[8] = './img/stonehendge.jpg';
  images[9] = './img/motorcycle1.jpg';

  // Change Image
    function changeImg(){
      document.slide1.src = images[i];

      if(i < images.length -1){
        i++;
      } else {
        i = 0;
      }

      setTimeout("changeImg()", time);
    }

    window.onload = changeImg;
