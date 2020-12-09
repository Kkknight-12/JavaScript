const ul = document.querySelector('ul');
const li = document.createElement('li')

// .cloneNode(false)
// false will stop from cloning the child and decendent
const newli = ul.querySelectorAll('li')[2]
// console.log(newli.querySelector('ul > li'))

// 
const cloneLi = newli.cloneNode(true)
ul.append(cloneLi)

// If false, only node will be cloned. Any text that node 
// contains is not cloned, either (since text 
// is contained by one or more child Text nodes).