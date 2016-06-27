var tplIndex = require('../templates/index.string');

SPA.defineView('index', {
  html: tplIndex,

  bindEvents: {
    show: function () {
      var myScroll = new IScroll('#home-scroll');
    }
  }
});
