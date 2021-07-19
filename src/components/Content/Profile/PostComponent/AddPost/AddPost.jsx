import style from './AddPost.module.css'

function AddPost() {
    return (
        <div>
            <h2>Моя стена</h2>
            <h3>Добавить пост</h3>
            <form class={style.form} action="#">
                <textarea class={style.textarea} name="post_content" placeholder="Введите содержимое поста..." rows="10" cols="70" minlength="5" maxlength="511"></textarea>
                <input class={style.button} type="submit" value="Добавить"></input>
            </form>
        </div>
    )
}

export default AddPost;