import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/Phone.jsx'
import { pharmacies } from '../data.js'

export default function Pharmacy() {
  const nav = useNavigate()
  return (
    <div className="fade">
      <TopBar title="Pharmacy" sub="Order medicine" />
      {pharmacies.map(p => (
        <div key={p.id} className="card card-row" onClick={() => nav('/pharmacy/' + p.id)}>
          <div className="avatar" style={{ background: p.color }}>💊</div>
          <div style={{ flex: 1 }}>
            <div className="title">{p.name}</div>
            <div className="subtle">{p.distance} · ★ {p.rating}</div>
          </div>
          <span className="pill green">Open</span>
        </div>
      ))}
    </div>
  )
}
