import { useEffect, useRef } from "react";

export const useUpdatePropertyByScroll = (
  updateState: (value: number | number[]) => void,
  states: number[] | Array<Array<number>>
) => {
  const ref = useRef<HTMLElement | null>();

  useEffect(() => {
    const onScroll = () => {
      const windowHeight = window.innerHeight;
      const rect = ref.current.getBoundingClientRect();
      const { bottom, top } = rect;
      const percentScrollTop = top >= 0 ? (top / windowHeight) * 100 : 0;
      const percentScrollBottom =
        bottom <= windowHeight ? (bottom / windowHeight) * 100 : 0;

      const isOverScroll = top <= 0 && bottom <= 0;
      const bottomIsMoreWindow = bottom > windowHeight;
      const topLessZero = top <= 0;

      const [completeState, halfState, fourthState, zeroState = 0] = states;

      if (
        percentScrollTop >= 80 &&
        percentScrollTop <= 100 &&
        bottomIsMoreWindow
      ) {
        updateState(completeState);
      } else if (
        percentScrollTop >= 50 &&
        percentScrollTop < 80 &&
        bottomIsMoreWindow
      ) {
        updateState(halfState);
      } else if (
        percentScrollTop >= 25 &&
        percentScrollTop < 50 &&
        bottomIsMoreWindow
      ) {
        updateState(fourthState);
      } else if (
        percentScrollTop > 0 &&
        percentScrollTop < 25 &&
        bottomIsMoreWindow
      ) {
        updateState(zeroState);
      }

      if (
        percentScrollBottom >= 80 &&
        percentScrollBottom <= 100 &&
        topLessZero
      ) {
        updateState(zeroState);
      } else if (
        percentScrollBottom >= 50 &&
        percentScrollBottom < 80 &&
        topLessZero
      ) {
        updateState(fourthState);
      } else if (
        percentScrollBottom >= 25 &&
        percentScrollBottom < 50 &&
        topLessZero
      ) {
        updateState(halfState);
      } else if (
        percentScrollBottom > 0 &&
        percentScrollBottom < 25 &&
        topLessZero
      ) {
        updateState(completeState);
      }

      if (
        percentScrollTop === 0 &&
        percentScrollBottom === 0 &&
        topLessZero &&
        bottomIsMoreWindow
      ) {
        updateState(zeroState);
      }

      if (isOverScroll) {
        updateState(completeState);
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [updateState, states]);

  return {
    ref,
  };
};
