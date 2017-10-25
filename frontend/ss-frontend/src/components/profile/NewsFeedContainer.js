import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as NewsfeedActions from '../../actions/newsfeed'
import { Grid } from 'semantic-ui-react'

class NewsFeedContainer extends React.Component {

  //returns list of newsfeed
  //shows like button for each
  //shows share button for each
  //

  componentDidMount() {
    this.props.loadNewsfeed()
  }

  render() {
    if (this.props.posts) {
      const mappedPosts = this.props.posts.map((post) => {
        return (post)
      })
      return(
        <div>
          <h2 align="center">NewsFeed</h2>
          <Grid>
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
