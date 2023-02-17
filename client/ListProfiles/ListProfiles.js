Template.LP.helpers({
    profile() {
        return myfarmdb.find(); 
    }
    
   
}); 

Template.LP.events({
    'click .js-view'() { 
        let that = this 
        document.getElementById("viewname").innerHTML = `${that.animaln}` 
        document.getElementById("viewspecies").innerHTML = `${that.species}`
        $("#VModal").modal("show") 
        
    }
}) 