import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    { name: 'About',description: 'Learn About Me' },
    { name: 'Portfolio', description: 'See everything Ive been working on' },
    { name: 'Contact', description: 'Send me a message' },
    { name: 'Resume', description: 'Download my official resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      >
      </Nav>
      <main>
        <div>
          <About></About>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
