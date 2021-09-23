<template>
  <v-hover v-model="hover">
    <div class="txt">
      <div>123</div>
      <div class="price">$123</div>
    </div>
  </v-hover>
</template>

<script>
  // Utilities
  import {
    mapActions,
    mapState,
    mapMutations,
  } from 'vuex'

  export default {
    name: 'LibraryLaunchAction',

    props: {
      value: {
        type: Object,
        default: () => ({}),
      },
    },

    data: () => ({
      autoUpdate: true,
      dialog: false,
      hover: false,
      hoverInner: false,
      menu: false,
    }),

    computed: {
      ...mapState('library', ['installed']),
      ...mapState('verify', ['verifying']),
    },

    watch: {
      dialog () {
        setTimeout(() => (this.dialog = false), 4000)
      },
    },

    methods: {
      ...mapActions('verify', ['verifyInstall']),
      ...mapMutations('snackbar', [
        'setSnackbar',
        'setValue',
      ]),
      ...mapMutations('library', ['setInstalled']),
      createShortcut () {
        this.menu = false
        this.setSnackbar({
          msg: 'Shortcut created',
        })
        this.setValue(true)
      },
      launch () {
        this.dialog = true
      },
      async verify () {
        this.menu = false
        this.hover = false

        await this.$nextTick()

        this.verifyInstall(this.value.id)
      },
      uninstall () {
        this.menu = false
        this.hover = false

        const installed = this.installed

        this.setInstalled(installed.filter(id => id !== this.value.id))
      },
    },
  }
</script>

<style lang="scss">
.txt{
  height: 40px;
  line-height: 40px;
  margin: 2px 20px;
  display: flex;
}
.price{
  margin-left: auto;
}
</style>
