import React from 'react'
import '../styles/PadButton.css'

class PadButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bgColor: this.props.bgColor
    }
  }

  onDrag = e => {
    e.dataTransfer.setData('bgColor', this.state.bgColor)
  }

  render() {
    return (
      <div
        className='PadButton'
        draggable='true'
        style={{ backgroundColor: this.state.bgColor }}
        onDragStart={this.onDrag}>
        <div className='PadButton-text'>{this.props.text}</div>
      </div>
    )
  }
}

export default PadButton
