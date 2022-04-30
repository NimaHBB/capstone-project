import {useEffect, useState } from 'react';
import './App.css';
import CreateCategoryCard from './components/functions/cerateCategoryCard';
function App() {

  function ShowCategoryDetails(catName){
    alert(catName+' category clicked')
  }
  
  const [categories, setCategories] = useState([]);
  useEffect(()=> {
    fetch('/api')
      .then(res => res.json())
      .then(data => {
        setCategories(data)
      })
      },[])
      
  return (
    console.clear(),
    <div className='App'>
      <div className='App-header'>
      <h4>Nitto Shop</h4>
      <form onSubmit={''}>
  <input type="search" className='search' placeholder='search here...' autofocus required>
  </input>
  <button>Go</button>

</form>
      </div>
      <main>
      <div className='categoryContainer'>
        {categories.map((category,index)=>
        <CreateCategoryCard key={index} doClick={ShowCategoryDetails} catObject={category}/>
        )}
      </div>
      </main>
      <footer>
        <ul>
         <li ><a href=''><img src='https://raw.githubusercontent.com/NimaHBB/capstone-project/main/client/src/images/icon/home.svg' /></a></li>
         <li ><a href=''><img src='https://raw.githubusercontent.com/NimaHBB/capstone-project/main/client/src/images/icon/person.svg' /></a></li>
         <li ><a href=''><img src='https://raw.githubusercontent.com/NimaHBB/capstone-project/main/client/src/images/icon/favorite.svg' /></a></li>
         <li ><a href=''><img src='https://raw.githubusercontent.com/NimaHBB/capstone-project/main/client/src/images/icon/menu.svg' /></a></li>
        </ul>
      </footer>

    </div>
);
}

export default App;
