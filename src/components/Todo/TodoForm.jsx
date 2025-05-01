// // import { useState } from 'react';
// // import { useTodos } from '../../contexts/TodoContext';

// // const TodoForm = () => {
// //   const [title, setTitle] = useState('');
// //   const { addTodo } = useTodos();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (title.trim()) {
// //       addTodo(title.trim());
// //       setTitle('');
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="flex space-x-2">
// //       <input
// //         type="text"
// //         className="flex-1 p-2 border rounded"
// //         placeholder="Add a new task"
// //         value={title}
// //         onChange={(e) => setTitle(e.target.value)}
// //       />
// //       <button className="bg-blue-500 text-white px-4 rounded">Add</button>
// //     </form>
// //   );
// // };

// // export default TodoForm;

// import { useState } from 'react';
// import { useTodos } from '../../contexts/TodoContext';

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (title.trim()) {
//     addTodo(title.trim());
//     setTitle('');
//   }
// };
// const TodoForm = () => {
//   return (
//     // <div className="bg-blue-500 text-white p-4 ">
//     //   ✅ Todo Page Loaded
//     //   </div>
//     <form className="flex space-x-2" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         className="flex-1 p-2 border rounded"
//         placeholder="Add a new task"
//       />
//       <button className="bg-blue-500 text-white px-4 rounded">Add</button>
//     </form>
//   );
// }
// export default TodoForm;
  

import React, { useState } from 'react';
import { CalendarDateRangeIcon, PlusIcon } from '@heroicons/react/24/solid';
import TimePicker from './TimePicker';
const TodoForm = ({ onClose }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    // Mock function to add todo — you can replace it with actual logic
    console.log('New Task:', task);
    
    setTask('');
    onClose(); // Close modal after submit
  };

  return (
    <form className="flex flex-col space-x-2 bg-white" onSubmit={handleSubmit}>
      <div className="flex space-x-2">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 p-2 border rounded"
        placeholder="Add a new task"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600">
        Add
      </button>
      </div>
      <div className = "flex space-x-2 mt-2">
        <input type="textarea" className="flex-1 p-2 border rounded" />
      </div>
      <div className = "flex space-x-2 mt-2">
      <button onClick={onClose} className="bg-red-500 text-white px-4 rounded hover:bg-red-600">
        Category 
      </button>
      <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        <CalendarDateRangeIcon className="w-5 h-5 mr-2" />
        Due Date


      
      </button>
      <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Sub Task</button>
      <TimePicker />
      {/* <Button type="primary">Button</Button> */}

      </div>
    </form>
  );
};

export default TodoForm;



