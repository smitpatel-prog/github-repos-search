import React, { Component } from 'react';
import github from './apis/github';
import SearchField from './components/SearchField';
import UserRepos from './components/UserRepos';
import './App.css';
import Header from './components/Header';
import DarkMode from './components/DarkMode';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      userDetails: null,
      darkMode: false
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
    this.setState({ darkMode: !this.state.darkMode });
    document.getElementById('body').style.backgroundColor = !this.state.darkMode ? '#343a40' : 'unset';
    document.getElementById('body').style.color = !this.state.darkMode ? 'white' : 'unset';
  }

  render() {
    return <div className="container">
      <div className="float-right mt-2 mb-2 vertical-center"><span className="mr-2">Dark Mode</span><DarkMode toggle={this.switchMode} /></div>
      <div className="wrapper text-center">
        <div className="pt-3 pb-3"><Header name={'GitHub Repository Search'} /></div>
        <div className="mt-2"><SearchField value={this.state.searchValue} setValue={this.setSearchValue} darkMode={this.state.darkMode} /></div>
        <div className="mt-2"><UserRepos userDetails={this.state.userDetails} viewAll={this.viewAllRepos} darkMode={this.state.darkMode} /></div>
      </div></div>
  }
}

export default App;
