import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom'

function Career() {
  return (
    <div className="container row row-cols-1 row-cols-md-3 g-4" style={{marginLeft:'9%'}}>
    <div className="col">
     <div className="card h-100">
<Card style={{ width: '20rem' }}>
<Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp" />
<Card.Body>
 <Card.Title>Automation Test Engineer Resume: 10 Important Things To Consider</Card.Title>
 <Card.Text>
 The world is moving towards automating the testing of products in order to increase work
  
 </Card.Text>
 <span className="read-more">
<strong  style={{color:'green'}}>READ MORE»</strong>
 </span>
</Card.Body>
<div className="card-footer">
<Card.Body>
<small className="text-body-secondary">1 December 2023  • No Comments</small>
</Card.Body>
</div>  </Card>  </div>  </div>

<div className="col">
     <div className="card h-100">
<Card style={{ width: '20rem' }}>
<Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp" />
<Card.Body>
 <Card.Title>Top 5 IT Jobs for Economics Students And A Guide To Attract Employers in 2024</Card.Title>
 <Card.Text>
 In today’s digital age, the intersection of economics and technology offers exciting career opportunities for
 </Card.Text>
 <span className="read-more">
<strong  style={{color:'green'}}>READ MORE»</strong>
 </span>
</Card.Body>
<div className="card-footer">
<Card.Body>
<small className="text-body-secondary">4 December 2023  • No Comments</small>
</Card.Body>
</div> 
</Card>
</div>
</div>

<div className="col">
     <div className="card h-100">
<Card style={{ width: '20rem' }}>
<Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp"/>
<Card.Body>
 <Card.Title>Top IT Jobs for Commerce Students: A Lucrative Career Path</Card.Title>
 <Card.Text>
 With the rapid advancement of technology, the demand for IT professionals has soared in recent
 </Card.Text>
 <span className="read-more">
<strong  style={{color:'green'}}>READ MORE»</strong>
 </span>
</Card.Body>   
<div className="card-footer">
<Card.Body>
<small className="text-body-secondary">2 December 2023 • No Comments</small>
</Card.Body>
</div> 
</Card>
</div>
</div>
</div>
  )
}

export default Career