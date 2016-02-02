function updatableQualities() {
  $(".change-quality").on("click", function() {
    var newQuality = $(this).attr("data-quality");
    var $idea      = $(this).closest(".idea");
    var params     = getUpdateQualtyParams(newQuality);

    $.ajax({
      type: "PUT",
      url:  "/api/v1/ideas/" + $idea.attr("data-id"),
      data: params,
      success: function() {
        clearIdeas();
        fetchIdeas();
      }
    });
  });
}

function getUpdateQualtyParams(newQuality) {
  var params = { idea: {} };

  params.idea.quality = newQuality;

  return params
}
