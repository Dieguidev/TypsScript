//Dieguidev => [D,i,e,g,u,i,d,e,v] => string => strin[]
//[D,i,e,g,u,i,d,e,v] => Dieguidev => string => strin[]

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); //string
  } else {
    return input.split(''); //string[]
  }
}

const rtaArray = parseStr('Dieguidev');
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', 'Dieguidev =>', rtaArray);

const rtaStr = parseStr(['D', 'i', 'e', 'g', 'u', 'i', 'd', 'e', 'v']);
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['D', 'i', 'e','g', 'u', 'i','d', 'e', 'v'] =>", rtaStr);
