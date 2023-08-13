import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import { selectFilterValue } from '../redux/selectors';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <Label style={{ width: 200 }}>
        Find contacts by name
        <Input
          type="text"
          value={filterValue}
          onChange={handleFilterChange}
        />
      </Label>
    </div>
  );
};

export default Filter;
