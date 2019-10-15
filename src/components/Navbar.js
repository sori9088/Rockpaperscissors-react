import React from 'react';
import { Navbar, Nav, Form, FormControl, InputGroup} from 'react-bootstrap';


class Navigation extends React.Component {
  render() {
    return (
  <Nav className="justify-content-end">
  <Navbar bg="transparent" variant="dark" className="mr-auto navbar-right">
  <Navbar.Brand href="#">Rock Scissiors Paper</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Form inline>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  </Form>
  </Navbar.Collapse>
</Navbar>
</Nav>
    )
  }
}

export default Navigation;