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

$('#check').click(function(event){
  let faceType = $("input[name='face_type']");
  let faceTypeLength = faceType.length;

  let favorite = $("input[name='favorite']");
  let favoriteLength = favorite.length;

  let importance = $("input[name='importance']");
  let importanceLength = importance.length;

  let faceTypeValue = '';
  let favoriteValue = '';
  let importanceValue = '';

  // 今回faceTypeValueは使わない
  for (let p = 0; p < faceTypeLength; p++){
    if (faceType[p].checked){
      faceTypeValue = faceType[p].value;
    };
  };
  for (let q = 0; q < favoriteLength; q++){
    if (favorite[q].checked){
      favoriteValue = favorite[q].value;
    };
  };
  for (let r = 0; r < importanceLength; r++){
    if (importance[r].checked){
      importanceValue = importance[r].value;
    };
  };

  $('.diagnosis').removeClass('show');
  $('body, html').animate({
    scrollTop: 2050
  }, 800);
  event.preventDefault();

  if(importanceValue == 0){
    // importanceValue == 0 → Q3が「機能性」
    if(favoriteValue == 0){
      // favoriteValue == 0 → Q2が「ベーシック」
      $('#air_ultem').addClass('show');
    } else if(favoriteValue == 1){
      // favoriteValue == 1 → Q2が「モード」
      $('#graph_belle').addClass('show');
    } else if(favoriteValue == 2){
      // favoriteValue == 2 → Q2が「個性的」
      $('#niche').addClass('show');
    } else if(favoriteValue == 3){
      // favoriteValue == 3 → Q2が「クラシカル」
      $('#senichisaku').addClass('show');
    }
  } else if(importanceValue == 1){
    // importanceValue == 1 → Q3が「デザイン性」
    if(favoriteValue == 0){
      $('#senichisaku').addClass('show');
    } else if(favoriteValue == 1){
      $('#graph_belle').addClass('show');
    } else if(favoriteValue == 2){
      $('#niche').addClass('show');
    } else if(favoriteValue == 3){
      $('#air_ultem_classic').addClass('show');
    }
  } else if(importanceValue == 2){
    // importanceValue == 2 → Q3が「肌の負担」
    if(favoriteValue == 0){
      $('#fuwa_cellu').addClass('show');
    } else if(favoriteValue == 1){
      $('#air_ultem_classic').addClass('show');
    } else if(favoriteValue == 2){
      $('#john_dillinger').addClass('show');
    } else if(favoriteValue == 3){
      $('#fuwa_cellu').addClass('show');
    }
  } else if(importanceValue == 3){
    // importanceValue == 3 → Q3が「軽量」
    if(favoriteValue == 0){
      $('#john_dillinger').addClass('show');
    } else if(favoriteValue == 1){
      $('#air_ultem_classic').addClass('show');
    } else if(favoriteValue == 2){
      $('#niche').addClass('show');
    } else if(favoriteValue == 3){
      $('#air_ultem_classic').addClass('show');
    }
  };
});