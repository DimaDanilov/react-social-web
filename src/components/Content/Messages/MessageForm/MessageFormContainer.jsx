import MessageForm from "./MessageForm";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../../../redux/messages-reducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => { dispatch(sendMessageActionCreator()); },
        updateNewMessageText: (messageText) => { dispatch(updateNewMessageTextActionCreator(messageText)); }
    }
}

const MessageFormContainer = connect(mapStateToProps, mapDispatchToProps)(MessageForm)

export default MessageFormContainer