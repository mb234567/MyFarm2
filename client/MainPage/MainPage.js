import * as bootstrap from 'bootstrap'

Template.MP.events({
    'click .js-add'() {
        const addModal = new bootstrap.Modal('#APModal', {}) 
        addModal.show()
    } 
})