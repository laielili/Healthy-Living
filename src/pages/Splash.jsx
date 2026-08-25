import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Splash() {
  const nav = useNavigate()
  useEffect(() => {
    const t = setTimeout(() => nav('/login'), 1500)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className="center" style={{ marginTop: 220 }}>
      <div style={{ fontSize: 70, marginBottom: 14 }}>🤲</div>
      <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--teal-dark)' }}>Healthy Living</div>
      <div className="subtle mt">Your care, in one place</div>
    </div>
  )
}
