import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome';
// import Hello from './components/Hello'
// import Message from './components/Message';
// import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import Form from './components/Form';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';

function App() {
  return (
    <div className="App">
      <ClickCounterTwo />
      <HoverCounterTwo />

    </div >

  );
}

export default App;
