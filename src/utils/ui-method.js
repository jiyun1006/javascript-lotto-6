import { MissionUtils } from '@woowacourse/mission-utils';

export async function inputMethod(inputConst) {
  const input = await MissionUtils.Console.readLineAsync(inputConst);
  return input;
}

export function printMethod(printConst) {
  const print = MissionUtils.Console.print(printConst);
}
