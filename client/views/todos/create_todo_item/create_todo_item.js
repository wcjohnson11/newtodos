/*****************************************************************************/
/* CreateTodoItem: Event Handlers and Helpers */
/*****************************************************************************/
Template.CreateTodoItem.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'submit form': function (e, tmpl){
      //prevents default of browser posting back server on form submit
      e.preventDefault();
      //look for element of type 'input' and grab its value
      var subject = tmpl.find('input').value;
      //Todos insert method with the following properties, not is_done default is false
      Todos.insert({
        subject: subject,
        created_at: new Date,
        is_done: false,
        user_id: Meteor.userId()
      });
      //grab form and clear it
      var form = tmpl.find('form');
      form.reset();
    }
});

Template.CreateTodoItem.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* CreateTodoItem: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateTodoItem.created = function () {
};

Template.CreateTodoItem.rendered = function () {
};

Template.CreateTodoItem.destroyed = function () {
};
