import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div className="text-center">
      <div className='mb-4'>
        <h1 className="title mb-2" style={{fontSize: '42px'}}>404</h1>
        <p>La página no fue encontrada</p>
      </div>
      <Link className="button button--primary" to="/">Volver al inicio</Link>
    </div>
  )
}
