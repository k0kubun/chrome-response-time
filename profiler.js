(function() {
  setTimeout(function() {
    var t = performance.timing;
    var start = t.redirectStart == 0 ? t.fetchStart : t.redirectStart;
    var time = String(((t.responseEnd - start) / 1000).toPrecision(3)).substring(0, 5);
    var roe = chrome.runtime && chrome.runtime.sendMessage ? 'runtime' : 'extension';
    chrome[roe].sendMessage({ time: time });
  }, 0);
})();
