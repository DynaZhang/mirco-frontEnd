<template>
  <div class="energy-container">
    <div class="energy-content">
      <VTabs />
      <car-list />
      <car-swapper />
      <ad-banner />
      <news-list />
    </div>
  </div>
</template>

<script>
import VTabs from "../../components/v-tabs";
import CarList from "./components/car-list";
import CarSwapper from "./components/car-swapper";
import AdBanner from "./components/ad-banner";
import NewsList from "./components/news-list";
export default {
  name: "index",
  components: {
    NewsList,
    AdBanner,
    CarSwapper,
    CarList,
    VTabs
  }
}
</script>

<style lang="scss" scoped>
.energy {
  &-container {
    width: 100%;
  }
  &-content {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
