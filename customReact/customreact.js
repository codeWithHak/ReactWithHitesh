function renderElement (element, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.child
    domElement.setAttribute("href", reactElement.attributes.href)
    domElement.setAttribute("target", reactElement.attributes.target)
    container.appendChild(domElement)
}


const reactElement = {
    type:'a',
    attributes:{
        href:"https://google.com",
        target:"_blank"
    },
    child:"Click me to visit google"
}

const root = document.getElementById("root")


renderElement(reactElement, root)