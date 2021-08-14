import Messages from './Messages'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        users: state.messagesPage.users,
        dialogs: state.messagesPage.dialogs
    }
}

const MessagesContainer = connect(mapStateToProps)(Messages)

export default MessagesContainer