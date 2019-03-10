const fs = require("fs");
const path = require("path");
const File = require("../model").File;

const deleteFile = image => {
  const pathImg = path.resolve(__dirname, `../../../uploads/${image}`);
  if (fs.existsSync(pathImg)) {
    fs.unlinkSync(pathImg);
  }
};

exports.uploadImage = (id, name) =>
  new Promise((resolve, reject) => {
    const file = new File({
      file: name
    });
    File.create(file, (err1, userSave) => {
      if (err1) {
        const error = { data: err1, ok: false, code: 500 };
        return reject(error);
      }
      return resolve({
        ok: true,
        code: 200,
        data: userSave
      });
    });
  });
