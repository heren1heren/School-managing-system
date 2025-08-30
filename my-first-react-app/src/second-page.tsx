import React from 'react';
type Fruit = string;
type ListItemProps = {
    fruit: Fruit ;
}
type ListProps = {
    fruits: Fruit[]
}

function SecondPage() {
    const fruits = ["apple","banana","cherry",'nut'];
   
    return (
        <>
        <h1>Test title</h1>
        <List fruits={fruits}/>
        </>
    )
}

function ListItem(props: ListItemProps) : React.JSX.Element {
    return <li > {props.fruit}</li>
}
function List(props: ListProps) {
    return (
        <ul>
        {props.fruits.map((fruit) => {
            return <ListItem key={fruit} fruit={fruit}/>
        })}
        </ul>
     );
}

export default SecondPage