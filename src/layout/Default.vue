<template>
  <v-app id="sandbox">
    <v-navigation-drawer
      app
      overflow
      v-model="model"
      :mini-variant.sync="mini"
      :mini-variant-width="minW"
    >
      <p-menu :mini="mini" />
    </v-navigation-drawer>
    <p-app-bar :mini.sync="mini" />

    <v-content>
      <v-container fluid>
        <p-test></p-test>
      </v-container>
    </v-content>

    <p-footer />
  </v-app>
</template>

<script>
import PMenu from "@/components/Menu";
import PAppBar from "@/components/AppBar";
import PFooter from "@/components/Footer";
import PTest from "@/components/Test";
export default {
  components: {
    PMenu,
    PAppBar,
    PFooter,
    PTest
  },
  data: () => ({
    model: null,
    mini: false,
    minW: 70
  })
};
</script>
