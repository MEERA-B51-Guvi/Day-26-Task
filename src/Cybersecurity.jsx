import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom'

function Cybersecurity() {
  return (
    <div className="container row row-cols-1 row-cols-md-3 g-4" style={{marginLeft:'9%'}}>

    <div className="col">
     <div className="card h-100">
<Card style={{ width: '20rem' }}>
<Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp" />
<Card.Body>
 <Card.Title>Non-Coding Jobs in Cybersecurity: A Comprehensive Guide</Card.Title>
 <Card.Text>
 In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills
  
 </Card.Text>
 <span className="read-more">
<strong  style={{color:'green'}}>READ MORE»</strong>
 </span>
</Card.Body>
<div className="card-footer">
<Card.Body>
<small className="text-body-secondary">4 December 2023  ă€ċ No Comments</small>
</Card.Body>
</div>  </Card>  </div>  </div>

<div className="col">
     <div className="card h-100">
<Card style={{ width: '20rem' }}>
<Card.Img variant="top" src=" https://www.guvi.in/blog/wp-content/uploads/2020/11/cyber-security-e1614342903477.png"/>

<Card.Body>
 <Card.Title>What Is Hacking? Importance and its uses & the growing challenges in 2023!</Card.Title>
 <Card.Text>
 Look around today, you will witness that we are more reliant on technology and devices
 </Card.Text>
 <span className="read-more">
<strong  style={{color:'green'}}>READ MORE»</strong>
 </span>
</Card.Body>
<div className="card-footer">
<Card.Body>
<small className="text-body-secondary">25 September 2023  ă€ċ No Comments</small>
</Card.Body>
</div> 
</Card>
</div>
</div>

<div className="col">
     <div className="card h-100">
<Card style={{ width: '20rem' }}><Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp"/>

<Card.Body>
 <Card.Title>
 How Is Cyber Security Important To Our Lives?</Card.Title>
 <Card.Text>
 Cybersecurity is an exact solution that is sought either by a billionaire 
 </Card.Text>
 <span className="read-more">
<strong  style={{color:'green'}}>READ MORE»</strong>
 </span>
</Card.Body>   
<div className="card-footer">
<Card.Body>
<small className="text-body-secondary">10 November 2020  ă€ċ No Comments</small>
</Card.Body>
</div> 
</Card>
</div>
</div>
</div>
  )
}

export default Cybersecurity