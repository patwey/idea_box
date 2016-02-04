//= require body_truncator

describe('truncateBody', function () {
  var validBody = "laksdjflakdjflakdj flkasdjflkajdflk ajdlkf jdaklf jalkdj flaksdj flakdj lsjk lkfadjflkajdklfa kjssik";

  it('returns a 100 char body, unchanged', function () {
    assert.equal(100, validBody.length);
    assert.equal(truncateBody(validBody), validBody);
  });

  it('truncates a 104 char body at the nearest word, and adds "..."', function () {
    var invalidBody = validBody + " " + "you";
    var result = validBody + "...";

    assert.equal(104, invalidBody.length);
    assert.equal(truncateBody(invalidBody), result);
  });

  it('truncates a body at the nearest word, and adds "..." (at under 100 chars)', function () {
    var shorterValidBody = "laksdjflakdjflakdj flkasdjflkajdflk ajdlkf jdaklf jalkdj flaksdj flakdj lsjk lkfadjflkajdklfa";
    var invalidBody = shorterValidBody + " " + "lolololololololol";

    var result = shorterValidBody + "..."

    assert(shorterValidBody.length < 100);
    assert.equal(truncateBody(invalidBody), result);
  });
});
