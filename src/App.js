import './App.css';
import { employees } from './components/Database';
// import Carstore from './components/Carstore';
// import Cart from './components/Cart';
// import ClassStudents from './components/ClassStudents';
// import Cookbook from './components/Cookbook';
// import Cookbookvc from './components/Cookbookvc';
// import Library from './components/Library';
// import Onlinestore from './components/Onlinestore';
// import Watchlist from './components/Watchlist';
// import Geolocation from './components/Geolocation';
// import Levelzeroreact from './components/Levelzeroreact';
import EmployeeCard from './components/100Days_of_code/EmployeeCard';





function App() {
  return (
    <div className="App">
      {/* < Cart />
      < Watchlist />
      < Onlinestore />
      < Carstore />
      < Library />
      < ClassStudents />
      <Cookbook /> */}
      {/* <Cookbookvc name = "Aman as a prop"/> */}
      {/* <Geolocation /> */}
      {/* < Levelzeroreact /> */}
     <EmployeeCard employeesDetails={employees}/>
    </div>
  )
}


export default App;

