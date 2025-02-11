export default function Home() {
  async function addMessage(formData: FormData) {
    'use server'
    console.log(formData.get('message'))
  }

  return (
    <div className="m-4">
      <h1>BACOT!</h1>
      <div className="chat_window p-2 mb-5 h-screen border border-slate-600 rounded-md">
        <ul>
          <li className="p-2 mb-2 rounded-md bg-gray-500 text-white">
            <input type="checkbox" value="test" /> Test 1
          </li>
          <li className="p-2 mb-2 rounded-md bg-gray-500 text-white">
            <input type="checkbox" value="test" /> Test 2
          </li>
        </ul>
      </div>
      <div className="chat_message">
        <form action={addMessage} className="flex">
          <input className="rounded-md flex-grow" name="message" placeholder="Message" />
          <button className="p-2.5 ml-2 border border-slate-600 rounded-md bg-slate-800 text-white" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
