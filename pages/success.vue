<script setup lang="ts">

import liff from "@line/liff";

const userId = ref<string>("");
const displayName = ref<string>("");
const pictureUrl = ref<string>("");
const statusMessage = ref<string>("");
onMounted(() => {
  liff.ready.then(() => {
    liff.getProfile().then((profile) => {
      console.log(profile)
      const {userId, displayName, pictureUrl, statusMessage} = profile
      userId.value = userId
      displayName.value = displayName
      pictureUrl.value = pictureUrl
      statusMessage.value = statusMessage
    })
  })
})
</script>

<template>
  <img :src="pictureUrl">
  {{ userId }}
  {{ displayName }}
  {{ statusMessage }}
</template>

<style scoped>

</style>