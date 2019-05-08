import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Indiana from './Components/Indiana/Indiana';
import SignaturePad from './Components/Membership/Signature/Signature';
import Personal from './Components/Membership/Personal/Personal';
import Business from './Components/Membership/Business/Business';
import Category from './Components/Membership/Category/Category';

function App() {
  return (
    <div className="App">
    <Header />
    <Indiana />
    <Personal />
    <Category />
    <Business />
      <SignaturePad />
    </div>
  );
}

export default App;
