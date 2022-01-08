import React from 'react'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
const Profile = (props) => {
    console.log(props)
    return (
        <div>
            {props.children}
            <Card >
  <Card.Body>
    <Card.Title>{props.data.fullName}</Card.Title>
    <Card.Text>
      <strong>Bio </strong> {props.data.bio}
      <br/>
      <strong>Profession </strong> {props.data.profession}
    </Card.Text>
    <Button variant="primary" onClick={() => props.handleName(props.data.fullName)}>info</Button>
  </Card.Body>
</Card>
        </div>
    )
}
Profile.defaultProps = {
    fullName : "",
    bio: '',
    profession : ''
  };

Profile.propTypes={
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession : PropTypes.string,
    handleName : PropTypes.bool

}
export default Profile
