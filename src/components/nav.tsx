import { useState } from 'react';
import {Link} from 'react-router-dom'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
} from 'reactstrap'
function Index(){
  const [isOpen, setIsOpen] = useState(false)
  const toggle: any = () => setIsOpen(!isOpen)
  return(
    <Navbar color="primary" light expand="md" className="fixed-top">
      <Container fluid="lg">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Link className="text-white" to="/">Home</Link>
          <Link className="text-white" to="/about">About</Link>
        </Collapse>
      </Container>
    </Navbar>
  )
}
export default Index
