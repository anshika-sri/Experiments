
var listContests = require('../../testdataset/store').contests;
var listUsers = require('./../../testdataset/store').users;

var UserClass = require('./user')


class Contests {

  /**
   * properties
   * functions
   */

  constructor(name, category, creator) {
    this.name = name;
    this.category = category;
    this.creator = creator;
  }


  // // to paint user from local datastrore
  // getQuestion = function(id) {

  //   for(var user in list) {
  //     if(! user.name) {
  //       var bErr = true;
  //       err = new Errors.BadRequest('Not found');
  //       throw err;
  //     }
  //   }
  // }

}

//options: { .., ... } for extension
  createContest = function(category, name, creator, options) {
    var q = new Contests(category, name, creator);
    var attendee;
    
    //validations

    //protype extension
    createContest.AttendContest = function() {
      attendees = [{ [name]: { pick: [ ]} }]
    }

    //owner can attend
    listContests.push({
      category: category,
      name: name,
      creator: creator,
      attandees: attendees
    })

    console.log('Contests created succesfully: name: ', name);
  }
  q.createContest({category: 'hard', name: 'Joe', creator: 'Monica'})


  attendContest = function(cid, name) {
    var q = new Contests(cid, name);

    //validations

    //protype extension
    createContest.AttendContest = function() {
      attendees = [{ [name]: { pick: [ ]} }]
    }

    //owner can attend

   for(var contest in listContests) {
     if(contest.state && contest.state === 'ended') {
       throw "Contest Ended......"
     }
     if(contest[id] === cid) {
      contest.attandees =  [{ [name] : { pick: [ ]} }];
     }

     if(contest[questions].length)  {
       /**
        * update users score
        */
      var threshold;
      /**
       * 
       * 
       * CAN BE POICKED FROM GLOBALS IN CONFIG 
       */
       if(contest.category === 'hard')
       threshold = 0
       // score['HARD'][threshold]
     }
     else if(contest.category === 'low') {
      threshold = 50;
     }
     else if(contest.category === 'medium') {
       threshold = 30;
     }



    //  score: {
    //    HARD: { threshold: 10000 },
    //    VERY_HARD: 'very hard'
    //  }

    /**
     * badges: {'5star': [1, 1000]}
     */


     var presentScore = contest.score - threshold;

     /**
      * current contest points
      */

     var totScore;
     for(var user in listUsers) { //
       if(user.name === contest.attandees.name) {
         totScore = user.score +  presentScore;
         user.score = totScore;
       }
     }


   }

   console.log('Contests attendee eppended: name: ', name);
  }
  q.attendContest({cid: '1', name: 'Joe'})


  runContest = function(cid, creator) {
    var q = new Contests(cid, creator);

    //validations

    //protype extension

    for(var contest in listContests) {
      if(contest[id] === cid && creator === contest.creator) {
       contest.state =  'started';
      }
    }

    console.log('Contests running.....');
  }
  
q.runContest({cid: '1', creator: 'Joe'});
