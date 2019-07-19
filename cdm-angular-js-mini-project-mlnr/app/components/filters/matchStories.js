app.filter("matchStories", function() {
  return function(input, match) {
    var tab = [];
    if (!match){
      return (input);
    }
    for (var i = 0; i < input.length; i++) {
      var on = 0;
      for (var j = 0; j < input[i].stories.items.length; j++) {
        var elem = input[i].stories.items[j].name;
        if (elem.indexOf(match) !== -1){
          on = 1;
        }
      }
      if (on) {
        tab.push(input[i]);
      }
    };
    return (tab);
  };
});
