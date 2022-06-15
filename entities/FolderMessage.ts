import { string } from "yup/lib/locale";

export interface FolderMessage {
  "message-id": string;
  from: string;
  subject: string;
}
