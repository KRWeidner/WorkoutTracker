const User = require('./User');
const UserWkOuts = require('./UserWkOuts');
const WkOutRoutine = require('./WkOutRoutine');
const ExerciseList = require('./ExerciseList');
const ExerciseImage = require('./ExerciseImages');

//BELONGSTO, HASMANY, BELONGS TO MANY LOGIC
 User.hasMany(UserWkOuts, {
     foreignKey: 'userId',
     onDelete: 'CASCADE'
 });

 UserWkOuts.belongsTo(User, {
     foreignKey: 'userId'
 });

 WkOutRoutine.hasMany(UserWkOuts, {
     foreignKey: 'routineId',
     onDelete: 'CASCADE'
 })

 UserWkOuts.belongsTo(WkOutRoutine, {
     foreignKey: 'routineId'
 });

 WkOutRoutine.hasMany(ExerciseList, {
     foreignKey: 'routineId',
     onDelete: 'CASCADE'
 })

 ExerciseList.belongsTo(WkOutRoutine, {
     foreignKey: 'routineId'
 });

 ExerciseList.hasMany(ExerciseImage, {
    foreignKey: 'exercise_id'
 });

 ExerciseImage.belongsTo(ExerciseList, {
    foreignKey: 'exercise_id'
});



module.exports = {
    User,
    UserWkOuts,
    WkOutRoutine,
    ExerciseList,
    ExerciseImage
};
