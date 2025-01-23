import { DialogState, DialogType } from "@/types/general-types";
import { useReducer } from "react";

type DialogAction<T> =
  | {
      type: "OPEN_DIALOG";
      payload: {
        type: DialogType;
        data?: T;
      };
    }
  | {
      type: "CLOSE_DIALOG";
    };

const createInitialState = <T>(): DialogState<T> => ({
  isOpen: false,
  type: "create",
  data: null,
});

function dialogReducer<T>(
  state: DialogState<T>,
  action: DialogAction<T>,
): DialogState<T> {
  switch (action.type) {
    case "OPEN_DIALOG":
      return {
        isOpen: true,
        type: action.payload.type,
        data: action.payload.data || null,
      };
    case "CLOSE_DIALOG":
      return {
        ...state,
        isOpen: false,
        data: null,
      };
    default:
      return state;
  }
}

export function useDialogReducer<T = any>() {
  const [state, dispatch] = useReducer(
    dialogReducer<T>,
    createInitialState<T>(),
  );

  const openDialog = (type: DialogType, data?: T) => {
    dispatch({
      type: "OPEN_DIALOG",
      payload: { type, data },
    });
  };

  const closeDialog = () => {
    dispatch({ type: "CLOSE_DIALOG" });
  };

  return {
    dialogState: state,
    openDialog,
    closeDialog,
  };
}
