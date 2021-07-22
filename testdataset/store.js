

//local datastore

module.exports.users = 
  [ {
    //old
    id: 'USER-1',
    name: 'joe',
    gender: 'M',
    score: 4000
  },
 
  {
    //new
    id: 'USER-2',
    name: 'monica',
    gender: 'F',
    score: 1500
  }
  ]


  module.exports.questions = 
  [ {
    category: hard,
    qid: 2,
    score: 150
  },
  {
    category: low,
    qid: 0,
    score: 50
  }
  ]


  module.exports.contests = 
  [ {
    id: '1',
    name: 'sunday lunch',
    category: hard,
    creator: 'Joe',
    state: 'started',
    questions: ['q1'],
    attendees: [{ 'anshika' : { pick: [ ]} }]
  },
  {
    id: '2',
    name: 'sunday dinner',
    category: hard,
    creator: 'Monica',
    state: 'ended',
    questions: ['q1', 'q2'],
    attendees: [{ 'anshika' : { pick: [ 1, 4, 6 ]} }]
  }
  ]


  //contest -> questions append


