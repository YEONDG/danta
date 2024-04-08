"use client";
import { coinNameMap } from "@/constants/coinNameMap";
import { useCoinResultStore, useTotalAmount } from "@/store/result";
import { useRouter } from "next/navigation";

const AnalyzeResult = () => {
  const result = useCoinResultStore((state) => state.result);
  const total = useTotalAmount();
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };
  return (
    <div className="flex w-96 flex-col gap-2 rounded-lg border border-black bg-slate-100 px-4 shadow-lg">
      {result?.map((coin) => (
        <div key={coin.name} className="flex justify-between">
          <h3
            className={`font-bold ${
              coin.amount < 0 ? "text-red-500" : "text-sky-500"
            }`}
          >
            {coinNameMap[coin.name]} {coin.name}
          </h3>
          <p> {coin.amount}원</p>
        </div>
      ))}

      <p className="w-full text-right font-bold">총 {total}원</p>
      <button onClick={handleClick}>뒤로가기</button>
    </div>
  );
};

export default AnalyzeResult;
