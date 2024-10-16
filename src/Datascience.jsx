import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom'

function Datascience() {
  return (
    <div className="container row row-cols-1 row-cols-md-3 g-4" style={{marginLeft:'9%'}}>

    <div className="col">
     <div className="card h-100">
<Card style={{ width: '20rem' }}>
<Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp" />
<Card.Body>
 <Card.Title>Top 10 High Paying Non-Coding Jobs in Data Science in 2024</Card.Title>
 <Card.Text>
 Top 10 High Paying Non-Coding Jobs in Data Science in 2024, what are the most important things you look for?
  
 </Card.Text>
 <span className="read-more">
<strong  style={{color:'green'}}>READ MORE»</strong>
 </span>
</Card.Body>
<div className="card-footer">
<Card.Body>
<small className="text-body-secondary">28 November 2023 • No Comments</small>
</Card.Body>
</div>  </Card>  </div>  </div>

<div className="col">
     <div className="card h-100">
<Card style={{ width: '20rem' }}>
<Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp" />
<Card.Body>
 <Card.Title>Top Product-Based Companies for Data Science Freshers in [2024]</Card.Title>
 <Card.Text>
 In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing</Card.Text>
 <span className="read-more">
<strong  style={{color:'green'}}>READ MORE»</strong>
 </span>
</Card.Body>
<div className="card-footer">
<Card.Body>
<small className="text-body-secondary">10 November 2023 • No Comments</small>
</Card.Body>
</div> 
</Card>
</div>
</div>

<div className="col">
     <div className="card h-100">
<Card style={{ width: '20rem' }}>
<Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp"/>
<Card.Body>
 <Card.Title>What is the Difference between Data Science and Data Engineering?</Card.Title>
 <Card.Text>
 India has been making some serious waves in the world of data. Owing to these dynamics, the demand
 </Card.Text>
 <span className="read-more">
<strong  style={{color:'green'}}>READ MORE»</strong>
 </span>
</Card.Body>   
<div className="card-footer">
<Card.Body>
<small className="text-body-secondary">8 November 2023  • No Comments</small>
</Card.Body>
</div> 
</Card>
</div>
</div>
</div>
  )
}

export default Datascience