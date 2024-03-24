const splitText = (text: string): string[][] => {
  const lines = text.split('\n'); // 주어진 텍스트를 줄 단위로 분할하여 배열로 만듭니다.
  const groups: string[][] = [];

  for (let i = 0; i < lines.length; i += 10) {
    // 각 묶음은 10줄씩이므로, 10줄씩 자르고 배열에 추가합니다.
    const group = lines.slice(i, i + 10);
    groups.push(group);
  }
  console.log(groups, 'group');
  return groups;
};

const analyzeCoinTransactions = (arr: string[][]) => {
  const coins = []; // 코인별 거래금액을 저장할 객체

  for (let i = 0; i < arr.length; i++) {
    const coinName = arr[i][1]; // 코인 이름
    const action = arr[i][3]; // 거래 종류 (매수 또는 매도)
    const amount = parseFloat(arr[i][8].replace(/[^\d.-]/g, '')); // 거래 금액

    const coinIndex = coins.findIndex((coin) => coin.name === coinName);

    if (coinIndex !== -1) {
      // 이미 존재하는 경우 해당 코인의 거래금액을 업데이트
      if (action === '매도') {
        coins[coinIndex].amount += amount;
      } else if (action === '매수') {
        coins[coinIndex].amount -= amount;
      }
    } else {
      // 존재하지 않는 경우 새로운 코인 정보를 배열에 추가
      coins.push({
        name: coinName,
        amount: action === '매도' ? amount : -amount,
      });
    }
  }
  coins.sort((a, b) => b.amount - a.amount);
  return coins;
};

export const analyzeText = (text: string) => {
  const groups = splitText(text);
  const result = analyzeCoinTransactions(groups);
  return result;
};
