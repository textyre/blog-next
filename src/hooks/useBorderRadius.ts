import { useMemo, useState } from "react";

export const useBorderRadius = (initialBorderRadius: number) => {
  const [borderRadius, setBorderRadius] = useState(initialBorderRadius);
  const states = [40, 40 * 1.5, 40 * 2, 40 * 3];

  const style = useMemo(
    () => ({
      borderRadius: `${borderRadius}px`,
    }),
    [borderRadius]
  );

  return {
    setBorderRadius,
    states,
    style,
  };
};
