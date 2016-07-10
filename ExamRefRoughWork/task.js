self.addEventListener('message', function (e) {
    self.postMessage("Hello from task.js!\nYou sent me the following message; " + e.data);
}, false);