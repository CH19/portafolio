const camelToKebab = str => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
const camelTokebabArr = strArr => {
    const allLower = strArr.map(e => {
       const newe = camelToKebab(e);
       return newe
    });
    let newStr = ''
    allLower.forEach(e => newStr += `'${e}' |`)
    console.log(newStr);
}
camelTokebabArr(['ViFileTypeTailwind','ViFileTypeReactjs', 'ViFileTypeAngular'])