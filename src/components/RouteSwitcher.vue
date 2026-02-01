<template>
  <div class="route-switcher-component">
     
    <div class="route-switcher">
      <img
        :src="activeRoute?.icon"
        class="icon active-icon"
        :alt="activeRoute?.name"
      />
      <button
        v-for="route in options"
        :key="route.name"
        class="route-btn"
        @click="go(route.path)"
      >
        <!-- SVGs must be rendered as images -->
        <img :src="route.icon" class="icon" :alt="route.name" />
      </button>
    </div>
  </div>
</template>

<script>
import { getActiveRouterData } from '@/data/RouteSwitcherContext.js'
export default {
  name: 'RouteSwitcher',
  mounted() {
    console.log('RouteSwitcher component mounted');
  },
  data() {
    return {
      routes: []
    };
  },
  computed: {
    options() {
      const routes = getActiveRouterData();
      const activeRoute = routes.find(route => this.$route.path === route.path);
      if (activeRoute) {
      routes.splice(routes.indexOf(activeRoute), 1);
      routes.splice(Math.floor(routes.length / 2), 0, activeRoute);
      }
      return routes;
    },
    activeRoute() {
      return this.options.find(route => this.$route.path === route.path);
    }
  },
  methods: {
    go(path) {
      if(!this.$router) return;
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
/* ================================
   Wrapper (bottom centered)
   ================================ */
.route-switcher-component {
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

/* ================================
   Route Switcher – Base (collapsed)
   ================================ */
.route-switcher {
  position: relative;

  width: 80px;
  height: 30px;

  background: rgba(11, 11, 11, 0.9);
  backdrop-filter: blur(10px);

  border-radius: 999px;
  padding: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  cursor: pointer;

    box-shadow:
      0 0 80px rgba(0, 220, 130, 0.3),
      0 0 160px rgba(54, 228, 218, 0.2);


  transition:
    width 0.45s cubic-bezier(.22,1,.36,1),
    height 0.45s cubic-bezier(.22,1,.36,1),
    padding 0.45s cubic-bezier(.22,1,.36,1),
    box-shadow 0.25s ease;
}

/* ================================
   Outer radial glow
   ================================ */
.route-switcher::before {
  content: "";
  position: absolute;
  width: 520px;
  height: 620px;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);


  filter: blur(80px);
  opacity: 0;

  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: -2;
}

.route-switcher-component::before {
  content: "";
  position: absolute;

  width: 520px;
  height: 620px;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background: radial-gradient(
    circle,
    rgba(160, 255, 235, 0.55) 0%,
    rgba(160, 255, 235, 0.35) 25%,
    rgba(160, 255, 235, 0.18) 45%,
    rgba(160, 255, 235, 0.08) 60%,
    transparent 70%
  );

  filter: blur(80px);
  opacity: 0;

  transition: opacity 0.5s ease;
  pointer-events: none;

  z-index: -1;
}

.route-switcher-component:hover::before {
  opacity: 1;
}
.active-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  opacity: 1;
  transition: opacity 0.2s ease;

  z-index: 2;
}

.route-switcher:hover .active-icon {
  opacity: 0;
}


/* ================================
   Gradient edge glow
   ================================ */
.route-switcher::after {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  filter: blur(6px);
  opacity: 0;
  transition: opacity 0.15s ease;
  z-index: -2;
}

/* ================================
   Expanded state (hover)
   ================================ */
.route-switcher:hover {
  width: 200px;
  height: 38px;
  padding: 10px 30px 10px 30px;
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.25);
}

.route-switcher:hover::before {
  opacity: 1;
}

/* ================================
   Route buttons
   ================================ */
.route-btn {
  width: 50px;
  height: 34px;
  border-radius: 50%;

  background: transparent;
  border: none;

  display: grid;
  place-items: center;

  cursor: pointer;
  color: #7a7a7a;

  opacity: 0;
  transform: scale(0.8) translateY(6px);

  transition:
    opacity 0.25s ease,
    transform 0.25s cubic-bezier(.22,1,.36,1),
    background 0.2s ease,
    color 0.2s ease;

  transition-delay: 0s;
}
.route-switcher:hover .icon {
  transition-delay: 0s; 
  opacity: 1;
}

/* Reveal buttons on hover */
.route-switcher:hover .route-btn {
  opacity: 1;
  transform: scale(1) translateY(0);
  transition-delay: 0.1s;
}

/* Button hover */
.route-btn:hover {
  background: rgba(255, 255, 255, 0.08);
}

/* ================================
   Icon styling
   ================================ */
.icon {
  width: 28px;
  height: 18px;
  pointer-events: none;
}
</style>
