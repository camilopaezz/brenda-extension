'use strict';

import './popup.css';

function aff() {
  document.getElementById('reportBtn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url
      console.log(url)
    
      const s = new URL('http://rickmortyandreact.vercel.app/')
      s.searchParams.set('r', url)

      chrome.windows.create({
        type: 'popup',
        url: s.href
      })
    })
  })
}

aff()

