/*****************************************************************************/
/* Count: Event Handlers and Helpers */
/*****************************************************************************/
Template.todos_count.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.todos_count.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
    completedCount: function () {
      return Todos.find({is_done: true}).count();
    },
    totalCount: function () {
      //Returns a count of the total TodoItems
      return Todos.find({}).count();
    }
});

/*****************************************************************************/
/* Count: Lifecycle Hooks */
/*****************************************************************************/
Template.todos_count.created = function () {
};

Template.todos_count.rendered = function () {
};

Template.todos_count.destroyed = function () {
};
