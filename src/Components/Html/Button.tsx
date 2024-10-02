type ButtonProps = {
    varient : 'primary' | 'secondary' 
}& React.ComponentProps<'button'>

export const Button = ({varient, children, ...rest}: ButtonProps) => {
    return(
        <button className={`class-with-${varient}`} {...rest}>{children}</button>
    )
}