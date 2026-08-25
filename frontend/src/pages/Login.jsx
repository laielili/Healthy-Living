import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/Phone.jsx'

export default function Login() {
  const nav = useNavigate()
  return (
    <div className="fade">
      <div className="center" style={{ marginTop: 60 }}>
        <div style={{ fontSize: 64, marginBottom: 10 }}>🤲</div>
        <h1 style={{ color: 'var(--teal-dark)', marginTop: 0 }}>Healthy Living</h1>
        <p className="subtle">Sign in to manage your health</p>
      </div>
      <div className="card mt">
        <input className="input" placeholder="Email or phone" />
        <input className="input" type="password" placeholder="Password" />
        <button className="btn" onClick={() => nav('/home')}>Log In</button>
        <button className="btn ghost mt" onClick={() => nav('/home')}>Create Account</button>
      </div>
      <p className="center subtle mt">By continuing you agree to our Terms & Privacy.</p>
    </div>
  )
}
