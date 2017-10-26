import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as NewsfeedActions from '../../actions/newsfeed'
import { Grid, Image } from 'semantic-ui-react'

class NewsFeedContainer extends React.Component {

  componentDidMount() {
    this.props.loadNewsfeed()
  }

  render() {
    if (this.props.posts) {
      const mappedPosts = this.props.posts.map((post) => {
        if (post[0].company) {
          return (
              <Grid.Column>
                <p>Name:  {post[0].name}</p>
                <Image src={post[0].url} size='medium'/>
                <p>Company:  {post[0].company}</p>
                <p>Likes:  {post[1]}</p>
              </Grid.Column>
          )} else {
            return (
                <Grid.Column>
                  <p>Topic:  {post[0].topic}</p>
                  <Image src={post[0].url} size='medium'/>
                  <p>Text:  {post[0].text}</p>
                  <p>Likes:  {post[1]}</p>
                </Grid.Column>
            )
          }
        }
      )
      return(
        <div>
          <h2 align="center">NewsFeed</h2>
          <Grid relaxed columns={this.props.posts.length}>
            {mappedPosts}
          </Grid>
        </div>
      )
    } else {
      return (
        <div>
          <h2 align="center">NewsFeed</h2>
          <Grid>
          </Grid>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    posts: state.newsfeed.list,
    user: state.user.userInfo.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NewsfeedActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedContainer)
