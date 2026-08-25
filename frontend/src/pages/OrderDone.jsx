import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function OrderDone() {
  const { state } = useLocation()
  const nav = useNavigate()
  const orderId = state?.orderId || '01548875645'
  const [rating, setRating] = useState(0)
  const [shared, setShared] = useState(false)

  return (
    <div className="fade center" style={{ marginTop: 90 }}>
      <div className="success-emoji">🎉</div>
      <h2 style={{ color: 'var(--teal-dark)', marginTop: 6 }}>Thank You!</h2>
      <p className="subtle">Order <b>{orderId}</b> placed successfully.</p>

      <div className="card mt">
        <div className="title">Share your experience</div>
        <div style={{ fontSize: 34, margin: '10px 0', cursor: 'pointer' }}>
          {[1, 2, 3, 4, 5].map(i => (
            <span key={i} onClick={() => setRating(i)}
                  style={{ color: i <= rating ? '#f6b73c' : '#dfe7e7' }}>★</span>
          ))}
        </div>
        <button className="btn light" onClick={() => setShared(true)}>
          {shared ? 'Shared ✓' : 'Share experience'}
        </button>
      </div>
      <button className="btn mt" onClick={() => nav('/home')}>Back to Home</button>
    </div>
  )
}
