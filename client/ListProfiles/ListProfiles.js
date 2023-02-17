import * as bootstrap from 'bootstrap'

Template.LP.helpers({
    profile() {
        return myfarmdb.find(); 
    }
    
   
}); 

Template.LP.events({
    'click .js-view'() { 
            let that = this
            const viewModal = new bootstrap.Modal('#VModal', {})
            document.querySelector('#viewName').innerHTML = `${that.animal}`
            document.querySelector('#viewSpecies').innerHTML = `${that.species}`
            viewModal.show()
        },
        'click .js-del'() {
            let that = this
            console.debug("deleting", that._id)
            myfarmdb.remove({ "_id": that._id })
        
    }
}) 