type PersonListProps = {
    names:{
        fname: string
        lname: string
    }[]


}

export const PersonList = (props :PersonListProps) =>{
    return(
        <div>
            {props.names.map((name)=>
            {
                return(
                    <h2 key={name.fname}>{name.fname} {name.lname}</h2>
                )
            }
            )}
        </div>
    )
    }