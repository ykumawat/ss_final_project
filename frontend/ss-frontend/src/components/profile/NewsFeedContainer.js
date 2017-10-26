import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as NewsfeedActions from '../../actions/newsfeed'
import * as UserActions from '../../actions/user'
import * as SlideActions from '../../actions/slides'
import * as ContactActions from '../../actions/contacts'
import UsersContainer from './UsersContainer'
import { Grid, Image, Button, Icon } from 'semantic-ui-react'

class NewsFeedContainer extends React.Component {

  componentDidMount() {
    this.props.actions.NewsfeedActions.loadNewsfeed()
    this.props.actions.UserActions.loadUsers()
  }

  handleLike = (event) => {
    if (event.target.id === "contact") {
      this.props.actions.ContactActions.addContactLikeToUser(event.target.value)
    } else {
      this.props.actions.SlideActions.addSlideLikeToUser(event.target.value)
    }
  }

  render() {
    if (this.props.posts && this.props.users) {
      const mappedPosts = this.props.posts.map((post) => {
        if (post[0].company) {
          return (
              <Grid.Column>
                <p>Name:  {post[0].name}</p>
                <Image src={post[0].url} size='medium'/>
                <p>Company:  {post[0].company}</p>
                <p>{post[1]}</p><Button icon color='red' id="contact" value={post[0].id} onClick={this.handleLike.bind(this)}>Add</Button>
              </Grid.Column>
          )} else {
            return (
                <Grid.Column>
                  <p>Topic:  {post[0].topic}</p>
                  <Image src={post[0].url} size='medium'/>
                  <p>Text:  {post[0].text}</p>
                  <p>{post[1]}</p><Button icon color='red' id="slide" value={post[0].id} onClick={this.handleLike.bind(this)}>Add</Button>
                </Grid.Column>
            )
          }
        }
      )

      const mappedUsers = this.props.users.map((user) => {
        if (user === this.props.user) {
          null
        } else {
          return <UsersContainer user={user}/>
        }
      })
      return(
        <div>
          <h2 align="center">NewsFeed</h2>
          <Grid relaxed columns={this.props.posts.length}>
            {mappedPosts}
          </Grid>
          <Grid relaxed columns={this.props.users.length}>
            {mappedUsers}
          </Grid>
        </div>
      )
    } else {
      return (
        <div>
          <h2 align="center">NewsFeed</h2>
          <Grid>
            No one has shared anything yet! Be the first to make a post.
          </Grid>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    posts: state.newsfeed.list,
    user: state.user.userInfo.user,
    users: state.user.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      NewsfeedActions: bindActionCreators(NewsfeedActions, dispatch),
      UserActions: bindActionCreators(UserActions, dispatch),
      SlideActions: bindActionCreators(SlideActions, dispatch),
      ContactActions: bindActionCreators(ContactActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedContainer)
