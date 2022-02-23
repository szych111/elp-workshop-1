import * as readlineBase from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { rpn } from "./rpn/rpn";
import { promisify } from "util";

async function main() {
  const rl = readlineBase.createInterface({ input, output });

  const question = promisify(rl.question);

  const answer: string = await new Promise((resolve) => {
    rl.question("Input rpn calculation: ", (answer) => resolve(answer));
  });

  const rpnResult = rpn(answer);

  console.log(`Your result: ${rpnResult}`);

  rl.close();
}

void main();
