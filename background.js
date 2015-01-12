// Setting a toolbar badge text
var roe = chrome.runtime && chrome.runtime.sendMessage ? 'runtime' : 'extension';
chrome[roe].onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.browserAction.setBadgeText({ text: request.time, tabId: sender.tab.id });
  }
);
