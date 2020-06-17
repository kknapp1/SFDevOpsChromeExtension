document.addEventListener('DOMContentLoaded', function() {
  var btnAnalyzeTests = document.getElementById('btnAnalyzeTests');
  btnAnalyzeTests.addEventListener('click', function() {

    chrome.tabs.getCurrent(
      addTestElement()
     );
  }, false);
}, false);