import { useState } from 'react';
import './App.css';
import CategoryNav from './components/CategoryNav';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {

  const [selectedCategory, setSelectedCategory] = useState()

  const onCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  return (
    <>
      <div className="App">
        <div className="container">
          <Header />
          <CategoryNav onCategoryClick={onCategoryClick} />
          <Menu categoryId={selectedCategory} />
        </div>
      </div>
    </>
  );
}

export default App;
