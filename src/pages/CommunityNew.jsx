import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/Phone.jsx'

export default function CommunityNew() {
  const nav = useNavigate()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const ready = title.trim() && body.trim()
  return (
    <div className="fade">
      <TopBar title="New Post" back />
      <div className="card">
        <input className="input" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea className="input" rows={5} placeholder="Share your story..." value={body}
                  onChange={e => setBody(e.target.value)} style={{ resize: 'none' }} />
        <button className="btn" disabled={!ready}
                onClick={() => nav('/community')}>Publish</button>
      </div>
    </div>
  )
}
