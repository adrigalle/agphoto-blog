import Card from 'react-bootstrap/Card';
import styles from './testimonials.module.css';

export default function TestimonialCards(props) {
    return (
      <div className={ styles.testimonial }>
        <Card className={ styles.card }>
          <Card.Img variant="top" src={props.topimage} alt={props.name}/>
            <Card.Body>
              <Card.Text style={{ fontSize: '.75rem' }}>{props.review}</Card.Text>
              <Card.Footer className={ styles.cardFooter }>
                <small className="text-muted">
                    - {props.name}
                </small>
              </Card.Footer>
            </Card.Body>
        </Card>
      </div>
    )
  }