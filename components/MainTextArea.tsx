'use client';
import React, { useState } from 'react';
import { Textarea } from './ui/textarea';

const MainTextArea = () => {
  const [value, SetValue] = useState('');

  return (
    <>
      <Textarea
        className='bg-red-50'
        placeholder='Type your message here.'
        value={value}
      />
    </>
  );
};

export default MainTextArea;
