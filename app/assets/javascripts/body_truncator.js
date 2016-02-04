function truncateBody(body) {
  var words = body.split(" ");

  return words.reduce(function(truncatedBody, word) {
    if ((truncatedBody + " " + word).length <= 100) {
      return truncatedBody + " " + word;
    } else {
      return truncatedBody + "...";
    }
  });
}
