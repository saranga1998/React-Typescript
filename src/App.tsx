
import './App.css'
import { Greet } from './Components/Greet'
import { Person } from './Components/Person'
import { PersonList } from './Components/PersonList'

function App() {
  
  const personName ={
    fname :'Sajitha',
    lname :'Saranga',
  }

  const personList = [
    {
      fname : 'Anura',
      lname : 'Kumara',
    },
    {
      fname : 'Namal',
      lname : 'Rajapaksha',
    }
  ]

  return (
    <>
      <Greet name= 'Sajitha' messageCount={20} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={personList}/>
    </>
  )
}

export default App
