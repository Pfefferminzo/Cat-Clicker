// Cat Clicker JS
const catClick = document.getElementById('cat');
const cats = ['Josie','Berta','Sara','Murz','Julia']
const catsPictures = ['images/cat.jpg','images/cat2.jpg','images/cat3.jpg','images/cat4.jpg','images/cat5.jpg']
let catsClickNumber = [0,0,0,0,0]
const catList = document.getElementById('catList'); 
let catClicked = 0;
let actualCat = 0;

cats.forEach(function(element) {
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(element));
    catList.appendChild(entry)
  });

  for(let i = 0;i < 5; i++) {
    let cats = catList.children[i];
    cats.addEventListener('click', function(){
        updateCatPicture(cats,i);
      }, false);
  }

const catName = document.getElementById('catName'); 


catName.innerHTML = 'JosieCat';

function updateCat(i) {
  let count = catsClickNumber.splice(i, 1);
  count = parseInt(count) + 1;
  catsClickNumber.splice( i, 0, count );
  document.getElementById('catClick').innerHTML = 'This cat was clicked ' + count + ' times'
  console.log('test');
}

function updateCatPicture(cats, i) {
    cat.src = catsPictures[i];
    document.getElementById('catClick').innerHTML = 'This cat was clicked ' + catsClickNumber[i] + ' times'
    actualCat = i;
  }

  catClick.addEventListener('click', function(){
    updateCat(actualCat)
  }, false);