console.log("hello from inside extensions")
const devInfo = document.getElementById("dev-info")
const inspectorColor = "lightgreen"
// Whitelisted keys, each one representing a task
const assignedTaskKeys = ["f", "x"]
let taskKey = "";
let devModeOn = undefined;

const editDevInfoVisibility = (oldClass, newClass) => {
    devInfo.classList.replace(newClass, oldClass)
}

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
    if (devModeOn && devInfo.classList.contains("hidden")) {
        editDevInfoVisibility("shown", "hidden");
    }
    if (!devModeOn && devInfo.classList.contains("shown")) {
        editDevInfoVisibility("hidden", "shown");
    }
    if (!(assignedTaskKeys.includes(event.key.toLowerCase()) && event.shiftKey && devModeOn)) return;
    taskKey = event.key.toLowerCase();
});

document.addEventListener("keyup", (event) => {
    if (event.repeat) {
        return
    }
    taskKey = "";
});

// get background
// const originalStyles = window.getComputedStyle(event.target, "");
// const originalBackground = originalStyles.getPropertyValue("background");
// event.target.style.backgroundColor = originalBackground;

// create a class for the mouseover.
// var style = document.createElement('style');
// style.type = 'text/css';
// style.innerHTML = '.superSecretClass { background: blue; }';
// document.getElementsByTagName('head')[0].appendChild(style); 

// document.onkeydown = function (e) {
//   [].forEach.call(hiddenElements, function (el) {
//     el.classList.remove('hidden');
//   });
//   info.classList.add('hidden');
//   key.innerHTML = e.key;
//   code.innerHTML = e.code;
//   keyCode.innerHTML = e.keyCode;
//   keyCodeLarge.innerHTML = e.keyCode;
// };