// import { useTodos } from '../../contexts/TodoContext';

// const TodoItem = ({ todo }) => {
//   const { toggleTodo, deleteTodo } = useTodos();

//   return (
//     <li className="flex justify-between items-center p-2 border rounded">
//       <span
//         onClick={() => toggleTodo(todo.id)}
//         className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
//       >
//         {todo.title}
//       </span>
//       <button
//         onClick={() => deleteTodo(todo.id)}
//         className="text-red-500 hover:text-red-700"
//       >
//         ✕
//       </button>
//     </li>
//   );
// };

// export default TodoItem;


const TodoItem = ({ todo }) => {
  return (
    <><li className="flex justify-between items-center p-2 border rounded">
      <span className="flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}">Hello World </span>
      <button className="text-red-500 hover:text-red-700">✕</button>
    </li><li className="flex justify-between items-center p-2 border rounded">
        <span className="flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}">Hello World </span>
        <button className="text-red-500 hover:text-red-700">✕</button>
      </li></>
    
  );
};

export default TodoItem;