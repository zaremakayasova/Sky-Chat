import { ChatEngine } from 'react-chat-engine';
import './App.css';

import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID='0d1c4f48-3a59-4abf-8cfe-dd9d83f08462'
      userName='Harry'
      userSecret='secret'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
