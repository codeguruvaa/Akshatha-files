import React from 'react';
import './App.css';

function App() {
  return (
    <div>

        <header>
          <nav>
           <center> Home | ABout | Services | Contact</center>
          </nav>
        </header>

        <section className='slider'></section>

        <div className='paras'>
          <div className='pOne'>
            <p>
              the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
              the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
              the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
              the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
              the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
              the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
            </p>
          </div>
          <div className='pTwo'>
          <p>
              the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
              the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
              the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
              the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
              the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
              the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
            </p>
          </div>
        </div>

        <div style={{clear:'both'}} ></div>

        <section className='boxes'>
          <div className='bOne'></div>
          <div className='bTwo'></div>
          <div className='bThree'></div>
        </section>

        <div style={{clear:'both'}} ></div>
        
        <footer></footer>

    </div>
  );
}

export default App;

