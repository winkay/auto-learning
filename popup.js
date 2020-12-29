(function() {
  chrome.tabs.getSelected(null, function (tab) {　　// 先获取当前页面的tabID
    chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
        console.log(response);　　// 向content-script.js发送请求信息
    });
  });
})()