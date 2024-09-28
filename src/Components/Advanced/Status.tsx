type StatusProps ={
    status : 'loading' | 'success' | 'error'
}


export const Status = (props :StatusProps) =>{
    let message

    if(props.status === 'loading'){
        message = 'loading..'
    }
    else if(props.status === 'success'){
        message = 'Data Fetch Successfully'
    }
    else if(props.status === 'error'){
        message = '404 not found'
    }
    return(
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
    }