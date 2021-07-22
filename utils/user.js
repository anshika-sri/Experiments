
var listUsers = require('./../../testdataset/store').users;

class User {

  /**
   * properties
   * functions
   */

  constructor(name, age, gender, country, score = 1500) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.country = country;
    this.score = score;
  }


  // to paint user from local datastrore
  getUser = function(name) {

    //validations

    /**
     * error handling 
     */
    for(var user in list) {
      if(! user.name) {
        var bErr = true;
        err = new Errors.BadRequest('Not found');
        throw err;
      }
    }
  }


  getUsers = function(sort = asc) {

    //validations

    var Scrores = [];
    for(var user in users) {
      Scrores.push(user.score);
      Array.sort(Scrores);
    }

    console.log('printing leader board');
   
  }


  createUser = function(name) {

    //validations

    var user = new User(name);
    listUsers.push({
      name: name
      //other properties
    })
    console.log('User created succesfully: user: ', user);
  }
}

User.createUser("anshika");
User.getUser("anshika");


/**
 * dynamodb
 * 
 * 
 * 1. 
 */
