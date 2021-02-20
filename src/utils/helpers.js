/**
 * The function handleBack goes back in the browser history.
 */

const handleBack = (event) => {
  if (typeof window === "undefined") return;
  event.preventDefault();
  history.back();
};

/**
 * The function parMinMax it´s for setting css properties
 * according to the window offset.
 */

const parMinMax = (min, max, ratio, offset, type = "px") => {
  let result = offset * ratio;
  if (result >= max) result = max;
  if (result <= min) result = min;
  return `${result}${type}`;
};

/**
 * The function parMinMax it´s for setting css properties
 * according to the window offset.
 */

const parStartEnd = (start, end, ratio, offset, type = "px") => {
  let result = start + offset * ratio;
  if ((result >= end && start < end) || (result <= end && start > end)) {
    return `${end}${type}`;
  }
  return `${result}${type}`;
};

export { handleBack, parMinMax, parStartEnd };
