type ButtonProps ={
    clickHandeler : (event : React.MouseEvent<HTMLButtonElement>, id : number) => void
}

export const Button = (props :ButtonProps) =>{
    return(
        <div>
            <button onClick={(event)=>props.clickHandeler(event,1)}>Click</button>
        </div>
    )
    }