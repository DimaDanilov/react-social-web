import PostList from './PostList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        postContent: state.profilePage.postContent,
        profileData: state.profilePage.profileData
    }
}

const PostListContainer = connect(mapStateToProps)(PostList);

export default PostListContainer;