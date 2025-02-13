'use client'

import { ChangeEvent, KeyboardEvent, useState } from "react";

export default function Home() {
  const [toast, setToast] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const [messages, setMessages] = useState<string[]>([])

  const team = {
    'id': 'k0de',
    'name': 'Mario'
  }

  const addMessage = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && message.trim() !== '') {
      e.preventDefault()
      setMessages(prevMessages => [...prevMessages, message])
      setMessage('')
    }

    if (e.key === '/') {
      //TODO call action 
    }

    if (e.key === '@') {
      setToast(true)
    } else {
      setToast(false)
    }

    if (e.key === '#') {
      //TODO mention task
    }
  }

  const setDone = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === true) {
      e.target.parentElement?.remove()
    }
  }

  return (
    <div className={'m-4 flex flex-col gap-4'}>
      <h1 className={'text-xl'}>BACOT!</h1>
      <div className={'chat_window relative h-80 border border-slate-600'}>
        <ul>
          {messages.map((item, index) => (
            <li key={index} className={'p-2 m-2 bg-gray-300 text-gray-700 rounded-md'}>
              < input type="checkbox" onChange={setDone} /> {item}
            </li>
          ))}
        </ul>
        <div className={`absolute bottom-0 h-24 w-full bg-gray-500 ${!toast ? 'hidden' : ''}`}>
          <div className={'p-4'}>
            < p className={'text-white'}>
              Toast
            </p>
          </div>
        </div >
      </div >
      <div className={'chat_message'}>
        < form className={'flex'}>
          < input id="message" className={'rounded-md flex-grow text-gray-700'}
            name="message"
            placeholder="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={addMessage}
          />
        </form >
      </div >
      <footer className={'text-xs text-center'}>@2025 kobamk0de.</footer>
    </ div >
  );
}
