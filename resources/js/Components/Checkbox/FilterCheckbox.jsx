import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function FilterCheckbox({ typeProducts, handleChange, value }) {
  const isChecked = (id) => value.includes(id);

  return (
    <div className="flex flex-col">
      {typeProducts.map((typeProduct) => {
        return (
          <FormControlLabel
            key={typeProduct.id}
            value={typeProduct.id}
            control={
              <Checkbox
                size="small"
                checked={value.checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label={typeProduct.name_type}
          />
        );
      })}
    </div>
  );
}
