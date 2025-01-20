export type DialogType = "create" | "payment" | "success";

export interface DialogState<T> {
  isOpen: boolean;
  type: DialogType;
  data: T | null;
}
