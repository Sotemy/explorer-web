import { Card, Button } from "react-bootstrap";

export default function Items(props){

    function Item(props){
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>{props.data.title}</Card.Title>
                <Card.Text>
                    {props.data.text}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }


    return(
        <ul>
            {props.items.map(item => {return <Item data={item} />})}
        </ul>
    )
}