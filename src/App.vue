/* eslint-disable prettier/prettier */
<template>
  <v-app class="grey darken-4">
    <core-app-bar />

    <core-drawer />

    <core-view />

    <core-friends />
  </v-app>
</template>

<script>
export default {
  components: {
    // eslint-disable-next-line prettier/prettier
    CoreAppBar: () => import('@/components/core/AppBar'),
    CoreDrawer: () => import("@/components/core/Drawer"),
    CoreFriends: () => import("@/components/core/Friends"),
    CoreView: () => import("@/components/core/View"),
  },
};
</script>

<style>
.v-card {
  border-radius: 6px;
}
a {
  text-decoration: none;
}
</style>
