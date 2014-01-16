'use strict';

/* Filters */

angular.module('FreePeople.filters', []).
  filter('sortScarves', function() {
    return function(scarves, filter) {
      if (scarves === undefined || filter === undefined) {
        return;
      }
      var list = [];
      switch (filter.id) {
        case 0:
          // name asc
          list = scarves.sort(function(a,b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });
          break;
        case 1:
          // name dsc
          list = scarves.sort(function(a,b) {
            if (a.name > b.name) return -1;
            if (a.name < b.name) return 1;
            return 0;
          });
          break;
        case 2:
          // price asc
          list = scarves.sort(function(a,b) {
            return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
          });
          break;
        case 3:
          // price dsc
          list = scarves.sort(function(a,b) {
            return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
          });
          break;
      }
      console.log(list);
      return list;
    };
  });