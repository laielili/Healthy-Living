import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Phone from './components/Phone.jsx'
import Splash from './pages/Splash.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import MapPage from './pages/MapPage.jsx'
import Hospital from './pages/Hospital.jsx'
import Doctor from './pages/Doctor.jsx'
import AppointmentDone from './pages/AppointmentDone.jsx'
import Insurance from './pages/Insurance.jsx'
import Pharmacy from './pages/Pharmacy.jsx'
import PharmacyDetail from './pages/PharmacyDetail.jsx'
import OrderConfirm from './pages/OrderConfirm.jsx'
import OrderDone from './pages/OrderDone.jsx'
import Community from './pages/Community.jsx'
import CommunityNew from './pages/CommunityNew.jsx'
import Health from './pages/Health.jsx'
import HealthWalk from './pages/HealthWalk.jsx'
import HealthNutrition from './pages/HealthNutrition.jsx'

const TAB_ROUTES = ['/home', '/map', '/pharmacy', '/community', '/health']

export default function App() {
  const loc = useLocation()
  const showTabs = TAB_ROUTES.some(r => loc.pathname.startsWith(r))
  return (
    <Phone showTabs={showTabs}>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/hospital/:id" element={<Hospital />} />
        <Route path="/doctor/:id" element={<Doctor />} />
        <Route path="/appointment-done" element={<AppointmentDone />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/pharmacy/:id" element={<PharmacyDetail />} />
        <Route path="/order" element={<OrderConfirm />} />
        <Route path="/order-done" element={<OrderDone />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/new" element={<CommunityNew />} />
        <Route path="/health" element={<Health />} />
        <Route path="/health/walk" element={<HealthWalk />} />
        <Route path="/health/nutrition" element={<HealthNutrition />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Phone>
  )
}
