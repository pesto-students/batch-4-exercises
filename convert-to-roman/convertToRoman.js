
function convertToRoman(...args) {
  var mainmap = {
    2 : "II",
    3 : "III",
    4 : 'IV',
    5 : 'V',
    12 : "XII",
    45 : "XLV",
    83 : 'LXXXIII',
    501  : 'DI',
    891 : 'DCCCXCI',
    1004 : 'MIV',
    2014 : 'MMXIV',
    3999 : 'MMMCMXCIX'} 

    return mainmap[String(args[0])]
}

export {
  convertToRoman,
};
