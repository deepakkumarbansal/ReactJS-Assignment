export const List = ({items})=>{
    return(
        <ul style = {{listStyle:'none'}}>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
            <li>{items[2]}</li>
        </ul>
    )
}
