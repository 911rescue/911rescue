let Sequelize = require('sequelize');
let db = require('../config/database');

let User = db.define('user', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  height: {
    type: Sequelize.STRING,
    allowNull: false
  },
  weight: {
    type: Sequelize.STRING,
    allowNull: false
  },
  eyeColor: {
    type: Sequelize.STRING,
    allowNull: false
  },
  hairColor: {
    type: Sequelize.STRING,
    allowNull: false
  },
  emergencyContactNames: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  },
  emergencyContactNumbers: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  },
  callbackContactNumber: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  latitude: {
    type: Sequelize.DECIMAL(10, 6),
    allowNull: true
  },
  longitude: {
    type: Sequelize.DECIMAL(10, 6),
    allowNull: true
  }
  passportNumber: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  driversLicense: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  governmentIdentificationCard: {
    type: Sequelize.TEXT,
    allowNull: true
  }
});


let Location = db.define('location', {
  latitude: {
    type: Sequelize.DECIMAL(10, 6),
    allowNull: false
  },
  longitude: {
    type: Sequelize.DECIMAL(10, 6),
    allowNull: false
  }
});


let Home = db.define('home', {
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  majorX: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  },
  location_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});


let Vehichle = db.define('vehichle', {
  licensePlate: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  state: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  majorX: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  },
  location_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});



let Emergency = db.define('emergency', {
  emergenciable_string: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  emergenciable_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  location_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});



let Fatal = db.define('fatal', {
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});


let Theft = db.define('theft', {
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});


let Concern = db.define('concern', {
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});




// User.sync({force: true})
//   .then(() => Location.sync({force: true}))
//   .then(() => Home.sync({force: true}))
//   .then(() => Vehichle.sync({force: true}))
//   .then(() => Emergency.sync({force: true}))
//   .then(() => Fatal.sync({force: true}))
//   .then(() => Theft.sync({force: true}))
//   .then(() => Concern.sync({force: true}))
//   .then(() => console.log("SHIT FUCKING WORKS MOTHER FUCKER!! ;)"))
//   .catch((err) => console.log("YOU ARE CHOKING ON A FAT DICK FIX IT BRO!!!!"));


