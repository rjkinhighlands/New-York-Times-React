var React = require("react");
var Search = React.createClass({

  getInitialState: function() {
     return { topic: "", startYear: "", endYear: "" };
  },
  // USER INPUT //

  handleTopicChange: function(event) {
    this.setState({ topic: event.target.value });
  },
  handleStartChange: function(event) {
    this.setState({ startYear: event.target.value });
  },
  handleEndChange: function(event) {
    this.setState({ endYear: event.target.value });
  },

  // AFTER SUBMITS //

  handleSubmit: function(event) {
    event.preventDefault();

  // SEND PARENT //

    this.props.setSearch(this.state.topic, this.state.startYear, this.state.endYear);
  },
  // RENDER //

  render: function() {
    return (
      <div className="card z-depth-4 center-align">
        <h3 className="panelTitle">Search</h3>

        <form className="card-panel" onSubmit={this.handleSubmit}>
         
          <div className="input-field">
            <input type="text" placeholder="Topic (required)" id="topic" onChange={this.handleTopicChange} className="validate" required></input>
          </div>
       
          <div className="input-field">
            <input type="number" maxlength="4" placeholder="Start Year (required)" id="startYear" onChange={this.handleStartChange} className="validate" required></input>
          </div>

          <div className="input-field">
            <input type="number" maxlength="4" placeholder="End Year (required)" id="endYear" onChange={this.handleEndChange} className="validate" required></input>
          </div>
       
          <br></br>
          <button className="waves-effect waves-light btn" type="submit">Submit</button>
        </form>

      </div>
    );
  }
});

// EXPORT //

module.exports = Search;