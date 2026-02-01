<template>
    <div class="exp-card">
        <div class="exp-image">
            <img :src="experience.image" :alt="experience.title" />
        </div>

        <div class="exp-content">
            <h3>{{ experience.company }}</h3>
            <p class="company">{{ experience.position }}</p>
            <p class="duration">{{ experience.duration }}</p>
            <p class="description">{{ experience.description }}</p>

            <div class="technologies">
                <span
                    v-for="tech in experience.tech"
                    :key="tech"
                    class="tech-tag"
                >
                    {{ tech }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExperienceCard',
    props: {
        experience: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
        };
    },
    computed: {
        exps() {
            return this.experience || [];
        }
    },
    mounted() {
        console.log('ExperienceCard mounted with experience:', this.experience);
    },
    beforeUnmount() {
        console.log('ExperienceCard before unmount');
    },
    unmounted() {
        console.log('ExperienceCard unmounted');
    }
}
</script>

<style scoped>
.experience-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
    background-color: #fff;
}

.experience-card h3 {
    margin: 0 0 8px 0;
    color: #333;
}

.company {
    font-weight: 500;
    color: #666;
    margin: 4px 0;
}

.date {
    font-size: 14px;
    color: #999;
    margin: 4px 0;
}

.description {
    margin: 12px 0 0 0;
    color: #555;
    line-height: 1.5;
}
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
    color: #333;
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

.exp-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.exp-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.exp-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.exp-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.exp-card:hover .exp-image img {
    transform: scale(1.1);
}

.exp-content {
    padding: 20px;
}

.exp-content h3 {
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