const [A,B,C] = [1000,13,38];
const margin = C - B;
    const answer = Math.floor(A/margin)+1;
    console.log( margin <= 0 ? -1 : answer );