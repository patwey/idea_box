function searchBar() {
  $("#search-bar").keyup(function() {
    var filter = $(this).val();

    filterIdeas(filter);
  });
}
