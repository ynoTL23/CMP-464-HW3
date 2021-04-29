import React from 'react'
import '../styles/DesignPad.css'

class DesignPad extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bgColor: 'grey'
    }
  }

  allowDrop = e => {
    e.preventDefault()
  }

  drop = e => {
    e.preventDefault()
    const newColor = e.dataTransfer.getData('bgColor')
    this.setState({ bgColor: newColor })
  }

  render() {
    return (
      <div
        className='designpad-button'
        style={{ backgroundColor: this.state.bgColor }}
        onDragOver={this.allowDrop}
        onDrop={this.drop}></div>
    )
  }
}

export default DesignPad
