Template.AP.events({ 
    'click .js-save'() { 
      let that = this
        let animalName = document.getElementById("name")
        let image = document.getElementById("image")
        let Stype = document.getElementById("species")
           myfarmdb.insert({
           "animaln" : animalName, 
           "species" : Stype,
           "profilep" : image
        })  
        $("#APModal").modal("hide")
      }, 
      'input #image'() {
        const image = document.getElementById("image")
        const imgProfile = document.getElementById("PImage")
        imgProfile.src = image.value 
      }
      
})




    
