let Sequelize = require('sequelize');
let db = require('../config/database');

let User = db.define('user', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  height: {
    type: Sequelize.STRING,
    allowNull: true
  },
  weight: {
    type: Sequelize.STRING,
    allowNull: true
  },
  eyeColor: {
    type: Sequelize.STRING,
    allowNull: true
  },
  hairColor: {
    type: Sequelize.STRING,
    allowNull: true
  },
  emergencyContactNames: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: true
  },
  emergencyContactNumbers: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: true
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
  },
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
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false
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


let Vehicle = db.define('vehicle', {
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

User.hasMany(Emergency, { foreignKey: 'emergenciable_id', allowNull: false, onDelete: 'CASCADE' });
Emergency.belongsTo(User, { foreignKey: 'emergenciable_id', allowNull: false, onDelete: 'CASCADE' });

Location.hasMany(Home, { foreignKey: 'location_id', allowNull: false, onDelete: 'CASCADE' });
Home.belongsTo(Location, { foreignKey: 'location_id', allowNull: false, onDelete: 'CASCADE' });
Location.hasMany(Vehicle, { foreignKey: 'location_id', allowNull: false, onDelete: 'CASCADE' });
Vehicle.belongsTo(Location, { foreignKey: 'location_id', allowNull: false, onDelete: 'CASCADE' });

Emergency.hasMany(Fatal, { foreignKey: 'emergenciable_id', allowNull: false, onDelete: 'CASCADE' });
Fatal.belongsTo(Emergency, { foreignKey: 'emergenciable_id', allowNull: false, onDelete: 'CASCADE' });

Emergency.hasMany(Theft, { foreignKey: 'emergenciable_id', allowNull: false, onDelete: 'CASCADE' });
Theft.belongsTo(Emergency, { foreignKey: 'emergenciable_id', allowNull: false, onDelete: 'CASCADE' });

Emergency.hasMany(Concern, { foreignKey: 'emergenciable_id', allowNull: false, onDelete: 'CASCADE' });
Concern.belongsTo(Emergency, { foreignKey: 'emergenciable_id', allowNull: false, onDelete: 'CASCADE' });

// User.sync({force: true})
//   .then(() => Location.sync({force: true}))
//   .then(() => Home.sync({force: true}))
//   .then(() => Vehicle.sync({force: true}))
//   .then(() => Emergency.sync({force: true}))
//   .then(() => Fatal.sync({force: true}))
//   .then(() => Theft.sync({force: true}))
//   .then(() => Concern.sync({force: true}))
//   .then(() => console.log("successfully connected to database"))
//   .catch((err) => console.log("error connecting to database", err));

module.exports = { User, Location, Home, Vehicle, Emergency, Fatal, Theft, Concern };
