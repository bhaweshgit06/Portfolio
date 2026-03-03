<template>
  <section class="contact-actions">
    <!-- Buttons -->
    <div class="buttons">
      <button class="btn primary" @click="goToContact">Get in touch</button>

      <button class="btn secondary" @click="goToWork">View work</button>
    </div>

    <!-- Social / Contact icons -->
    <div class="socials" v-if="contact != null">
      <a
        :href="contact?.github"
        target="_blank"
        aria-label="GitHub"
      >
        <i class="icon github"></i>
      </a>

      <a
        :href="contact?.linkedin"
        target="_blank"
        aria-label="LinkedIn"
      >
        <i class="icon linkedin"></i>
      </a>

      <a :href="`mailto:${contact?.email}`" aria-label="Email">
        <i class="icon mail"></i>
      </a>
    </div>

    <!-- Down arrow -->
    <div class="scroll-indicator">↓</div>
  </section>
</template>
<script>
export default {
  name: "ContactActions",
  props: {
      contact: {
        type: Object,
        required: true,
      },
    },
  methods: {
    goToContact() {
      this.$router?.push("/contact");
    },
    goToWork() {
      this.$router?.push("/projects");
    },

  },
};
</script>
<style scoped>
.contact-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  margin-top: 60px;
}

/* Buttons */
.buttons {
  display: flex;
  gap: 24px;
}

/* Base button */
.btn {
  min-width: 160px;
    padding: 14px 24px;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.3px;
    transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.25s ease;
    position: relative;
}

/* ================= PRIMARY BUTTON ================= */
.btn.primary {
  background: linear-gradient(135deg, #42b883 0%, #20684d 100%);
  color: #fff;
  border: none;
  box-shadow:
    0 10px 25px rgba(47, 128, 98, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow:
    0 14px 34px rgba(47, 128, 98, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.45);
}

/* Pressed state */
.btn.primary:active {
  transform: translateY(1px);
  box-shadow:
    0 6px 18px rgba(47, 128, 98, 0.35),
    inset 0 2px 6px rgba(0, 0, 0, 0.15);
}

/* ================= SECONDARY BUTTON ================= */
.btn.secondary {
  background: linear-gradient(180deg, #ffffff 0%, #e4e4e4 100%);
  color: #2b2b2b;
  border: 1.5px solid #dcdcdc;
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.btn.secondary:hover {
  transform: translateY(-1px);
  background: linear-gradient(180deg, #ffffff 0%, #eaeaea 100%);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.12);
}

.btn.secondary:active {
  transform: translateY(1px);
  box-shadow:
    0 5px 14px rgba(0, 0, 0, 0.12),
    inset 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Social icons */
.socials {
  display: flex;
  gap: 36px;
  margin-top: 10px;
}

.socials a {
  font-size: 26px;
  color: #6f6f6f;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.socials a:hover {
  color: #000;
  transform: translateY(-2px);
}

/* Icons (pure CSS) */
.icon {
  display: inline-block;
  width: 28px;
  height: 28px;
}

.github::before {
  content: "🐙";
}
.linkedin::before {
  content: "in";
  font-weight: 700;
}
.mail::before {
  content: "✉";
}

/* Scroll indicator */
.scroll-indicator {
  margin-top: 20px;
  font-size: 28px;
  color: #999;
  animation: bounce 1.6s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}
</style>
