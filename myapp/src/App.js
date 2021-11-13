// import logo from './logo.svg';
import './App.css';
// import { uuid } from "uuidv4";
import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";

// import Button from "@material-ui/core/Button"
 import {useState} from "react";
 import { useEffect } from 'react';
import api from "./api/contacts"
// import Counter from './Counter';
import Signup from "./Pages/Signup"
function App() {
  // const [color,setColor]=useState("red");
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(()=>count+1);
  //   }, 3000);
  // });
 const [user,setUser] = useState();
  const retrieve=async()=>{
    const response=await(api.get("/Users"));
    return response; 
  }
  
  
  useEffect(() => {
   const getall=async()=>{
   const all= await retrieve();
   if(all)setUser(all) 
   };
   getall();
  }, []);

  const addUserHandler=async (u)=>{
    console.log(u);
    const request={
      "id":"6",
      ...u
    }
    const response=await(api.post("/Users",request));
    console.log(response);
    setUser([...u,response.data]);

  }
  
  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [user]);

  return (
    <div className="ui container">
      <Router>
    
          {/* <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}
          /> */}
          <Route
            path="/add"
            render={(props) => (
              <Signup {...props} addContactHandler={addUserHandler} />
            )}
          />

          {/* <Route
            path="/edit"
            render={(props) => (
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          /> */}

          {/* <Route path="/contact/:id" component={ContactDetail} /> */}

      </Router>
    </div>
  );
}

export default App;