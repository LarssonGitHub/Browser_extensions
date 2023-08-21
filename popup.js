console.log("hello from inside extensions")

const toggleExtensionButton = document.getElementById("toggle-extension-button");

toggleExtensionButton.addEventListener("click", () => {
    try {
        localStorage.setItem("DevExtensionActive", toggleExtensionButton.checked);
    } catch (err) {
        alert("Error Setting local storage, see console");
        console.err(err)
    }
})