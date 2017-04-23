function restore_options() {
  chrome.storage.sync.get({
    push_url: '',
    secret_token: ''
  }, function(items) {
    document.getElementById('push_url').value = items.push_url;
    document.getElementById('secret_token').value = items.secret_token;
  });
}

function save_options() {
  alert('saving');
  chrome.storage.sync.set({
    secret_token: document.getElementById('secret_token').value,
    push_url: document.getElementById('push_url').value
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  restore_options();
  document.getElementById('save').addEventListener('click',
    save_options);
});
