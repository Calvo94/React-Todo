import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyDCHf-av2RwkwSc68bG1fBprEntU3PJBLI",
      authDomain: "mead-todo-app-8e187.firebaseapp.com",
      databaseURL: "https://mead-todo-app-8e187.firebaseio.com",
      projectId: "mead-todo-app-8e187",
      storageBucket: "mead-todo-app-8e187.appspot.com",
  };
  firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;
