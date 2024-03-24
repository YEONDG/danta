'use client';
import React, { useEffect, useState } from 'react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { analyzeText } from '@/lib/analyze';
import { useCoinResultStore } from '@/store/result';

const MainTextArea = () => {
  const [value, setValue] = useState<string>('');
  const setResult = useCoinResultStore((state) => state.setResult);
  const router = useRouter();

  useEffect(() => {
    const savedValue = sessionStorage.getItem('inputValue');
    if (savedValue) {
      setValue(savedValue);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event?.target.value;
    setValue(newValue);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value) return;

    sessionStorage.setItem('inputValue', value);
    const result = await analyzeText(value);
    setResult(result);

    router.push('/result');
  };

  const handleClick = () => {
    setValue('');
    sessionStorage.removeItem('inputValue');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textarea
        className='bg-red-50 w-[600px] h-[700px]'
        placeholder='업비트 거래내역을 복사 붙여넣기 해주세요'
        value={value}
        onChange={handleChange}
      />
      <Button type='submit'>분석해줘!</Button>
      <Button type='reset' onClick={handleClick}>
        초기화
      </Button>
    </form>
  );
};

export default MainTextArea;
