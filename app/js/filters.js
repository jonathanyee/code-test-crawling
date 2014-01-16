'use strict';

/* Filters */

angular.module('FreePeople.filters', []).
  filter('sortScarves', function() {
    var NameASC = 0,
        NameDSC = 1,
        PriceASC = 2,
        PriceDSC = 3;

    return function(scarves, filter) {
      if (scarves === undefined || filter === undefined) {
        return;
      }

      switch (filter.id) {
        case NameASC:
          return scarves.sort(sortByName);
        case NameDSC:
          return scarves.sort(function(a,b) {
            return sortByName(b, a);
          });
        case PriceASC:
          return scarves.sort(function(a,b) {
            var priceA = parseFloat(a.price.replace('$', '')),
                priceB = parseFloat(b.price.replace('$', ''));

            if (priceA - priceB === 0) {
              // if same price, sort by name
              return sortByName(a, b);
            } else {
              return priceA - priceB;
            }
          });
        case PriceDSC:
          return scarves.sort(function(a,b) {
            var priceA = parseFloat(a.price.replace('$', '')),
                priceB = parseFloat(b.price.replace('$', ''));

            if (priceB - priceA === 0) {
              // if same price, sort by name
              return sortByName(a, b);
            } else {
              return priceB - priceA;
            }
          });
      }
    };

    function sortByName(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }
  });