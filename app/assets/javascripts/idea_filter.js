function filterIdeas(filter) {
  var ideas = $(".idea");

  $.each(ideas, function(idx, idea) {
    if (!$(idea).attr("data-title").includes(filter)) {
      $(idea).hide();
    } else {
      $(idea).show();
    }
  });
}
