import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isSubmitted: false,
    showfirstNameErrorMsg: false,
    showlastNameErrorMsg: false,
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  renderSubmit = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isSubmitted: true})
    } else {
      this.setState({
        showfirstNameErrorMsg: !isValidFirstName,
        showlastNameErrorMsg: !isValidLastName,
        isSubmitted: false,
      })
    }
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({showfirstNameErrorMsg: !isValidFirstName})
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({showlastNameErrorMsg: !isValidLastName})
  }

  changeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  changeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderFormContainer = () => {
    const {
      firstName,
      lastName,
      showfirstNameErrorMsg,
      showlastNameErrorMsg,
    } = this.state
    return (
      <form onSubmit={this.renderSubmit}>
        <label htmlFor="first name">FIRST NAME</label>
        <input
          type="text"
          placeholder="First Name"
          id="first name"
          value={firstName}
          onChange={this.changeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {showfirstNameErrorMsg && <p>Required</p>}
        <label htmlFor="last name">LAST NAME</label>
        <input
          type="text"
          placeholder="Last Name"
          id="last name"
          value={lastName}
          onChange={this.changeLastName}
          onBlur={this.onBlurLastName}
        />
        {showlastNameErrorMsg && <p>Required</p>}
        <button type="submit">Submit</button>
      </form>
    )
  }

  submitAnotherResponse = () => {
    this.setState({isSubmitted: false, firstName: '', lastName: ''})
  }

  renderSubmitSuccessful = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button type="button" onClick={this.submitAnotherResponse}>
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="registration-container">
        <h1 className="heading">Registration</h1>
        <div>
          {isSubmitted
            ? this.renderSubmitSuccessful()
            : this.renderFormContainer()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
