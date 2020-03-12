document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  const movesCon = document.getElementById("moves-container");

  document.addEventListener("keydown", function(event) {
    switch (event.keyCode) {
      case 37:
           const left = document.createElement('li')
           left.innerText = "left"
           movesCon.appendChild(left)
         break;
      case 38:
          const up = document.createElement('li')
          up.innerText = "up"
          movesCon.appendChild(up)
         break;
      case 39:
        const right = document.createElement('li')
        right.innerText = "right"
        movesCon.appendChild(right)
         break;
      case 40:
        const down = document.createElement('li')
        down.innerText = "down"
        movesCon.appendChild(down)
         break;
      case 8:
        movesCon.removeChild(document.getElementById("moves-container").lastChild);
      break;
   }
  })

  const moveButton = document.getElementById("move-button")

  moveButton.addEventListener("click", function(event){
    let movesArray = Array.from(document.getElementsByTagName("li"))
    let current = movesArray[0]
    move(current.innerText)
    movesCon.removeChild(current)
  })

})
