<template>
  <div class="home-container">
    <div class="about">
      <div class="content">
      <h2 class="accent">building</h2>
      <h1 class="title">SOFTWARE</h1>
      <h1 class="title">EXPERIENCES</h1>

      <div class="subtitle">
        Hi, I’m <strong>Bhawesh</strong> — a software developer who loves
        turning complex problems into scalable, elegant, and user-focused solutions.
      </div>

      <div class="cta">
        <span class="tag">Vue.js · JavaScript · Backend · Android</span>
      </div>
    </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: 'HomeView',
  data() {
    return {
      introData : null,
    };
  },
  computed: {
    //
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
}

.tag {
  display: inline-block;
  border: 2px solid #000;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 600;
}
</style>

