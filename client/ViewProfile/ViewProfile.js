Template.VP.events({
    'click .js-del'() { 
        console.log("Deleting")
        let that = this
        console.debug("deleting", that._id)
        farmdb.remove({ "_id": that._id })
    }
})