import * as bootstrap from 'bootstrap'

Template.AP.events({ 
    'click .js-save'() { 
      const addmodal = bootstrap.Modal.getInstance('#APModal')
        let image = document.querySelector("#image").value
        let animalName = document.querySelector("#name").value
        let Stype = document.querySelector("#species").value
           myfarmdb.insert({
           "profilep" : image, 
           "animal" : animalName,
           "species" : Stype
        })  
        addmodal.hide()
      }, 
      'input #image'() {
        const image = document.querySelector('#image')
        const imgProfile = document.querySelector('#PImage')
        imgProfile.src = image.value
      }
      
});




    
