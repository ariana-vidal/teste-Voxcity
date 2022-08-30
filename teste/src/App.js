import { BrowserRouter } from 'react-router-dom';
import Provider from './context/Provider';
import './App.css';
import Routes from './routes';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
