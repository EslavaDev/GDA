const mognoose = require("mongoose");

const Schema = mognoose.Schema;

const FileSchema = new Schema({
  file: { type: string, default: "", required: true }
});

const File = mognoose.model("file", FileSchema);

exports.File = File;
