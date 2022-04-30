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
  <input type="text" className='search' placeholder='search here...' autofocus required>
  </input>
  <button id='searchBtn'>Go</button>

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
         <li ><a href='localcost:3000'><img src='https://raw.githubusercontent.com/NimaHBB/capstone-project/main/client/src/images/icon/home.svg' alt='home icon'/></a></li>
         <li ><a href='localcost:3000'><img src='https://raw.githubusercontent.com/NimaHBB/capstone-project/main/client/src/images/icon/person.svg' alt='person icon'/></a></li>
         <li ><a href='localcost:3000'><img src='https://raw.githubusercontent.com/NimaHBB/capstone-project/main/client/src/images/icon/favorite.svg' alt='favorite icon'/></a></li>
         <li ><a href='localcost:3000'><img src='https://raw.githubusercontent.com/NimaHBB/capstone-project/main/client/src/images/icon/menu.svg' alt='menu icon'/></a></li>
        </ul>
      </footer>

    </div>
);
}

export default App;
