import React from 'react';
import {NavLink} from 'react-router-dom';


class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(Object.assign({}, this.state));
  }

  render() {
    return (
      <div>
        <nav className="session-nav-signup">
          <NavLink className="icon" exact to="/" href="#home">StreamLine</NavLink>
          <div className="signup-buttons">
            <NavLink className="login-signup" exact to="/login">Log In</NavLink>
            <NavLink className="signup" exact to="/signup">Sign up</NavLink>
          </div>
        </nav>
        <section>
          <div className="background">
            <div className="signup-container">
              <div className="signup-top"> Join Streamline today, it's Free </div>
                <div className="form-container">
                  <form className="signup-form" onSubmit={this.handleSubmit}>
                    <div></div>
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                    <input type="text" placeholder="Your Email"
                      value={this.state.username}
                      onChange={this.updateField('username')}/>
                    <input type="password" placeholder="Password"
                      value={this.state.password}
                      onChange={this.updateField('password')}/>
                    <div></div>
                    <button className="signup-signup">{this.props.buttonText}</button>
                  </form>
                  <p className="signup-text">By signing up for Streamline, you agree to the <strong>Terms of Service</strong>.<br/>
                    View our <strong>Privacy Policy</strong>.</p>
                </div>
            </div>
          </div>
        </section>
      </div>

    );
  }
}

export default SignUp;
