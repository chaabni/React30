import React, { PropTypes } from 'react'
import React30SquareURL from '../React30Square.png'

class React30Logo extends React.Component {
  static propTypes = {
    style: PropTypes.object
  }

  render() {
    const { style } = this.props

    return (
      <div {...this.props}
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
}

export default React30Logo
