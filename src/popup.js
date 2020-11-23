import axios from 'axios';

'use strict';

let button = document.getElementById('button');
let img = document.getElementById('img');

button.onclick = function () {
  var base = 'http://www.google.com'
  axios.get(base)
    .then(response => {
      var doc = new DOMParser().parseFromString(response.data, "text/html")
      var contentImageUrl = doc.querySelector('meta[itemprop="image"]').getAttribute('content')
      contentImageUrl = new URL(contentImageUrl, base).href

      img.setAttribute('src', contentImageUrl)

      return axios.get(contentImageUrl)
    })
};