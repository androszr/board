import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Header } from '../Header/Header';

import styles from './MainLayout.module.scss';


//import { connect } from 'react-redux';
//import { reduxSelector, reduxActionCreator } from '../../../redux/globalRedux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Header />
        </Toolbar>
      </Container>
    </AppBar>
    <Container>
      {children}
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
  Component as MainLayout,
  //Container as MainLayout,
  Component as MainLayoutComponent,
};