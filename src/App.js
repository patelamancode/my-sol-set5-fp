import './App.css';
// import PracticeSet2 from './components/100Days_of_code/Day4/PracticeSet2';
// import Practiceset3 from './components/100Days_of_code/Day5/Practiceset3';
// import Filterpractice from './components/100Days_of_code/Day6/Filterpractice';
// import JobPosting from './components/100Days_of_code/Day6/JobPosting';
// import EventList from './components/100Days_of_code/Day7/EventList';
// import Character from './components/100Days_of_code/Day8/Character';
import { employees , cars , events , characters , itemList , todoItemsData , books} from './components/Database';
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
// import EmployeeCard from './components/100Days_of_code/Day1/EmployeeCard';
// import ZoomCounter from './components/100Days_of_code/Day2/ZoomCounter';
// import DisableButton from './components/100Days_of_code/Day2/DisableButton';
// import ProductCard from './components/100Days_of_code/Day3/ProductCard';
// import Grocery from './components/100Days_of_code/Day9/Grocery';
// import Todo from './components/100Days_of_code/Day9/Todo';
// import Question5 from './components/100Days_of_code/Day9/Question5';
import Library from './components/100Days_of_code/Day9/Library';





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
     {/* <EmployeeCard employeesDetails={employees}/> */}
     {/* <ZoomCounter /> */}
     {/* <DisableButton /> */}
     {/* <ProductCard /> */}
     {/* <PracticeSet2 /> */}
     {/* <Practiceset3 /> */}
     {/* <Filterpractice dataItem={cars}/> */}
     {/* <JobPosting /> */}
     {/* <EventList listItem={events}/> */}
     {/* <Character characterData={characters}/> */}
     {/* <Grocery itemList={itemList}/> */}
     {/* <Todo todoItems={todoItemsData}/>
     <Question5 todoItems={todoItemsData}/> */}
     <Library bookData={books}/>
    </div>
  )
}


export default App;

