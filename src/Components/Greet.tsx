type GreetProps ={
    name : string
    messageCount : number
    isLoggedIn : boolean
}
export const Greet = (props : GreetProps) => {
  return (
    <div>
      <h2>
        {
            props.isLoggedIn
            ?`I am ${props.name} . Message Count ${props.messageCount}`
            :'Welcome Guest'
        }
        </h2>
    </div>
  )
}
