import React, { useState } from 'react'
import Jokes from './Jokes'
import { Link } from 'react-router-dom'

const Homepage = () => {  
  return (
    <div className="container mx-auto w-3/6">
        <Link to={'/use-example-1'} >
            <h1>Link</h1>
        </Link>
    </div>
  )
}

export default Homepage