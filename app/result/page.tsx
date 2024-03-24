import AnalyzeResult from '@/components/AnalyzeResult';
import React from 'react';

const ResultPage = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h2 className='text-3xl font-bold'>결과</h2>
      <AnalyzeResult />
    </main>
  );
};

export default ResultPage;
