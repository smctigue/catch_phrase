$(function() {
  pageLoad();
});

function pageLoad() {
  getPhrases();
  $("#new-phrase-form").on("submit", function(e) {
    e.preventDefault();
    $.post("/phrases", $(this).serialize())
      .done(function(res) {
        getPhrase();
        $("#new-phrase-form")[0].reset();
      });
  });
}

function getPhrases() {
  $.get("/phrases", function(res) {
    var phrases = res.reverse();
    renderPhrase(phrases);
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

