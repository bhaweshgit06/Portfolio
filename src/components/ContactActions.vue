<template>
  <section class="contact-actions">
    <!-- Buttons -->
    <div class="buttons">
      <button class="btn primary" @click="goToContact">
        Get in touch
      </button>

      <button class="btn secondary" @click="goToWork">
        View work
      </button>
    </div>

    <!-- Social / Contact icons -->
    <div class="socials">
      <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
        <i class="icon github"></i>
      </a>

      <a href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn">
        <i class="icon linkedin"></i>
      </a>

      <a href="mailto:youremail@example.com" aria-label="Email">
        <i class="icon mail"></i>
      </a>
    </div>

    <!-- Down arrow -->
    <div class="scroll-indicator">
      ↓
    </div>
  </section>
</template>
<script>
export default {
name: 'ContactActions',
  methods: {
    goToContact() {
      this.$router?.push('/contact');
    },
    goToWork() {
      this.$router?.push('/projects');
    }
  }
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

.btn {
  min-width: 180px;
  padding: 14px 28px;
  font-size: 18px;
  border-radius: 14px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.25s ease;
}

/* Primary */
.btn.primary {
  background: #4a9b7f;
  color: #fff;
  border: none;
  box-shadow: 0 12px 30px rgba(74, 155, 127, 0.35);
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 36px rgba(74, 155, 127, 0.45);
}

/* Secondary */
.btn.secondary {
  background: #fff;
  color: #333;
  border: 2px solid #d6d6d6;
}

.btn.secondary:hover {
  background: #f4f4f4;
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
  transition: color 0.2s ease, transform 0.2s ease;
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

.github::before { content: "🐙"; }
.linkedin::before { content: "in"; font-weight: 700; }
.mail::before { content: "✉"; }

/* Scroll indicator */
.scroll-indicator {
  margin-top: 20px;
  font-size: 28px;
  color: #999;
  animation: bounce 1.6s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
</style>
