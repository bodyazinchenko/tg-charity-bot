const validCurrentAddressRegex = /[А-Я][а-яєі' ]+/g;

const isValidCurrentAddress = (currentAddress: string) => {
  return currentAddress.match(validCurrentAddressRegex);
};

export default isValidCurrentAddress;
