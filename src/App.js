import { BrowserRouter as Router, Route } from 'react-router-dom';
import FruitDetail from './components/FruitDetail/FruitDetail';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/:id" component={FruitDetail} />


      </div>
    </Router>
  );
}

export default App;
