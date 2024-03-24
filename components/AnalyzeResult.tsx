'use client';
import { coinNameMap } from '@/constants/coinNameMap';
import { useCoinResultStore, useTotalAmount } from '@/store/result';

const AnalyzeResult = () => {
  const result = useCoinResultStore((state) => state.result);
  const total = useTotalAmount();
  return (
    <div className='flex flex-col w-64 gap-2 border border-black px-4 rounded-lg bg-slate-200 shadow-lg'>
      {result?.map((coin) => (
        <div key={coin.name} className='flex justify-between'>
          <h3
            className={`font-bold ${
              coin.amount < 0 ? 'text-red-500' : 'text-sky-400'
            }`}
          >
            {coinNameMap[coin.name]} {coin.name}
          </h3>
          <p> {coin.amount}원</p>
        </div>
      ))}

      <p className='font-bold w-full text-right'>총 {total}원</p>
    </div>
  );
};

export default AnalyzeResult;
