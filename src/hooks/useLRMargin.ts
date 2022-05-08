import { useMemo, useState } from "react";

export const useLRMargin = (initialMargin: number) => {
  const [margin, setMargin] = useState(initialMargin);
  const states = [initialMargin, initialMargin / 2, initialMargin / 4];

  const style = useMemo(
    () => ({
      marginLeft: `${margin}%`,
      marginRight: `${margin}%`,
    }),
    [margin]
  );

  return {
    style,
    setMargin,
    states,
  };
};
