export const uniqueArr = (a: any) => {

  let seen: any = {};
  let out = [];
  let len = a.length;
  let j = 0;

  for(let i = 0; i < len; i++) {
    let item = a[i];

    if(seen[item] !== 1) {
      seen[item] = 1;
      out[j++] = item;
    }
  }
  
  return out;
};
