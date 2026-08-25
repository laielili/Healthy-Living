import { useLocation, useNavigate } from 'react-router-dom'

export default function AppointmentDone() {
  const { state } = useLocation()
  const nav = useNavigate()
  const name = state?.doctor || 'Dr. Jack Anderson'
  const slot = state?.slot || '09:00'
  return (
    <div className="fade center" style={{ marginTop: 120 }}>
      <div className="success-emoji">✅</div>
      <h2 style={{ color: 'var(--teal-dark)', marginTop: 10 }}>Appointment Confirmed</h2>
      <p className="subtle">Your appointment with <b>{name}</b><br />is today at <b>{slot}</b>!</p>
      <button className="btn mt" onClick={() => nav('/home')}>Back to Home</button>
    </div>
  )
}
