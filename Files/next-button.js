const nextButtonComponent = () => ({
    init() {
      const modelList = ['tree-glb', 'treewithlight']
      // const model = document.getElementById('model')
      const models = document.querySelectorAll('#model')
      const nextButton = document.getElementById('nextbutton')
      const santa = document.getElementById('model1')
      nextButton.style.display = 'block'
  
      let idx = 1  // Start with the 2nd model as 1st is already in the scene on page load
      const nextModel = () => {
        santa.setAttribute('visible', true)
        for (let i = 0; i < models.length; i++) {
          models[i].removeAttribute('gltf-model')
          // Switch to next model in the list
          models[i].setAttribute('gltf-model', `#${modelList[idx]}`)
        }
        idx = (idx + 1) % modelList.length
      }
      nextButton.onclick = nextModel  // Switch to the next model when the button is pressed.
    },
  })
  export {nextButtonComponent}