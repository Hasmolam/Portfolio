import React from 'react';

const technologies = [
    { name: 'C#', level: '75%' },
    { name: 'ASP.NET', level: '70%' },
    { name: 'Python', level: '85%' },
    { name: 'Flask', level: '75%' },
    { name: 'SQL', level: '80%' },
    { name: 'Git', level: '85%' },
    { name: 'Linux', level: '80%' }
];

const Technologies = () => {
    return (
        <section id="technologies" style={{ background: '#0f172a' }}>
            <div className="container">
                <h2>Kullandığım Teknolojiler</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {technologies.map((tech, index) => (
                        <div key={index} style={{ marginBottom: '25px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{tech.name}</span>
                                <span style={{ color: '#94a3b8' }}>{tech.level}</span>
                            </div>
                            <div style={{ width: '100%', height: '10px', background: '#1e293b', borderRadius: '5px', overflow: 'hidden' }}>
                                <div style={{ width: tech.level, height: '100%', background: 'linear-gradient(90deg, #38bdf8, #818cf8)', borderRadius: '5px', transition: 'width 1s ease-out' }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
