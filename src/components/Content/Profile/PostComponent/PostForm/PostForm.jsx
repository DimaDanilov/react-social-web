import style from './PostForm.module.css'

function PostForm(props) {
    // Функция вызываемая ивентом клика добавления поста
    let onAddPost = () => {
        props.addPost();
    }

    // Функция вызываемая ивентом изменения формы добавления поста
    let onPostChange = (e) => {
        let areaText = e.target.value;
        props.updateNewPostText(areaText);
    }

    return (
        <div>
            <form className={style.form} action="#" >
                <textarea className={style.textarea} onChange={onPostChange} name="postContent" value={props.newPostText} placeholder="Введите содержимое поста..." rows="10" cols="70" minLength="5" maxLength="511" />
                <input className={style.button} onClick={onAddPost} type="button" value="Добавить"></input>
            </form>
        </div>
    )
}

export default PostForm;