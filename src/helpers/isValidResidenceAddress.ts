const validResidenceNumberRegex = /[А-Я][а-яєі' ]+/g;

const isValidResidenceAddress = (residenceAddress: string) => {
  return residenceAddress.match(validResidenceNumberRegex);
};

export default isValidResidenceAddress;
