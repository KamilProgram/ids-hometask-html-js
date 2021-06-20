import './App.scss';
import LayotMain from './сomponents/layouts/LayoutMain';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return <BrowserRouter><LayotMain /> </BrowserRouter>
  }
}


export default App;
