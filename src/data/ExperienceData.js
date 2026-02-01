
import olaPoster from '../assets/olaCabsPoster.jpeg';
export function getExperienceData() {
    console.log('Experience page mounted');
    return [
        {
            id: 1,
            title: 'OLA',
            position : 'Software Developer',
            company: 'OLA',
            duration: 'Mar 2024 - Present',
            description: 'Built Ola ONDC Foods frontend and backend using Vue.js, JavaScript, TypeScript, Express.js, and Java (Spring Boot). Developed MCP microservices in Java (Spring Boot) for Food agent in Kruti. Engineered unified search engine reducing latency and optimized catalog index response. Contributed to cloud migration from AWS to Krutrim Cloud Services.',
            image: olaPoster,
            tech: ['Java', 'Kotlin', 'JavaScript (ES5–ES6)', 'TypeScript', 'Spring Boot', 'Vue.js', 'React', 'Express.js', 'Elasticsearch', 'MongoDB', 'MySQL', 'Redis', 'Jenkins CI/CD', 'Docker', 'Microservices Architecture']
        },
        {
            id: 1,
            title: 'OLA',
            position : 'Software Developer',
            company: 'OLA',
            duration: 'Mar 2024 - Present',
            description: 'Built Ola ONDC Foods frontend and backend using Vue.js, JavaScript, TypeScript, Express.js, and Java (Spring Boot). Developed MCP microservices in Java (Spring Boot) for Food agent in Kruti. Engineered unified search engine reducing latency and optimized catalog index response. Contributed to cloud migration from AWS to Krutrim Cloud Services.',
            image: olaPoster,
            tech: ['Java', 'Kotlin', 'JavaScript (ES5–ES6)', 'TypeScript', 'Spring Boot', 'Vue.js', 'React', 'Express.js', 'Elasticsearch', 'MongoDB', 'MySQL', 'Redis', 'Jenkins CI/CD', 'Docker', 'Microservices Architecture']
        }
    ];
}
