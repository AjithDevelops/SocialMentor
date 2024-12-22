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

const TermsOfUse: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.headingTitle}>Terms and Conditions</h1>
            <p>Effective Date: 01/12/2024</p>
            <p>Company Name: Social Mentor</p>
            <p>Welcome to Social Mentor! These Terms and Conditions outline the rules and regulations for using our services. By accessing or using our services, you agree to comply with these Terms. Please read them carefully.</p>
            
            <h2 style={styles.heading}>1. Introduction</h2>
            <p>Social Mentor provides social media content creation and engagement services to help individuals and businesses grow their presence on platforms like Instagram and YouTube. If you do not agree to these Terms, you may not access or use our services.</p>
            
            <h2 style={styles.heading}>2. Services Offered</h2>
            <p>Social Mentor offers the following services:</p>
            <ol style={styles.list}>
                <li>Content Creation: Creating high-quality, engaging short-form videos for Instagram Reels and YouTube Shorts.</li>
                <li>Organic Growth Services: Strategies to improve reach, visibility, and follower growth through ethical, platform-compliant methods (e.g., content optimization, hashtag research, audience engagement).</li>
                <li>Optional Analytics and Reporting: Providing performance reports on content reach, follower growth, and other key metrics.</li>
            </ol>

            <h2 style={styles.heading}>3. User Responsibilities</h2>
            <p>By using our services, you agree to:</p>
            <ol style={styles.list}>
                <li>Provide accurate information (email, business details, etc.) during sign-up or transactions.</li>
                <li>Avoid using our services to engage in any unethical or illegal activity.</li>
                <li>Comply with the terms of service of social media platforms such as Instagram and YouTube.</li>
                <li>Acknowledge that growth results depend on factors like content quality, audience behavior, and platform algorithms.</li>
            </ol>

            <h2 style={styles.heading}>4. Payment Terms</h2>
            <p>Payments for services must be made in full via our payment gateway (e.g., Razorpay) before the delivery of services. All prices for services are listed in INR (Indian Rupees) and include applicable taxes.</p>

            <h2 style={styles.heading}>5. Refund Policy</h2>
            <p>Refunds will not be provided for already purchased services. Please refer to our Refund Policy Page for detailed terms.</p>

            <h2 style={styles.heading}>6. Delivery of Services</h2>
            <p>Content and growth-related services will be delivered based on timelines agreed upon during purchase. Any delays will be communicated promptly.</p>

            <h2 style={styles.heading}>7. Limitation of Liability</h2>
            <p>Social Mentor is not responsible for:</p>
            <ol style={styles.list}>
                <li>Changes in social media platform algorithms or policies that may impact your engagement or growth.</li>
                <li>Suspension or penalties on your account due to violations of platform policies by you.</li>
                <li>Unexpected delays caused by factors outside our control (e.g., technical issues).</li>
            </ol>
            <p>Disclaimer: Social Mentor does not guarantee specific growth results (followers, views, etc.) as they depend on external factors like audience interest and platform algorithms.</p>

            <h2 style={styles.heading}>8. Intellectual Property</h2>
            <p>All content created by Social Mentor for you is your property after full payment. You grant us the right to display anonymized versions of our work as part of our portfolio.</p>

            <h2 style={styles.heading}>9. Governing Law</h2>
            <p>These Terms are governed by and construed in accordance with the laws of India. Any disputes arising will be subject to the jurisdiction of courts in [Your City/State].</p>

            <h2 style={styles.heading}>10. Privacy Policy</h2>
            <p>Your privacy is important to us. Please refer to our Privacy Policy for information on how we handle your data.</p>

            <h2 style={styles.heading}>11. Changes to Terms and Conditions</h2>
            <p>We reserve the right to modify or update these Terms at any time. Changes will be communicated on our website, and continued use of services implies acceptance.</p>

            <h2 style={styles.heading}>12. Contact Information</h2>
            <p>For any questions, issues, or concerns, you can contact us:</p>
            <ul style={styles.list}>
                <li>Email: <a href="mailto:socialmentormail@gmail.com" style={{ color: '#007BFF' }}>socialmentormail@gmail.com</a></li>
                <li>Phone: +91 9043534556</li>
                <li>Address: Villa no 39, Casa Grande unbabo phase 1, Vengadamangalam near ponmar, Chennai - 600127</li>
            </ul>
            
            <p>By using Social Mentor’s services, you acknowledge that you have read, understood, and agree to these Terms and Conditions.</p>
        </div>
    );
};

export default TermsOfUse;
