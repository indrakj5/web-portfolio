// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faSquarePhoneFlip,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGitlab,
  faInstagram,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add([
  faBars,
  faGithub,
  faGitlab,
  faInstagram,
  faLinkedin,
  faTwitter,
  faSquarePhoneFlip,
  faEnvelope
]);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
