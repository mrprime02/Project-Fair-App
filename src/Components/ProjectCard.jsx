import React,{useState} from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap';

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card style={{ width: '28rem' }} className=' shadow btn mb-3' onClick={handleShow}>
      <Card.Img variant="top" src="https://marketplace.canva.com/EAE6WTyrSQ0/2/0/1600w/canva-light-beige-sleek-and-simple-blogger-personal-website--7Q4-7tyJj4.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img className='img-fluid' style={{height:'250px'}} src="https://marketplace.canva.com/EAE6WTyrSQ0/2/0/1600w/canva-light-beige-sleek-and-simple-blogger-personal-website--7Q4-7tyJj4.jpg" alt="" />
            </Col>
            <Col md={6}>
              <h2 className='fw-bolder text-dark'>Project Title</h2>
              <p>Project Overview: <span className='fw-bolder' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugiat, recusandae reiciendis vitae dolorem doloremque minima eos adipisci repellendus maiores expedita at, et consequuntur delectus, libero esse tempore ut rerum?</span></p>
              <p>Langauge Used: <span className='fw-bolder text-danger'> HTML,JS,CSS</span></p>
            </Col>
          </Row>
          <div className="mt-3">
            <a href="counter-app-react-redux-three.vercel.app" target='_blank' className='btn me-3'><i style={{height:'40px'}} className="fa-brands fa-github fa-2x"></i> </a>
            <a href="https://vercel.com/akshays-projects-95035061/counter-app-react-redux" target='_blank' className='btn me-3'><i style={{height:'40px'}} className="fa-solid fa-link fa-2x"></i> </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard