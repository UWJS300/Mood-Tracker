// Send a message containing the page details back to the event page
console.log("Content.js has been injected into background page!");

chrome.runtime.sendMessage({
    'title': document.title,
    'url': window.location.href
});
