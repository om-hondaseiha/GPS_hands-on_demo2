function buttonClick(){
  let faceTypeValue = '';
  let favoriteValue = '';
  let glassType = '';

  for (let i = 0; i < faceTypeLength; i++){
    if (faceType.item(i).checked){
      faceTypeValue = faceType.item(i).value;
    }
  }
  for (let j = 0; j < favoriteLength; j++){
    if (favorite.item(j).checked){
      favoriteValue = favorite.item(j).value;
    }
  }
  // 輪郭4×好み2なので、以下のようにすると被らず8通りできる
  glassType = parseInt(faceTypeValue) * 2 + parseInt(favoriteValue);
  diagnosis.style.backgroundImage = 'url(img/glass-' + glassType + '.png)';
  diagnosis.style.border = '1px solid #000';
}

let faceType = document.getElementsByName('face_type');
let faceTypeLength = faceType.length;

let favorite = document.getElementsByName('favorite');
let favoriteLength = favorite.length;

let checkButton = document.getElementById('check');
let diagnosis = document.getElementById('diagnosis');

checkButton.addEventListener('click', buttonClick);
