import { gql, useQuery } from '@apollo/client';

export const GET_MESSAGES = gql`
  query getMessages {
    testData {
      id
      message
    }
  }
`

function ChatBox() {
  const { loading, error, data } = useQuery(GET_MESSAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const messages = data.testData;

  return (
    <div className="chat-box">
      {
        messages.map(message => {
          return <p key={message.id}> {message.message} </p>
        })
      }
    </div>
  )
}

export default ChatBox;
