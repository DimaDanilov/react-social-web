import PostForm from './PostForm'
import { addPost, updateNewPostText } from '../../../../../redux/profile-reducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}

const PostFormContainer = connect(mapStateToProps, { addPost, updateNewPostText })(PostForm);

export default PostFormContainer;