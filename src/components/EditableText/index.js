import {Component} from 'react'

import './index.css'

class EditableText extends Component {
  state = {textInput: '', isButtonClicked: false}

  onChangeSearchInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {textInput, isButtonClicked} = this.state
    const EditButton = isButtonClicked ? 'Edit' : 'Save'

    return (
      <div className="background-container">
        <div className="card-container">
          <h1 className="main-heading">Editable Text Input</h1>
          <div className="input-container">
            {isButtonClicked ? (
              <p className="paragraph">{textInput}</p>
            ) : (
              <input
                className="input"
                type="text"
                value={textInput}
                onChange={this.onChangeSearchInput}
              />
            )}
            <button
              type="button"
              className="button"
              onClick={this.onClickButton}
            >
              {EditButton}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default EditableText
