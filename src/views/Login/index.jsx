import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import React, { useState } from "react";
import auth from "../../auth";
import withConsumer from "../../components/AppContext/withConsumer";

import "./css/style.css";

// import Box from "../../components/Box";
// import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "admin@admin.com",
      password: "admin123",
      answer: "",
      isValidRecaptcha: false,
      isLoadingButton: false
    };

    // this.validator = new SimpleReactValidator();

    // this.verifyCallback = this.verifyCallback.bind(this);
  }

  componentWillMount() {
    if (this.props.userAuth) {
      this.props.history.push("/");
    }
  }

  // verifyCallback() {
  //   this.setState({ isValidRecaptcha: true });
  // }

  handleFormChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    try {
      e.preventDefault();

      // this.setState({isLoadingButton: true});

      // this.setState({answer: ""});

      // if(!this.state.isValidRecaptcha) {
      //   this.setState({answer: [<i className="material-icons" key="">error_outline</i>, "Efetue a verificação do robô."]});
      //   this.setState({isLoadingButton: false});
      //   return;
      // }

      // if(!this.validator.allValid()) {
      //   this.setState({answer: [<i className="material-icons" key="">error_outline</i>, "Erros de validações nos campos."]});
      //   this.setState({isLoadingButton: false});
      //   this.validator.showMessages();
      //   this.forceUpdate();
      //   return;
      // }

      await auth.login(this.state.email, this.state.password);
      console.log("foi (teoricamente)");
    } catch (error) {
      console.log(error);
      this.setState({
        answer: [
          <i className="material-icons" key="">
            error_outline
          </i>,
          "E-mail ou senha inválidos. Tente novamente!"
        ]
      });
      this.setState({ isLoadingButton: false });
    }
  };

  render() {
    if (this.props.userAuth) {
      return <Redirect to="/" />;
    }
    return (
      <div id="login-view">
        <section>
          <div className="section">
            <div className="container">
              <div className="box">
                <div className="columns">
                  <div className="colmun is-9">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                      <div className="field">
                        <Input
                          label="E-mail"
                          name="email"
                          placeholder="Seu e-mail"
                          type="email"
                          value={this.state.email}
                          onChange={this.handleFormChange}
                        />
                      </div>
                      <div className="field margin-input">
                        <Input
                          label="Senha"
                          name="password"
                          placeholder="Sua senha"
                          type="password"
                          value={this.state.password}
                          onChange={this.handleFormChange}
                        />
                      </div>
                      <div className="field">
                        <Button
                          name="Entrar"
                          type="submit"
                          isLoading={this.state.isLoadingButton}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withConsumer(Login);
