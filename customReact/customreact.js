function renderElement (element, container) {

    // creating dom element and setting the props manually
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.child
    // domElement.setAttribute("href", reactElement.attributes.href)
    // domElement.setAttribute("target", reactElement.attributes.target)
    // container.appendChild(domElement)

    // creating dom element and setting the props dynamically

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.child
    for (const attribute in reactElement.attributes){
        domElement.setAttribute(attribute,reactElement.attributes[attribute])
    }
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