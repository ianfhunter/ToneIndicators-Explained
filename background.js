// Create pop-up if icon clicked
chrome.action.onClicked.addListener((tab) => {
    chrome.windows.create({
      focused: true,
      width: 300,
      height: 200,
      type: 'popup',
      url: 'index.html',
      top: 0,
      left: 0
    },
    () => {})
})