import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import TodoForm from '../../components/Todo/TodoForm';
import TodoItem from '../../components/Todo/TodoItem';
import { useTodos } from '../../contexts/TodoContext';

// const TodoPage = () => {
//   const { todos } = useTodos();

//   return (
    

//     // <Header />
//     // <div className="flex flex-col min-h-screen">
//     //   <Header />
//     //   <main className="flex-1 p-4 max-w-xl mx-auto">
//     //     <TodoForm />
//     //     <ul className="mt-4 space-y-2">
//     //       {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
//     //     </ul>
//     //   </main>
//     //   <Footer />
//     // </div>
//   );
// };

// export default TodoPage;

function TodoPage() {
    return (
  
        <div className="flex flex-col min-h-screen">
         <Header/>
         <main className="flex-1 p-4 max-w-xl mx-auto">
         <TodoForm/>
         
         <ul className="mt-4 space-y-2">
         <TodoItem/>
         {/* {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)} */}
         </ul>
         </main>
        <Footer/>
        </div>
    );
  }
  
  export default TodoPage;
