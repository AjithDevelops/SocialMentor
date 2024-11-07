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
};

const RefundPolicy = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Refund Policy</h2>
            <p>Thank you for shopping at socialmentor.graphy.com</p>
            <h3 style={styles.heading}>Non-tangible irrevocable goods ("Digital products")</h3>
            <p>We do not issue refunds for non-tangible irrevocable goods ("digital products") once the order is confirmed and the product is sent.</p>
            <p>We recommend contacting us for assistance if you experience any issues receiving or downloading our products.</p>
            <h3 style={styles.heading}>Contact us for any issues:</h3>
            <p>If you have any questions about our Returns and Refunds Policy, please contact us at: <a href="mailto:socialmentorbusiness@gmail.com" style={{ color: '#007BFF' }}>socialmentorbusiness@gmail.com</a></p>
        </div>
    );
};

export default RefundPolicy;
