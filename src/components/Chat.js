import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './ChatFeed'
import LoginForm from './LoginForm'

const Chat = () => {

  if (!localStorage.getItem('username')) return <LoginForm />

  return (
<ChatEngine
      publicKey={'89a8aea6-f50a-4924-b5d9-fa16037c7513'}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      height="100vh"
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />  )
}

export default Chat