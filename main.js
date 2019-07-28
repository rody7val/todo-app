// Initialize Firebase.
const db = firebase.initializeApp({
  apiKey: "AIzaSyBHWTQ4TEph5O533Y_0HS2rlrepV6bSmm4",
  authDomain: "todo-app-c43a7.firebaseapp.com",
  databaseURL: "https://todo-app-c43a7.firebaseio.com",
  projectId: "todo-app-c43a7",
  storageBucket: "todo-app-c43a7.appspot.com",
  messagingSenderId: "878779951806",
  appId: "1:878779951806:web:66f2c8b8f5598a90"
}).firestore();

Vue.use(db);

new Vue({
  el: "#app",
  firestore() {
     return {
       persons: db.collection("persons")
     }
  },
  data(){
    return {
      person: {
        name: ""
      }
    }
  },
  methods: {
    add() {
      this.$firestore.persons.add(this.person)
      .then(()=>{
        this.person.name = ""
      })
    },
    remove(e) {
      this.$firestore.persons.doc(e['.key']).delete()
    }
  }
})