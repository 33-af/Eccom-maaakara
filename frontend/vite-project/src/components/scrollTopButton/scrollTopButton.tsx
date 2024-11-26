import React, { useEffect, useRef } from "react";
import styles from "./ScrollToTopButton.module.css"; // Styles for the button

const ScrollToTopButton: React.FC = () => {
    const arrowTopRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const arrowTop = arrowTopRef.current;

        const handleScroll = () => {
            console.log('scrolling', window.scrollY);  // Debugging scroll position
            if (arrowTop) {
                // Ensure visibility after scrolling 200px
                arrowTop.hidden = window.scrollY < 200;
                console.log('Button hidden:', arrowTop.hidden); // Debugging visibility
            }
        };

        const handleClick = () => {
            console.log('Scroll to top triggered');
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

        if (arrowTop) {
            arrowTop.addEventListener('click', handleClick);
        }

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listeners when component unmounts
        return () => {
            if (arrowTop) {
                arrowTop.removeEventListener('click', handleClick);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            ref={arrowTopRef}
            type="button"
            className={styles.scrollToTopButton}
            aria-label="Scroll to top"
        >
            ↑
        </button>
    );
};

export default ScrollToTopButton;
