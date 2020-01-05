//this is a mess :D
function accum(s) {
    let finalAccum = [];
    for(let i = 0; i < s.length; i++){
      let formatUpper = s.charAt(i+1).toUpperCase();
      let formatLower = s.charAt(i+1).repeat(i+1).toLowerCase() + '-';
      finalAccum.push(formatUpper);
      finalAccum.push(formatLower);
      }
    finalAccum.unshift(s.charAt(0) + '-').toUpperCase; 
    let final = finalAccum.join('').slice(0, -2);
    console.log(final);
    return final;
  }