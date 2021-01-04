import React, { useState } from 'react';
import './SearchBar.css';

import { DateRangePicker} from 'react-date-range'
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"

function SearchBar() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  function selectHandler (ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

	return (
    <div className='searchPanel'>
      <DateRangePicker ranges={
        [selectionRange]
      } onChange={selectHandler} />
      <h5>Number of Pits</h5>
      <input min={0} defaultValue={1} type='number' />
      <button>Search</button>
    </div>
	);
}

export default SearchBar;
