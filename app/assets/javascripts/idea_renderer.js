function renderIdea(idea) {
  $("#ideas").prepend(ideaTemplate(idea));
}

function ideaTemplate(idea) {
  return "<div data-id='"+ idea.id +"' class='idea panel panel-default'>" +
         "<div class='panel-heading'>" +
         "<span class='panel-title'>" + idea.title + "</span>" +
         "<button class='remove-idea pull-right btn btn-default btn-xs'>" +
         "<span class='glyphicon glyphicon-remove'></span>" +
         "</button>" +
         "</div>" +
         "<div class='panel-body'>" +
         "<p>" + idea.body + "</p>" +
         "<span class='label label-default'>" + idea.quality + "</span>" +
         "</div>" +
         "</div>"
}
