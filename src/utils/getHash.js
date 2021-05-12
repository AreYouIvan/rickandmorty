const getHash = () => 
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/' // ['', '1']
// slice() trash an element.
// Split() convert to an array

export default getHash;