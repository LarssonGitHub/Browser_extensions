console.log("I am background script!")

const checkLocalStorage = async () => {
    // const storage = await chrome.storage.local.get(["DevExtensionActive"]);
    const storage = await chrome.storage.local.get();
    return 'DevExtensionActive' in storage;
}

checkLocalStorage()

// TODO replace this with onStartUp in production
chrome.runtime.onInstalled.addListener(async () => {
    const extensionActive = await checkLocalStorage()
    console.log("Local storage contains the key", extensionActive)
    // Send to popup
});

// https://stackoverflow.com/questions/48524740/adding-a-disable-button-to-chrome-extension
// https://stackoverflow.com/questions/17174093/how-do-i-toggle-on-off-content-scripts-in-a-google-extension