export const doctors = [
  {
    id: 'd1',
    name: 'Dr. Jack Anderson',
    specialty: 'Cardiologist',
    hospital: 'ABC Hospital',
    rating: 4.9,
    reviews: 328,
    avatar: 'JA',
    color: '#1cb5ac',
    about: 'Senior cardiologist with 15+ years of experience in preventive heart care.',
    availability: ['09:00', '09:30', '10:00', '11:00', '14:00', '15:30']
  },
  {
    id: 'd2',
    name: 'Dr. Jany Smith',
    specialty: 'General Practitioner',
    hospital: 'ABC Hospital',
    rating: 4.7,
    reviews: 211,
    avatar: 'JS',
    color: '#3a9bdc',
    about: 'Family medicine specialist focused on holistic and preventive care.',
    availability: ['10:30', '11:00', '13:00', '13:30', '16:00']
  }
]

export const hospitals = [
  { id: 'h1', name: 'ABC Hospital', distance: '1.0 km', type: 'General', wait: '12 min', color: '#1cb5ac' },
  { id: 'h2', name: 'City Care Hospital', distance: '2.4 km', type: 'Cardiology', wait: '20 min', color: '#3a9bdc' },
  { id: 'h3', name: 'Green Valley Clinic', distance: '3.1 km', type: 'Pediatrics', wait: '8 min', color: '#7bc043' }
]

export const pharmacies = [
  { id: 'p1', name: 'ABC Pharmacy', distance: '1.0 km', rating: 4.8, color: '#1cb5ac' },
  { id: 'p2', name: 'GSK Pharmacy', distance: '2.6 km', rating: 4.5, color: '#3a9bdc' },
  { id: 'p3', name: 'LAB Pharmacy', distance: '4.0 km', rating: 4.6, color: '#7bc043' }
]

export const medicines = {
  p1: [
    { id: 'm1', name: 'Cardio Plus', desc: 'Heart health support', price: 29.99, tag: 'Prescription' },
    { id: 'm2', name: 'Zyrtec Tablets', desc: 'Allergy relief 10mg', price: 12.49, tag: 'OTC' },
    { id: 'm3', name: 'IBU 400', desc: 'Ibuprofen 400mg', price: 8.99, tag: 'OTC' }
  ],
  p2: [
    { id: 'm4', name: 'CIP Pills', desc: 'Antibiotic course', price: 15.99, tag: 'Prescription' },
    { id: 'm5', name: 'Cardio Plus 500', desc: 'Heart health 500mg', price: 34.99, tag: 'Prescription' }
  ],
  p3: [
    { id: 'm6', name: 'Vitamin D3', desc: 'Immunity support', price: 11.99, tag: 'OTC' },
    { id: 'm7', name: 'Zyrtec Tablets', desc: 'Allergy relief 10mg', price: 12.49, tag: 'OTC' }
  ]
}

export const posts = [
  {
    id: 'post1',
    author: 'Emma W.',
    avatar: 'EW',
    color: '#1cb5ac',
    time: '2h',
    title: 'Heart Disease Awareness',
    body: 'Regular checkups and a balanced diet can reduce risk by 60%. Share your tips below!',
    likes: 124,
    comments: 32,
    shares: 18
  },
  {
    id: 'post2',
    author: 'Liam K.',
    avatar: 'LK',
    color: '#3a9bdc',
    time: '5h',
    title: 'My 30-min walk routine',
    body: 'Started walking every morning. Feeling more energetic already!',
    likes: 88,
    comments: 14,
    shares: 6
  }
]

export const insuranceTypes = [
  { id: 'i1', name: 'Basic Care', desc: 'GP visits & essentials', color: '#1cb5ac' },
  { id: 'i2', name: 'Plus Plan', desc: 'Includes specialist care', color: '#3a9bdc' },
  { id: 'i3', name: 'Family Cover', desc: 'Up to 5 members', color: '#7bc043' }
]
