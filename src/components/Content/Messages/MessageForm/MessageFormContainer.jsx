import MessageForm from "./MessageForm";
import { sendMessage, updateNewMessageText } from '../../../../redux/messages-reducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText
    }
}

const MessageFormContainer = connect(mapStateToProps, { sendMessage, updateNewMessageText })(MessageForm)

export default MessageFormContainer