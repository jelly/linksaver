chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if ( request.message === "clicked_browser_action" ) {
      fetch("https://vps.vdwaa.nl/urlgrab", {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({url: window.location.href, title: document.title})
      });
    }
  }
);
