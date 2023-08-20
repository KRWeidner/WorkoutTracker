const sequelize = require('../config/connection');
const { User, ExerciseList, UserWkOuts, WkOutRoutine, ExerciseImage } = require('../models');

 const userData = require('./userData.json');
 const exerciseData = require('./exerciseData.json');
 const userWkOutData = require('./userWkOutData.json');
 const seedRoutines = require('./rountineData.json');
 
//  Add: ~~ExerciseImageData
 const seedImageData = require('./exerciseImageData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

   const user = await User.bulkCreate(userData, {
     individualHooks: true,
     returning: true,
   });

  await WkOutRoutine.bulkCreate(seedRoutines, {
    individualHooks: true,
    returning: true,
  });
  
  await UserWkOuts.bulkCreate(userWkOutData, {
    individualHooks: true,
    returning: true,
  });
  
  await ExerciseList.bulkCreate(exerciseData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
