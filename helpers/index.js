export const formateDate = (date) => {
  const d = new Date(date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',

  }

  return d.toLocaleDateString('es-ES', options);
};

export const  truncateString = (str, num) => {
  if (str.length > num) {
      let subStr = str.substring(0, num);
      return subStr + "...";
  } else {
      return str;
  }
}