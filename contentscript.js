function runScriptOnLoadedDocument() {
    const inspectorColor = "lightgreen"
    // Whitelisted keys, each one representing a task
    const assignedTaskKeys = ["f", "x"]
    let taskKey = "";
    let devModeOn = undefined;

    document.addEventListener("mousemove", (event) => {
        if (!(event.shiftKey && devModeOn)) return;
        let target = event.target;
        target.style.background = inspectorColor;
    });

    document.addEventListener("mouseout", (event) => {
        let target = event.target;
        target.style.background = '';
    });

    document.addEventListener("click", (event) => {
        if (!(event.shiftKey && devModeOn)) return;
        switch (taskKey) {
            case "f":
                console.log("F is activated ")
                break;
            case "x":
                console.log("x is activated ");
                break;
            default:
                console.log("No task called")
                return;
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.repeat) {
            return
        }
        devModeOn = event.getModifierState('CapsLock');
        if (!(assignedTaskKeys.includes(event.key.toLowerCase()) && event.shiftKey && devModeOn)) return;
        taskKey = event.key.toLowerCase();
    });

    document.addEventListener("keyup", (event) => {
        if (event.repeat) {
            return
        }
        taskKey = "";
    });
}

window.addEventListener("load", runScriptOnLoadedDocument, false);