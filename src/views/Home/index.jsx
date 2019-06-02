import React, { Component } from "react";

import SearchBar from "../../components/Searchbar";

import "./css/style.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    }
  }

  componentDidMount() {
    document.title = "Início";
  }

  handleFormChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault(e);
    localStorage.setItem("username", this.state.username);
    this.props.history.push("/resultado");
  }

  render() {
    return (
      <div id="home-view">
        <div className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-3" />
              <div className="column is-6 has-text-centered">
                <h1>
                  Github<span> Search</span>
                </h1>
              </div>
              <div className="column is-3" />
            </div>
            <div className="columns is-centered">
              <div className="column is-8">
                <SearchBar placeholder="Pesquise por nome de usuário" value={this.state.username} onChange={this.handleFormChange} onSubmit={this.handleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
