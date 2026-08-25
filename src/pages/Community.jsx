import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/Phone.jsx'
import { posts } from '../data.js'

export default function Community() {
  const nav = useNavigate()
  return (
    <div className="fade">
      <TopBar title="Community" sub="Health stories" />
      <button className="btn light mb" onClick={() => nav('/community/new')}>+ New Post</button>
      {posts.map(p => (
        <div key={p.id} className="card">
          <div className="card-row">
            <div className="avatar" style={{ background: p.color }}>{p.avatar}</div>
            <div style={{ flex: 1 }}>
              <div className="title" style={{ fontSize: 14 }}>{p.author}</div>
              <div className="subtle">{p.time} ago</div>
            </div>
          </div>
          <div className="title mt" style={{ fontSize: 15 }}>{p.title}</div>
          <p className="subtle mt" style={{ lineHeight: 1.5 }}>{p.body}</p>
          <div className="subtle mt" style={{ display: 'flex', gap: 18 }}>
            <span>❤️ {p.likes}</span><span>💬 {p.comments}</span><span>↗ {p.shares}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
