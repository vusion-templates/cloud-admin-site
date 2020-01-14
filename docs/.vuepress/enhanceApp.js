import { message, init } from './message';
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  new Vue({
    data() {
      return {
        message,
      };
    },
    mounted() {
      init();
    },
    watch: {
      'message.route'(route) {
        if (route) {
          if (!this.ready) {
            this.ready = true;
            router.onReady(() => {
              router.replace(this.message.route);
            });
          } else {
            router.replace(route);
          }
        }
      },
    },
  });
}