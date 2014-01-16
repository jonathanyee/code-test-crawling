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
          return scarves.sort(function(a,b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });
        case NameDSC:
          return scarves.sort(function(a,b) {
            if (a.name > b.name) return -1;
            if (a.name < b.name) return 1;
            return 0;
          });
        case PriceASC:
          return scarves.sort(function(a,b) {
            var priceA = parseFloat(a.price.replace('$', '')),
                priceB = parseFloat(b.price.replace('$', ''));

            if (priceA - priceB === 0) {
              // if same price, sort by name
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
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
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            } else {
              return priceB - priceA;
            }
          });
      }
    };
  });