(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e){e.exports={d:"https://swapi.co/api",c:"https://www.googleapis.com/customsearch/v1",a:"https://api.cognitive.microsoft.com/bing/v7.0/images/search",b:120}},,,,,function(e){e.exports={c:"014704376584154682228:bhjgqxphkyq",b:"AIzaSyCuk54naa8AlDzmfkFx4entKAohmjuczlk",a:"cd525f660f414b4cad5085d1c8f3bb39"}},,,,,,,,,,,,,function(e,t,a){e.exports=a(58)},,,,,function(e,t,a){},,,function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),i=a.n(c),s=a(2),o=a(3),u=a(6),l=a(5),h=a(7),p=a(14),m=a(13),f=(a(35),a(1)),v=a.n(f),d=a(4),b=a(12),k=function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,[{key:"get",value:function(){var e=Object(d.a)(v.a.mark(function e(t,a){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,a);case 2:if(!(n=e.sent)||!n.ok){e.next=9;break}return e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return e.abrupt("return",void 0);case 10:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),g=function(){function e(){Object(s.a)(this,e),this.http=new k,this.cachedCharacterPages=new Array,this.cachedSpecies=new Array,this.cachedPlanets=new Array,this.cachedFilms=new Array,this.cachedVehicles=new Array}return Object(o.a)(e,[{key:"characters",value:function(){var e=Object(d.a)(v.a.mark(function e(){var t,a,n,r=arguments;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]?r[0]:0,a=r.length>1&&void 0!==r[1]&&r[1],!this.cachedCharacterPages||!this.cachedCharacterPages[t]){e.next=6;break}n=this.cachedCharacterPages[t],e.next=10;break;case 6:return e.next=8,this.http.get("".concat(b.d,"/people?page=").concat(t+1));case 8:(n=e.sent)&&(this.cachedCharacterPages[t]=n);case 10:return!a&&n&&n.next&&this.characters(t+1,!0),e.abrupt("return",{characters:n?n.results:void 0,previousPage:n?!!n.previous:void 0,nextPage:n?!!n.next:void 0});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"specie",value:function(){var e=Object(d.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&t.species&&t.species[0])){e.next=7;break}return a=t.species[0],e.next=4,this.fetchSingleCached(a,this.cachedSpecies,function(e){return e.url===a},function(e){return e?e.name:void 0});case 4:return e.abrupt("return",e.sent);case 7:return e.abrupt("return",void 0);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"planet",value:function(){var e=Object(d.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return a=t.homeworld,e.next=4,this.fetchSingleCached(a,this.cachedPlanets,function(e){return e.url===a},function(e){return e?e.name:void 0});case 4:return e.abrupt("return",e.sent);case 7:return e.abrupt("return",void 0);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"films",value:function(){var e=Object(d.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,this.fetchMultipleCached(t.films,this.cachedFilms,function(e,t){return e.url===t},function(e){return e?e.title:void 0},function(e){return e.join(", ")});case 3:return e.abrupt("return",e.sent);case 6:return e.abrupt("return",void 0);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"vehicles",value:function(){var e=Object(d.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,this.fetchMultipleCached(t.vehicles,this.cachedVehicles,function(e,t){return e.url===t},function(e){return e?e.name:void 0},function(e){return e.join(", ")});case 3:return e.abrupt("return",e.sent);case 6:return e.abrupt("return",void 0);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"fetchSingleCached",value:function(){var e=Object(d.a)(v.a.mark(function e(t,a,n,r){var c,i;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=10;break}if(!(i=a.find(n))){e.next=6;break}c=i,e.next=10;break;case 6:return e.next=8,this.http.get(t);case 8:(c=e.sent)&&a.push(c);case 10:return e.abrupt("return",r(c));case 11:case"end":return e.stop()}},e,this)}));return function(t,a,n,r){return e.apply(this,arguments)}}()},{key:"fetchMultipleCached",value:function(){var e=Object(d.a)(v.a.mark(function e(t,a,n,r,c){var i,s,o=this;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=new Array,!(t&&t.length>0)){e.next=7;break}return s=new Array,t.forEach(function(e){if(e){var t=o.fetchSingleCached(e,a,function(t){return n(t,e)},r);s.push(t)}}),e.next=6,Promise.all(s);case 6:i=e.sent;case 7:return e.abrupt("return",c(i));case 8:case"end":return e.stop()}},e)}));return function(t,a,n,r,c){return e.apply(this,arguments)}}()}]),e}(),y=a(17),L=function(){function e(){Object(s.a)(this,e),this.http=new k,this.cachedSearches=void 0;var t=localStorage.getItem("searches");this.cachedSearches=t?new Array(JSON.parse(t))[0]:new Array}return Object(o.a)(e,[{key:"query",value:function(){var e=Object(d.a)(v.a.mark(function e(t){var a,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.cachedSearches&&this.cachedSearches.length>0)){e.next=11;break}if(!(n=this.cachedSearches.find(function(e){return e.q===t}))){e.next=6;break}a=n.link,e.next=9;break;case 6:return e.next=8,this.getLink(t);case 8:a=e.sent;case 9:e.next=14;break;case 11:return e.next=13,this.getLink(t);case 13:a=e.sent;case 14:return e.abrupt("return",a);case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getLink",value:function(){var e=Object(d.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Math.random()>.7)){e.next=4;break}return e.next=3,this.searchOnBing(t);case 3:a=e.sent;case 4:if(a){e.next=12;break}return e.next=7,this.searchOnGoogle(t);case 7:if(a=e.sent){e.next=12;break}return e.next=11,this.searchOnBing(t);case 11:a=e.sent;case 12:return a&&(this.cachedSearches.push({q:t,link:a}),localStorage.setItem("searches",JSON.stringify(this.cachedSearches))),e.abrupt("return",a);case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"searchOnGoogle",value:function(){var e=Object(d.a)(v.a.mark(function e(t){var a,n,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(b.c,"?cx=").concat(y.c,"&key=").concat(y.b,"&searchType=image&q=").concat(encodeURIComponent(t),"&imgType=photo"),e.next=3,this.http.get(n);case 3:return(r=e.sent)&&r.items&&(a=r.items[0].link),e.abrupt("return",a);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"searchOnBing",value:function(){var e=Object(d.a)(v.a.mark(function e(t){var a,n,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(b.a,"?q=").concat(encodeURIComponent(t),"&count=1"),e.next=3,this.http.get(n,{headers:{"Ocp-Apim-Subscription-Key":y.a}});case 3:return(r=e.sent)&&r.value&&(a=r.value[0].contentUrl),e.abrupt("return",a);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),O={characterService:new g,imageSearchService:new L},E=r.a.createContext(O),j=function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,null,[{key:"insertRank",value:function(e){var t=this.getRanks();t.push(e),localStorage.setItem("ranks",JSON.stringify(t))}},{key:"getRanks",value:function(){var e=localStorage.getItem("ranks");return e?new Array(JSON.parse(e))[0]:new Array}},{key:"getPreviousRank",value:function(){var e=this.getRanks();return e&&e.length>0?e[e.length-1]:void 0}}]),e}(),x=(a(38),function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.link?r.a.createElement(p.b,{className:"ui-button",to:this.props.link},this.props.children):r.a.createElement("button",{className:"ui-button",type:this.props.type,onClick:this.onClick.bind(this),disabled:this.props.disabled},this.props.children)}},{key:"onClick",value:function(e){this.props.onClick&&this.props.onClick(e)}}]),t}(r.a.Component));function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var S=r.a.createElement("metadata",{id:"metadata11"}),N=r.a.createElement("defs",{id:"defs3"},r.a.createElement("pattern",{y:0,x:0,height:6,width:6,patternUnits:"userSpaceOnUse",id:"EMFhbasepattern"})),P=function(e){var t=e.svgRef,a=w(e,["svgRef"]);return r.a.createElement("svg",C({id:"svg7",height:"30.309999mm",width:"30.290001mm",ref:t},a),S,N,r.a.createElement("path",{id:"path5",d:" M 80.226296,94.746576 C 78.687326,94.746576 77.448155,95.985746 77.448155,97.524716 C 77.448155,99.053692 78.687326,100.29286 80.226296,100.29286 C 81.755272,100.29286 82.994443,99.053692 82.994443,97.524716 C 82.994443,95.985746 81.755272,94.746576 80.226296,94.746576 z M 32.987918,94.746576 C 31.458941,94.746576 30.219771,95.985746 30.219771,97.524716 C 30.219771,99.053692 31.458941,100.29286 32.987918,100.29286 C 34.526887,100.29286 35.766058,99.053692 35.766058,97.524716 C 35.766058,95.985746 34.526887,94.746576 32.987918,94.746576 z M 67.484825,85.272917 L 67.484825,97.694602 L 73.031112,97.694602 L 73.031112,87.761252 z M 45.729388,85.272917 L 40.183101,87.761252 L 40.183101,97.694602 L 45.729388,97.694602 z M 57.861267,81.23562 L 57.861267,97.694602 L 63.407554,97.694602 L 63.407554,81.23562 z M 49.806659,81.23562 L 49.806659,97.694602 L 55.352946,97.694602 L 55.352946,81.23562 z M 56.60211,64.606752 L 54.123769,65.11641 C 51.845294,66.115741 50.236371,68.464169 50.236371,71.18235 L 50.236371,77.767941 L 56.60211,77.767941 L 56.60211,77.767941 L 62.977842,77.767941 L 62.977842,71.18235 C 62.977842,68.464169 61.368919,66.115741 59.080451,65.11641 z M 67.304945,45.119796 L 67.304945,45.139783 L 66.935193,45.139783 L 65.496156,45.419596 L 65.226337,45.419596 L 65.226337,45.479556 L 64.246992,45.679422 C 61.768651,46.728719 60.029815,49.17708 60.029815,52.035167 L 60.029815,54.403582 L 60.049802,54.453548 L 60.049802,54.793321 L 60.029815,54.883261 L 60.029815,58.191046 L 60.779314,59.969856 C 61.608758,60.7993 62.757989,61.308959 64.017146,61.308959 L 66.935193,61.308959 L 70.193012,61.308959 L 80.436155,61.308959 C 81.705306,61.308959 82.854536,60.7993 83.683981,59.969856 L 84.733279,57.471528 L 84.733279,56.352277 L 84.023754,52.884599 C 82.56473,49.466886 79.646684,46.818659 76.039099,45.709402 L 74.909855,45.539515 L 74.909855,45.419596 L 74.160356,45.419596 L 72.4515,45.169763 L 72.4515,45.119796 z M 40.762713,45.119796 L 40.762713,45.169763 L 39.053857,45.419596 L 38.304359,45.419596 L 38.304359,45.539515 L 37.175115,45.709402 C 33.56753,46.818659 30.649483,49.466886 29.19046,52.884599 L 28.480935,56.352277 L 28.480935,57.471528 L 29.530232,59.969856 C 30.359677,60.7993 31.508908,61.308959 32.778058,61.308959 L 43.021201,61.308959 L 46.27902,61.308959 L 49.197067,61.308959 C 50.456224,61.308959 51.605455,60.7993 52.4349,59.969856 L 53.184398,58.191046 L 53.184398,54.883261 L 53.164411,54.793321 L 53.164411,54.453548 L 53.184398,54.403582 L 53.184398,52.035167 C 53.184398,49.17708 51.445562,46.728719 48.967221,45.679422 L 47.987876,45.479556 L 47.987876,45.419596 L 47.718057,45.419596 L 46.27902,45.139783 L 45.909268,45.139783 L 45.909268,45.119796 z M 40.462914,34.446941 C 35.146473,34.446941 30.329697,36.605496 26.852025,40.083168 L 23.644172,44.839984 L 23.39434,45.09981 L 23.294406,45.369629 L 23.164493,45.539515 L 22.534915,47.158432 L 22.474955,47.418258 L 6.375732,88.210951 C 5.9360264,89.330201 6.4856584,90.599352 7.6049092,91.039058 C 8.1645346,91.25891 8.7641332,91.238924 9.273792,91.009078 L 10.063264,90.209613 L 27.41165,46.24904 L 27.451624,46.259034 L 27.451624,46.159101 L 29.650152,42.891288 C 32.418299,40.123141 36.245737,38.414285 40.462914,38.414285 C 42.571502,38.414285 44.580158,38.843997 46.418927,39.613482 L 50.146431,42.131797 L 50.176411,42.131797 L 50.276345,42.341656 C 51.275676,43.211074 52.564813,43.830659 54.013843,44.090485 L 54.683394,44.150445 L 55.053147,44.220398 C 55.522832,44.270365 56.022498,44.300345 56.54215,44.300345 L 56.60211,44.300345 L 56.60211,44.300345 L 56.60211,44.300345 L 56.60211,44.300345 L 56.60211,44.300345 L 56.672063,44.300345 C 57.191715,44.300345 57.691381,44.270365 58.161066,44.220398 L 58.530819,44.150445 L 59.200371,44.090485 C 60.649401,43.830659 61.938538,43.211074 62.937869,42.341656 L 63.037802,42.131797 L 63.067782,42.131797 L 66.795287,39.613482 C 68.624062,38.843997 70.642711,38.414285 72.7513,38.414285 C 76.968477,38.414285 80.795914,40.123141 83.554068,42.891288 L 85.76259,46.159101 L 85.76259,46.259034 L 85.802563,46.24904 L 103.15095,90.209613 L 103.94042,91.009078 C 104.45008,91.238924 105.04968,91.25891 105.6093,91.039058 C 106.72855,90.599352 107.27819,89.330201 106.83848,88.210951 L 90.739258,47.418258 L 90.679298,47.158432 L 90.04972,45.539515 L 89.919807,45.369629 L 89.819874,45.09981 L 89.570041,44.839984 L 86.362188,40.083168 C 82.874523,36.605496 78.067741,34.446941 72.7513,34.446941 C 67.434858,34.446941 62.618083,36.605496 59.140411,40.083168 L 58.890578,40.45292 L 58.750672,40.7827 L 58.630752,40.832666 L 58.470859,41.072506 L 58.350939,41.112479 L 58.23102,41.262379 C 58.02116,41.432265 57.781321,41.582164 57.501508,41.672104 L 56.60211,41.831997 L 56.60211,41.831997 L 56.60211,41.831997 L 56.60211,41.831997 L 56.60211,41.831997 L 55.712705,41.672104 C 55.432893,41.582164 55.193053,41.432265 54.983194,41.262379 L 54.863274,41.112479 L 54.743354,41.072506 L 54.583461,40.832666 L 54.463542,40.7827 L 54.323635,40.45292 L 54.073802,40.083168 C 50.59613,36.605496 45.779355,34.446941 40.462914,34.446941 z M 46.828652,0.079946483 L 47.548171,0.079946483 L 56.60211,0.079946483 L 56.60211,0.079946483 L 65.666042,0.079946483 L 66.385561,0.079946483 L 66.385561,0.15989297 L 71.891875,0.70952504 C 85.093038,3.4177121 95.236248,14.530273 96.455432,28.211115 L 96.565358,30.719436 L 96.575351,30.719436 L 96.575351,39.643462 L 96.575351,39.643462 L 96.575351,47.228385 L 107.42809,74.969814 L 107.41809,74.969814 L 107.73788,75.769279 L 109.15693,79.376864 L 109.2069,79.456811 L 113.12427,89.310215 L 112.91441,90.409479 L 112.17491,93.577358 C 107.21823,104.1203 86.811887,112.22488 61.688705,113.19423 L 56.60211,113.28417 L 56.60211,113.28417 L 56.60211,113.28417 L 56.60211,113.28417 L 56.60211,113.28417 L 51.525508,113.19423 C 26.402326,112.22488 5.9959862,104.1203 1.0393043,93.577358 L 0.29979931,90.409479 L 0.079946483,89.310215 L 4.0073175,79.456811 L 4.057284,79.376864 L 5.4763341,75.769279 L 5.79612,74.969814 L 5.7861267,74.969814 L 16.638862,47.228385 L 16.638862,39.643462 L 16.638862,39.643462 L 16.638862,30.719436 L 16.648855,30.719436 L 16.758782,28.211115 C 17.977965,14.530273 28.111182,3.4177121 41.322338,0.70952504 L 46.828652,0.15989297 z ",style:{fill:"#000000",fillRule:"evenodd",fillOpacity:1,stroke:"none"}}))},I=r.a.forwardRef(function(e,t){return r.a.createElement(P,C({svgRef:t},e))}),M=(a.p,a(47),function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui-header ".concat(this.props.vertical?"vertical":"")},r.a.createElement(I,{className:this.props.scale?"scaled":""}),r.a.createElement("h1",{className:"font-starJediSe ".concat(this.props.vertical?"":"horizontal")},"Star quiz"))}}]),t}(r.a.Component)),z=(a(48),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).context=void 0,a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.preChache();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"elem-menu"},r.a.createElement(M,{vertical:!0,scale:!0}),r.a.createElement("div",null,r.a.createElement("p",null,"Do you like star wars? Test yourself with this quiz!"),r.a.createElement("ul",null,r.a.createElement("p",null,"You have 2 minutes to correctly answer character names from star wars"),r.a.createElement("li",null,"Score 10 points if you answer without reading the tip"),r.a.createElement("li",null,"Score 5 points if you answer with the tip"))),this.getRanking(),r.a.createElement(x,{link:"/quiz"},"Start Game!"))}},{key:"getRanking",value:function(){var e=j.getRanks();if((e=e.sort(function(e,t){return(t.score?t.score:0)-(e.score?e.score:0)}))&&e.length>0){return r.a.createElement("div",null,r.a.createElement("p",null,"Local ranking:"),r.a.createElement("ol",null,e.map(function(e,t){return r.a.createElement("li",{key:t},e.score,": ",e.name," - ",e.email)})))}}},{key:"preChache",value:function(){var e=Object(d.a)(v.a.mark(function e(){var t,a,n,r,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.context,a=t.characterService,n=t.imageSearchService,!a||!n){e.next=7;break}return e.next=4,a.characters();case 4:r=e.sent,(c=r.characters)&&c.forEach(function(){var e=Object(d.a)(v.a.mark(function e(t){var a,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!t.name){e.next=5;break}return a=t.name.split(" "),r=1===a.length?a[0]:a[0]+" "+a[a.length-1],e.next=5,n.query("".concat(r," star wars"));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(r.a.Component));z.contextType=E;var A=a(29),R=(a(49),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui-loader"})}}]),t}(r.a.Component)),q=(a(50),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui-modal",onClick:this.onClose.bind(this)},r.a.createElement("div",{className:"content"},this.props.children))}},{key:"onClose",value:function(e){this.props.onClose&&this.props.onClose(e)}}]),t}(r.a.Component)),T=(a(51),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={loaded:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new Image;t.onload=function(){e.setState({loaded:!0})},t.src=this.props.src,this.setState({image:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"elem-asyncImage"},this.getAsyncImage())}},{key:"getAsyncImage",value:function(){var e=this.state.image;return this.state.loaded&&e?r.a.createElement("img",{src:this.props.src}):e&&!this.state.loaded&&this.props.loader?this.props.loader:null}}]),t}(r.a.Component)),F=(a(52),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).context=void 0,a.state={},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.context.characterService;e&&(this.fillSpecieName(e),this.fillPlanetName(e),this.fillFilmNames(e),this.fillVehicleNames(e))}},{key:"render",value:function(){return r.a.createElement("div",{className:"elem-characterTip"},r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"image"},this.props.imageComponent),r.a.createElement("div",null,r.a.createElement("h1",null,"Details"),this.state.specieName?r.a.createElement("p",null,"Specie: ",this.state.specieName):r.a.createElement("div",{className:"loading"},"Specie: ",r.a.createElement(R,null)),r.a.createElement("p",null,"Height: ",this.props.character.height),r.a.createElement("p",{className:"capitalize"},"Hair: ",this.props.character.hair_color),this.state.planetName?r.a.createElement("p",null,"Planet: ",this.state.planetName):r.a.createElement("div",{className:"loading"},"Planet: ",r.a.createElement(R,null)))),this.state.filmNames?r.a.createElement("p",null,"Movies: ",this.state.filmNames):r.a.createElement("div",{className:"loading"},"Movies: ",r.a.createElement(R,null)),this.props.character.vehicles&&this.props.character.vehicles.length>0?this.state.vehicleNames?r.a.createElement("p",null,"Vehicles: ",this.state.vehicleNames):r.a.createElement("div",{className:"loading"},"Vehicles: ",r.a.createElement(R,null)):null)}},{key:"fillSpecieName",value:function(){var e=Object(d.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.specie(this.props.character);case 2:(a=e.sent)&&this.setState({specieName:a});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"fillPlanetName",value:function(){var e=Object(d.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.planet(this.props.character);case 2:(a=e.sent)&&this.setState({planetName:a});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"fillFilmNames",value:function(){var e=Object(d.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.films(this.props.character);case 2:(a=e.sent)&&this.setState({filmNames:a});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"fillVehicleNames",value:function(){var e=Object(d.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.vehicles(this.props.character);case 2:(a=e.sent)&&this.setState({vehicleNames:a});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(r.a.Component));F.contextType=E;a(53);var D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).context=void 0,a.state={isModalOpenned:!1,characterImage:"",multiplier:2,scoreValue:5,correct:!!a.props.correct&&a.props.correct,nameInput:""},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.getImageUrl();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"elem-character"},r.a.createElement("div",{className:"image"},this.getImage(this.state.characterImage)),r.a.createElement("div",{className:"actions"},r.a.createElement("input",{className:this.state.correct?"correct":"",placeholder:"Character name...",onChange:this.onInputChange.bind(this),value:this.props.correct?this.props.character?this.props.character.name:"":this.state.nameInput,disabled:this.state.correct||this.props.fake}),r.a.createElement(x,{onClick:this.openTip.bind(this),disabled:this.state.correct||this.props.fake},"...")),this.state.isModalOpenned?r.a.createElement(q,{onClose:function(){return e.closeTip()}},this.getTip(this.props.character,this.state.characterImage)):null)}},{key:"getImage",value:function(e){var t=r.a.createElement("div",{className:"fake"},r.a.createElement(R,null));return e?r.a.createElement(T,{src:e,loader:t}):t}},{key:"getTip",value:function(e,t){return e?r.a.createElement(F,{character:e,imageComponent:this.getImage(t)}):null}},{key:"openTip",value:function(){this.setState({isModalOpenned:!0,multiplier:1})}},{key:"closeTip",value:function(){this.setState({isModalOpenned:!1})}},{key:"onInputChange",value:function(e){if(e&&!this.state.correct){var t=e.target;if(t){if(t.value&&this.props.character&&this.props.character.name){var a=function(e){return e.trim().toLocaleLowerCase().replace("-","").replace(" ","")};a(t.value)===a(this.props.character.name)&&this.onScore()}this.setState({nameInput:t.value})}}}},{key:"onScore",value:function(){if(this.props.onScore&&this.props.character){var e=this.state,t=e.multiplier,a=e.scoreValue;this.props.onScore(t*a,this.props.character),this.setState({correct:!0})}}},{key:"getImageUrl",value:function(){var e=Object(d.a)(v.a.mark(function e(){var t,a,n,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.context.imageSearchService)){e.next=15;break}if(!this.props.character||!this.props.character.name||this.state.characterImage){e.next=15;break}return e.prev=3,a=this.props.character.name.split(" "),n=1===a.length?a[0]:a[0]+" "+a[a.length-1],e.next=8,t.query("".concat(n," star wars"));case 8:(r=e.sent)&&this.setState({characterImage:r}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.error("Couldn't retrieve image: "+e.t0);case 15:case"end":return e.stop()}},e,this,[[3,12]])}));return function(){return e.apply(this,arguments)}}()}]),t}(r.a.Component);D.contextType=E;var V=a(27),J=a.n(V),U=(a(55),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={time:"00:00"},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=0,a=setInterval(function(){t=e.tickCounter(t,a)},1e3);t=this.tickCounter(t,a)}},{key:"render",value:function(){return r.a.createElement("div",{className:"elem-counter"},r.a.createElement("h1",null,r.a.createElement("span",{className:"oi","data-glyph":"timer","aria-hidden":"true"}),this.state.time))}},{key:"tickCounter",value:function(e,t){var a=J.a.duration(e,"seconds");if(a.asSeconds()>this.props.limitInSeconds)clearInterval(t),this.props.onLimit&&this.props.onLimit();else{e++;var n=a.minutes(),r=a.seconds(),c="".concat(n<10?"0"+n:n,":").concat(r<10?"0"+r:r);this.setState({time:c})}return e}}]),t}(r.a.Component)),B=a(16),G=a(28),Y=(a(56),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={rank:{score:a.props.score},validation:{valid:!0,errors:new Array,dirty:!1}},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"elem-finished"},r.a.createElement("h2",null,"Finished!"),r.a.createElement("h1",{className:"score"},"Your score: ",this.props.score),this.getPreviousRank(),r.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},r.a.createElement("p",null,"Save your score:"),this.state.validation.errors.length>0?this.getErrors(this.state.validation.errors):null,r.a.createElement("div",{className:"field-group"},r.a.createElement("label",null,"Name: "),r.a.createElement("input",{name:"name",type:"text",value:this.state.rank.name,placeholder:"Type your name here...",onChange:this.updateForm.bind(this)})),r.a.createElement("div",{className:"field-group"},r.a.createElement("label",null,"Email: "),r.a.createElement("input",{name:"email",type:"email",placeholder:"Type your email here...",value:this.state.rank.email,onChange:this.updateForm.bind(this)})),r.a.createElement("div",{className:"actions"},r.a.createElement(x,{type:"submit",disabled:!this.state.validation.valid&&this.state.validation.dirty},"Save"))))}},{key:"getPreviousRank",value:function(){var e=j.getPreviousRank();return e?r.a.createElement("h4",{className:"score"},"Previous score: ",e.score," - ",e.name):null}},{key:"getErrors",value:function(e){return r.a.createElement("div",{className:"formErrors"},e.map(function(e,t){return r.a.createElement("p",{key:t},e)}))}},{key:"updateForm",value:function(e){var t=e.target,a=t.name,n=Object(G.a)({},this.state.rank,Object(B.a)({},a,t.value));this.setState({rank:n,validation:this.validate(n,this.state.validation)})}},{key:"validate",value:function(e,t){return t.dirty=!0,t.valid=!0,t.errors=new Array,(!e.name||e.name.length<3)&&(t.valid=!1,t.errors.push("Name must have at least 3 characters")),e.email&&e.email.match("@")||(t.valid=!1,t.errors.push("Field email doesn't contain an email")),(!e.email||e.email.length<3)&&(t.valid=!1,t.errors.push("Email must have at least 3 characters")),t}},{key:"onSubmit",value:function(e){if(e.preventDefault(),this.props.onSubmit&&this.state.validation.valid&&this.state.validation.dirty)this.props.onSubmit(this.state.rank);else if(!this.state.validation.dirty){var t=this.state.validation;t.errors.push("You must fill the form"),this.setState({validation:t})}}}]),t}(r.a.Component)),H=(a(57),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).context=void 0,a.state={characters:void 0,correctCharacters:new Array,currentPage:0,totalScore:0,finished:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.loadPage(this.state.currentPage);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"elem-quiz"},r.a.createElement("div",{className:"top"},r.a.createElement(p.b,{to:"/"},r.a.createElement(M,null)),r.a.createElement("div",{className:"scoring"},r.a.createElement("h1",null,r.a.createElement("span",{className:"oi","data-glyph":"star","aria-hidden":"true"}),this.state.totalScore),r.a.createElement(U,{limitInSeconds:b.b,onLimit:this.timerFinished.bind(this)}))),r.a.createElement("div",{className:"actions"},r.a.createElement(x,{onClick:this.previousPage.bind(this),disabled:!this.state.previousPage},r.a.createElement("span",null,r.a.createElement("span",{className:"oi","data-glyph":"chevron-left","aria-hidden":"true"}),"Previous page")),r.a.createElement(x,{onClick:this.nextPage.bind(this),disabled:!this.state.nextPage},r.a.createElement("span",null,"Next page",r.a.createElement("span",{className:"oi","data-glyph":"chevron-right","aria-hidden":"true"})))),r.a.createElement("div",{className:"cards"},this.getCharacters(this.state.characters)),this.state.finished?r.a.createElement(q,null,r.a.createElement(Y,{score:this.state.totalScore,onSubmit:this.rankSubmit.bind(this)})):null)}},{key:"getCharacters",value:function(e){var t=this,a=function(e,a,n){return r.a.createElement(D,{character:a,fake:e,key:n,correct:t.state.correctCharacters.some(function(e){return void 0!==a&&e===a.name}),onScore:t.onCorrectName.bind(t)})};return e&&e.length>0?e.map(function(e,t){return a(!1,e,e&&e.name?e.name.replace(" ",""):t.toString())}):Object(A.a)(new Array(10)).map(function(e,t){return a(!0,e,t.toString())})}},{key:"nextPage",value:function(){var e=Object(d.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.state.nextPage&&this.loadPage(this.state.currentPage+1);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"previousPage",value:function(){var e=Object(d.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.state.previousPage&&this.loadPage(this.state.currentPage-1);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadPage",value:function(){var e=Object(d.a)(v.a.mark(function e(t){var a,n,r,c,i;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=this.context.characterService)){e.next=15;break}return e.prev=2,e.next=5,a.characters(t);case 5:n=e.sent,r=n.characters,c=n.previousPage,i=n.nextPage,this.setState({characters:r,previousPage:c,nextPage:i,currentPage:t}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error("Couldn't retrieve characters");case 15:case"end":return e.stop()}},e,this,[[2,12]])}));return function(t){return e.apply(this,arguments)}}()},{key:"onCorrectName",value:function(e,t){if(!this.state.finished&&t.name){var a=this.state.correctCharacters;a.push(t.name),this.setState({totalScore:this.state.totalScore+e,correctCharacters:a})}}},{key:"timerFinished",value:function(){this.setState({finished:!0})}},{key:"rankSubmit",value:function(e){j.insertRank(e),this.props.history&&this.props.history.push("/")}}]),t}(r.a.Component));H.contextType=E;var K=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={quizContext:O},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("sound");e&&(e.volume=.07,e.play())}},{key:"render",value:function(){return r.a.createElement("div",{className:"root-star-quiz"},r.a.createElement(E.Provider,{value:this.state.quizContext},r.a.createElement(p.a,null,r.a.createElement(m.a,{path:"/",exact:!0,component:z}),r.a.createElement(m.a,{path:"/quiz/",component:H}))),r.a.createElement("audio",{autoPlay:!0,loop:!0,id:"sound"},r.a.createElement("source",{src:"./static/sound/darth.mp3",type:"audio/mpeg"})))}}]),t}(r.a.Component),_=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null))}}]),t}(n.Component);i.a.render(r.a.createElement(_,null),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.b38891f0.chunk.js.map