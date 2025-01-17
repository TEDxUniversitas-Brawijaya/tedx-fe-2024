export type DialogType = "create" | "payment" | "success";

export interface DialogState<T = any> {
  isOpen: boolean;
  type: DialogType;
  data: T | null;
}
