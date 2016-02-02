function renderIdea(idea) {
  $("#ideas").prepend(ideaTemplate(idea));
}

function ideaTemplate(idea) {
  return "<div class='panel panel-default'>" +
         "<div class='panel-heading'>" +
         "<h4 class='panel-title'>" + idea.title + "</h4>" +
         "</div>" +
         "<div class='panel-body'>" +
         "<p>" + idea.body + "</p>" +
         "<span class='label label-default'>" + idea.quality + "</span>" +
         "</div>" +
         "</div>"
}
