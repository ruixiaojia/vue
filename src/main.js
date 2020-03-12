import Vue from 'vue'
import App from './App.vue'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Performance Monitoring library
import "firebase/performance";


Vue.config.productionTip = false

// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
  apiKey: "AIzaSyAlQdp7X9qUGupdAUf3aoHuAEml66-78-w",
  authDomain: "vue-demo-c015e.firebaseapp.com",
  databaseURL: "https://vue-demo-c015e.firebaseio.com",
  projectId: "vue-demo-c015e",
  storageBucket: "vue-demo-c015e.appspot.com",
  messagingSenderId: "695163518665",
  appId: "1:695163518665:web:6abee757ee5a706e64d718",
  measurementId: "G-2XC7S2NJG3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Performance Monitoring and get a reference to the service
const perf = firebase.performance();

const trace = perf.trace('customTraceName');

trace.start();
setTimeout(()=>{
  trace.stop();
},2000)

trace.incrementMetric('numberOfIds', "315");


new Vue({
  render: h => h(App),
}).$mount('#app')
