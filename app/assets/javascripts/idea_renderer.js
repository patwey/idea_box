function renderIdea(idea) {
  $("#ideas").prepend(ideaTemplate(idea));
}

function ideaTemplate(idea) {
  return "<div data-id='"+ idea.id +"' data-title='"+ idea.title +"' data-body='"+ idea.body +"' class='idea panel panel-default'>" +
         "<div class='panel-heading'>" +
         "<span class='panel-title'>" + idea.title + "</span>" +
         "<button class='remove-idea pull-right btn btn-default btn-xs'>" +
         "<span class='glyphicon glyphicon-remove'></span>" +
         "</button>" +
         "<button data-toggle='modal' data-target='#edit-idea' class='edit-idea pull-right btn btn-default btn-xs'>" +
         "<span class='glyphicon glyphicon-pencil'></span>" +
         "</button>" +
         "</div>" +
         "<div class='panel-body'>" +
         "<p>" + idea.body + "</p>" +
         "<span class='label label-default'>" + idea.quality + "</span>" +
         changeQualityBtns(idea.quality) +
         "</div>" +
         "</div>"
}

function changeQualityBtns(quality) {
  if (quality == "swill") {
    return thumbsUpBtn("plausible", true) + thumbsDownBtn("", false)

  } else if (quality == "plausible") {
    return thumbsUpBtn("genius", true) + thumbsDownBtn("swill", true)
    
  } else {
    return thumbsUpBtn("", false) + thumbsDownBtn("plausible", true)
  }
}

function thumbsUpBtn(dataQuality, active) {
  if (active) {
    return "<button data-quality='"+ dataQuality +"' class='thumbs-up pull-right btn btn-default btn-xs'>" +
           "<span class='glyphicon glyphicon-thumbs-up'></span>" +
           "</button>"
  } else {
    return "<button class='thumbs-up pull-right btn btn-default btn-xs' disabled>" +
           "<span class='glyphicon glyphicon-thumbs-up'></span>" +
           "</button>"
  }
}

function thumbsDownBtn(dataQuality, active) {
  if (active) {
    return "<button data-quality='"+ dataQuality +"' class='thumbs-down pull-right btn btn-default btn-xs'>" +
           "<span class='glyphicon glyphicon-thumbs-down'></span>" +
           "</button>"
  } else {
    return "<button class='thumbs-down pull-right btn btn-default btn-xs' disabled>" +
           "<span class='glyphicon glyphicon-thumbs-down'></span>" +
           "</button>"
  }
}
