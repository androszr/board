import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './NotFound.module.scss';


//import { connect } from 'react-redux';
//import { reduxSelector, reduxActionCreator } from '../../../redux/globalRedux';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <h2>NotFound</h2>
    {children}
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
  //Component as NotFound,
  //Container as NotFound,
  Component as NotFoundComponent,
};