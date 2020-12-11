import { gql, useMutation } from '@apollo/client';

const ADD_MESSAGE = gql`
  mutation addMessage($message: String!) {
    insert_testData(objects:{message: $message}) {
      affected_rows
      returning {
        id
        message
      }
    }
  }
`

function MessageInput() {
  let input;
  const [insert_testData] = useMutation(ADD_MESSAGE);

  return (
    <>
      <form 
        className="message-form"
        onSubmit={(e) => {
          e.preventDefault();
          insert_testData({ variables: { message: input.value } });
          input.value = '';
        }}  
      >
        <input 
          type="text"
          ref={node => { input = node; }} 
          placeholder="Enter message here..."
        />
      </form>
    </>
  )
}

export default MessageInput
