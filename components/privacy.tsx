import React from 'react';

const styles = {
    container: {
        backgroundColor: '#333', // Dark background
        color: '#fff', // White text
        padding: '20px',
        borderRadius: '8px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
    },
    heading: {
        color: '#fff', // White text for headings
        fontWeight: 'bold',
        paddingTop: '20px',
    },
    list: {
        marginLeft: '20px',
        paddingTop: '10px',
        listStyleType: 'decimal'
    },
    headingTitle: {
        color: '#fff', // White text for headings
        fontWeight: 'bold',
        paddingTop: '20px',
        fontSize: '18px',
        paddingBottom: '10px'
    },
};


const PrivacyPolicy: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.headingTitle}>Privacy Policy</h1>
            <p>Effective Date: 01/12/2024</p>
            <p>Company Name: Social Mentor</p>
            <p>At Social Mentor, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our services or website.</p>
            
            <h2 style={styles.heading}>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul style={styles.list}>
                <li><strong>Personal Information</strong>
                    <ul>
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Billing address</li>
                        <li>Payment details (processed securely through third-party payment gateways like Razorpay)</li>
                    </ul>
                </li>
                <li><strong>Non-Personal Information</strong>
                    <ul>
                        <li>Browser type and version</li>
                        <li>Device type</li>
                        <li>IP address</li>
                        <li>Cookies and usage data (e.g., time spent on pages, clicks, etc.)</li>
                    </ul>
                </li>
            </ul>

            <h2 style={styles.heading}>2. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul style={styles.list}>
                <li>Service Delivery: To provide our services (content creation, growth strategies, etc.).</li>
                <li>Communication: To send updates, service details, and respond to queries.</li>
                <li>Payment Processing: To process transactions securely.</li>
                <li>Marketing: To send newsletters, offers, or promotional content (only with your consent).</li>
                <li>Website Improvement: To analyze usage data and improve user experience.</li>
            </ul>

            <h2 style={styles.heading}>3. Cookies and Tracking Technologies</h2>
            <p>We use cookies to improve your browsing experience. Cookies help us:</p>
            <ul style={styles.list}>
                <li>Recognize repeat visitors.</li>
                <li>Analyze website traffic and behavior.</li>
            </ul>
            <p>You can disable cookies in your browser settings; however, this may affect the website’s functionality.</p>

            <h2 style={styles.heading}>4. How We Share Your Information</h2>
            <p>We do not sell or rent your personal information to third parties. We may share data with:</p>
            <ul style={styles.list}>
                <li>Service Providers: Payment processors like Razorpay for secure payment handling.</li>
                <li>Legal Authorities: If required to comply with laws or legal processes.</li>
            </ul>

            <h2 style={styles.heading}>5. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal data. However, no method of transmission over the internet is 100% secure.</p>

            <h2 style={styles.heading}>6. Your Rights</h2>
            <p>You have the following rights regarding your personal data:</p>
            <ul style={styles.list}>
                <li>Access: Request a copy of the personal data we hold about you.</li>
                <li>Correction: Request corrections to inaccurate or incomplete data.</li>
                <li>Deletion: Request deletion of your personal data (subject to legal obligations).</li>
                <li>Opt-Out: Opt-out of marketing communications at any time.</li>
            </ul>
            <p>To exercise these rights, please contact us at <a href="mailto:support@socialmentor.com">support@socialmentor.com</a>.</p>

            <h2 style={styles.heading}>7. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of such websites. We recommend reviewing their privacy policies.</p>

            <h2 style={styles.heading}>8. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date. Continued use of our services after updates implies acceptance of the changes.</p>

            <h2 style={styles.heading}>9. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
            <ul style={styles.list}>
                <li>Email: <a href="mailto:socialmentormail@gmail.com">socialmentormail@gmail.com</a></li>
                <li>Phone: +91 9043534556</li>
                <li>Address: Villa no 39, Casa Grande urnabo phase 1, Vengadamangalam near ponmar, Chennai - 600127</li>
            </ul>

            <h2 style={styles.heading}>10. Consent</h2>
            <p>By using our services, you consent to the terms outlined in this Privacy Policy.</p>
        </div>
    );
};

export default PrivacyPolicy;
