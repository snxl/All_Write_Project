/*   Carrossel da page PROFILE*/

window.load = slide(1);

let bgNumber = 1;

function slide(n){
      let allBooks = 4;

          document.getElementById('carrossel__my__books').style.backgroundImage =
            "url('../public/img" + n + "'.jpg');";
}

function previus__books() {
      if (bgNumber > 1) {
            bgNumber--;
            slide(bgNumber);
  }
}

function next__books() {
  if (bgNumber < 1) {
        bgNumber++;
        slide(bgNumber);
}
}