'use client';
import { useCoinResultStore, useTotalAmount } from '@/store/result';
import React from 'react';

const AnalyzeResult = () => {
  const result = useCoinResultStore((state) => state.result);
  const total = useTotalAmount();
  console.log(result);
  return (
    <div>
      {result &&
        Object.entries(result).map(([key, value]) => (
          <p key={key}>
            {key}: {value}원 {value > 0 ? '이득' : '손해'}
          </p>
        ))}
      오늘의 단타 수익 {total}원 입니다.
    </div>
  );
};

export default AnalyzeResult;
