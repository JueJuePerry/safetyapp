import { database } from '../database/firebaseDb';

export const submitUser = (user) => {
  return new Promise(function (resolve, reject) {
    let data = {
      personal: {
        name: user.personal.name,
        phone: user.personal.phone,
        email: user.personal.email
      },
      contact1: {
        phone: user.contact1.phone,
        email: user.contact1.email
      },
      contact2: {
        phone: user.contact2.phone,
        email: user.contact2.email
      },
      contact3: {
        phone: user.contact3.phone,
        email: user.contact3.email
      },
      emergency: {
        text: user.emergency.text,
        location: user.emergency.location,
        picture: user.emergency.picture,
        video: user.emergency.video
      },
      conscious: {
        text: user.conscious.text,
        location: user.conscious.location,
        picture: user.conscious.picture,
        video: user.conscious.video
      }
    }
    let key = database().ref('users').push().key;
    database().ref('users/' + key + '/')
      .update(data)
      .then(snapshot => {
        resolve(snapshot)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const getUsers = () => {
  return new Promise(function (resolve, reject) {
    database()
      .ref('/users/')
      .on('value', function (snapshot) {
        console.log('User data: ', snapshot.val());

        const id = snapshot.key;
        const data = snapshot.val() || null;

        const id2 = Object.keys(data)[1];
        //   console.log("hhhhhhhhh" +  id2 + )

        //resolve(snapshot.val())
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const removeUser = (id) => {
  return new Promise(function (resolve, reject) {
    database()
      .ref('/users/' + id)
      .remove()
      .then(snapshot => {
        resolve(snapshot)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const removeAllUsers = () => {
  return new Promise(function (resolve, reject) {
    database()
      .ref('/users')
      .remove()
      .then(snapshot => {
        resolve(snapshot)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const getUserDataWithPhone = (phone) => {
  return new Promise(function (resolve, reject) {
    database().ref().child("users/").once("value", function (snapshot) {
      snapshot.forEach(function (child) {
        if (child.val().personal.phone == phone) {
          resolve(child.val())
        }
      });
      resolve(false)
    })
      .catch(err => {
        reject(err)
      })
  })
}

export const getUserKeyWithPhone = (phone) => {
  return new Promise(function (resolve, reject) {
    database().ref().child("users/").once("value", function (snapshot) {
      snapshot.forEach(function (child) {
        if (child.val().personal.phone == phone) {
          console.log("getUserKeyWithPhone>>" + child.key + " haha " + JSON.stringify(child.val()))
          resolve(child.val())
        }
      });
      resolve(false)
    })
      .catch(err => {
        reject(err)
      })
  })
}

export const checkDuplicateUser = (phone, title) => {
  let valid = true;
  return new Promise(function (resolve, reject) {

    if (title == 'Edit Profile')
      resolve(true)
    else {
      database().ref().child("users/").once("value", function (snapshot) {
        snapshot.forEach(function (child) {
          if (child.val().personal.phone == phone) {
            resolve(false)
          }
        });
        resolve(true)
      }).catch(err => {
        console.log("REJECTED")
        reject(err)
      })
    }
  })
}

export const updateUserWithPhone = (userData) => {
  return new Promise(function (resolve, reject) {
    database().ref().child("users/").once("value", function (snapshot) {
      snapshot.forEach(function (child) {
        if (child.val().personal.phone == userData.personal.phone) {
          console.log("getUserKeyWithPhone>>" + child.key)
          var updates = {};
          updates['/users/' + child.key] = userData;
          database().ref().update(updates)
          resolve(true);
        }
      });
    })
      .catch(err => {
        reject(err)
      })
  })
}
