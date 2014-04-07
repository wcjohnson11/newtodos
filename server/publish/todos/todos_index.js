/*****************************************************************************/
/* TodosIndex Publish Functions
/*****************************************************************************/

Meteor.publish('todos', function() {
    return Todos.find({user_id: this.userId});
});
