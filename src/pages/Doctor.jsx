import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { TopBar } from '../components/Phone.jsx'
import { doctors } from '../data.js'

export default function Doctor() {
  const { id } = useParams()
  const nav = useNavigate()
  const d = doctors.find(x => x.id === id) || doctors[0]
  const [slot, setSlot] = useState(d.availability[0])
  return (
    <div className="fade">
      <TopBar title="Doctor" back />
      <div className="card center">
        <div className="avatar" style={{ background: d.color, width: 70, height: 70, borderRadius: 20, fontSize: 22, margin: '0 auto' }}>{d.avatar}</div>
        <div className="title" style={{ marginTop: 10 }}>{d.name}</div>
        <div className="subtle">{d.specialty} · {d.hospital}</div>
        <div className="stars mt">★ {d.rating} <span className="subtle">({d.reviews})</span></div>
        <p className="subtle mt" style={{ lineHeight: 1.5 }}>{d.about}</p>
      </div>

      <div className="card">
        <div className="title" style={{ marginBottom: 8 }}>Availability</div>
        <div className="slots">
          {d.availability.map(s => (
            <div key={s} className={'slot' + (s === slot ? ' sel' : '')} onClick={() => setSlot(s)}>{s}</div>
          ))}
        </div>
        <button className="btn mt" onClick={() => nav('/appointment-done', { state: { doctor: d.name, slot } })}>
          Book at {slot}
        </button>
      </div>
    </div>
  )
}
