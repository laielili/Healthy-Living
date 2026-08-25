import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/Phone.jsx'

export default function Home() {
  const nav = useNavigate()
  return (
    <div className="fade">
      <TopBar title="Healthy Living" sub="Hi Alex, stay healthy today" />
      <div className="card" style={{ background: 'linear-gradient(135deg,var(--teal),#23c9bf)', color: '#fff' }}>
        <div className="subtle" style={{ color: '#eafffd' }}>Need a doctor?</div>
        <div style={{ fontSize: 20, fontWeight: 800, margin: '4px 0 12px' }}>See a Doctor Now</div>
        <button className="btn light" onClick={() => nav('/map')}>Find nearby hospital</button>
      </div>

      <div className="grid2 mb">
        <div className="tile" onClick={() => nav('/insurance')}>
          <div className="big">🪪</div>
          <div className="title" style={{ fontSize: 14, marginTop: 6 }}>Insurance</div>
        </div>
        <div className="tile" onClick={() => nav('/pharmacy')}>
          <div className="big">💊</div>
          <div className="title" style={{ fontSize: 14, marginTop: 6 }}>Pharmacy</div>
        </div>
      </div>

      <div className="card">
        <div className="card-row" style={{ justifyContent: 'space-between' }}>
          <div className="title">Community</div>
          <span className="subtle" onClick={() => nav('/community')} style={{ color: 'var(--teal)' }}>See all ›</span>
        </div>
        <div className="card-row mt">
          <div className="avatar" style={{ background: 'var(--teal)' }}>EW</div>
          <div>
            <div className="title" style={{ fontSize: 14 }}>Heart Disease Awareness</div>
            <div className="subtle">124 likes · 32 comments</div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-row" style={{ justifyContent: 'space-between' }}>
          <div className="title">Health Plan</div>
          <span className="subtle" onClick={() => nav('/health')} style={{ color: 'var(--teal)' }}>Open ›</span>
        </div>
        <div className="card-row mt">
          <div className="avatar" style={{ background: 'var(--green)' }}>🏃</div>
          <div>
            <div className="title" style={{ fontSize: 14 }}>Exercise Tips</div>
            <div className="subtle">Personalized for you</div>
          </div>
        </div>
      </div>
    </div>
  )
}
