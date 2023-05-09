const input = parseInt(process.argv[2]);

const months: { [key: string]: number[] } = {
  "A long month: 31 days": [31, 1, 3, 5, 7, 8, 10, 12],
  "February! 28 or 29 on a leapyear": [2],
  "Regular month: 30 days": [30, 4, 9, 11]
};

Object.keys(months).forEach((key) => {
  if (months[key].includes(input)) {
    console.log(key);
  }
});
