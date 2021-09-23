<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    class="grey darken-4"
    floating
    width="200"
  >
    <v-list
    dense
    rounded
    color="transparent">
      <v-list-item class="mb-4">
        <v-list-item-avatar tile>
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
            contain
          />
        </v-list-item-avatar>

        <v-list-item-title>Tisnsuy</v-list-item-title>
      </v-list-item>

      <template v-for="(item, i) in items">
        <v-list-item
          v-if="!item.spacer"
          :key="`tile-${i}`"
          :to="item.to"
          :value="item.value"
          color="grey"
          exact
          v-on="
            item.click && {
              click: item.click,
            }
          "
        >
          <v-list-item-avatar>
            <v-icon style="color: inherit" v-text="item.icon" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="item.text" />
          </v-list-item-content>
        </v-list-item>

        <div v-else :key="`divider-${i}`" class="my-auto" />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapMutations, mapState } from "vuex";

export default {
  name: "CoreDrawer",

  computed: {
    ...mapState("downloads", {
      downloadDrawer: "drawer",
    }),
    drawer: {
      get() {
        return this.$store.state.app.drawer;
      },
      set(val) {
        this.setDrawer(val);
      },
    },
    items() {
      return [
        {
          icon: "mdi-home-variant",
          text: "首页",
          to: "/",
        },
        {
          icon: "mdi-fire",
          text: "分类浏览",
          to: "/store",
        },
      ];
    },
  },

  methods: {
    ...mapMutations("app", ["setDrawer"]),
    ...mapMutations("downloads", {
      toggleDownloadDrawer: "toggleDrawer",
    }),
  },
};
</script>
