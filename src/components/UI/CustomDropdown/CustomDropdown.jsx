import style from './CustomDropdown.module.scss';
import React, { useState, useRef, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const CustomDropdown = ({ options, setTypeSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setTypeSelect(option)
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div data-aos="fade-down" className={style.customDropdown} ref={dropdownRef}>
      <div className={style.dropdownSelected} onClick={toggleDropdown}>
        {selectedOption}
      </div>
      {isOpen && (
        <div data-aos="fade-left" className={style.dropdownOptions}>
          {options.map((option, index) => (
            <div
              key={index}
              className={style.dropdownOption}
              onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
