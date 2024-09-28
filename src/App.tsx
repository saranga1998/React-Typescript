
import './App.css'
import { Button } from './Components/Event/Button'
import { Input } from './Components/Event/Input'
// import { Heading } from './Components/Advanced/Heading'
// import { Oscar } from './Components/Advanced/Oscar'
// import { Status } from './Components/Advanced/Status'
// import { Greet } from './Components/Greet'
// import { Person } from './Components/Person'
// import { PersonList } from './Components/PersonList'

function App() {
  
  // const personName ={
  //   fname :'Sajitha',
  //   lname :'Saranga',
  // }

  // const personList = [
  //   {
  //     fname : 'Anura',
  //     lname : 'Kumara',
  //   },
  //   {
  //     fname : 'Namal',
  //     lname : 'Rajapaksha',
  //   }
  // ]

  return (
    <>
      {/* <Greet name= 'Sajitha' messageCount={20} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={personList}/> */}
      {/* <Status status='success'/>
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar Goes to Oliver</Heading>
        <Greet name= 'Sajitha' isLoggedIn={true}/>
      </Oscar> */}

      <Button clickHandeler={(event,id)=> {console.log('Button Click',event,id)}}/>
      <Input value='' handleChange={(event)=> console.log(event) }/>
    </>
  )
}

export default App
