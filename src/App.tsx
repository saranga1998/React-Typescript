
import './App.css'
//import { Counter } from './Components/Reduser/Counter'
//import { User } from './Components/State/User'
//import { Container } from './Components/Extra/Container'
// import { Button } from './Components/Event/Button'
// import { Input } from './Components/Event/Input'
// import { Heading } from './Components/Advanced/Heading'
// import { Oscar } from './Components/Advanced/Oscar'
// import { Status } from './Components/Advanced/Status'
// import { Greet } from './Components/Greet'
// import { Person } from './Components/Person'
// import { PersonList } from './Components/PersonList'

//import { ThemeContextProvider } from './Components/Context/ThemeContext'
//import { Box } from './Components/Context/Box'

import { UserContextProvider } from './Components/Context/UserContext'
import { User } from './Components/State/User'

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

      {/* <Button clickHandeler={(event,id)=> {console.log('Button Click',event,id)}}/>
      <Input value='' handleChange={(event)=> console.log(event) }/> */}

      {/* <Container styles={{border : '1px solid black', padding : '1rem', background: 'green'}}/> */}

      {/* <User/> */}

      {/* <Counter/> */}

      {/* <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider> */}

      <UserContextProvider>
        <User/>
      </UserContextProvider>
    </>
  )
}

export default App
