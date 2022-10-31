import { ObjectId } from 'mongodb';

export enum UserFormState {
  ENTER_PHONE_NUMBER = 'ENTER_PHONE_NUMBER',
  ENTER_FULL_NAME = 'ENTER_FULL_NAME',
  ENTER_BIRTHDAY_DATE = 'ENTER_BIRTHDAY_DATE',
  ENTER_CURRENT_ADDRESS = 'ENTER_CURRENT_ADDRESS',
  ENTER_RESIDENCE_ADDRESS = 'ENTER_RESIDENCE_ADDRESS',
  ENTER_DOCUMENT_PHOTO = 'ENTER_DOCUMENT_PHOTO',
  ALL_DATA_PASSED = 'ALL_DATA_PASSED'
}

export type UserFormData = {
  formState: UserFormState;
  phoneNumber?: number;
  fullName?: string;
  dateOfBirthday?: string;
  currentAddress?: string;
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
