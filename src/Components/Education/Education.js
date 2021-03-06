
import React from 'react';
import PropTypes from 'prop-types';
import { Container, IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import './styles.css';

class Education extends React.Component {
    render() {
      return <Container>
        <h4 style = {{paddingBottom: 30, fontStyle: 'italic', letterSpacing: 3, color: '#A187E8'}}>“A strong woman is a woman determined to do something others are determined not be done.” ~ Marge Piercy</h4>
          <h1 style = {{letterSpacing: 10 }}> ❦ EDUCATION </h1>
          <h3>Where did you go to school? Are there any noteworthy awards that you have earned?</h3>
          {this.props.schools}
          <IconButton
            onClick={this.props.addSchool}
          >
            <AddCircleIcon />
          </IconButton>
    </Container>
    }
}

  Education.propTypes = {
    handleChange: PropTypes.func.isRequired,
    addSchool: PropTypes.func.isRequired,
  };

export default Education;
