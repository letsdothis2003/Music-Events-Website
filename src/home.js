import React from 'react';
import './App.css';
import Blurry from './components/blurryloader'



function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Welcome to the Wheezer!</h1>
        <p>
         Home of local NYC music-related events! You can find musical events and memorabillia in areas near you!
        </p>
      </header>
      <div>
        <Blurry imageUrl="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <h1>Join us for one of our concerts!</h1>
      </div>
    </div>
  );
}

export default Home;
