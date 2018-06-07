// var mongoose = require('mongoose');
// var findOneOrCreate = require('mongoose-find-one-or-create');

// var Schema = mongoose.Schema;

// var users = new Schema({
//     _id: {
//         type: String
//             //default:Math.random().toString(36).substring(7)+(+new Date())
//     },
//     password: {
//         type: String
//     },
//     first_name: String,
//     last_name: String,
//     email: {
//         type: String,
//         validate: {
//             validator: function(v) {
//                 //return /\d{3}-\d{3}-\d{4}/.test(v);
//                 return true;
//             }
//         }
//     },
//     avatar: String,
//     country_code: String,
//     gender: {
//         type: String
 
//     },
//     birth_day: Number,
//     birth_month: Number,
//     birth_year: Number,
//     phone: {
//         type: String,
//         validate: {
//             validator: function(v) {
//                 //return /\d{3}-\d{3}-\d{4}/.test(v);
//                 return true;
//             }
//         }
//     },
//     childeren: [],
//     points: {
//         type: Number,
//         default: 0
//     },
//     dev_token: String,
//  reboot: {
//         type: Number,
//         default: 0
//     }
// });
// users.plugin(findOneOrCreate);
// mongoose.model("users", users);
// let TaskModel = mongoose.model('tasks');
// let InvitationModel = mongoose.model("invitations");
// let RecurringTasksModel = mongoose.model("recurringTasks");

// users.post('remove', function(doc, next) {
//     TaskModel.remove({ $or: [{ child: doc._id }, { parent: doc._id }] }, (err, rs) => {})
//     RecurringTasksModel.remove({ $or: [{ child: doc._id }, { parent: doc._id }] }, (err, rs) => {})
//     InvitationModel.remove({ $or: [{ from: doc._id }, { to: doc._id }] }, (err, rs) => {})
//     next();
// });