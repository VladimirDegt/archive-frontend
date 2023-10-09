export const formatDateTime = inputDateTime => {
  if (!inputDateTime) {
    return;
  }
  const dtObject = new Date(inputDateTime);

  function addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
  }

  const formattedDate =
    addLeadingZero(dtObject.getDate()) +
    '-' +
    addLeadingZero(dtObject.getMonth() + 1) +
    '-' +
    dtObject.getFullYear();
  const desiredFormat = formattedDate;

  return desiredFormat;
};
