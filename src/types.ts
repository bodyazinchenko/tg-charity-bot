import { ObjectId } from 'mongodb';

export enum UserFormState {
  ENTER_PHONE_NUMBER = 'ENTER_PHONE_NUMBER',
  ENTER_FULL_NAME = 'ENTER_FULL_NAME',
  ENTER_BIRTHDAY_DATE = 'ENTER_BIRTHDAY_DATE',
  ENTER_CURRENT_CITY = 'ENTER_CURRENT_CITY',
  ENTER_CURRENT_STREET = 'ENTER_CURRENT_STREET',
  ENTER_CURRENT_BUILDING = 'ENTER_CURRENT_BUILDING',
  ENTER_CURRENT_APT = 'ENTER_CURRENT_APT',
  ENTER_RESIDENCE_ADDRESS = 'ENTER_RESIDENCE_ADDRESS',
  ENTER_DOCUMENT_PHOTO = 'ENTER_DOCUMENT_PHOTO',
  ALL_DATA_PASSED = 'ALL_DATA_PASSED'
}

export type UserFormData = {
  formState: UserFormState;
  phoneNumber?: string;
  fullName?: string;
  dateOfBirthday?: string;
  currentAddrCity?: string;
  currentAddrStreet?: string;
  currentAddrBuilding?: string;
  currentAddrApt?: string;
  residenceAddress?: string;
  documentPhotoUrl?: string;
};

export type UserTelegramData = {
  id: number;
  first_name: string;
  username: string;
  type: string;
};

export type MongoUser = {
  _id: ObjectId;
  userTgData: UserTelegramData;
  userFormData?: UserFormData;
};
