import logo from './logo.svg';
import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Counter from './learn-usestate/counter';
import Effect from './learn-useeffect';
import Context from './learn-usecontext';
import Memo from './learn-usememo';

function App() {
return (
<Router>

<div className="App-header">
    <h1>Tes</h1>
<nav className='NavBar'>
<ul className='ul'>
<li className='li'>
<Link to="/">Use State</Link>
</li>
<li className='li'>
<Link to="/effect">Use Effect</Link>
</li>
<li className='li'>
<Link to="/context">Use Context</Link>
</li>
<li className='li'>
<Link to="/memo">Use Memo</Link>
</li>
</ul>
</nav>
<Routes>
<Route path='/' exact element = {<Counter/>}/>
<Route path='/effect' exact element = {<Effect/>}/>
<Route path='/context' exact element = {<Context/>}/>
<Route path='/memo' exact element = {<Memo/>}/>
</Routes>
</div>
</Router>
);
}
export default App;