import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function All() {
  return (
    <div className="container row row-cols-1 row-cols-md-3 g-4" style={{marginLeft:'9%'}} >
         <div className="col">
          <div className="card h-100">
    <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Virtual-Reality-vs-Augmented-Reality-Important-Things-To-Know.webp" />
    <Card.Body>
      <Card.Title>Virtual Reality vs Augmented Reality: Important Things To Know [2024]</Card.Title>
      <Card.Text>
      As you know, the world is moving towards innovation and technology. The next step in
       
      </Card.Text>
      <span className="read-more">
     <strong  style={{color:'green'}}>READ MORE»</strong>
      </span>
    </Card.Body>
    <div className="card-footer">
    <Card.Body>
    <small className="text-body-secondary">12 January 2024 • No Comments</small>
    </Card.Body>
    </div>  </Card>  </div>  </div>

  <div className="col">
          <div className="card h-100">
    <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Benefits-of-AI-Powered-Learning-Environments.webp" />
    <Card.Body>
      <Card.Title>7 Benefits of AI-Powered Learning Environments The Basic Guide 2024</Card.Title>
      <Card.Text>
      AI, which stands for Artificial Intelligence, is like having a smart assistant in the classroom.
      </Card.Text>
      <span className="read-more">
     <strong  style={{color:'green'}}>READ MORE»</strong>
      </span>
    </Card.Body>
    <div className="card-footer">
    <Card.Body>
    <small className="text-body-secondary">11 January 2024 • No Comments</small>
    </Card.Body>
    </div> 
  </Card>
  </div>
  </div>

  <div className="col">
          <div className="card h-100">
    <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Data-Analytics-Skills-A-Comprehensive-Guide-to-Thrive-in-the-Industry.webp"/>
    <Card.Body>
      <Card.Title>Top 8 Data Analytics Skills: A Comprehensive Guide to Thrive in the Industry</Card.Title>
      <Card.Text>
      Data analysts and data scientists are in high demand in today’s digital landscape. The field
      </Card.Text>
      <span className="read-more">
     <strong  style={{color:'green'}}>READ MORE»</strong>
      </span>
    </Card.Body>   
    <div className="card-footer">
    <Card.Body>
    <small className="text-body-secondary">11 January 2024 • No Comments</small>
    </Card.Body>
    </div> 
  </Card>
  </div>
  </div>
   </div>

  )
}

export default All