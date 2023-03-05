chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "contextMenu1",
    contexts: ["page", "selection"]
  });
  chrome.contextMenus.onClicked.addListener((event) => {
    console.log(event);
  });

  chrome.contextMenus.create({
    title: "Test Context Menu1",
    id: "contextMenu2",
    parentId: "contextMenu1",
    contexts: ["page", "selection"]
  });

  chrome.contextMenus.create({
    title: "Test Context Menu2",
    id: "contextMenu3",
    parentId: "contextMenu1",
    contexts: ["page", "selection"]
  });
});
