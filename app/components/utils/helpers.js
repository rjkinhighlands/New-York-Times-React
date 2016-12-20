var axios = require("axios");

//NYT API KEY //

var nytAPI= "7ca69eff4bd346239efe73cfddb6ac75";

var helper = {
  runQuery: function(topic, startYear, endYear) {
    console.log(query);
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + "&q="+ topic + "&begin_date=" + startYear + "0101" + "&begin_date=" + endYear + "0231";
    return axios.get(queryURL).then(function(response) {
      var results = [];

      // RESULTS //

      if (response.data.results[0]) {
        for(var i = 0; i<5; i++){
          results.push(response.data.results[i].formatted);
        }
        return results;
      } else{
        
        // EMPTY RESULTS //

        return "No articles found.";
      }
    });
  },
  getSaved: function(){
    return axios.get('/api/saved');
  },

  postSaved: function(article){
    return axios.post('/api/saved', article);
  },

  deleteSaved: function(id){
     return axios.delete('/api/saved/' + id); 
  }
};

module.exports = helper;
