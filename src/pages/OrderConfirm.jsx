import { useLocation, useNavigate } from 'react-router-dom'
import { TopBar } from '../components/Phone.jsx'

export default function OrderConfirm() {
  const { state } = useLocation()
  const nav = useNavigate()
  const items = state?.items || []
  const pharmacy = state?.pharmacy || 'ABC Pharmacy'
  const total = items.reduce((s, m) => s + m.price, 0)
  const orderId = '01548875645'

  return (
    <div className="fade">
      <TopBar title="Confirm Order" back />
      <div className="card">
        <div className="title">Order #{orderId}</div>
        <div className="subtle mt">{pharmacy} · Delivery 30 min</div>
      </div>
      {items.map(m => (
        <div key={m.id} className="card card-row">
          <div className="avatar" style={{ background: 'var(--teal-soft)', color: 'var(--teal-dark)' }}>💊</div>
          <div style={{ flex: 1 }}>
            <div className="title">{m.name}</div>
            <div className="subtle">{m.tag}</div>
          </div>
          <span className="title">${m.price.toFixed(2)}</span>
        </div>
      ))}
      <div className="card card-row" style={{ justifyContent: 'space-between' }}>
        <span className="title">Total</span>
        <span className="title" style={{ color: 'var(--teal-dark)' }}>${total.toFixed(2)}</span>
      </div>
      <button className="btn mt" onClick={() => nav('/order-done', { state: { orderId } })}>Place Order</button>
    </div>
  )
}
