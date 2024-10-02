type HorizonatlPosition = 'left' |'center'| 'right'
type VerticalPosition = 'top'|'center'|'bottom'

type ToastProps ={
    position : | Exclude <`${HorizonatlPosition}-${VerticalPosition}`,'center-center'>|'center'
}

export const Toast = ({position}:ToastProps) => {
    return <div>Toast Notification Position - {position}</div>
}