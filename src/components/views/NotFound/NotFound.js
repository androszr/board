import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {Link} from 'react-router-dom';

import styles from './NotFound.module.scss';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

//import { connect } from 'react-redux';
//import { reduxSelector, reduxActionCreator } from '../../../redux/globalRedux';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Container>
      <p>404 - Not found</p>
      <Button className={styles.link} component={Link} to={`/`}>Go back to Homepage</Button>
    </Container>
    
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

//const mapStateToProps = state => ({
//  someProp: reduxSelector(state),
// });


//const mapDispatchToProps = dispatch => ({
//  someAction: arg => dispatchEvent(reduxActionCreator(arg)),
// });

//const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as NotFound,
  //Container as NotFound,
  Component as NotFoundComponent,
};