var React = require("react");
var Search = require("./children/Search");
var Results = require("./children/Results");
var Saved = require("./children/Saved");

var helpers = require("./utils/helpers");

// Main Component //

var Main = React.createClass({
  getInitialState: function(){
    return { search: ["","",""], results: [], saved: []};
  },
  // LOADS PAGE //

  componentDidMount: function(){

    helpers.getSaved().then(function(response) {
      console.log(response);
      if (response !== this.state.saved) {
        console.log("Saved", response.data);
        this.setState({ saved: response.data });
      }
    }.bind(this));
  },

  // UPDATES //

  componentDidUpdate: function(){

    helpers.runQuery(this.state.search).then(function(data) {
      if (data !== this.state.results) {
        console.log("Results", data);
        this.setState({ results: data });

        // HISTORY POST //

        helpers.postSaved(this.state.search).then(function() {
          console.log("Updated!");

        // HISTORY UPDATE //

        helpers.getSaved().then(function(response) {
          console.log("Current Saved", response.data);

          console.log("Saved", response.data);

          this.setState({ saved: response.data });

          }.bind(this));
        }.bind(this));
      }
    }.bind(this));
  },

  //CHILDREN UPDATE PARENT //

  setSearch: function(topic, startYear, endYear){
    this.setState({ search: [topic, startYear, endYear] });
  },

  //RENDER //

  render: function(){
    return (
      <div className="container">

        <div className="row">
          <div className="card-panel z-depth-4 panelTitle center-align">
            <h2>New York Times: Article Finder</h2>
            <h5>Search and Save Articles of Interest!</h5>
          </div>
        </div>

        <div className="row col s12">
          <Search search={this.setSearch} />
        </div>

        <div className="row col s12">
          <Results results={this.state.results} />
        </div>

        <div className="row col s12">
          <Saved saved={this.state.saved} />
        </div>

      </div>
    );
  }
});

// EXPORT //

module.exports = Main;