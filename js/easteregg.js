(function(window){

  "use strict";

  var info = `
HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEELLLLLLLLLLL             LLLLLLLLLLL                  OOOOOOOOO     
H:::::::H     H:::::::HE::::::::::::::::::::EL:::::::::L             L:::::::::L                OO:::::::::OO   
H:::::::H     H:::::::HE::::::::::::::::::::EL:::::::::L             L:::::::::L              OO:::::::::::::OO 
HH::::::H     H::::::HHEE::::::EEEEEEEEE::::ELL:::::::LL             LL:::::::LL             O:::::::OOO:::::::O
  H:::::H     H:::::H    E:::::E       EEEEEE  L:::::L                 L:::::L               O::::::O   O::::::O
  H:::::H     H:::::H    E:::::E               L:::::L                 L:::::L               O:::::O     O:::::O
  H::::::HHHHH::::::H    E::::::EEEEEEEEEE     L:::::L                 L:::::L               O:::::O     O:::::O
  H:::::::::::::::::H    E:::::::::::::::E     L:::::L                 L:::::L               O:::::O     O:::::O
  H:::::::::::::::::H    E:::::::::::::::E     L:::::L                 L:::::L               O:::::O     O:::::O
  H::::::HHHHH::::::H    E::::::EEEEEEEEEE     L:::::L                 L:::::L               O:::::O     O:::::O
  H:::::H     H:::::H    E:::::E               L:::::L                 L:::::L               O:::::O     O:::::O
  H:::::H     H:::::H    E:::::E       EEEEEE  L:::::L         LLLLLL  L:::::L         LLLLLLO::::::O   O::::::O
HH::::::H     H::::::HHEE::::::EEEEEEEE:::::ELL:::::::LLLLLLLLL:::::LLL:::::::LLLLLLLLL:::::LO:::::::OOO:::::::O
H:::::::H     H:::::::HE::::::::::::::::::::EL::::::::::::::::::::::LL::::::::::::::::::::::L OO:::::::::::::OO 
H:::::::H     H:::::::HE::::::::::::::::::::EL::::::::::::::::::::::LL::::::::::::::::::::::L   OO:::::::::OO   
HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEELLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL     OOOOOOOOO     
                                                                                                              
I see that you look at my source code :) So have fun, focus web page and typing this word (not in the console) : wow
`;
  console.log(info);

  var key = [87,79,87];
  var ck = 0;
  var max = key.length;

  var wow = function() {

    var img = new Image;
    img.src = data;
    img.style.width = '344px';
    img.style.height = '240px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.right = '0';
    img.style.bottom = '0';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function(){
      img.parentNode.removeChild(img);
    }, 3200);

    window.setTimeout(function(){
      sound.play();
    }, 1000);
    
  };

  var record = function(e) {

    if ( e.which === key[ck] ) {
      ck++;
    } else {
      ck = 0;
    }

    if ( ck >= max ) {
      wow();
      ck = 0;
    }

  };

  var init = function(data) {

    document.addEventListener('keyup', record);

  };

  var sound = new Audio("./medias/wow.mp3");

  var data = './medias/wow.gif';

    init(data);


})(window);