import ChatBox from './ChatBox'
import MessageInput from './MessageInput';

function App() {
  return (
    <div className="wrapper">
      <section className="message-container">
        <h3> Anette Melbye </h3>
        <ChatBox />
        <MessageInput />
      </section>
    </div>
  );
}

export default App;
