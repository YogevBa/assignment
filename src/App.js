import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './screens/main/Main';
import AlbumDetails from './screens/albumDetails/AlbumDetails';
import Header from './components/header/Header';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/albumDetails' component={AlbumDetails} />
      </Switch>
    </div>
  );
};

export default App;
