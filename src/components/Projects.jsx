import React from 'react';

const projects = [
    {
        title: 'Afetar',
        description: 'Afet anında yardıma ihtiyaç duyan kişilerle onlara en yakın konumdaki gönüllüleri anında eşleştiren bir mobil uygulama.',
        tags: ['Flask', 'JWT', 'Supabase', 'React Native (Expo)', 'PostgreSQL'],
        link: 'https://github.com/Hasmolam/afetar'
    },
    {
        title: 'Flask Task Manager API',
        description: 'Flask ile geliştirilmiş, JWT tabanlı kimlik doğrulama ve kullanıcıya özel görev yönetimi sunan RESTful API',
        tags: ['Flask', 'ORM', 'JWT', 'RESTful API', 'Flask-CORS', 'Werkzeug', 'Python-dotenv'],
        link: 'https://github.com/Hasmolam/Flask-Task-Manager-API'
    },
    {
        title: 'CanSuyu',
        description: 'CanSuyu, afet durumlarında yardım talepleri ile gönüllüleri buluşturan bir web platformudur. Google Maps API entegrasyonu ile konum bazlı eşleştirme ve yol tarifi özellikleri sunar.',
        tags: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Google Maps API', 'PWA'],
        link: 'https://github.com/Hasmolam/cansuyu'
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <h2>Projelerim</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {projects.map((project, index) => (
                        <div key={index} style={{ background: '#1e293b', padding: '30px', borderRadius: '20px', transition: 'transform 0.3s ease', cursor: 'pointer' }} className="project-card"
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#fff' }}>{project.title}</h3>
                            <p style={{ color: '#94a3b8', marginBottom: '20px' }}>{project.description}</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '5px 12px', borderRadius: '15px', fontSize: '0.875rem' }}>{tag}</span>
                                ))}
                            </div>
                            <a href={project.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontWeight: 'bold' }}>
                                İncele <span>&rarr;</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
