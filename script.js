
console.log('run 1st')

const dogImageDiv = document.getElementById('dogImg')
const dogButton = document.getElementById('dogButton')

// stuff you have to wait for
const getNewDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      dogImageDiv.innerHTML = `<img src='${json.message}' 
      height=450 width=500 />`
    })
}

dogButton.onclick = () => getNewDog()
//