function fetchIdeas() {
  $.get("/api/v1/ideas", function(ideas) {
    $.each(ideas, function(idx, idea) {
      renderIdea(idea);
    });
  });
}
