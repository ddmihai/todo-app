import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Header from './components/Header/Header';
import SmallBanner from './components/SmallBanner/SmallBanner';
import TodoList from './components/TodoList/TodoList';
import WhatIsThis from './components/WhatIsThis/WhatIsThis';





function App(): JSX.Element {


  return (
    <div className="App">
        <main className='min-h-screen'>
          <Header />
          <AddTodo />
          <TodoList />
          <WhatIsThis />
          <SmallBanner />
        </main>
    </div>
  );
}

export default App;
