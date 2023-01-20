import Card from 'react-bootstrap/Card';
import styles from './price.module.css';
import ListItem from 'react-bootstrap';

export default function PriceCards(props) {
    const items = [props.items];
  return (
    <div className={ styles.price }>
      <Card className={ styles.card }>
        <Card.Img variant="top" src={props.topimage} alt={props.header}/>
          <Card.Body>


            <Card.Header className={ styles.cardHeader }>
                <h2 style={{ fontSize: "25px" }}>{props.header}</h2>
            </Card.Header>

            <Card.Text>
                {props.description}
                <br/><br/>
                This package includes:
                <ul>
                    <li>{props.item1}</li>
                    <li>{props.item2}</li>
                    <li>Private Online Gallery</li>
                    <li>Print Release</li>
                </ul>
            </Card.Text>


            <Card.Footer className={ styles.cardFooter }>
              <h3>{props.price}</h3>
            </Card.Footer>


          </Card.Body>
      </Card>
    </div>
  )
}