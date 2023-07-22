//Dieguidev => [D,i,e,g,u,i,d,e,v] => string => strin[]
//[D,i,e,g,u,i,d,e,v] => Dieguidev => string => strin[]

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); //string
//   } else {
//     return input.split(''); //string[]
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); //string
  } else if(typeof input === 'string') {
    return input.split(''); //string[]
  }
}

const rtaArray = parseStr('Dieguidev');
rtaArray.reverse();
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }
console.log('rtaArray', 'Dieguidev =>', rtaArray);

const rtaStr = parseStr(['D', 'i', 'e', 'g', 'u', 'i', 'd', 'e', 'v']);
rtaStr.toLowerCase();
// if (typeof rtaStr === 'string') {
//   rtaStr.toLowerCase();
// }
console.log('rtaStr', "['D', 'i', 'e','g', 'u', 'i','d', 'e', 'v'] =>", rtaStr);
