import { create } from 'zustand';

type ResultState = {
  result: { [key: string]: number } | null;
  setResult: (result: { [key: string]: number } | null) => void;
  totalAmount: number;
};

export const useCoinResultStore = create<ResultState>((set) => ({
  result: null,
  setResult: (result) => set({ result }),
  totalAmount: 0,
}));

export const useTotalAmount = () => {
  return useCoinResultStore((state) => {
    const { result } = state;
    if (!result) return 0;

    return Object.values(result).reduce((acc, cur) => acc + cur, 0);
  });
};
