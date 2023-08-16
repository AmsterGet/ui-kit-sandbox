export const getOptionValue = (value) => (value instanceof Object ? value.value : value);

export const calculateDefaultIndex = (options, selectedValue) =>
  options.map(({ value }) => value).indexOf(getOptionValue(selectedValue));

const calculateCurrentItemIndex = (index, itemsCount) =>
  ((index % itemsCount) + itemsCount) % itemsCount;

const findNearestAvailableIndex = (index, options, step = 1) => {
  if (!options[index].disabled) {
    return index;
  }
  const itemsCount = options.length;

  return findNearestAvailableIndex(calculateCurrentItemIndex(index + step, itemsCount), options);
};

export const calculateNextIndex = (index, options) => findNearestAvailableIndex(index, options);

export const calculatePrevIndex = (index, options) => findNearestAvailableIndex(index, options, -1);
