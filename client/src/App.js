import {useEffect, useState } from 'react';
import './App.css';
import CreateCategoryCard from './components/functions/cerateCategoryCard';

function App() {

  function ShowCategoryDetails(){
    alert('clicked')
  }
  
  const [categories, setCategories] = useState([]);
  useEffect(()=> {
    fetch('/api')
      .then(res => res.json())
      .then(data => setCategories(data));
      },[])
      
    
  return (
    console.clear(),
    console.log(categories),
    <div className='App'>
      <h4>Ctegories</h4>
      <div className='categoryContainer'>
        {categories.map((category,index)=>
        <CreateCategoryCard key={index} doClick={ShowCategoryDetails} catObject={category}/>
        )}
      </div>
    </div>
  );
}

export default App;
