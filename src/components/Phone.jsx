import { useNavigate, useLocation, NavLink } from 'react-router-dom'

function StatusBar() {
  return (
    <div className="statusbar">
      <span>9:41</span>
      <span className="icons">
        <span>📶</span><span>🔋</span>
      </span>
    </div>
  )
}

const TABS = [
  { to: '/home', icon: '🏠', label: 'Home' },
  { to: '/map', icon: '🗺️', label: 'Map' },
  { to: '/pharmacy', icon: '💊', label: 'Rx' },
  { to: '/community', icon: '💬', label: 'Community' },
  { to: '/health', icon: '🌿', label: 'Health' }
]

function TabBar() {
  const { pathname } = useLocation()
  return (
    <nav className="tabbar">
      {TABS.map(t => (
        <NavLink key={t.to} to={t.to} className={({ isActive }) => (isActive ? 'active' : '')}>
          <span className="ticon">{t.icon}</span>
          <span>{t.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}

export default function Phone({ showTabs, children }) {
  return (
    <div className="phone">
      <StatusBar />
      <div className={'screen' + (showTabs ? '' : ' no-tab')}>{children}</div>
      {showTabs && <TabBar />}
    </div>
  )
}

export function TopBar({ title, sub, back, onBack }) {
  const nav = useNavigate()
  return (
    <div className="topbar">
      {(back || onBack) && (
        <button className="icon-btn" onClick={() => (onBack ? onBack() : nav(-1))}>‹</button>
      )}
      <div style={{ flex: 1 }}>
        <h1>{title}</h1>
        {sub && <div className="sub">{sub}</div>}
      </div>
      <button className="icon-btn">⋯</button>
    </div>
  )
}
