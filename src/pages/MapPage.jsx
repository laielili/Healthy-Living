import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/Phone.jsx'
import { hospitals } from '../data.js'

export default function MapPage() {
  const nav = useNavigate()
  return (
    <div className="fade">
      <TopBar title="Find Hospital" sub="Nearby clinics" />
      <div className="map">
        <div className="road h" />
        <div className="road v" />
        {hospitals.map((h, i) => (
          <div key={h.id} className="pin" style={{ top: 30 + i * 55, left: 40 + i * 70 }}>
            <span>📍</span>
          </div>
        ))}
      </div>
      {hospitals.map(h => (
        <div key={h.id} className="card card-row" onClick={() => nav('/hospital/' + h.id)}>
          <div className="avatar" style={{ background: h.color }}>🏥</div>
          <div style={{ flex: 1 }}>
            <div className="title">{h.name}</div>
            <div className="subtle">{h.type} · {h.distance} · wait {h.wait}</div>
          </div>
          <span className="pill">Open</span>
        </div>
      ))}
    </div>
  )
}
