function editableIdeas() {
  $(".edit-idea").on("click", function() {
    var $idea = $(this).closest(".idea")

    // pre-fill modal
    fillEditModal($idea);

    // unbind previous click events to 'save'
    unbindSaveEditBtn();

    // bind click event to 'save'
    bindSaveEditBtn($idea);
  });
}

function fillEditModal($idea) {
  $("#edit-title").val($idea.attr("data-title"));
  $("#edit-body").val($idea.attr("data-body"));
}

function clearEditModal() {
  $("#edit-title").val("");
  $("#edit-body").val("");
}

function unbindSaveEditBtn() {
  $("#save-edit").unbind("click")
}

function bindSaveEditBtn($idea) {
  $("#save-edit").on("click", function() {
    var putParams = getPutParams();

    $.ajax({
      type: "PUT",
      url:  "/api/v1/ideas/" + $idea.attr("data-id"),
      data: putParams,
      success: function() {
        clearEditModal();
      }
    });
  });
}

function getPutParams() {
  var params = {idea: {}};

  params.idea.title = $("#edit-title").val();
  params.idea.body  = $("#edit-body").val();

  return params
}
