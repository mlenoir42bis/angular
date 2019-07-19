app.filter("matchName", function() {
  return function(input, match) {
    var tab = [];
    if (!match){
      return (input);
    }
    for (var i=0; i<input.length; i++) {
      var elem = input[i].name;
      if (elem.indexOf(match) !== -1){
        tab.push(input[i]);
      }
    }
    return (tab);
  };
});
