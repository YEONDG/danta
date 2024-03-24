import AnalyzeResult from '@/components/AnalyzeResult';
import React from 'react';

const ResultPage = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      결과분석
      <AnalyzeResult />
    </main>
  );
};

export default ResultPage;
