import { useState } from 'react';
// src/components/SearchForm.jsx

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(value);
    // const form = evt.target;
    // const topic = form.elements.topic.value;
    // Якщо текстове поле порожнє, виводимо повідомлення
    // і припиняємо виконання функції.
    // if (form.elements.topic.value.trim() === '') {
    //   alert('Please enter search term!');
    //   return;
    // }

    // У протилежному випадку викликаємо пропс
    // і передаємо йому значення поля
    // onSearch(topic);
    // form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={e => setValue(e.target.value)}
        value={value}
        placeholder="Searching..."
      />
      <button>Search</button>
    </form>
  );
};
