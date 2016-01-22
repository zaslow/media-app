angular
  .module('mediaApp')
  .directive('highLight', function() {
      
    return {
      scope: {
        highLightColor: "@"
      },
      retrict: 'AE',
      link: function(scope, element ,attr) {
        element.bind('mouseenter', function() {
          element.css("background-color", scope.highLightColor);
          element.css("cursor", "pointer");
        });
        element.bind('mouseleave', function() {
          element.css("background-color", "white");
        });
      } // End link
    };  // End return 
  }); // End .directive