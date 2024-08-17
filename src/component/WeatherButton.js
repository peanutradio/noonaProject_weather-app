import React from 'react'
import { Button } from 'react-bootstrap'


const WeatherButton = () => {
  return (
    <div>
      <Button variant="info">Seoul</Button>{' '}
      <Button variant="info">Paris</Button>{' '}
      <Button variant="info">Jerusalem</Button>{' '}
      <Button variant="info">New York</Button>{' '}
    </div>
  )
}

export default WeatherButton