"use client";

import { useEffect, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { analyzeText } from "@/lib/analyze";
import { useCoinResultStore } from "@/store/result";

const MainTextArea = () => {
  const [value, setValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const setResult = useCoinResultStore((state) => state.setResult);
  const router = useRouter();

  useEffect(() => {
    const savedValue = sessionStorage.getItem("inputValue");
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

    setLoading(true);

    sessionStorage.setItem("inputValue", value);
    const result = await analyzeText(value);
    setResult(result);

    setLoading(false);

    router.push("/result");
  };

  const handleClick = () => {
    setValue("");
    sessionStorage.removeItem("inputValue");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <Textarea
        className="h-[400px] w-[600px] bg-red-50"
        placeholder="업비트 거래내역을 복사 붙여넣기 해주세요"
        value={value}
        onChange={handleChange}
      />
      <div className="mt-2 flex gap-2">
        <Button type="submit">분석해줘!</Button>
        <Button type="reset" onClick={handleClick}>
          초기화
        </Button>
        {loading && <div>Loading...</div>}
      </div>
    </form>
  );
};

export default MainTextArea;
