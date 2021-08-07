import style from './PostForm.module.css'
import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../../redux/profile-reducer'


function PostForm(props) {

    let newPostArea = React.createRef();

    let addPost = () => {
        let action = addPostActionCreator()
        props.dispatch(action);
    }

    let postChange = () => {
        let areaText = newPostArea.current.value;
        let action = updateNewPostTextActionCreator(areaText)
        props.dispatch(action);
    }

    return (
        <div>
            <form class={style.form} action="#" >
                <textarea class={style.textarea} ref={newPostArea} onChange={postChange} name="postContent" value={props.newPostText} placeholder="Введите содержимое поста..." rows="10" cols="70" minlength="5" maxlength="511" />
                <input class={style.button} onClick={addPost} type="button" value="Добавить"></input>
            </form>
        </div>
    )
}

export default PostForm;