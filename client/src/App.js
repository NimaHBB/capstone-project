//import { useState } from 'react';
import './App.css';
import CreateCategoryCard from './components/functions/cerateCategoryCard';


function App() {
  function ShowCategoryDetails(){
    alert('clicked')
  }
  
  //sconst [users, setUsers] = useState([]);
  /*function fetchSomething() {
    fetch('/api')
      .then(res => res.json())
      .then(data => setUsers(data));
  }*/

  return (

    <div className='App'>
      <h4>Ctegories</h4>
      {/*<button onClick={fetchSomething}>Fetch Data</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>*/}
      <div className='categoryContainer'>
      <CreateCategoryCard doClick={ShowCategoryDetails} bgColor={'#56E35B'}/>
      <CreateCategoryCard doClick={ShowCategoryDetails} bgColor={'#E356CD'}/>

      </div>
    </div>
  );
}

export default App;
