import PostList from './PostList'
import StoreContext from '../../../../../StoreContext'

function PostListContainer(props) {
    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();
                return <PostList state={state} />
            }
        }
    </StoreContext.Consumer>
}

export default PostListContainer;