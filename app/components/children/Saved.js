var React = require("react");

var helpers = require("../utils/helpers");

// SAVED //

var Saved = React.createClass({
  handleDelete: function(event) {
    var articleID = event.target.value;

    helpers.deleteSaved(articleID).then(function(response){
      console.log("Deleted article");
    }.bind(this));
  },
  
  // RENDER //

  render: function() {
    return (
      <div className="panel card z-depth-4 center-align">
        <h3 className="panelTitle">Saved</h3>
        
        <div className="savedBox">
          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.saved.map(function(search, i) {
              return (
                <li key={search._id}>
                  <strong><a href={search.web_url} className="left-align" target="_blank">{search.title}</a></strong>
                    <i> {search.pub_date.substring(0,10)}</i>
                  <span>
                    <button className="waves-effect waves-light btn right-align" onClick={this.handleDelete} value={search._id}>Remove</button>
                  </span>
                </li>
              );
            })}
        </div>
      </div>
    );
  }
});

// EXPORT //

module.exports = Saved;