import { MutableRefObject, useCallback } from "react";

export const useMergeRefs = <T,>(
  ...refs: Array<MutableRefObject<T> | React.LegacyRef<T> | null | undefined>
): React.RefCallback<T> => {
  return useCallback((value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  }, refs);
};
