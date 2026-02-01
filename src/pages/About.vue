<template>
    <div class="about-container">
        <section class="about-hero">
            <h1>About Me</h1>
            <p>Software Developer | Problem Solver | Tech Enthusiast</p>
        </section>

        <section class="about-content">
            <div class="intro">
                <h2>Introduction</h2>
                <p>Welcome to my portfolio. I'm a passionate software developer with expertise in building modern web applications.</p>
            </div>

            <div class="skills">
                <h2>Skills</h2>
                <ul>
                    <li>Frontend: Vue.js, React, JavaScript, HTML, CSS</li>
                    <li>Backend: Node.js, Python, Express</li>
                    <li>Tools: Git, Docker, REST APIs</li>
                </ul>
                
            </div>

            <div class="experience">
                <h2>Experience</h2>
                <p>Years of experience building scalable and user-friendly applications.</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            developerInfo: {
                name: 'Your Name',
                title: 'Software Developer',
                bio: ''
            }
        };
    },
    computed: {
        formattedBio() {
            return this.developerInfo.bio;
        }
    },
    methods: {
        loadAboutData() {
            // Load about data
        }
    },
    created() {
        console.log('About component created');
        this.loadAboutData();
    },
    mounted() {
        console.log('About component mounted');
    },
    updated() {
        console.log('About component updated');
    },
    beforeUnmount() {
        console.log('About component before unmount');
    }
};
</script>

<style scoped>
.about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.about-hero {
    text-align: center;
    margin-bottom: 3rem;
}

.about-hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

.about-content > div {
    padding: 1.5rem;
    border-radius: 8px;
    background-color: #f5f5f5;
}

.about-content h2 {
    margin-bottom: 1rem;
    color: #333;
}

.skills ul {
    list-style: none;
    padding: 0;
}

.skills li {
    padding: 0.5rem 0;
    color: #555;
}
</style>