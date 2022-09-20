// Create Two Functions -> addChild and redWedding
let starks = document.querySelector(".starks")

const addChild = () => {
// The addChild function creates new div & appends it to the starks div
const newChild = document.createElement('div')
//newChild.className = 'New Child'
newChild.textContent = 'New Child'
starks.appendChild(newChild)
}

const redWedding = () => {
// The redWedding function removes ALL stark children (loop)
while(starks.firstChild){
starks.firstChild.remove()
}
}

// Attach functions to buttons
const newChildBtn = document.querySelector("#add-child")
newChildBtn.addEventListener('click', addChild)

const ktaBtn = document.querySelector("#red-wedding")
ktaBtn.addEventListener('click', redWedding)

