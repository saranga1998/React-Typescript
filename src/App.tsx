import './App.css'
import { List } from './Components/Types/List';


//import Counter from './Components/Class/Counter'
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

// import { UserContextProvider } from './Components/Context/UserContext'
// import { DomRef } from './Components/Ref/DomRef'
// import { MutableRef } from './Components/Ref/MutableRef'
// import { User } from './Components/State/User'

// import { Private } from './Components/Auth/Private'
// import { Profile } from './Components/Auth/Profile'

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

  const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
    ];

    const handleClick = (item: { id: number; name: string }) => {
        alert(`You clicked on ${item.name}`);
    };

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

      {/* <UserContextProvider>
        <User/>
      </UserContextProvider>

      <DomRef/>

      <MutableRef/> */}

      {/* <Counter message='Count is' /> */}

      {/* <Private isLoggedIn={true} component={Profile}/> */}

      <List items={items} onClick={handleClick}/>
    </>
  )
}

export default App
