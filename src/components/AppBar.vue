<script>
import { VAppBar, VAppBarNavIcon, VToolbarTitle } from "vuetify/lib";
export default {
  props: {
    mini: {
      type: Boolean,
      default: false
    }
  },
  components: {
    VAppBar,
    VAppBarNavIcon,
    VToolbarTitle
  },
  render(h) {
    const that = this;
    return h(VAppBar, { attrs: { app: true } }, [
      h(VAppBarNavIcon, {
        on: {
          click: function(e) {
            that.$emit("update:mini", !that.mini);
            e.stopPropagation();
          }
        }
      }),
      h(VToolbarTitle, "SANYI")
    ]);
  }
};
</script>
