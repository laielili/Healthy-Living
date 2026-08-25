import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/Phone.jsx'

export default function HealthNutrition() {
  const nav = useNavigate()
  return (
    <div className="fade">
      <TopBar title="Nutrition" back onBack={() => nav('/health')} />
      <div className="card center">
        <div className="ring">
          <div className="inner">
            <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--teal-dark)' }}>620</div>
            <div className="subtle">Cal / day</div>
          </div>
        </div>
        <div className="title">Personal Nutrition Plan</div>
      </div>
      {[
        { t: 'Breakfast', time: '08:00', c: 'Oats & fruits' },
        { t: 'Lunch', time: '12:00', c: 'Grilled chicken salad' },
        { t: 'Dinner', time: '18:00', c: 'Veggie bowl' }
      ].map(m => (
        <div key={m.t} className="card card-row">
          <div className="avatar" style={{ background: 'var(--green)' }}>🍽️</div>
          <div style={{ flex: 1 }}>
            <div className="title" style={{ fontSize: 14 }}>{m.t} · {m.time}</div>
            <div className="subtle">{m.c}</div>
          </div>
        </div>
      ))}
      <button className="btn mt" onClick={() => nav('/home')}>Done</button>
    </div>
  )
}
