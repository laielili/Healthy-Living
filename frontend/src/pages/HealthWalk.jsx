import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/Phone.jsx'

export default function HealthWalk() {
  const nav = useNavigate()
  return (
    <div className="fade">
      <TopBar title="Walking" back />
      <div className="card center">
        <div style={{ fontSize: 40 }}>🚶</div>
        <div className="title mt">Brisk walking</div>
        <div style={{ fontSize: 40, fontWeight: 800, color: 'var(--teal-dark)' }}>30 <span style={{ fontSize: 18 }}>min</span></div>
        <div className="subtle">Great for heart health & mood</div>
      </div>
      <div className="card">
        <div className="subtle">Today's goal</div>
        <div style={{ height: 10, background: 'var(--line)', borderRadius: 6, marginTop: 8 }}>
          <div style={{ width: '60%', height: '100%', background: 'var(--teal)', borderRadius: 6 }} />
        </div>
        <div className="subtle mt">18 / 30 min completed</div>
      </div>
      <button className="btn mt" onClick={() => nav('/health/nutrition')}>Next: Nutrition</button>
    </div>
  )
}
