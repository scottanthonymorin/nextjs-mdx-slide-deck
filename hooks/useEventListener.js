import { useRef, useEffect } from "react";

export default function useEventListener(eventName, handler) {
  const windowEl = process.browser ? window : null;
  const eventEl = windowEl;

  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = eventEl?.addEventListener;
    if (!isSupported) return;

    const eventListener = (ev) => savedHandler.current(ev);

    eventEl.addEventListener(eventName, eventListener);

    return () => {
      eventEl.removeEventListener(eventName, eventListener);
    };
  }, [eventName, eventEl]);
}
