let runTranslate = document.getElementById('runTranslate');
runTranslate.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'code.js'}
);
  });
};
