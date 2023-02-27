
// chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//         target: {tabId: tab.id},
//         files: ["jquery-3.6.3.slim.min.js"]
//     }, function(){
//         chrome.scripting.executeScript({
//             target: { tabId: tab.id },
//             files: ["explain.js"]
//         });
//     })
// });

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
    // chrome.scripting.executeScript({
    //     target: {tabId: tab.id},
    //     files: ["jquery-3.6.3.slim.min.js"]
    // }, function(){
    //     console.log("Clicked!")
    //     // caches.setPopup({
    //     //     tabId: tabId,
    //     //     popup: "index.html"
    //     // })
    // })
  })