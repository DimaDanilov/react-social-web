import style from './PostForm.module.css'
import React from 'react'

function PostForm(props) {

    let NewPostArea = React.createRef();

    let AddPost = () => {
        props.AddPost();
    }

    let PostChange = () => {
        let area_text = NewPostArea.current.value;
        props.updateNewPostText(area_text);
    }

    return (
        <div>
            <form class={style.form} action="#" >
                <textarea class={style.textarea} ref={NewPostArea} onChange={PostChange} name="post_content" value={props.NewPostText} placeholder="Введите содержимое поста..." rows="10" cols="70" minlength="5" maxlength="511" />
                <input class={style.button} onClick={AddPost} type="button" value="Добавить"></input>
            </form>
        </div>
    )
}

export default PostForm;