<template>
  <div class="about">
    <div class="content">
      <h2 class="accent">{{ source.about.title }}</h2>
      <h1 class="title">{{ source.about.subtitle }}</h1>
      <div class="expertise">
        {{ source.about.expertise }}
      </div>
      <div class="subtitle">
        {{ source.about.description }}
      </div>
      <ContactActions
        :contact="contactInfo"
       />
    </div>
  </div>
</template>

<script>
import ContactActions from './ContactActions.vue';

export default {
  name: "IntroWidgetContainer",
  data() {
    return {
      
    };
  },
  props: {
    source: {
      type: Object,
      required: true,
    },
  },
  components: {
    ContactActions,
  },
  computed: {
    contactInfo() {
      return this.source?.about?.contact || {};
    }
  },
  methods: {
    // Add methods here
  },
  mounted() {
    console.log("IntroWidgetContainer component mounted", this.source);
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
}

.accent {
  font-family: "Pacifico", cursive;
  font-size: 56px;
  color: #00987b;
  margin-bottom: -20px;
}

.about {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 96px;
  font-weight: 900;
  line-height: 0.95;
  margin: 0;
}

.subtitle {
  margin-top: 30px;
  font-size: 18px;
  max-width: 600px;
  color: #333;
}

.expertise {
  margin-top: 20px;
  font-size: 28px;
  max-width: 600px;
  color: grey;
  font-weight: 500;
}
</style>
