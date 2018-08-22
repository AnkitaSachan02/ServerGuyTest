import React, { Component } from "react";
import { Apicaller } from "../util/apicaller";
import "../../src/App.css";
import config from "../config/config";
// import { set } from "lodash";
// import { Router, Route} from 'react-router-dom';
// import SignUp from './components/signup';
// import { createBrowserHistory } from 'history';

// var hist = createBrowserHistory();

class GitRepository extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: "",
      list: [],
      viewSet: {
        height: "400px",
        overflow: "auto"
      }
    };
  }

  typeSearch = e => {
    this.setState({ topic: e.target.value });
  };

  searchData = e => {
    e.preventDefault();
    Apicaller(this.state.topic, config.gitUrl)
      .then(res => {
        if (res.hasOwnProperty("item")) {
          this.state.list = [];
          this.state.list = res.item.map(elem => {
            return (
              <div>
                <div style={{ clear: "both" }}>
                  <div className="name">{elem.name}</div>
                  <a
                    title="Download"
                    href={`https://github.com/${
                      elem.full_name
                    }/archive/master.zip`}
                    target="_blank"
                    className="downloadLink"
                  >
                    <img src={"/images/download.png"} />
                  </a>
                  <a
                    title="Open Repo"
                    href={elem.html_url}
                    target="_blank"
                    className="openLink"
                  >
                    <img src={"/images/link.png"} />
                  </a>
                </div>
                <br />
              </div>
            );
          });
          this.setState(this.state);
        }
      })
      .catch(err => {
        console.log("error");
      });
  };
  render() {
    return (
      
          <div className="App">
      <form
        onSubmit={e => {
          this.searchData(e);
        }}
      >
        <div>
          <input
            type="text"
            value={this.state.topic}
            onChange={e => {
              this.typeSearch(e);
            }}
          />
         <input type="submit" defaultValue={"Submit"} />
        </div>
      </form>
    <div className="listSet" style={this.state.viewSet}>
      <div className="linkSet">{this.state.list}</div>
    </div>
          </div>
    );
  }
}

export default GitRepository;
