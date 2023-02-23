import React from 'react'

function Footer({bgColor}) {
  return (
    <div className={`${bgColor ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <h1 >Developed@ by ganjeri-group | All 	&#169; copyright is preserved@2023</h1>
    </div>
  )
}

export default Footer