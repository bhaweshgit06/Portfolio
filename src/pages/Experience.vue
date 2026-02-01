<template>
    <div class="experience-container">
        <div class="experience-header">
            <h1>EXPERIENCE</h1>
            <p>My professional journey and projects</p>
        </div>

        <div class="experience-grid">
            <ExperienceCard
                v-for="project in projects"
                :key="project.id"
                :experience="project"
            />
        </div>

    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { getExperienceData } from '@/data/ExperienceData';

export default {
    name: 'Experience',
    data() {
        return {
            projects: [],
        }
    },
    components: {
        ExperienceCard: defineAsyncComponent(() =>
            import('@/components/ExperienceCard.vue')
        )
    },
    created() {
        console.log('Experience page created');
    },
    mounted() {
        this.projects = getExperienceData();
        console.log('Experience page mounted with projects:', this.projects);
    },
    beforeUnmount() {   
        console.log('Experience page before unmount');
    },
    unmounted() {
        console.log('Experience page unmounted');
    }
}
</script>

<style scoped>
.experience-container {
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.experience-header {
    text-align: center;
    margin-bottom: 50px;
}

.experience-header h1 {
    font-size: 3rem;
    margin-bottom: 10px;
}

.experience-header p {
    font-size: 1.2rem;
    color: #666;
}

.experience-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.project-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.project-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
    transform: scale(1.1);
}

.project-content {
    padding: 20px;
}

.project-content h3 {
    font-size: 1.5rem;
    margin-bottom: 8px;
    color: #333;
}

.company {
    font-weight: 600;
    color: #007bff;
    margin-bottom: 5px;
}

.duration {
    font-size: 0.9rem;
    color: #999;
    margin-bottom: 10px;
}

.description {
    color: #555;
    margin-bottom: 15px;
    line-height: 1.6;
}

.technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tech-tag {
    background: #f0f0f0;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    color: #333;
}
</style>