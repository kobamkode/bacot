export default function Home() {
  async function addMessage(formData: FormData) {
    'use server'
    console.log(formData.get('message'))
  }

  return (
    <div>
      <div className='chat_window'>
        <ul>
          <li>test 1</li>
          <li>test 2</li>
        </ul>
      </div>
      <div className='chat_message'>
        <form action={addMessage}>
          <input className='rounded-full' name='message' placeholder='Message' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}
