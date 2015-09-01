$(function() {
  pageLoad();

  /* Haven't really been able to figure out how to render this (header image) 
  without putting in document.ready*/
  var jumboHeight = $('.jumbotron').outerHeight();
  function parallax() {
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight - scrolled) + 'px');
  }
  $(window).scroll(function(e) {
    parallax();
  });
});

function pageLoad() {
  getPhrases();
  $("#new-phrase-form").on("submit", function(e) {
    e.preventDefault();
    $.post("/phrases", $(this).serialize())
      .done(function(res) {
        getPhrases();
        $("#new-phrase-form")[0].reset();
      });
  });
}


function getPhrases() {
  $.get("/phrases", function(res) {
    renderPhrase(res);
  });
}

function renderPhrase(phrases) {
  template = _.template($("#phrases-template").html());
  phraseItems = phrases.map(function(phrase) {
    return template(phrase);
  });
  $("#phrase-ul").html("");
  $("#phrase-ul").append(phraseItems);
}

function deletePhrase(context) {
  var phraseId = $(context).data()._id;
  $.ajax({
    url: '/phrases/' + phraseId,
    type: 'DELETE',
    success: function(res) {
      getPhrases();
    }
  });
}