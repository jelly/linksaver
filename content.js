chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if ( request.message === 'clicked_browser_action' ) {
      chrome.storage.sync.get({
        push_url: '',
        secret_token: ''
      }, function(items) {
        fetch(items.push_url, {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            url: window.location.href,
            title: document.title,
            token: items.secret_token
          })
        });
      });
    }
  }
);
