function getBody(body) {
  if (body.length <= 100) {
    return body;
  } else {
    return truncateBody(body);
  }
}

function truncateBody(body) {
  var words = body.split(" ");

  newBody = words.reduce(function(truncatedBody, word) {
    if ((truncatedBody + " " + word).length <= 100) {
      return truncatedBody + " " + word;
    } else {
      return truncatedBody;
    }
  });

  return newBody + "...";
}
