import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopBar } from '../components/Phone.jsx'
import { insuranceTypes } from '../data.js'

export default function Insurance() {
  const nav = useNavigate()
  const [step, setStep] = useState(0)
  const [type, setType] = useState(insuranceTypes[0])
  const [file, setFile] = useState(false)

  if (step === 0) {
    return (
      <div className="fade">
        <TopBar title="Insurance" back />
        <div className="title" style={{ margin: '4px 4px 10px' }}>Select a plan</div>
        {insuranceTypes.map(t => (
          <div key={t.id} className="card card-row" onClick={() => setType(t)}>
            <div className="avatar" style={{ background: t.color }}>🪪</div>
            <div style={{ flex: 1 }}>
              <div className="title">{t.name}</div>
              <div className="subtle">{t.desc}</div>
            </div>
            <span className={'pill' + (type.id === t.id ? '' : ' light')}>{type.id === t.id ? 'Selected' : ''}</span>
          </div>
        ))}
        <button className="btn mt" onClick={() => setStep(1)}>Continue</button>
      </div>
    )
  }

  if (step === 1) {
    return (
      <div className="fade">
        <TopBar title="Upload Card" sub={type.name} back onBack={() => setStep(0)} />
        <div className="card center" onClick={() => setFile(true)}
             style={{ border: '2px dashed var(--teal)', cursor: 'pointer' }}>
          <div style={{ fontSize: 48 }}>{file ? '✅' : '📷'}</div>
          <div className="title mt">{file ? 'Card scanned' : 'Scan / Upload card'}</div>
          <div className="subtle">Tap to {file ? 'rescan' : 'capture'}</div>
        </div>
        <button className="btn mt" disabled={!file} onClick={() => setStep(2)}>Continue</button>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div className="fade">
        <TopBar title="Notice" back onBack={() => setStep(1)} />
        <div className="card">
          <div className="title">Insurance Notice</div>
          <p className="subtle mt" style={{ lineHeight: 1.6 }}>
            Your <b>{type.name}</b> will cover eligible consultations and prescriptions.
            Co-pay may apply per visit. Continue to activate coverage.
          </p>
        </div>
        <button className="btn mt" onClick={() => setStep(3)}>I Understand</button>
      </div>
    )
  }

  return (
    <div className="fade center" style={{ marginTop: 120 }}>
      <div className="success-emoji">🎉</div>
      <h2 style={{ color: 'var(--teal-dark)' }}>Insurance Activated</h2>
      <p className="subtle">{type.name} is now linked to your account.</p>
      <button className="btn mt" onClick={() => nav('/home')}>Done</button>
    </div>
  )
}
