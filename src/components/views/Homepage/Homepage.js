import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Homepage.module.scss';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import {NavLink} from 'react-router-dom';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';

class Component extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    posts: PropTypes.array,
  }

  render() {
    const {className, posts} = this.props;

    return(
      <Container className={clsx(className, styles.root)}>
        <h2>Homepage</h2>
        <div className={styles.cardGrid}>
          {posts.map(post => (
            <Card
              variant="outlined"
              key={post.id}
              className={styles.card}
            >
              <CardContent>{post.title}</CardContent>
              <CardContent>{post.content}</CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={styles.button}
                  component={NavLink}
                  exact to={`/post/${post.id}`}
                >
                More...
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
        
      </Container>
    );
    
  }
}





const mapStateToProps = state => ({
  posts: getAll(state),
});


//const mapDispatchToProps = dispatch => ({
//  someAction: arg => dispatchEvent(reduxActionCreator(arg)),
// });

const HomepageContainer = connect(mapStateToProps)(Component);

export {
  //Component as Homepage,
  HomepageContainer as Homepage,
  Component as HomepageComponent,
};