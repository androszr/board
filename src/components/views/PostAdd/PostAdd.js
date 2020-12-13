import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './PostAdd.module.scss';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';


//import { connect } from 'react-redux';
//import { reduxSelector, reduxActionCreator } from '../../../redux/globalRedux';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Container>
      <h2>Add new Post</h2>
      <form className={clsx(className, styles.form)}>
        <TextField
          id="title"
          label="Title"
          variant="outlined"
          InputProps={{
            minLength: 10,
          }}
          required
          fullWidth
          className={styles.inputFullWidth}
        />
        <TextField
          id="content"
          label="Content"
          multiline
          variant="outlined"
          InputProps={{
            minLength: 20,
          }}
          required
          fullWidth
          className={styles.inputFullWidth}
        />
        <TextField
          id="photo"
          variant="outlined"
          type="file"
          fullWidth
          className={styles.inputFullWidth}
        />
        <TextField
          id="price"
          label="Price"
          variant="outlined"
          type="number"
          inputProps={{
            min: 0,
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          className={styles.inputPartialWidth}
        />
        <TextField
          id="phone"
          label="Phone number"
          variant="outlined"
          type="tel"
          className={styles.inputPartialWidth}
        />
        <TextField
          id="location"
          label="Location"
          variant="outlined"
          className={styles.inputPartialWidth}
        />
        <Button
          variant="outlined"
          color="primary"
          size="large"
          className={styles.button}
        >
          Submit
        </Button>
      </form>
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
  Component as PostAdd,
  //Container as PostAdd,
  Component as PostAddComponent,
};