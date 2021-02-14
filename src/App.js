import React, { Component } from 'react';
import github from './apis/github';
import SearchField from './SearchField';
import UserRepos from './UserRepos';
import './App.css';
import Header from './Header';
import NightSwitch from './NightSwitch';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      userDetails: null,
      nightMode: false
    }
  }

  setSearchValue = (event) => {
    this.setState({ searchValue: event.target.value });
    this.fetchUserRepos(event.target.value, 10);
  }

  fetchUserRepos = (value, repoCount) => {
    github.post('', {
      "query": "query ($user: String!, $number_of_repos: Int!){ user(login: $user) { name avatarUrl repositories(last: $number_of_repos) { totalCount nodes { createdAt description name url } } } }",
      "variables": { "user": value, "number_of_repos": repoCount }
    }).then(response => {
      if (response.status === 200) {
        this.setState({ userDetails: response.data.data });
      } else {

      }
    }).catch(error => console.log(error));
  }

  viewAllRepos = (count) => {
    this.fetchUserRepos(this.state.searchValue, Number(count));
  }

  switchMode = () => {
    this.setState({ nightMode: !this.state.nightMode });
    document.getElementById('body').style.backgroundColor = !this.state.nightMode ? '#343a40' : 'unset';
    document.getElementById('body').style.color = !this.state.nightMode ? 'white' : 'unset';
  }

  render() {
    return <div className="container">
      <div className="float-right mt-2 mb-2 vertical-center"><span className="mr-2">Dark Mode</span><NightSwitch toggle={this.switchMode} /></div>
      <div className="wrapper text-center">
        <div className="pt-3 pb-3"><Header name={'GitHub Repository Search'} /></div>
        <div className="mt-2"><SearchField value={this.state.searchValue} setValue={this.setSearchValue} nightMode={this.state.nightMode} /></div>
        <div className="mt-2"><UserRepos userDetails={this.state.userDetails} viewAll={this.viewAllRepos} nightMode={this.state.nightMode} /></div>
      </div></div>
  }
}

export default App;