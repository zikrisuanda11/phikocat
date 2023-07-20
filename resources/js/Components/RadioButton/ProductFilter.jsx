import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi';

export default function ProductFilter({value, setValue}) {
  // const [value, setValue] = React.useState('cod');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{
          fontWeight: 'Bold',
          // fontSize: 18,
          fontFamily: 'Inter',
        }}
      >
        <FormControlLabel
          value="desc"
          control={<Radio />}
          label={(
            <div className='flex gap-2 items-center font-sans '>
              <BiUpArrowAlt size={24}/>
              <p>
                Harga tertinggi
              </p>
            </div>
          )}
        />

        <FormControlLabel
          value="asc"
          control={<Radio />}
          label={(
            <div className='flex gap-2 items-center font-sans '>
              <BiDownArrowAlt size={24} />
              <p>
                Harga terendah
              </p>
            </div>
          )}
        />
      </RadioGroup>
    </FormControl>
  );
}