import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NavigationCard({title, text, buttonText, link}) {
  return (
    <Card style={{ width: '18rem', margin: '1rem'}} bg="primary" text="white">
      {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button href={link} variant="light">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}

export default NavigationCard;