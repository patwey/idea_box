function removableIdeas() {
  $(".remove-idea").on("click", function() {
    var $idea = $(this).closest(".idea");
    removeIdea($idea);
  });
}

function removeIdea($idea) {
  $.ajax({
    type: "DELETE",
    url:  "/api/v1/ideas/" + $idea.attr('data-id'),
    success: function() {
      $idea.remove()
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  });
}
