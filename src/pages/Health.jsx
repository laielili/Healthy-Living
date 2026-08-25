import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/Phone.jsx'

export default function Health() {
  const nav = useNavigate()
  const [form, setForm] = useState({ gender: 'Female', age: '', height: '', weight: '' })
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))
  const ready = form.age && form.height && form.weight
  return (
    <div className="fade">
      <TopBar title="Exercise Tips" sub="Personalize your plan" />
      <div className="card">
        <div className="title" style={{ marginBottom: 10 }}>About you</div>
        <div className="subtle">Gender</div>
        <div className="slots mt mb">
          {['Female', 'Male'].map(g => (
            <div key={g} className={'slot' + (form.gender === g ? ' sel' : '')} onClick={() => setForm(f => ({ ...f, gender: g }))}>{g}</div>
          ))}
        </div>
        <input className="input" placeholder="Age" value={form.age} onChange={set('age')} />
        <input className="input" placeholder="Height (cm)" value={form.height} onChange={set('height')} />
        <input className="input" placeholder="Weight (kg)" value={form.weight} onChange={set('weight')} />
        <button className="btn" disabled={!ready} onClick={() => nav('/health/walk')}>Get my plan</button>
      </div>
    </div>
  )
}
