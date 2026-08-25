import { useParams, useNavigate } from 'react-router-dom'
import { TopBar } from '../components/Phone.jsx'
import { hospitals, doctors } from '../data.js'

export default function Hospital() {
  const { id } = useParams()
  const nav = useNavigate()
  const h = hospitals.find(x => x.id === id) || hospitals[0]
  const list = doctors.filter(d => d.hospital === h.name)
  return (
    <div className="fade">
      <TopBar title={h.name} sub={h.type} back />
      <div className="card" style={{ background: 'linear-gradient(135deg,var(--teal),#23c9bf)', color: '#fff' }}>
        <div className="title" style={{ color: '#fff' }}>{h.distance} away</div>
        <div className="subtle" style={{ color: '#eafffd', marginTop: 4 }}>Est. wait {h.wait} · Open 24/7</div>
      </div>
      <div className="title" style={{ margin: '6px 4px' }}>Available Doctors</div>
      {list.map(d => (
        <div key={d.id} className="card card-row" onClick={() => nav('/doctor/' + d.id)}>
          <div className="avatar" style={{ background: d.color }}>{d.avatar}</div>
          <div style={{ flex: 1 }}>
            <div className="title">{d.name}</div>
            <div className="subtle">{d.specialty}</div>
          </div>
          <span className="stars">★ {d.rating}</span>
        </div>
      ))}
    </div>
  )
}
