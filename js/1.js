function(t) {
  "A" === t.currentTarget.tagName && t.preventDefault();
  var n = g(this),
    e = _.getSelectorFromElement(this),
    i = [].slice.call(document.querySelectorAll(e));
  g(i).each(function() {
    var t = g(this),
      e = t.data(ht) ? "toggle" : n.data();
    bt._jQueryInterface.call(t, e)
  })
}