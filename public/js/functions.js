
$(function(){

  // Paramètres :

  var languages = [['french', 'Français'], ['english', 'Anglais']];
  var titles = ['Chapitre', 'Chapter']; // Le chapitre en fonction de la langue suivant l'ordre du tableau (languages)
  var language_priority = 0; // Indiquer la langue prioritaire (pour le titre et le contenu) en insérant sa position dans le tableau languages (attention: la première valeur est 0 pour le français)
  var smallest_size = 11; // Correspond à la plus petite taille de police possible.
  var largest_size = 20; // Correspond à la plus grande taille de police possible.

  // Fin des paramètres

  // Ajout des données dans le menu

  for(i in languages){
    $('.language-title-menu .filter-content').append("<input type='radio' id='"+languages[i][0]+"-title' value='"+languages[i][0]+"' name='language-title'><label for='"+languages[i][0]+"-title'>"+languages[i][1]+"</label><br />");
    $('.language-menu .filter-content').append("<input type='checkbox' id='"+languages[i][0]+"' class='language' name='"+languages[i][0]+"'><label for='"+languages[i][0]+"'>"+languages[i][1]+"</label><br />")
  }



  // Fin de l'ajout

  var $checkboxes = $("input:checkbox");
  var $list = $(".menu");
  var $books = $("#book-menu input:radio");
  var $titles = $('#language-title-menu input:radio');
  $('.surate-menu').css('display', 'none');

  var cache_size;

  var refreshAll = function(){
    var value = null;
    if($('input[name="book"]:checked').val() == "book_b"){
      value = $('.surate-menu option:selected').val();
    }else if($('input[name="book"]:checked').val() == 'book_a'){
      value = $('.chapter-menu option:selected').val();
    }

    if(this.value != 0){
      $('.bloc-content').remove();
      $('#all hr').not(':first').remove();
      var opts = getFilterOptions();
      opts.push(["sourate", value]);
      update(opts);
    }
  }

  $('.filter-content input[type="checkbox"]').click(function(){
    if($(".filter-content input:checkbox:checked").length == 0) {
      alert('Vous devez choisir au moins un langage !');
      return false;
    }
  });

  $('#larger').click(function(){
    if(parseInt(current_size.split('px')[0]) < largest_size){
      var new_size = parseInt(current_size.split('px')[0]) + 1;
      $('.content').css('font-size', new_size + 'px');
      current_size = new_size + 'px';
      cache_size = current_size;
    }
  });

  $('#smaller').click(function(){
    if(parseInt(current_size.split('px')[0]) > smallest_size){
      var new_size = parseInt(current_size.split('px')[0]) - 1;
      $('.content').css('font-size', new_size + 'px');
      current_size = new_size + 'px';
      cache_size = current_size;
    }
  });

  function getFilterOptions(){
    var opts = [];
    $checkboxes.each(function(){
        if(this.checked){
          opts.push(this.name);
        }
    });
    $books.each(function(){
      if(this.checked){
        opts.push(this.value);
      }
    });

    return opts;
  }

  $('#'+languages[language_priority][0]).prop('checked', true);
  $('#'+languages[language_priority][0]+'-title').prop('checked', true);
  $('.filter-content select option:eq(0)').prop('selected', true);
  var opts = getFilterOptions();
  opts.push(['sourate', '1']);
  update(opts);

  var current_size;



  function update(opts){
    $.ajax({
      type: "POST",
      url: "app/getDatas.php",
      dataType : 'json',
      data: {filterOpts: opts},
      cache: false,
      success: function(records){

        var sourate_name = '';
        if($('input[name="book"]:checked').val() == "book_b"){

          for(i in languages){
            if($('#'+languages[i][0]+'-title').is(':checked')){
              sourate_name += ' - ' + records[0][languages[i][0]+'_sourate_name'];
            }
          }

        }else if($('input[name="book"]:checked').val() == "book_a"){
          for(i in languages){
            if($('#'+languages[i][0]+'-title').is(':checked')){
              sourate_name += ' - ' + titles[i] + ' ' + records[0].sourate;
            }
          }
        }





        $('#name').text(sourate_name);
        for(var k in records){

          if(records[k].sourate == $('.current .filter-content select option:selected').val()){
            $('#all').append("<div class='bloc-content'><div class='number'>"+records[k].sourate+"."+records[k].verset+"</div><a href='#book-menu' class='up'><img class='icon' src='public/imgs/up.png' />Remonter</a><div class='content'></div></div><hr />");

            for(i in languages){
              if($('#'+languages[i][0]).is(':checked')){
                $('.bloc-content .content').last().append("<span class='name-translation'>"+languages[i][1]+"</span><p>"+records[k][languages[i][0]+'_content']+"</p><br />");
              }
            }
          }


        }

        current_size = $('.content').css('font-size');
        if(cache_size){
          $('.content').css('font-size', cache_size);
          current_size = cache_size;
        }

      },
      error: function(xhr, status, error){
        console.log(xhr.responseText);
      }
    });
  }


  $checkboxes.on("change", function(){
    refreshAll();

  });

  $books.on("change", function(){
    $('#name').text("");
    $('.bloc-content').remove();
    $('#all hr').not(':first').remove();
    var opts = getFilterOptions();
    if($('input[name="book"]:checked').val() == 'book_a'){
      $('.chapter-menu').addClass('current').css('display', 'inline-block');
      $('.surate-menu').removeClass('current').css('display', 'none');
      $('.chapter-menu .filter-content select option:eq(0)').prop('selected', true);
      opts.push(['sourate', 1]);

    }else if($('input[name="book"]:checked').val() == 'book_b'){
      $('.surate-menu').addClass('current').css('display', 'inline-block');
      $('.chapter-menu').removeClass('current').css('display', 'none');
      $('.surate-menu .filter-content select option:eq(0)').prop('selected', true);
      opts.push(['sourate', 1]);
    }
    update(opts);




  });

  $list.on("change", function(){


    refreshAll();



  });

  $titles.on("change", function(){
      var value = null;
      if($('input[name="book"]:checked').val() == "book_b"){
        value = $('.surate-menu option:selected').val();
      }else if($('input[name="book"]:checked').val() == 'book_a'){
        value = $('.chapter-menu option:selected').val();
      }
      if(this.value != 0){
        $('.bloc-content').remove();
        $('#all hr').not(':first').remove();
        var opts = getFilterOptions();
        opts.push(["sourate", value]);
        update(opts);
      }


  });
});
