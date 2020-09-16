import React from 'react'

export default function OnboardCard({ details }) {
  if (!details) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      <h2>Name:{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
    </div>
  )
}
