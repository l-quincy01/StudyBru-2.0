/*

const fileSchema = new mongoose.Schema({
  filePath: String,
  title: String,
  subjectTitle: String,
  setsTitle: String,
  uploadedAt: { type: Date, default: Date.now },
});

*/

/* SCHEMA

const moduleSchema = new mongoose.Schema({

  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  dateCreated: { type: Date, default: Date.now },
  filePath: String,
  subjectModuleTitle: String,
  setTitle: [String],
  notes: {[]}
  });
const subjectModule = mongoose.model("SubjectModule", placeSchema);

const notesSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  moduleID : { type: mongoose.Schema.Types.ObjectId, ref: "subjectModule" },
  setsParent : { type: mongoose.Schema.Types.ObjectId, ref: "Module -> setsTitle" },
  filePath: String,
  title: String,
  thumbnailURL: String,
  dateAdded: { type: Date, default: Date.now },


  });

*/
