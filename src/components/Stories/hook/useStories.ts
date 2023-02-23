import { useState, useMemo, useCallback, CSSProperties } from "react";

export type TTrigger = "next" | "prev" | undefined;

export const useStories = () => {
  const [openStories, setOpen] = useState(false);
  const [initialStory, setInitialStory] = useState(0);
  const [backgroundLink, setBackgroundLink] = useState("");
  const [triggerSwipe, setTriggerSwipe] = useState<TTrigger>(undefined);

  const initialStoryMemo = useMemo(() => initialStory, [initialStory]);

  const style: CSSProperties = {
    backgroundImage: `url(${backgroundLink})`,
  };

  const onOpenStories = useCallback(
    (index: number, isOpen: boolean = false) => {
      setOpen(isOpen);
      setInitialStory(index);
    },
    []
  );

  const onCloseStories = () => setOpen(false);

  const onBackground = (link: string) => setBackgroundLink(link);

  const onTrigger = (type: TTrigger) => () => setTriggerSwipe(type);

  return {
    openStories,
    initialStoryMemo,
    style,
    triggerSwipe,
    onOpenStories,
    onCloseStories,
    onBackground,
    onTrigger,
  };
};
