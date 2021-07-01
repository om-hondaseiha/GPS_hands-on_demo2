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
    scrollTop: 2000
  }, 800);
  event.preventDefault();

  if(importanceValue == 0){
    if(favoriteValue == 0){
      $('#air_ultem').addClass('show');
    } else if(favoriteValue == 1){
      $('#graph_belle').addClass('show');
    } else if(favoriteValue == 2){
      $('#niche').addClass('show');
    } else if(favoriteValue == 3){
      $('#calmo').addClass('show');
    }
  } else if(importanceValue == 1){
    if(favoriteValue == 0){
      $('#calmo').addClass('show');
    } else if(favoriteValue == 1){
      $('#graph_belle').addClass('show');
    } else if(favoriteValue == 2){
      $('#niche').addClass('show');
    } else if(favoriteValue == 3){
      $('#air_ultem_classic').addClass('show');
    }
  } else if(importanceValue == 2){
    if(favoriteValue == 0){
      $('#fuwa_cellu').addClass('show');
    } else if(favoriteValue == 1){
      $('#air_ultem_classic').addClass('show');
    } else if(favoriteValue == 2){
      $('#amber').addClass('show');
    } else if(favoriteValue == 3){
      $('#fuwa_cellu').addClass('show');
    }
  } else if(importanceValue == 3){
    if(favoriteValue == 0){
      $('#amber').addClass('show');
    } else if(favoriteValue == 1){
      $('#air_ultem_classic').addClass('show');
    } else if(favoriteValue == 2){
      $('#air_ultem').addClass('show');
    } else if(favoriteValue == 3){
      $('#air_ultem_classic').addClass('show');
    }
  };
});