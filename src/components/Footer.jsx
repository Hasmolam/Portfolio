import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: '#0f172a', padding: '40px 0', textAlign: 'center', borderTop: '1px solid #1e293b' }}>
            <div className="container">
                <p style={{ color: '#64748b', marginBottom: '10px' }}>&copy; {new Date().getFullYear()} Hasan Hüseyin Yolcu. Tüm hakları saklıdır.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <a target="_blank" href="https://www.linkedin.com/in/hasan-huseyin-yolcu/" style={{ color: '#94a3b8' }}>LinkedIn</a>
                    <a target="_blank" href="https://github.com/Hasmolam" style={{ color: '#94a3b8' }}>GitHub</a>
                    <a target="_blank" href="https://x.com/HasanHusYolcu" style={{ color: '#94a3b8' }}>Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
