function filter(collator) {
  const upper = (string) => string.toUpperCase();

  return {
    equal(search) {
      const { type, value } = search;
      const filtered = (array) =>
        array.some(
          (child) => child.value === value && upper(child.type) === upper(type)
        );
      return collator.filter((item) => filtered(item.identifiers));
    },
  };
}

export default filter;
