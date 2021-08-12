import style from './PostForm.module.css'

function PostForm(props) {
    // Функция вызываемая ивентом клика добавления поста
    let onAddPost = () => {
        props.addPost();
    }

    // Функция вызываемая ивентом изменения формы добавления поста
    let onPostChange = (e) => {
        let areaText = e.target.value;
        props.postChange(areaText);
    }

    return (
        <div>
            <form class={style.form} action="#" >
                <textarea class={style.textarea} onChange={onPostChange} name="postContent" value={props.newPostText} placeholder="Введите содержимое поста..." rows="10" cols="70" minlength="5" maxlength="511" />
                <input class={style.button} onClick={onAddPost} type="button" value="Добавить"></input>
            </form>
        </div>
    )
}

export default PostForm;