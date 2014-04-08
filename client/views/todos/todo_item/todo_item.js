/*****************************************************************************/
/* TodoItem: Event Handlers and Helpers */
/*****************************************************************************/
Template.TodoItem.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'click [name=is_done]': function (e, tmpl){
      //this points to data context, the particular TodoItem
      var id = this._id;
      //Similar to jQuery .find(), look for element of type input and see whether or not it is checked
      var isDone = tmpl.find('input').checked;
      //update data where _id = var id
      Todos.update({_id: id}, {
        //use mongo $set modifier to set is_done = var isDone boolean
        $set: {
          is_done:isDone
        }
      });
    }
});

Template.TodoItem.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
    isDoneChecked: function () {
      return this.is_done ? 'checked' : '';
    }
});

/*****************************************************************************/
/* TodoItem: Lifecycle Hooks */
/*****************************************************************************/
Template.TodoItem.created = function () {
};

Template.TodoItem.rendered = function () {
};

Template.TodoItem.destroyed = function () {
};
