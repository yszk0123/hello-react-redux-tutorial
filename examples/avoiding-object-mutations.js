import expect from 'expect';
import deepFreeze from 'deep-freeze';

function toggleTodo(todo) {
  return { ...todo, completed: !todo.completed };
}
function testToggleTodo() {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false,
  };
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true,
  };

  deepFreeze(todoBefore);

  expect(toggleTodo(todoBefore)).toEqual(todoAfter);
}

testToggleTodo();
console.log('[avoiding-object-mutations] all tests passed.');
