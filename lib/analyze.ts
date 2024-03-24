type coin = [
  체결시간: string,
  코인: string,
  마켓: string,
  종류: string,
  거래수량: string,
  거래단가: string,
  거래금액: string,
  수수료: string,
  정산금액: string,
  주문시간: string
];

export const analyzeText = async (text: string) => {
  console.log('분석중....');

  const groups = splitText(text);
  const result = coin(groups);
  console.log(result, 'result');
  console.log('분석완료');
  return result;
};

const splitText = (text: string): string[][] => {
  const lines = text.split('\n'); // 주어진 텍스트를 줄 단위로 분할하여 배열로 만듭니다.
  const groups: string[][] = [];

  for (let i = 0; i < lines.length; i += 10) {
    // 각 묶음은 10줄씩이므로, 10줄씩 자르고 배열에 추가합니다.
    const group = lines.slice(i, i + 10);
    groups.push(group);
  }

  return groups;
};

const coin = (arr) => {
  const coinObj: { [key: string]: number } = {}; // 코인별 거래금액을 저장할 객체

  for (let i = 0; i < arr.length; i++) {
    const coinName = arr[i][1]; // 코인 이름
    const action = arr[i][3]; // 거래 종류 (매수 또는 매도)
    const amount = parseFloat(arr[i][8].replace(/[^\d.-]/g, '')); // 거래 금액

    if (action === '매도') {
      // 매수일 경우 해당 코인의 거래금액을 증가시킴
      if (coinObj[coinName]) {
        coinObj[coinName] += amount;
      } else {
        coinObj[coinName] = amount;
      }
    } else if (action === '매수') {
      // 매도일 경우 해당 코인의 거래금액을 감소시킴
      if (coinObj[coinName]) {
        coinObj[coinName] -= amount;
      } else {
        coinObj[coinName] = -amount; // 코인이 없을 경우 음수로 표시하여 추가
      }
    }
  }

  return coinObj;
};
