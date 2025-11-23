import React from 'react';

const onlineEducationData = [
    {
        title: "C# Eğitimi",
        platform: "YouTube",
        description: "Kapsamlı C# programlama dili eğitimi.",
        link: "https://github.com/Hasmolam/Learning-Journey/tree/main/Youtube/C%23%20Programlama%20E%C4%9Fitimi"
    },
    {
        title: "SQL Eğitimi",
        platform: "Patika.dev",
        description: "Veritabanı yönetimi ve SQL sorgulama eğitimi.",
        link: "https://github.com/Hasmolam/Learning-Journey/tree/main/Patika.dev/SQL"
    },
    {
        title: "HTML Eğitimi",
        platform: "Patika.dev",
        description: "HTML temelleri eğitimi.",
        link: "https://github.com/Hasmolam/Learning-Journey/tree/main/Patika.dev/HTML"
    },
    {
        title: "CSS Eğitimi",
        platform: "Patika.dev",
        description: "CSS temelleri eğitimi.",
        link: "https://github.com/Hasmolam/Learning-Journey/tree/main/Patika.dev/CSS"
    },
    {
        title: "Bootstrap Eğitimi",
        platform: "Patika.dev",
        description: "Bootsrap temelleri eğitimi.",
        link: "https://github.com/Hasmolam/Learning-Journey/tree/main/Patika.dev/BOOTSTRAP"
    },
    {
        title: "Python Eğitimi",
        platform: "BTK Akademi",
        description: "Python programlama dili eğitimi.",
        link: "https://github.com/Hasmolam/Learning-Journey/tree/main/BTK%20Akademi/S%C4%B1f%C4%B1rdan%20%C4%B0leri%20Seviye%20Python%20Programlama"
    },
    {
        title: "Object Oriented Programming Eğitimi",
        platform: "YouTube",
        description: "Object Oriented Programming temelleri eğitimi.",
        link: "https://github.com/Hasmolam/Learning-Journey/tree/main/Youtube/Object%20Oriented%20Programming"
    }
];

const EducationCompetitions = () => {
    return (
        <section id="education">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>

                    {/* Education Column */}
                    <div>
                        <h2 style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '40px' }}>Eğitimler</h2>
                        <div style={{ borderLeft: '2px solid #38bdf8', paddingLeft: '30px', position: 'relative' }}>
                            <div style={{ marginBottom: '40px', position: 'relative' }}>
                                <div style={{ position: 'absolute', left: '-39px', top: '0', width: '16px', height: '16px', background: '#38bdf8', borderRadius: '50%', border: '4px solid #0f172a' }}></div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '5px' }}>Bilgisayar Programcılığı</h3>
                                <p style={{ color: '#94a3b8', marginBottom: '10px' }}>Ege Üniversitesi</p>
                                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>2025 - 2027</p>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <div style={{ position: 'absolute', left: '-39px', top: '0', width: '16px', height: '16px', background: '#38bdf8', borderRadius: '50%', border: '4px solid #0f172a' }}></div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '5px' }}>Sui Blockchain Technologies Workshop</h3>
                                <p style={{ color: '#94a3b8', marginBottom: '10px' }}>Overblock</p>
                                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>2025</p>
                            </div>
                        </div>

                        {/* Communities Section */}
                        <h2 style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '40px', marginTop: '60px' }}>Topluluklar</h2>
                        <div style={{ borderLeft: '2px solid #38bdf8', paddingLeft: '30px', position: 'relative' }}>
                            <div style={{ marginBottom: '40px', position: 'relative' }}>
                                <div style={{ position: 'absolute', left: '-39px', top: '0', width: '16px', height: '16px', background: '#38bdf8', borderRadius: '50%', border: '4px solid #0f172a' }}></div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '5px' }}>IEEE Topluluğu</h3>
                                <p style={{ color: '#94a3b8', marginBottom: '10px' }}>Fullstack Web Ekibi</p>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <div style={{ position: 'absolute', left: '-39px', top: '0', width: '16px', height: '16px', background: '#38bdf8', borderRadius: '50%', border: '4px solid #0f172a' }}></div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '5px' }}>Yapay Zeka Topluluğu</h3>
                                <p style={{ color: '#94a3b8', marginBottom: '10px' }}>Web Ekibi</p>
                            </div>
                        </div>
                    </div>

                    {/* Online Education Column */}
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                            <h2 style={{ textAlign: 'left', fontSize: '2rem', margin: 0 }}>Online Eğitimler</h2>
                            <a href="https://github.com/Hasmolam/Learning-Journey" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: '#38bdf8', textDecoration: 'none', border: '1px solid #38bdf8', padding: '5px 15px', borderRadius: '20px', transition: 'all 0.3s ease' }}>
                                Tüm Kaynaklar
                            </a>
                        </div>
                        <div className="custom-scrollbar" style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxHeight: '600px', overflowY: 'auto', paddingRight: '10px' }}>
                            {onlineEducationData.map((item, index) => (
                                <div key={index} style={{ background: '#1e293b', padding: '20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div>
                                            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#f472b6' }}>{item.title}</h3>
                                            <p style={{ color: '#e2e8f0' }}>{item.platform}</p>
                                        </div>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', fontSize: '0.8rem', textDecoration: 'underline' }}>
                                            Kaynağa Git
                                        </a>
                                    </div>
                                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '5px' }}>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationCompetitions;
