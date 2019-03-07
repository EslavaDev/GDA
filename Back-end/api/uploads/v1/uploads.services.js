const fs = require('fs');
const path = require('path');
const Client = require('../client/client.model');
const Worker = require('../worker/worker.model');
const ServicePost = require('../servicePost/servicePost.model');

const deleteFile = (image, type) => {
  const pathImg = path.resolve(__dirname, `../../uploads/${type}/${image}`);
  if (fs.existsSync(pathImg)) {
    fs.unlinkSync(pathImg);
  }
};

exports.imageUser = (id, name) => new Promise((resolve, reject) => {
  Client.findById(id, (err, userDB) => {
    if (err) {
      deleteFile(name, 'client');
      const error = { err, ok: false, status: 500 };
      return reject(error);
    }
    if (!userDB) {
      deleteFile(name, 'client');
      const error = { err: { message: 'Usuario no existe' }, ok: false, status: 400 };
      return reject(error);
    }

    deleteFile(userDB.img, 'client');
    const user = user.document
    return Client.update((err1, userSave) => {
      if (err1) {
        const error = { err: err1, ok: false, status: 500 };
        return reject(error);
      }
      return resolve({
        ok: true,
        userSave,
        img: name,
      });
    });
  });
});

exports.imageWorker = (id, name) => new Promise((resolve, reject) => {
  Worker.findById(id, (err, userDB) => {
    if (err) {
      deleteFile(name, 'worker');
      const error = { err, ok: false, status: 500 };
      return reject(error);
    }
    if (!userDB) {
      deleteFile(name, 'worker');
      const error = { err: { message: 'Worker no existe' }, ok: false, status: 400 };
      return reject(error);
    }

    deleteFile(userDB.img, 'worker');
    const user = userDB;
    user.img = name;
    return user.save((err1, userSave) => {
      if (err1) {
        const error = { err: err1, ok: false, status: 500 };
        return reject(error);
      }
      return resolve({
        ok: true,
        userSave,
        img: name,
      });
    });
  });
});

exports.imageServicePost = (id, name) => new Promise((resolve, reject) => {
  ServicePost.findById(id, (err, serviceDB) => {
    if (err) {
      deleteFile(name, 'servicePost');
      const error = { err, ok: false, status: 500 };
      return reject(error);
    }
    if (!serviceDB) {
      deleteFile(name, 'servicePost');
      const error = { err: { message: 'servicio no existe' }, ok: false, status: 400 };
      return reject(error);
    }

    deleteFile(serviceDB.img, 'servicePost');
    const service = serviceDB;
    service.img = name;
    return service.save((err1, serviceSave) => {
      if (err1) {
        const error = { err: err1, ok: false, status: 500 };
        return reject(error);
      }
      return resolve({
        ok: true,
        serviceSave,
        img: name,
      });
    });
  });
});