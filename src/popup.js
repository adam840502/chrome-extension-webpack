'use strict';

//buttons
let button = document.getElementById('getCategories');
let defaultCollecting = document.getElementById('defaultCollecting');
let highlightAudible = document.getElementById('highlightAudible');
let tokenize = document.getElementById('tokenize');

let content = document.getElementById('content')

button.onclick = function () {
  chrome.runtime.sendMessage({ name: 'buttonClicked', id: 'getCategories' }, response => {
    // tabIds = res.tabs.map(item => { return item['id']; })
    content.innerHTML = `${response.status}<br>${response.tabs}`
  })
};

defaultCollecting.onclick = function () {
  chrome.runtime.sendMessage({ name: 'buttonClicked', id: 'defaultCollecting' })
}

highlightAudible.onclick = function () {
  chrome.runtime.sendMessage({ name: 'buttonClicked', id: 'highlightAudible' })
}

tokenize.onclick = function () {
  chrome.runtime.sendMessage({ name: 'buttonClicked', id: 'getTokenizedWords' }, response => {
    content.innerHTML = `${response.words}`
  })
}

