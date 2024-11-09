const grade = Object.freeze({
  MORTAL: 1,
  EARTHLY: 2,
  SKY: 3,
  HEAVENLY: 4,
  TRANSCENDANT: 5,
  SAGE: 6,
  IMMORTAL: 7,
});

const rank = Object.freeze({
  First: 1,
  Second: 2,
  Third: 3,
  Fourth: 4,
  Fifth: 5,
  Sixth: 6,
  Seventh: 7,
  Eighth: 8,
  Ninth: 9,
});

const level_arr = [];

Object.keys(grade).forEach((gradeKey) => {
  Object.keys(rank).forEach((rankKey) => {
    level_arr.push(
      grade[gradeKey] + Number.parseFloat((rank[rankKey] / 10).toFixed(1))
    );
  });
});

//export 
const levels = level_arr;

//export 
const next = (current) => {
  //find level index
  const index = levels.indexOf(current);
  if (index === -1) return undefined;
  if (index === levels.length - 1) return undefined;
  return levels[index + 1];
};

//export 
const previous = (current) => {
  //find level index
  const index = levels.indexOf(current);
  if (index === -1) return undefined;
  if (index === 0) return undefined;
  return levels[index - 1];
};

//export 
const multiplier = (current, item) => {
  //find current index
  const cindex = levels.indexOf(current);
  //find item index
  const iindex = levels.indexOf(item);

  if (cindex === -1 || iindex === -1) return undefined;
  if (cindex === iindex) return 1;
  if (Math.abs(cindex - iindex) >= 10) return 0;
  return 1 + (iindex - cindex) / 10;
};

//export 
const expNext = (level, a = 1000, b = 5) => {
  return Math.floor(a * Math.pow(Math.log(level), b));
};

//export 
const expCurve = (a = 1000, b = 5) => {
  let expCurve_arr = [];
  levels.forEach((level) => {
    let exp = expNext(level, a, b);
    let expp = expNext(previous(level), a, b);
    expCurve_arr.push({
      Level: level,
      Exp: exp,
      Diff: exp - expp > 0 ? exp - expp : 0,
    });
  });
  return expCurve_arr;
};

module.exports = { next, previous, multiplier, levels, expNext, expCurve };
