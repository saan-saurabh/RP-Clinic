import React,{useState,useEffect} from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './TopScrollButton.css'

function TopScrollButton() {
        const [showTopBtn, setShowTopBtn] = useState(false);
        useEffect(() => {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 300) {
                    setShowTopBtn(true);
                } else {
                    setShowTopBtn(false);
                }
            });
        }, []);
        const goToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };
        return (
            <div className="top-to-btm">
                {showTopBtn && (
                    <button
                        className="icon-position icon-style"
                        onClick={goToTop}
                    ><ArrowUpwardIcon/></button>
                )}
            </div>
        );
    };

export default TopScrollButton