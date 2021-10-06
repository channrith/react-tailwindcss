import './App.css';
import Cart from './components/Cart';
import ChitChat from './components/ChitCat';

function App() {
  return (
    <div>
      <div className='py-8'>
        <ChitChat />
      </div>
      <div className='py-8'>
        <Cart />
      </div>
    </div>
  );
}

export default App;
