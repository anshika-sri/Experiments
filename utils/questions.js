
var listQs = require('./../../testdataset/store').questions;

class Questions {

  /**
   * properties
   * functions
   */

  constructor(category, score) {
    this.category = category;
    this.score = score;
  }


  // to paint user from local datastrore
  getQuestions = function(category = 'low') {

    //validations

    console.log('listing questions are: ', listQs);
    return listQs;
  
  }


  createQuestion = function(category, score) {

    //validations

    var q = new Question(category, score);
    listQs.push({
      category: category,
      score: score,
      qid: 
    });
    console.log('Qs created succesfully: qid: ', q);
  }
}

user.createQuestion({category: 'hard', score: '1110'});
user.createQuestion({category: 'low', score: '10'});
user.createQuestion({category: 'low', score: '11'});
