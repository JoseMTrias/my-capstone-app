import React from "react";

const Dropdown = () => {

    const options = [
   
        { label: 'About', value: 'about' },
      { label: 'Search', value: 'search' },
    ];
   
    const [value, setValue] = React.useState('fruit');
    const handleChange = (event) => {
      setValue(event.target.value);
    };
   
    return (
      <div>
        <label>
            Menu
          <select value={value} onChange={handleChange}>
            {options.map((option) => (
              <option value={option.value} onClick={"/about"}>{option.label}</option>
            ))}
          </select>
        </label>
      </div>
   
    );
   
   };
   
   export default Dropdown;