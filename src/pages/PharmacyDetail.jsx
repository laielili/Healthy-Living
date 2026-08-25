import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { TopBar } from '../components/Phone.jsx'
import { pharmacies, medicines } from '../data.js'

export default function PharmacyDetail() {
  const { id } = useParams()
  const nav = useNavigate()
  const p = pharmacies.find(x => x.id === id) || pharmacies[0]
  const list = medicines[id] || []
  const [cart, setCart] = useState([])

  const toggle = m => {
    setCart(c => c.find(x => x.id === m.id) ? c.filter(x => x.id !== m.id) : [...c, m])
  }
  const total = cart.reduce((s, m) => s + m.price, 0)

  return (
    <div className="fade">
      <TopBar title={p.name} sub={p.distance} back />
      {list.map(m => {
        const sel = cart.find(x => x.id === m.id)
        return (
          <div key={m.id} className="card card-row">
            <div className="avatar" style={{ background: 'var(--teal-soft)', color: 'var(--teal-dark)' }}>💊</div>
            <div style={{ flex: 1 }}>
              <div className="title">{m.name}</div>
              <div className="subtle">{m.desc}</div>
              <div className="subtle">${m.price.toFixed(2)}</div>
            </div>
            <button className="chip" style={sel ? { background: 'var(--teal)', color: '#fff', borderColor: 'var(--teal)' } : {}}
                    onClick={() => toggle(m)}>{sel ? 'Added ✓' : 'Add'}</button>
          </div>
        )
      })}
      <button className="btn mt" disabled={!cart.length}
              onClick={() => nav('/order', { state: { items: cart, pharmacy: p.name } })}>
        Order · ${total.toFixed(2)}
      </button>
    </div>
  )
}
