import React, { useState } from 'react';

const Chip = () => {
  const [inputValue, setInputValue] = useState('');
  const[isActive,setisActive]=useState(false)
  const [chips, setChips] = useState([]);
  const [allItems, setAllItems] = useState([
    'Nick Giannopoulos',
    'John Doe',
    'Jane Smith',
    'Alice Johnson',
    'Arman',
    'Harsh',
    'Shivam',
    'Prabhakar',
    'Saurabh',
    'Savita',
    'Snehalata',
    'Zuber',
    // Add more items as needed
  ]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleChipClick = (item) => {
    setChips([...chips, item]);
    setAllItems(allItems.filter((i) => i !== item));
    setInputValue('');
  };

  const handleChipRemove = (removedItem) => {
    setChips(chips.filter((item) => item !== removedItem));
    setAllItems([...allItems, removedItem]);
  };

  const handleBackspace = () => {
    if (inputValue === '' && chips.length > 0) {
      const lastChip = chips[chips.length - 1];
      setChips(chips.slice(0, -1));
      setAllItems([...allItems, lastChip]);
    }
  };

    const activeAllitems = () => {
       setisActive(!isActive)
    console.log("h");
    }
    
    // const inactiveAllitems = () => {
    //     setisActive()
    //  console.log("h");
    //  }
  return (
    <>
     {/* <h1>Chip</h1> */}
     
    <div className='h-screen w-screen flex flex-row items-top justify-center' >

       
      <div className=" bg-blue-300 w-fit h-fit rounded-2xl flex flex-row items-center justify-center border-b border-black " >
        {chips.map((chip, index) => (
          <div key={index} className="px-1 rounded-2xl">
            {chip}
            <span onClick={() => handleChipRemove(chip)}>&times;</span>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center justify-top' >
        <div  >
            <input onClick={activeAllitems}
                className='rounded-2xl border-b border-black'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={(e) => e.key === 'Backspace' && handleBackspace()}
                placeholder="Type to search..."
            />
        
        </div>
        {isActive && <div className='h-1/6 w-full bg-red-300 overflow-y-auto rounded-b border border-black'>
            <ul className='space-y-2 overflow-x-hidden'>
                {allItems
                .filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()))
                .map((item) => (
                    <li key={item} onClick={() => handleChipClick(item)}>
                    {item}
                    </li>
                ))}
            </ul>
        </div>}
      </div>
    </div>
    </>
  );
};

export default Chip;
