import React, { Component } from 'react';
import axios from "axios";

import LayoutNotFound from '../LayoutNotFound';
import SearchBar from '../../components/Searchbar';

import followers from "./img/followers-icon.svg";
import location from "./img/location-icon.svg";
import organization from "./img/organization-icon.svg";
import repositorie from "./img/repositorie-icon.svg";
import star from "./img/star-icon.svg";
import "./css/style.css";

class LayoutResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      username: '',
      login: '',
      avatar: '',
      name: '',
      company: '',
      location: '',
      repos: '',
      followers: '',
      star: 0,
      notFound: false,

      // Repositorios
      repos_list: []
    }
  }

  componentDidMount() {
    document.title = "Resultado";
    let username = localStorage.getItem("username");
    this.getProfile(username);
    this.getRepos(username);
    localStorage.clear();
  }

  getProfile(username) {
    this.setState({ isLoading: true });
    axios.get(`https://api.github.com/users/${username}`, {})
    .then(response => {
      this.setState({ login: username });
      this.setState({ avatar: response.data.avatar_url });
      if(response.data.name !== null) {
        this.setState({ name: response.data.name });
      } 
      else this.setState({ name: "" });
      if(response.data.location !== null) {
        this.setState({ location: response.data.location });
      }
      else this.setState({ location: "" });
      if(response.data.company !== null) {
        this.setState({ company: response.data.company });
      }
      else this.setState({ company: "" });
      this.setState({ repos: response.data.public_repos });
      this.setState({ followers: response.data.followers });
    })
    .catch(error => {
      this.setState({ notFound: true });
      // console.log(error);
    })
    .finally(() => {
      this.setState({ isLoading: false });
    });
  }

  getRepos(username) {
    this.setState({ isLoading: true });
    axios.get(`https://api.github.com/users/${username}/repos`, {})
    .then(response => {
      let repos_res = response.data;
      let arr_repos = [];
      for (let i = 0; i < repos_res.length; i++) {
        arr_repos.push({
          name: repos_res[i].name,
          description: repos_res[i].description,
          stargazers_count: repos_res[i].stargazers_count
        });
        let star = this.state.star + repos_res[i].stargazers_count;
        this.setState({ star });
      }
      this.setState({ repos_list: arr_repos });
    })
    .catch(error => {
      this.setState({ notFound: true });
      // console.log(error);
    })
    .finally(() => {
      this.setState({ isLoading: false });
    });
  }

  handleFormChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault(e);
    let username = this.state.username;
    this.getProfile(username);
    this.getRepos(username);
  }

  render() {
    return (
      <div id="result-view">
        <div className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-3">
                <h1>
                  Github<span> Search</span>
                </h1>
              </div>
              <div className="column is-1" />
              <div className="column is-8">
                <SearchBar placeholder="Pesquise por nome de usuário" value={this.state.username} onChange={this.handleFormChange} onSubmit={this.handleSubmit} />
              </div>
            </div>
            {this.state.isLoading ? (
              <div className="columns">
                <div className="column">
                  <span className="is-loading-custom" />
                </div>
              </div>
            ) : (
              this.state.notFound ? (
                <LayoutNotFound />
              ) : ( 
                <div className="columns">
                  <div className="column is-3">
                    <div className="columns">
                      <div className="column">
                        <img className="img" src={this.state.avatar} alt=""/>
                        <p className="name">{this.state.name}</p>
                        <p className="info">{this.state.login}</p>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        { this.state.company !== '' ?
                          <p className="info margin">
                            <img className="icon" src={organization} alt=""/>
                            {this.state.company}
                          </p>
                        : null
                        }
                        { this.state.location !== "" ?
                          <p className="info margin">
                            <img className="icon" src={location} alt=""/>
                            {this.state.location}
                          </p>
                        : null
                        }
                        <p className="info margin">
                          <img className="icon" src={star} alt=""/>
                          {this.state.star}
                        </p>
                        <p className="info margin">
                          <img className="icon" src={repositorie} alt=""/>
                          {this.state.repos}
                        </p>
                        <p className="info margin">
                          <img className="icon" src={followers} alt=""/>
                          {this.state.followers}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="column is-1" />
                  <div className="column is-8">
                    {this.state.repos_list.map((repos, i) => (
                      <div className="columns" key={i}>
                        <div className="column">
                          <p className="repos-name">{repos.name}</p>
                          <p className="repos-description">{repos.description}</p>
                          <p className="info margin">
                            <img className="icon" src={star} alt=""/>
                            {repos.stargazers_count}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default LayoutResult;