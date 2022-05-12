const banner = document.createElement('div')

import './contentScript.css'

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'is-fake') { 
    if (document.getElementById('banner222')) return sendResponse(false) // already exists
  
    document.body.insertBefore(banner, document.body.firstChild) // insert before first child
    
    banner.outerHTML = `
      <div id="banner222">
          <p>Esta pagina ha sido reportada como una FakeNews <small><a href="">Mas informacion.</a></small> </p>
      </div>
    `
  }
})
