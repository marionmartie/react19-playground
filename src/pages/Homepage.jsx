import React, { useState } from 'react'

const Homepage = () => {
    const [pages, setPages] = useState([
        {
            id: '1',
            name: 'lorem ipsum'
        }
    ])

    
  return (
    <>
        { pages.map((page) => (
            <p> {page.name} </p>
        )) }
    </>
  )
}

export default Homepage