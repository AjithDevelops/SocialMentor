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
    headingTitle: {
        color: '#fff', // White text for headings
        fontWeight: 'bold',
        paddingTop: '20px',
        fontSize: '18px',
        paddingBottom: '10px'
    },
    heading: {
        color: '#fff', // White text for headings
        fontWeight: 'bold',
        paddingTop: '20px',
    },
    list: {
        marginLeft: '20px',
        paddingTop: '10px',
        listStyleType: 'decimal',
    },
    link: {
        textDecoration: 'underline', // Underline links
        color: '#4CAF50', // Green color for links
        hover: {
            textDecoration: 'none', // No underline on hover
            color: '#3e8e41', // Darker green on hover
        },
    },
};

const RefundPolicy = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.headingTitle}>Refund Policy</h2>
            <p>Effective Date: 01/12/2024</p>
            <p>Company Name: Social Mentor</p>
            <p>At Social Mentor, we are committed to delivering high-quality services that meet your expectations. This Refund Policy outlines the terms and conditions under which refunds are handled.</p>
            <h3 style={styles.heading}>1. No Refunds for Purchased Services</h3>
            <p>Once a service has been purchased, no refunds will be provided.</p>
            <p>This policy applies to all services, including:</p>
            <ul style={styles.list}>
                <li>Content creation (Instagram Reels, YouTube Shorts).</li>
                <li>Social media growth strategies and consultations.</li>
            </ul>
            <h3 style={styles.heading}>2. Non-Refundable Situations</h3>
            <p>Refunds will not be issued under the following circumstances:</p>
            <ul style={styles.list}>
                <li>If the service delivery has already started or been completed.</li>
                <li>If the customer is dissatisfied due to factors beyond our control, such as:</li>
                <ul style={styles.list}>
                    <li>Platform algorithm changes.</li>
                    <li>Lack of follower growth or engagement (as results depend on audience behavior and platform factors).</li>
                </ul>
                <li>Failure to provide required information or approvals on time for project completion.</li>
            </ul>
            <h3 style={styles.heading}>3. Service Cancellations</h3>
            <p>You may request to cancel a service only before work has started.</p>
            <p>Once content creation or growth strategies have been initiated, the service cannot be canceled, and no refund will be provided.</p>
            <h3 style={styles.heading}>4. Exceptions</h3>
            <p>Refunds will only be considered in the following exceptional cases:</p>
            <ul style={styles.list}>
                <li>Duplicate payment made due to technical issues.</li>
                <li>Payment made by mistake for a service not yet started.</li>
            </ul>
            <p>In such cases:</p>
            <ul style={styles.list}>
                <li>A refund request must be submitted <a style={styles.link} href="/contactUs">here</a> within <strong>2 business days</strong> of the payment.</li>
                <li>Approved refunds will be processed within <strong>7-10 business days</strong> to the original payment method.</li>
            </ul>
        </div>
    );
};

export default RefundPolicy;
