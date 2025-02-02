import { useState } from 'react';
import s from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit(value);
    setValue('');
  };

  return (
    <header className="s.header">
      <form onSubmit={handleSubmit} className="s.form">
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search photos"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
