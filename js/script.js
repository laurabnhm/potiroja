/* Javascript */

/*_________________VARIABLES__________________*/

let musique_js = document.querySelector('.sound-file');
let clic_ship = false;

let timer;
let stars_number = 0;
let fireflies_number = 0;

let star_mix_number = 0;
let firefly_mix_number = 0;
let star_table;
let firefly_table;


/*_______________EVENT LISTENER_______________*/

document.querySelector('.button-play').addEventListener('click', playGame);
// quand on CLIQUE sur JOUER, on lance la fonction COMMENCEMENT DU JEU
document.querySelector('.sound-button').addEventListener('click', playMusic);

document.querySelector('.img-ship-mjolin')
    .addEventListener('click', helpMjolin);

document.querySelector('.img-picto-arrow')
    .addEventListener('click', textChange1);

document.querySelector('#img-star-play-1')
    .addEventListener('click', starInventory1);
document.querySelector('#img-star-play-2')
    .addEventListener('click', starInventory2);
document.querySelector('#img-star-play-3')
    .addEventListener('click', starInventory3);
document.querySelector('#img-star-play-4')
    .addEventListener('click', starInventory4);
document.querySelector('#img-star-play-5')
    .addEventListener('click', starInventory5);
document.querySelector('#img-star-play-6')
    .addEventListener('click', starInventory6);
document.querySelector('#img-star-play-7')
    .addEventListener('click', starInventory7);
document.querySelector('#img-star-play-8')
    .addEventListener('click', starInventory8);
document.querySelector('#img-star-play-9')
    .addEventListener('click', starInventory9);

document.querySelector('#img-firefly-play-1')
    .addEventListener('click', fireflyInventory1);
document.querySelector('#img-firefly-play-2')
    .addEventListener('click', fireflyInventory2);
document.querySelector('#img-firefly-play-3')
    .addEventListener('click', fireflyInventory3);

document.querySelector('.button-replay').addEventListener('click', replayGame);
document.querySelector('.img-kyubi-sick')
    .addEventListener('click', giveMedicine);


/*_________________FONCTIONS_JEU_________________*/

function playGame() {
  console.log('lancement');
  document.querySelector('.menu').classList.add('transition-appear');
  //   document.querySelector('.menu').style.opacity = '1';
  document.querySelector('.img-ship-glass').style.display = 'none';

  document.querySelector('.logo-potiroja')
      .classList.add('transition-disappear');

  document.querySelector('.button-play').classList.add('transition-disappear');
  document.querySelector('.button-play').style.display = 'none';
  document.querySelector('.img-ship-mjolin').classList.add('transition-appear');
  document.querySelector('.text').classList.add('text-delay');

  document.querySelector('.img-stars-play').style.display = 'none';
  document.querySelector('.img-fireflies-play').style.display = 'none';
  document.querySelector('.img-ship-glass').style.display = 'none';
  document.querySelector('.img-kyubi-sick').style.display = 'none';
  document.querySelector('.end-game_p').style.display = 'none';
}

function helpMjolin() {
  if (clic_ship == false) {
    document.querySelector('.img-ship-mjolin').src = 'images/ship.png';

    document.querySelector('.img-mjolin-sad')
        .classList.add('transition-appear');

    document.querySelector('.text_p').innerHTML =
        'Que fais-tu sur cette planète tout.e seul.e ? <br> Oh ! Tu es venu.e visiter et la navette t&#39;a oublié.e ? <br> On peut peut-être s&#39;arranger...';

    document.querySelector('.img-picto-arrow')
        .classList.add('transition-appear-picto-arrow');

    document.querySelector('.img-picto-arrow').style.display = 'block';
  }
  clic_ship = true;
}

function startTimer() {
  timer = setTimeout(youLose, 15000); /*REMETTRE À 15000*/
}

function youWinStars() {
  if (stars_number === 9 & timer < 7000) {
    clearTimeout(timer);
    textChange4();
  }
  document.querySelector('.button-play').style.display = 'none';
}

function youLose() {
  document.querySelector('.img-ship-mjolin')
      .classList.add('transition-disappear');
  document.querySelector('.img-mjolin-sad')
      .classList.add('transition-disappear');
  document.querySelector('.little-mjolin')
      .classList.add('transition-disappear');
  document.querySelector('.text').classList.add(
      'transition-disappear'); /*BIZARRE*/
  document.querySelector('.inventory').classList.add('transition-disappear');
  document.querySelector('.sound-button').classList.add('transition-disappear');

  document.querySelector('.time-wrap').classList.remove('transition-disappear');
  document.querySelector('.time-back').classList.remove('transition-disappear');
  document.querySelector('.time').classList.add('transition-disappear');
  document.querySelector('.img-stars-play').style.display = 'none';

  document.querySelector('#img-star-play-1')
      .classList.add('transition-disappear');
  document.querySelector('#img-star-play-2')
      .classList.add('transition-disappear');
  document.querySelector('#img-star-play-3')
      .classList.add('transition-disappear');
  document.querySelector('#img-star-play-4')
      .classList.add('transition-disappear');
  document.querySelector('#img-star-play-5')
      .classList.add('transition-disappear');
  document.querySelector('#img-star-play-6')
      .classList.add('transition-disappear');
  document.querySelector('#img-star-play-7')
      .classList.add('transition-disappear');
  document.querySelector('#img-star-play-8')
      .classList.add('transition-disappear');
  document.querySelector('#img-star-play-9')
      .classList.add('transition-disappear');

  document.querySelector('.button-replay').style.display = 'block';
}

function replayGame() {
  window.location.reload()
}

function youWinFireflies() {
  if (fireflies_number === 3) {
    textChange6();
    addStars();
    addFireflies();
  }
}

function addStars() {
  star_table = document.querySelectorAll('.img-star-inventory');

  for (i = 0; i < star_table.length; i++) {
    star_table[i].addEventListener('click', function(event) {
      star_mix_number++;
      event.target.style.opacity = '0';
      event.target.classList.add('stop-clic');

      if (star_mix_number === 1) {
        document.querySelector('.img-ship-glass').src =
            'images/bowl-star-1.png';
      }

      else if (star_mix_number === 2) {
        document.querySelector('.img-ship-glass').src =
            'images/bowl-star-2.png';
      }

      else if (star_mix_number === 3) {
        document.querySelector('.img-ship-glass').src =
            'images/bowl-star-3.png';
      }

      else if (star_mix_number === 4) {
        document.querySelector('.img-ship-glass').src =
            'images/bowl-star-4.png';
      }

      else if (star_mix_number === 5) {
        document.querySelector('.img-ship-glass').src =
            'images/bowl-star-5.png';
      }

      else if (star_mix_number === 6) {
        document.querySelector('.img-ship-glass').src =
            'images/bowl-star-6.png';
      }

      else if (star_mix_number === 7) {
        document.querySelector('.img-ship-glass').src =
            'images/bowl-star-7.png';
      }

      else if (star_mix_number === 8) {
        document.querySelector('.img-ship-glass').src =
            'images/bowl-star-8.png';
      }

      else if (star_mix_number === 9) {
        document.querySelector('.img-ship-glass').src =
            'images/bowl-star-9.png';
      }
    });
  }
}

function addFireflies() {
  firefly_table = document.querySelectorAll('.img-firefly-inventory');
  for (i = 0; i < firefly_table.length; i++) {
    firefly_table[i].addEventListener('click', function(event) {
      if (star_mix_number !== 9) {
        textChange7();
      }

      else {
        firefly_mix_number++;
        event.target.style.opacity = '0';
        event.target.classList.add('stop-clic');

        if (firefly_mix_number === 1) {
          document.querySelector('.img-ship-glass').src =
              'images/bowl-firefly-1.png';
        }

        else if (firefly_mix_number === 2) {
          document.querySelector('.img-ship-glass').src =
              'images/bowl-firefly-2.png';
        }

        else if (firefly_mix_number === 3) {
          document.querySelector('.img-ship-glass').src =
              'images/bowl-firefly-3.png';
          document.querySelector('.img-ship-glass').style.display = 'block';
          document.querySelector('.img-ship-glass')
              .addEventListener('click', medicineMix);
        }
      }
    })
  };
}

function medicineMix() {
  document.querySelector('.img-ship-glass').src = 'images/bowl-mix.png';
  document.querySelector('.img-ship-glass').classList.add('hover-bowl-mix');
  textChange8();
  document.querySelector('.img-kyubi-sick')
      .classList.remove('transition-disappear');
  document.querySelector('.img-kyubi-sick').style.display = 'block';
}

function giveMedicine() {
  document.querySelector('.img-ship-glass').style.transform =
      'translate(300px, 0px) rotate(45deg) scale(0.2)';
  document.querySelector('.img-ship-glass').style.transition = 2;
  document.querySelector('.img-ship-glass').style.opacity = 0;
  document.querySelector('.img-kyubi-sick').src = 'images/kyubi-healed.png';
  textChange9();
}

function endGame() {
  document.querySelector('.end-game_p').style.display = 'block';
  document.querySelector('.end-game_p').classList.add('transition-appear');

  document.querySelector('.img-mjolin-sad')
      .classList.add('transition-disappear');
  document.querySelector('.img-kyubi-sick')
      .classList.add('transition-disappear');
  document.querySelector('.menu').classList.add('transition-disappear');

  document.querySelector('.img-ship-mjolin').src = 'images/ship-mjolin-end.png';
}


/*_____________FONCTIONS_STARINVENTORY___________*/

function starInventory1() {
  document.querySelector('#img-star-play-1')
      .classList.add('transition-disappear');
  document.querySelector('#img-star-inventory-1')
      .classList.add('transition-appear');
  document.querySelector('#img-star-play-1').style.display = 'none';
  stars_number++;
  youWinStars();
}

function starInventory2() {
  document.querySelector('#img-star-play-2')
      .classList.add('transition-disappear');
  document.querySelector('#img-star-inventory-2')
      .classList.add('transition-appear');
  document.querySelector('#img-star-play-2').style.display = 'none';
  stars_number++;
  youWinStars();
}

function starInventory3() {
  document.querySelector('#img-star-play-3')
      .classList.add('transition-disappear');
  document.querySelector('#img-star-inventory-3')
      .classList.add('transition-appear');
  document.querySelector('#img-star-play-3').style.display = 'none';
  stars_number++;
  youWinStars();
}

function starInventory4() {
  document.querySelector('#img-star-play-4')
      .classList.add('transition-disappear');
  document.querySelector('#img-star-inventory-4')
      .classList.add('transition-appear');
  document.querySelector('#img-star-play-4').style.display = 'none';
  stars_number++;
  youWinStars();
}

function starInventory5() {
  document.querySelector('#img-star-play-5')
      .classList.add('transition-disappear');
  document.querySelector('#img-star-inventory-5')
      .classList.add('transition-appear');
  document.querySelector('#img-star-play-5').style.display = 'none';
  stars_number++;
  youWinStars();
}

function starInventory6() {
  document.querySelector('#img-star-play-6')
      .classList.add('transition-disappear');
  document.querySelector('#img-star-inventory-6')
      .classList.add('transition-appear');
  document.querySelector('#img-star-play-6').style.display = 'none';
  stars_number++;
  youWinStars();
}

function starInventory7() {
  document.querySelector('#img-star-play-7')
      .classList.add('transition-disappear');
  document.querySelector('#img-star-inventory-7')
      .classList.add('transition-appear');
  document.querySelector('#img-star-play-7').style.display = 'none';
  stars_number++;
  youWinStars();
}

function starInventory8() {
  document.querySelector('#img-star-play-8')
      .classList.add('transition-disappear');
  document.querySelector('#img-star-inventory-8')
      .classList.add('transition-appear');
  document.querySelector('#img-star-play-8').style.display = 'none';
  stars_number++;
  youWinStars();
}

function starInventory9() {
  document.querySelector('#img-star-play-9')
      .classList.add('transition-disappear');
  document.querySelector('#img-star-inventory-9')
      .classList.add('transition-appear');
  document.querySelector('#img-star-play-9').style.display = 'none';
  stars_number++;
  youWinStars();
}


/*_____________FONCTIONS_FIREFLYINVENTORY___________*/

function fireflyInventory1() {
  document.querySelector('#img-firefly-play-1')
      .classList.add('transition-disappear');
  document.querySelector('#img-firefly-inventory-1')
      .classList.add('transition-appear');
  document.querySelector('#img-firefly-play-1').style.display = 'none';
  fireflies_number++;
  youWinFireflies();
}

function fireflyInventory2() {
  document.querySelector('#img-firefly-play-2')
      .classList.add('transition-disappear');
  document.querySelector('#img-firefly-inventory-2')
      .classList.add('transition-appear');
  document.querySelector('#img-firefly-play-2').style.display = 'none';
  fireflies_number++;
  youWinFireflies();
}

function fireflyInventory3() {
  document.querySelector('#img-firefly-play-3')
      .classList.add('transition-disappear');
  document.querySelector('#img-firefly-inventory-3')
      .classList.add('transition-appear');
  document.querySelector('#img-firefly-play-3').style.display = 'none';
  fireflies_number++;
  youWinFireflies();
}


/*______________FONCTIONS_TEXTCHANGE_____________*/

function textChange1() {
  document.querySelector('.text_p').innerHTML =
      'Comme tu peux le voir, Kyubi est malade, et a <br> besoin de soins... <br>  ';

  document.querySelector('.img-kyubi-sick').classList.add('transition-appear');
  document.querySelector('.img-kyubi-sick').style.display = 'block';

  document.querySelector('.img-picto-arrow')
      .addEventListener('click', textChange2);
}

function textChange2() {
  document.querySelector('.text_p').innerHTML =
      'Si tu m&#39;aides à lui préparer son médicament, je te <br> ramène chez toi. <br> On fait ça ? Ok super.';

  document.querySelector('.img-picto-arrow')
      .addEventListener('click', textChange3);
}

function textChange3() {
  document.querySelector('.text_p').innerHTML =
      'La première étape consiste à récolter de la pierre <br> d&#39;étoiles. Fais attention, elles sont éphémères. <br> Il faut aller vite.';

  document.querySelector('.img-kyubi-sick')
      .classList.add('transition-disappear');
  document.querySelector('.img-kyubi-sick').style.display = 'none';

  document.querySelector('.img-picto-arrow')
      .classList.add('transition-disappear-picto-arrow');

  document.querySelector('.img-picto-arrow').style.display = 'none';
  document.querySelector('.img-stars-play').style.display = 'block';

  let star_js = document.querySelectorAll('.img-star-play')
  for (i = 0; i < star_js.length; i++) {
    star_js[i].classList.add('transition-appear')
  };

  document.querySelector('.time-wrap').classList.add('transition-appear-time');
  document.querySelector('.time-back').classList.add('transition-appear-time');
  document.querySelector('.time-back').classList.add('transition-time-back');
  startTimer();
}

function textChange4() {
  document.querySelector('.text_p').innerHTML =
      'Bravo ! <br> Passons vite à la suite. <br>  ';
  document.querySelector('.time').classList.add('transition-disappear');

  document.querySelector('.img-picto-arrow').style.display = 'block';
  document.querySelector('.img-picto-arrow')
      .classList.remove('transition-disappear-picto-arrow');
  document.querySelector('.img-picto-arrow')
      .classList.add('transition-appear-picto-arrow');

  document.querySelector('.img-picto-arrow')
      .addEventListener('click', textChange5);
}

function textChange5() {
  clearTimeout(timer);
  document.querySelector('.text_p').innerHTML =
      'Il faut maintenant capturer les petites lucioles. <br> Il en faut au moins 3. <br>  ';

  document.querySelector('.img-fireflies-play').style.display = 'block';
  document.querySelector('#img-firefly-play-1')
      .classList.add('transition-appear');
  document.querySelector('#img-firefly-play-2')
      .classList.add('transition-appear');
  document.querySelector('#img-firefly-play-3')
      .classList.add('transition-appear');
}

function textChange6() {
  document.querySelector('.text_p').innerHTML =
      'Eh bien, tu as pris ton temps. <br> On peut maintenant passer à la dernière étape. <br> Il faut maintenant mélanger les ingrédients.';

  document.querySelector('.img-ship-glass').classList.add('transition-appear');
  document.querySelector('.img-ship-glass').style.display = 'block';
}

function textChange7() {
  document.querySelector('.text_p').innerHTML =
      'Mets toutes les pierres d&#39;étoiles en premier, <br> c&#39;est important. <br>  ';
}

function textChange8() {
  document.querySelector('.text_p').innerHTML =
      'Dépêche-toi de la donner à Kyubi maintenant... <br>   <br>  ';
}

function textChange9() {
  document.querySelector('.text_p').innerHTML =
      'Oh ! Ça a fonctionné ! <br> Kyubi est guéri ! <br>  ';
  document.querySelector('.img-mjolin-sad').src = 'images/mjolin-happy.png';
  document.querySelector('.img-little-mjolin').src = 'images/mjolin-happy.png';
  document.querySelector('.img-picto-arrow').style.display = 'block';
  document.querySelector('.img-picto-arrow')
      .classList.remove('transition-disappear-picto-arrow');
  document.querySelector('.img-picto-arrow')
      .classList.add('transition-appear-picto-arrow');

  document.querySelector('.img-picto-arrow')
      .addEventListener('click', textChange10);
}

function textChange10() {
  document.querySelector('.text_p').innerHTML =
      'Merci beaucoup de ton aide ! <br> Sincèrement, je ne pensais pas que tu allais réussir... <br> Allez viens ! Je te ramène chez toi ! ';
  document.querySelector('.img-kyubi-sick')
      .classList.remove('transition-disappear');

  document.querySelector('.img-picto-arrow').style.display = 'block';
  document.querySelector('.img-picto-arrow')
      .classList.remove('transition-disappear-picto-arrow');
  document.querySelector('.img-picto-arrow')
      .classList.add('transition-appear-picto-arrow');

  document.querySelector('.img-picto-arrow').addEventListener('click', endGame);
}


/*_______________FONCTION_MUSIQUE_____________*/

function playMusic() {
  if (musique_js.paused) {
    musique_js.play();
    document.querySelector('.sound-button').src = 'images/img-son-on.png';
  } else {
    musique_js.pause();
    document.querySelector('.sound-button').src = 'images/img-son-off.png';
  }
}