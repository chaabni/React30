import React from 'react'
import React30SquareURL from '../React30Square.png'

const React30Logo = (props) => {
  const { style } = props

  return (
    <div {...props}
      style={{
        ...style,
        backgroundImage: `url(${React30SquareURL})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        width: '100%',
        height: '100%'
      }}
    />
  )
}

export default React30Logo
