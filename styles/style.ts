const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    heading3: "font-poppins font-semibold xs:text-[36px] text-[32px] text-white xs:leading-[64.8px] leading-[54.8px] w-full",
    headingOwner: "font-poppins font-semibold xs:text-[36px] text-[30px] sm:text-[60px] text-white xs:leading-[64.8px] leading-[54.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
    blackParagraph: "font-poppins font-normal text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
    paddingOwner: "sm:px-8 px-4 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
    marginYOwner: "sm:my-16 my-6",
    fadeIn: "animate-fadeIn", // New animation class
    animatedText: "animate-fadeInSlideUp duration-1000", // Add duration here

    paddingPlans: "sm:px-8 px-3 sm:py-6 py-2",
    marginPlans: "sm:my-16 my-4",
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
