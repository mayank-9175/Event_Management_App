import './App.css';
import {useState} from 'react'
import Header from './components/Header';
import {Route,Routes} from "react-router-dom"
import DashBoard from './components/DashBoard';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import EventForm from './components/EventForm';
import Footer from './components/Footer';
import {eventList} from "./api/api"
import 'bootstrap/dist/css/bootstrap.min.css';
import EditForm from './components/EditForm';
function App() {
  const[item,setItem] = useState(eventList)
  return (
    <>
      <Header/>
      <Routes>
      <Route path="/" element={<DashBoard item={item} setItem={setItem}/>}/>
      <Route path="/event_list" element={<EventList item={item} setItem={setItem}/>}/>
      <Route path="/event_details" element={<EventDetails/>}/>
      <Route path="/event_form" element={<EventForm item={item} setItem={setItem}/>}/>
      <Route path="/edit_form" element={<EditForm/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
