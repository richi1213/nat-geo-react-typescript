import { IMAGES_FOLDER_NAME, VIDEOS_FOLDER_NAME } from './storage-services';

export type UploadDestination = {
  file: File;
  folder: typeof IMAGES_FOLDER_NAME | typeof VIDEOS_FOLDER_NAME;
};
