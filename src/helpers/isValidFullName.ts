const validFullNameRegex =
  /[А-ЯЄІ][а-яєі\']+ +[А-ЯЄІ][а-яєі\']+ +[А-ЯЄІ][а-яєі\']+/g;

const isValidFullName = (fullName: string) => {
  return fullName.match(validFullNameRegex);
};

export default isValidFullName;
