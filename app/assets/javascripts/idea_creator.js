function createIdea() {
  $("#save-idea").on("click", function() {
    var ideaParams = getIdeaParams();

    $.post("/api/v1/ideas", ideaParams, function(newIdea) {
      renderIdea(newIdea);
      clearInputFields();
    });
  });
}

function getIdeaParams() {
  var params = {idea: {}};
  
  params.idea.title = $("#new-idea-title").val();
  params.idea.body  = $("#new-idea-body").val();

  return params
}

function clearInputFields() {
  $("#new-idea-title").val("");
  $("#new-idea-body").val("");
}
