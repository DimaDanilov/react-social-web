import Messages from './Messages'
import StoreContext from '../../../StoreContext'

const MessagesContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                return <Messages store={store} />
            }
        }
    </StoreContext.Consumer>

}

export default MessagesContainer