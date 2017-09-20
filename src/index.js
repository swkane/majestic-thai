import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//IMPORT COMPONENTS
import Findus from './components/Findus';
import About from './components/About';
import Menu from './components/Menu';
import Layout from './components/Layout';


ReactDOM.render(
<BrowserRouter>
  <Layout>
    <Switch>
      <Route path="/findus" component={Findus} />
      <Route path="/menu" component={Menu} />
      <Route path="/" component={About} />
    </Switch>
  </Layout>
</BrowserRouter>
,document.getElementById('root'));
registerServiceWorker();
