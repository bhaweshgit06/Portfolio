<template>
  <div class="main-container">
    <!-- <AboutComponentView  /> -->
     <div class="home-container">
        <IntroWidgetContainer :source="source" />
     </div>
     <div class="skills-container">
      <SkillsWidgetContainer :source="source" />
     </div>
     <div class="home-container">
        <IntroWidgetContainer :source="source" />
     </div>
     <div class="home-container">
        <IntroWidgetContainer :source="source" />
     </div>
     <div class="home-container">
        <IntroWidgetContainer :source="source" />
     </div>
   
  </div>
</template>
<script>
import { getPortFolioInfo } from "@/data/IntroData";
import IntroWidgetContainer from "@/components/intro-widget-container.vue";
import AboutComponentView from "@/components/AboutComponentView.vue";
import SkillsWidgetContainer from "@/components/SkillsWidgetContainer.vue";

export default {
  name: "HomeView",
  data() {
    return {
      introData: null,
    };
  },
  computed: {
    source() {
      return getPortFolioInfo();
    },
  },
  methods: {
    //
  },
  components: {
    IntroWidgetContainer,
    AboutComponentView,
    SkillsWidgetContainer
  },
  created() {
    console.log("Home component created");
  },
  mounted() {
    console.log("Home component mounted");
  },
};
</script>

<style scoped>
.main-container {
  min-height: 100vh;
  background: #f7f1e6;
  /* display: flex;
  flex-direction: column; */
  /* align-items: center; */
  justify-content: center;
  font-family: "Inter", sans-serif;
}

.template-label {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
}

.menu {
  font-size: 18px;
}

/* Main content */


/* Tag */
.cta {
  margin-top: 25px;
  display: inline-block;
  border: 2px solid #b0dfd8;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 600;
}

.tag {
  display: inline-block;
  padding: 0px 0px 0px 4px;
  border-radius: 4px;
}
</style>
