$('#start').click(function(event){
  $('body, html').animate({
    scrollTop: 1100
  }, 800);
  event.preventDefault();
});

$('input').click(function(){
  let className = '.' + $(this).attr('name');
  $(className).removeClass('selected');
  $(this).parent().addClass('selected');
});

$('#check').click(function(){
  let faceType = $("input[name='face_type']");
  let faceTypeLength = faceType.length;

  let favorite = $("input[name='favorite']");
  let favoriteLength = favorite.length;

  let faceTypeValue = '';
  let favoriteValue = '';
  let glassType = '';

  for (let i = 0; i < faceTypeLength; i++){
    if (faceType[i].checked){
      faceTypeValue = faceType[i].value;
    }
  };
  for (let j = 0; j < favoriteLength; j++){
    if (favorite[j].checked){
      favoriteValue = favorite[j].value;
    }
  };
  // 輪郭4×好み2なので、以下のようにすると被らず8通りできる
  glassType = parseInt(faceTypeValue) * 2 + parseInt(favoriteValue);

  $('#diagnosis').css({
    'background-image' : 'url(img/glass-' + glassType + '.png)',
    'border' : '1px solid #000'
  });
  $('#glass_name').html('結果は...メガネ' + glassType + '!!');
});