<template>
  <v-card class="menu">
    <v-toolbar class="menu-head" color="light-blue">
      <v-img class="head-left" src="@/assets/logo.png" />
      <v-img v-show="!mini" class="head-right" src="@/assets/logotxt-zh.png" />
    </v-toolbar>

    <menu-list :menus="menus" />
  </v-card>
</template>
<script>
import MenuList from "@/components/MenuList";
import routes from "@/local/routes";
export default {
  props: {
    mini: {
      type: Boolean,
      default: false
    }
  },
  components: {
    MenuList
  },
  data() {
    return {
      menus: routes.menu
    };
  }
};
</script>
<style lang="scss" scoped>
.menu {
  border-radius: 0 !important;
  height: 100%;
  .menu-head {
    overflow: hidden;
    .head-left {
      max-width: 50px;
      margin-right: 8px;
    }
    .head-right {
      width: 110px;
    }
  }
}
</style>
