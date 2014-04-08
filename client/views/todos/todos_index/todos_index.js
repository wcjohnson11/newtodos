/*****************************************************************************/
/* TodosIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.TodosIndex.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.TodosIndex.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
   items: function () {
      return Todos.find({}, {
        //sort the todos in descending order relating to their date
        sort: {
          created_at: -1
        }
      });
    },
//a function to assign the class of 'done' to TodoItem
    isDoneClass: function (){
      return this.is_done ? 'done' : '';
    }
});

/*****************************************************************************/
/* TodosIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.TodosIndex.created = function () {
  console.log('todosindex created');
};

Template.TodosIndex.rendered = function () {
  console.log('todosindex rendered');
};

Template.TodosIndex.destroyed = function () {
};
