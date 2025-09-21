let container=document.querySelector('.container')
console.log(container)

let htmlValue= `<h1>test</h1><p>lorem ipsun dolor</p>`
container.innerHtml=htmlValue

// inner html parses the html value and shows on screen