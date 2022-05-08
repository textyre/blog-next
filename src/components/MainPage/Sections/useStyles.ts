import { useLRMargin } from "@hooks/useLRMargin";
import { useBorderRadius } from "@hooks/useBorderRadius";
import { useUpdatePropertyByScroll } from "@hooks/useUpdatePropertyByScroll";

export const useStyles = () => {
  const {
    style: marginStyles,
    setMargin,
    states: marginStates,
  } = useLRMargin(2);
  const {
    style: borderRadiusStyle,
    setBorderRadius,
    states: borderRadiusStates,
  } = useBorderRadius(40);

  const updateState = (states: number[]) => {
    const [margin, borderRadius] = states;
    setMargin(margin || 0);
    setBorderRadius(borderRadius);
  };

  const states = [
    [marginStates[0], borderRadiusStates[0]],
    [marginStates[1], borderRadiusStates[1]],
    [marginStates[2], borderRadiusStates[2]],
    [marginStates[3], borderRadiusStates[3]],
  ];

  const { ref } = useUpdatePropertyByScroll(updateState, states);

  return {
    style: {
      ...marginStyles,
      ...borderRadiusStyle,
    },
    ref,
  };
};
