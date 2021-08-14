import PostList from './PostList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        postContent: state.profilePage.postContent
    }
}

const PostListContainer = connect(mapStateToProps)(PostList);

export default PostListContainer;