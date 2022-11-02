import moment from 'moment';

const isValidBirthday = (birthday: string) => {
  const isBirthdayValid = moment(birthday, 'DD.MM.YYYY', true).isValid();

  if (!isBirthdayValid) {
    return {
      isValid: false,
      message: 'Неправильний формат. Введіть дату в форматі: 01.12.1990'
    };
  }

  const birthdayYears = moment().diff(moment(birthday, 'DD.MM.YYYY'), 'years');
  if (birthdayYears < 18 || birthdayYears > 99) {
    return {
      isValid: false,
      message: 'Вам повинно бути від 18 до 99 років'
    };
  }

  return {
    isValid: true
  };
};

export default isValidBirthday;
