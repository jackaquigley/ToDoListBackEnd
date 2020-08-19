use todo_db;

db.dropDatabase();

db.todo.insertMany(
  [
    {
      name: 'Buy Milk',
      completed: true
    },
    {
      name: 'Feed Dog',
      completed: false
    }
  ]
)
