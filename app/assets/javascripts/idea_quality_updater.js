function updatableQualities() {
  $("#ideas").delegate(".change-quality", "click", function() {
    var newQuality = $(this).attr("data-quality");
    var $idea      = $(this).closest(".idea");
    var params     = getUpdateQualtyParams(newQuality);

    $.ajax({
      type: "PUT",
      url:  "/api/v1/ideas/" + $idea.attr("data-id"),
      data: params,
      success: function() {
        updateIdeaQualityLabel($idea, newQuality);
        updateChangeQualityBtns($idea, newQuality);
      }
    });
  });
}

function getUpdateQualtyParams(newQuality) {
  var params = { idea: {} };

  params.idea.quality = newQuality;

  return params
}

function updateIdeaQualityLabel(idea, newQuality) {
  $(idea).find('.label').html(newQuality);
}

function updateChangeQualityBtns(idea, newQuality) {
  $(idea).find('.change-quality').remove();
  $(idea).find('.panel-body').append(changeQualityBtns(newQuality));
}
