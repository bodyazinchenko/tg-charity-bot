import texts from '../texts';
import moment from 'moment';

const isValidBirthday = (birthday: string) => {
  const isBirthdayValid = moment(birthday, 'DD.MM.YYYY', true).isValid();

  if (!isBirthdayValid) {
    return {
      isValid: false,
      message: texts.INVALID_BIRTHDAY_FORMAT
    };
  }

  const birthdayYears = moment().diff(moment(birthday, 'DD.MM.YYYY'), 'years');
  if (birthdayYears < 18 || birthdayYears > 99) {
    return {
      isValid: false,
      message: texts.INVALID_BIRTHDAY_YEARS
    };
  }

  return {
    isValid: true
  };
};

export default isValidBirthday;
