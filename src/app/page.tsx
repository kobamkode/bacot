'use client'

import { KeyboardEvent, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("")
  const [messages, setMessages] = useState<string[]>([])

  const addMessage = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && message.trim() !== '') {
      e.preventDefault()
      setMessages(prevMessages => [...prevMessages, message])
      setMessage('')
    }
  }

  return (
    <div className="m-4">
      <h1>BACOT!</h1>
      <div className="chat_window p-2 mb-5 h-screen border border-slate-600 rounded-md">
        <ul>
          {messages.map((item, index) => (
            <li key={index} className="p-2 mb-2 rounded-md bg-gray-500 text-white">
              <input type="checkbox" /> {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat_message">
        <form className="flex">
          <input id="message" className="rounded-md flex-grow"
            name="message"
            placeholder="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={addMessage}
          />
        </form>
      </div>
    </div>
  );
}
