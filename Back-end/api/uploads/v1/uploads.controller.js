const path = require("path");
const Services = require("./uploads.services");

exports.updates = (req, res) => {
  if (!req.files) {
    return res.status(400).json({
      ok: false,
      err: {
        message: "No files were uploaded."
      }
    });
  }

  const files = req.files.archivo;
  const nameFileSplit = files.name.split(".");
  const extention = nameFileSplit[nameFileSplit.length - 1];

  // extensiones permitidas
  const extentionOk = ["png", "jpg", "jpeg", "pdf"];

  if (extentionOk.indexOf(extention) < 0) {
    return res.status(400).json({
      ok: false,
      err: {
        message: `La extension del archivo no es valida. las permitidas son ${extentionOk.join(
          ", "
        )}`,
        extention
      }
    });
  }

  // cambiar nombre al archivo
  const nameArchivo = `${new Date().getMilliseconds()}.${extention}`;

  // Use the mv() method to place the file somewhere on your server
  return files.mv(
    path.resolve(__dirname, `../../uploads/${nameArchivo}`),
    err => {
      if (err) {
        res.status(500).json({
          ok: false,
          err
        });
      }

      Services.uploadImage(id, nameArchivo)
        .then(ok => {
          console.log(ok);
          return res.json(ok);
        })
        .catch(ok => {
          if (ok.status === 500) {
            const ok1 = ok;
            delete ok1.status;
            return res.status(500).json(ok1);
          }
          const ok1 = ok;
          delete ok1.status;
          return res.status(400).json(ok1);
        });
    }
  );
};
