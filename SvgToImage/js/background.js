


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.status !== 'loading') return;

	

	 var jsFiles = ['js/jquery.min.js'];
	console.log(tabId, changeInfo, tab);


	chrome.tabs.executeScript(tabId, {
    	code: 's'
		}, function(result) {
		    if (chrome.runtime.lastError) { // or if (!result)
		    	console.log(chrome.runtime.lastError);
		        return;
		    }
	});

});


chrome.runtime.onMessage.addListener(function (req, sender, sendRes) {
	 console.log("onMessage.addListener", req, sender, sendRes);
});


function eachTask(tasks, done) {
  (function next() {
    var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    
    console.log(index);

    if (index === tasks.length) done && done();else tasks[index](function () {
      return next(++index);
    });
  })();
}

function eachItem(arr, iter, done) {
  console.log(arr);
  var tasks = arr.map(function (item) {
    return function (cb) {
      return iter(item, cb);
    };
  });
  return eachTask(tasks, done);
}