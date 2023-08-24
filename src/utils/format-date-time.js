export const formatDateTime = (inputDateTime) => {
  const dtObject = new Date(inputDateTime);

  function addLeadingZero(number) {
    return number < 10 ? "0" + number : number;
  }

  const formattedDate = addLeadingZero(dtObject.getDate()) + "-" +
                      addLeadingZero(dtObject.getMonth() + 1) + "-" +
                      dtObject.getFullYear();
  const formattedTime = addLeadingZero(dtObject.getHours()) + ":" +
                      addLeadingZero(dtObject.getMinutes()) + ":" +
                      addLeadingZero(dtObject.getSeconds());

  const desiredFormat = formattedDate + " " + formattedTime;

  return desiredFormat;
}