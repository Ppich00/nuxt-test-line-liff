<template>
  <button @click="login()">log in</button>
  {{ version }}
  {{ sdkVersion }}
  {{ liffError }}
</template>

<style>

</style>

<script>
import packageJson from "../package.json";
import liff from "@line/liff";

export default {
  data: function () {
    return {
      version: packageJson.version,
      sdkVersion: "",
      liffError: ""
    };
  },
  methods: {
    login() {
      liff.login();
    },
  },
  mounted() {
    // mounted() is rendered when DOM is rendered
    // wait liff.init()

  }
};
</script>