<template>
  <div class="home-container">
    <div class="about">
      <div class="content">
      <h2 class="accent">{{ source.about.title }}</h2>
      <h1 class="title">{{ source.about.subtitle }}</h1>

      <div class="subtitle">
        {{ source.about.description }}
      </div>

      <div class="cta">
        <span v-for="value in source.about.skills" class="tag">{{ value }}{{ value !== source.about.skills[source.about.skills.length - 1] ? ' · ' : '' }}</span>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import { getIntroData } from '@/data/IntroData';

export default {
  name: 'HomeView',
  data() {
    return {
      introData : null,
    };
  },
  computed: {
    source() {
      return getIntroData();
    }
  },
  methods: {
    //

  },
  created() {
    console.log('Home component created');
  },
  mounted() {
    console.log('Home component mounted');
  },
};
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: #f7f1e6;
  padding: 40px 60px;
  /* display: flex;
  flex-direction: column; */
  /* align-items: center; */
  justify-content: center;
  font-family: 'Inter', sans-serif;
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
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
}

.accent {
  font-family: 'Pacifico', cursive;
  font-size: 56px;
  color: #b23a48;
  margin-bottom: -20px;
}

.about{
  text-align: center;
  margin-top: 100px;
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

/* Tag */
.cta {
  margin-top: 25px;
  display: inline-block;
  border: 2px solid #000;
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

