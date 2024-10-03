module.exports = function toReadable (number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const thousands = ['', 'thousand', 'million', 'billion'];

  if (number === 0) {
    return 'zero';
  } else if (number < 10) {
    return ones[number];
  } else if (number < 20) {
    return teens[number - 10];
  } else if (number < 100) {
    return tens[Math.floor(number / 10)] + (number % 10 ? ' ' + ones[number % 10] : '');
  } else if (number < 1000) {
    return ones[Math.floor(number / 100)] + ' hundred' + (number % 100 ? ' ' + toReadable(number % 100) : '');
  } else {
    let result = '';
    let i = 0;
    while (number > 0) {
      if (number % 1000 != 0) {
        result = toReadable(number % 1000) + ' ' + thousands[i] + (result ? ' ' + result : '');
      }
      number = Math.floor(number / 1000);
      i++;
    }
    return result;
  }
}
