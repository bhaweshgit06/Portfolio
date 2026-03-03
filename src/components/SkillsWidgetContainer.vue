<template>
  <section ref="sectionRef" class="skills-section">
    <!-- Header -->
    <div class="skills-header">
      <h2 class="title">Skills & Technologies</h2>
      <div class="underline"></div>
      <p class="subtitle">
        Proficient in modern technologies and frameworks to build scalable applications.
      </p>
    </div>

    <!-- Grid -->
    <div class="skills-grid">
      <div
        v-for="(skill, i) in skills"
        :key="skill.name"
        class="skill-card"
        :style="{ animationDelay: i * 0.15 + 's' }"
      >
        <div class="icon-box">
          <component :is="skill.icon" class="icon" />
        </div>
        <h3 class="skill-name">{{ skill.name }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Code2, TerminalSquare, Layers3, Palette } from "lucide-vue-next";

const skills = [
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: TerminalSquare },
  { name: "Next.js", icon: Layers3 },
  { name: "Tailwind CSS", icon: Palette },
];
</script>

<style scoped>
/* ===== Section background ===== */
.skills-section {
  padding: 120px 24px;
  background: linear-gradient(180deg, #e8e3d6 0%, #f3efe6 100%);
  text-align: center;
}

/* ===== Header ===== */
.skills-header {
  max-width: 900px;
  margin: 0 auto 80px;
}

.title {
  font-size: 56px;
  font-weight: 800;
  color: #2f2a26;
  margin-bottom: 18px;
}

.underline {
  width: 180px;
  height: 6px;
  background: #0f766e;
  margin: 0 auto 24px;
  border-radius: 999px;

  /* grow animation */
  transform: scaleX(0);
  transform-origin: center;
  animation: growLine 0.8s ease forwards 0.3s;
}

.subtitle {
  font-size: 22px;
  color: #5f5a55;
  line-height: 1.6;
}

/* ===== Grid ===== */
.skills-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
}

/* ===== Card ===== */
.skill-card {
  padding: 60px 20px;
  border-radius: 36px;
  border: 3px solid rgba(148, 163, 159, 0.5);

  background: linear-gradient(145deg, #ffffffcc, #dfe6df99);
  backdrop-filter: blur(10px);

  transition: transform 0.4s ease, box-shadow 0.4s ease;

  /* entrance animation */
  opacity: 0;
  transform: translateY(50px);
  animation: fadeUp 0.7s ease forwards;
}

.skill-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}

/* ===== Icon ===== */
.icon-box {
  width: 110px;
  height: 110px;
  margin: 0 auto 26px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 28px;
  border: 2px solid rgba(148, 163, 159, 0.5);
  background: rgba(240, 253, 250, 0.7);

  transition: transform 0.4s ease, background 0.4s ease;
}

.skill-card:hover .icon-box {
  transform: scale(1.1);
  background: rgba(204, 251, 241, 0.9);
}

.icon {
  width: 48px;
  height: 48px;
  color: #0f766e;
}

/* ===== Text ===== */
.skill-name {
  font-size: 28px;
  font-weight: 600;
  color: #44403c;
}

/* ===== Animations ===== */
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes growLine {
  to {
    transform: scaleX(1);
  }
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .title {
    font-size: 40px;
  }

  .subtitle {
    font-size: 18px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
