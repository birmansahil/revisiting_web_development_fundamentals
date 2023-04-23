let root = document.querySelector(":root");
let rootStyles = getComputedStyle(root);

console.log(rootStyles.getPropertyValue('--bg-color'));

root.style.setProperty("--bg-color", "salmon");