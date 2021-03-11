import { useState } from 'react';
import NewMessageForm from './components/NewMessageForm';
import MessageList from './components/MessageList';
function App() {
  const [messages, setMessages ] = useState([]);

  const handleSend = (newMessage) => {
    setMessages([newMessage, ...messages]);
  };
  return (
    <div>
      <NewMessageForm onSend={handleSend}/>
      <MessageList messages={messages} />
    </div>
  );
}

export default App;
