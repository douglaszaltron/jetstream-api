/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
function filter(collator) {
  return {
    startsWith(string, substring) {
      if (substring.length === 0) {
        return true;
      }

      string = string.normalize('NFC');
      substring = substring.normalize('NFC');
      return (
        collator.compare(string.slice(0, substring.length), substring) === 0
      );
    },
    endsWith(string, substring) {
      if (substring.length === 0) {
        return true;
      }

      string = string.normalize('NFC');
      substring = substring.normalize('NFC');
      return collator.compare(string.slice(-substring.length), substring) === 0;
    },
    contains(string, substring) {
      if (substring.length === 0) {
        return true;
      }

      string = string.normalize('NFC');
      substring = substring.normalize('NFC');

      let scan = 0;
      const sliceLen = substring.length;
      for (; scan + sliceLen <= string.length; scan++) {
        const slice = string.slice(scan, scan + sliceLen);
        if (collator.compare(substring, slice) === 0) {
          return true;
        }
      }

      return false;
    },
  };
}

export default filter;
