import React from 'react'
import './item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item(props) {
    return (
        <div className='item'>
            <Card style={{ width: '18rem', height: '35rem', position: 'relative' }}>
                <Link to={`/product/${props.id}`}>
                    <Card.Img variant="top" src={props.image} />
                </Link>
                <Card.Body style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        <div className="item-prices">
                            <div className="item-price-new">
                                {props.new_price}
                            </div>
                            <div className="item-price-old">
                                {props.old_price}
                            </div>
                        </div>
                    </Card.Text>
                    <Button variant="primary" style={{ width: '100%' }}>
                        Go somewhere
                    </Button>
                </Card.Body>
            </Card>


        </div>
    )
}

export default Item
