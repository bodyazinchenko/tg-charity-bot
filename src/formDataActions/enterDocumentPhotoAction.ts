import texts from '../texts';
import { MongoUser, UserFormState } from '../types';
import updateUserFormData from '../userActions/updateUserFormData';
import { bot } from '../setupBot';

const enterDocumentPhotoAction = async (msg: any, user: MongoUser) => {
  const photoId = msg.photo[0].file_id;
  if (photoId) {
    msg.reply.text(texts.ALL_DATA_PASSED);
    // save user full name
    await updateUserFormData(msg.chat.id, {
      ...user.userFormData,
      documentPhotoUrl: photoId,
      formState: UserFormState.ALL_DATA_PASSED // go to another step
    });
  } else {
    msg.reply.text(texts.INVALID_DOCUMENT_PHOTO);
  }
};

export default enterDocumentPhotoAction;
