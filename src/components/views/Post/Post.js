import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {NavLink} from 'react-router-dom';

import styles from './Post.module.scss';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


import { connect } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux.js';

class Component extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    post: PropTypes.object,
  }
  render() {
    const {className, post} = this.props;
    return (
      <Container className={clsx(className, styles.root)}>
        <h2>Post</h2>
        <Card
          variant="outlined"
          key={post.id}
          className={styles.card}
        >
          <CardMedia
            className={styles.photo}
            image={post.photo}
          />
          <CardContent>
            <p>Title: {post.title}</p>
            <p>Content: {post.content}</p>
            <p>Created: {post.publicationDate}</p>
            <p>Last Modified: {post.lastUpdate}</p>
            <p>Email: {post.email}</p>
            <p>Phone: {post.phone}</p>
            <p>Location: {post.location}</p>
            <p>Price: {post.price}</p>
            <p>Status: {post.status}</p>
          </CardContent>
          
          <CardActions>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              className={styles.button}
              component={NavLink}
              exact to={`/post/${post.id}/edit`}
            >
              Edit card
            </Button>
          </CardActions>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => ({
  post: getPostById(state, props.match.params.id),
});


//const mapDispatchToProps = dispatch => ({
//  someAction: arg => dispatchEvent(reduxActionCreator(arg)),
// });

const PostContainer = connect(mapStateToProps)(Component);

export {
  //Component as Post,
  PostContainer as Post,
  Component as PostComponent,
};