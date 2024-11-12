const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading2: "font-poppins font-semibold text-[28px] xs:text-[48px] text-white xs:leading-[76.8px] leading-[40.8px] w-full",
    heading2Owner: "font-poppins font-semibold text-[28px] xs:text-[48px] text-white xs:leading-[76.8px] leading-[50.8px] w-full",
    heading3: "font-poppins font-semibold text-[28px] xs:text-[36px] text-white xs:leading-[64.8px] leading-[54.8px] w-full",
    headingOwner: "font-poppins font-semibold text-[28px] xs:text-[36px] sm:text-[60px] text-white xs:leading-[64.8px] leading-[54.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[16px] xs:text-[18px] leading-[30.8px]",
    blackParagraph: "font-poppins font-normal text-[16px] xs:text-[18px] leading-[30.8px]",

    elegantHeading2: "font-poppins font-semibold text-[36px] xs:text-[50px] text-gray-200 xs:leading-[78px] leading-[38px] w-full text-center",
    elegantHeading3: "font-poppins font-semibold text-[20px] sm:text-[30px] xs:text-[38px] text-gray-200 xs:leading-[66px] leading-[36px] w-full text-center",
    elegantHeading4: "font-poppins font-semibold text-[20px] sm:text-[30px] xs:text-[34px] text-gray-200 xs:leading-[66px] leading-[46px] w-full",
    elegantHeadingOwner: "font-poppins font-semibold text-[30px] xs:text-[38px] sm:text-[62px] text-gray-200 xs:leading-[66px] leading-[56px] w-full text-center",
    elegantParagraph: "font-poppins font-normal text-gray-300 text-[16px] xs:text-[18px] leading-[30.8px] text-center",
    elegantBlackParagraph: "font-poppins font-normal text-gray-300 text-[16px] xs:text-[18px] leading-[30.8px] text-center",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-8 px-4",
    paddingY: "sm:py-8 py-4",
    padding: "sm:px-8 px-4 sm:py-8 py-4",
    paddingOwner: "sm:px-4 px-2 sm:py-8 py-4",

    marginX: "sm:mx-8 mx-4",
    marginX1: "sm:mx-32 mx-6",
    marginY: "sm:my-8 my-8",
    marginYOwner: "sm:my-8 my-4",
    fadeIn: "animate-fadeIn", // New animation class
    animatedText: "animate-fadeInSlideUp duration-1000", // Add duration here

    paddingPlans: "sm:px-8 px-3 sm:py-6 py-2",
    marginPlans: "sm:my-16 my-4",

    tab: "cursor-pointer hover:bg-gray-300 rounded p-2 transition-shadow duration-300 shadow-md", // Added hover effect
    activeTab: "font-bold border-b-2 border-blue-500",

    container: "bg-gray-900 rounded-lg shadow-lg p-6",
    dropdown: "p-2 rounded-lg w-1/3 text-black mb-4 shadow-sm transition duration-300 hover:shadow-lg", // Added hover effect
    input: "p-2 rounded-lg w-1/3 text-black mx-auto shadow-sm transition duration-300 hover:shadow-lg", // Added hover effect
    priceText: "mt-2 text-center text-white text-2xl font-bold",

    elegantContainer: "sm:w-1/2 mx-6 my-6 w-full bg-black-gradient-2 rounded-lg shadow-xl sm:px-2 py-4 px-2 sm:my-10 my:6",
    elegantContainer1: "w-full bg-black-gradient-2 rounded-lg shadow-xl sm:px-2 py-8 sm:my-10 my:6 mx-10",
    elegantDropdown: "p-2 sm:p-3 rounded-lg w-full sm:w-1/2 text-black mb-4 shadow-md border border-gray-300 transition duration-300 hover:shadow-lg", // Added hover effect
    elegantInput: "p-2 sm:p-3 rounded-lg w-full sm:w-1/2 text-black mx-auto shadow-md border border-gray-300 transition duration-300 hover:shadow-lg", // Added hover effect
    elegantPriceText: "mt-2 text-center text-gray-200 text-2xl font-semibold",

    cardContainer: "bg-white rounded-lg shadow-lg p-6 border border-gray-300 transition duration-300 hover:shadow-xl", // Added hover effect
};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

// Add the keyframes for the animation
const keyframes = `
@keyframes fadeInSlideUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
`;

// Add the keyframes to the global styles
const globalStyles = `
    ${keyframes}
`;

export default styles;
