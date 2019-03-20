export const getValue = item =>
  (typeof item === 'object' ? item.value : item);

export const getKey = item =>
  (typeof item === 'object' ? item.key : item);

export const getInlineDesc = item =>
  (typeof item === 'object' ? item.inlineDesc : '');

export const getLabel = (list = [], value) => {
  if (!list.length) {
    return value;
  }
  if (typeof list[0] === 'string') {
    return value;
  }
  const match = list.filter(one => one.key === value);
  if (match.length) {
    return match[0].value || match[0].label;
  }
  return value;
};

export const getLabels =
  (list = [], values = []) =>
    values.map(value => getLabel(list, value));
