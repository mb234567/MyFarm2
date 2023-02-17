import * as bootstrap from 'bootstrap'

Template.Nav.events({
    'click .js-add2'() {
        const addModal2 = new bootstrap.Modal('#APModal', {}) 
        addModal2.show()
    }
})