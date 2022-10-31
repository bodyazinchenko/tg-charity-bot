const validBirthdayRegex = /[0-9]{2}[.][0-9]{2}[.][0-9]{4}/;

const isValidBirthday = (birthday: string) => {
  return birthday.match(validBirthdayRegex);
};

export default isValidBirthday;
