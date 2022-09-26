import { useState , useEffect, useRef} from "react";
import { FiChevronDown } from "react-icons/fi";

export const AccordionItem = ({title, children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFadeIn, setIsFadeIn] = useState(false);
  const [heightEl, setHeightEl] = useState(null);
  const refContent = useRef();

  const handleToggle = ()=>{
    setIsFadeIn(!isFadeIn);
    if (!isOpen) setIsOpen(true);
  };

  useEffect(() => {
    const contentHeight = refContent.current.scrollHeight;
    setHeightEl(contentHeight);
    
  }, [isOpen]);
  return (
    <div className="accordion__item">
      <div className="accordion__header" onClick={handleToggle}>
        <h2 className="accordion__title">{title}</h2>
        <button className={`button accordion__arrow ${isFadeIn ? 'accordion__arrow--rotate': ''}`}>
          <FiChevronDown />
        </button>
      </div>
      <div ref={refContent} 
          onTransitionEnd={()=> !isFadeIn && setIsOpen(false)}
          style={{height: isFadeIn ? heightEl : 0}}
          className="accordion__collapse">
        { 
          isOpen && (
            <div className="accordion__content">
              {children}
            </div>
          )
        }
      </div>
    </div>
  )
}
