import PostForm from './PostForm'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../../redux/profile-reducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => { dispatch(addPostActionCreator()); },
        postChange: (areaText) => { dispatch(updateNewPostTextActionCreator(areaText)); }
    }
}

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm);

export default PostFormContainer;