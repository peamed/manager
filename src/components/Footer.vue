<script>
import { VFooter } from "vuetify/lib";
export default {
  components: {
    VFooter
  },
  data() {
    return {
      inset: false
    };
  },
  render(h) {
    return h(VFooter, { attrs: { app: true }, props: { inset: this.inset } }, [
      h("span", { class: { "px-4": true } }, " " + new Date().getFullYear())
    ]);
  }
};
</script>
