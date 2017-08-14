const psst = require('./psst.js');
const {
  sign,
  validate
} = psst('super string');


console.log(sign('king'));
// console.log(sign('{"admin":"true"}'));


//crypto-ed sign(hash) = yrG4Fk02zAvQgeFOr2/ljNAyGArAzLUkaz/dUMsod+g= for value 'king'

console.log(validate('king', 'yrG4Fk02zAvQgeFOr2/ljNAyGArAzLUkaz/dUMsod+g='));

console.log(validate('heather', 'yrG4Fk02zAvQgeFOr2/ljNAyGArAzLUkaz/dUMsod+g='));
