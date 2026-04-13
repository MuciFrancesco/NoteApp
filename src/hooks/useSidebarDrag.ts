import { useRef, useState, useCallback, useEffect } from 'react';

const BTN_SIZE = 40;
const EDGE_MARGIN = 12;
const DRAG_THRESHOLD = 4;

function snapToEdge(x: number, y: number): { x: number; y: number } {
  const w = window.innerWidth - BTN_SIZE;
  const h = window.innerHeight - BTN_SIZE;
  const snapX = x < w / 2 ? EDGE_MARGIN : w - EDGE_MARGIN;
  const snapY = Math.max(EDGE_MARGIN, Math.min(h - EDGE_MARGIN, y));
  return { x: snapX, y: snapY };
}

interface UseSidebarDragReturn {
  btnPos: { x: number; y: number };
  isSnapping: boolean;
  handlePointerDown: (e: React.PointerEvent) => void;
  handleBtnClick: () => void;
}

export function useSidebarDrag(onToggle: () => void): UseSidebarDragReturn {
  const [btnPos, setBtnPos] = useState({ x: EDGE_MARGIN, y: 16 });
  const [isSnapping, setIsSnapping] = useState(false);
  const draggingRef = useRef(false);
  const didDragRef = useRef(false);
  const startMouse = useRef({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });

  const handlePointerMove = useCallback((e: PointerEvent) => {
    const dx = e.clientX - startMouse.current.x;
    const dy = e.clientY - startMouse.current.y;
    if (!didDragRef.current && Math.abs(dx) + Math.abs(dy) < DRAG_THRESHOLD) return;
    didDragRef.current = true;
    setIsSnapping(false);
    setBtnPos({
      x: Math.max(0, Math.min(window.innerWidth - BTN_SIZE, startPos.current.x + dx)),
      y: Math.max(0, Math.min(window.innerHeight - BTN_SIZE, startPos.current.y + dy)),
    });
  }, []);

  const handlePointerUp = useCallback(() => {
    draggingRef.current = false;
    document.removeEventListener('pointermove', handlePointerMove);
    document.removeEventListener('pointerup', handlePointerUp);
    if (didDragRef.current) {
      setBtnPos((prev) => {
        setIsSnapping(true);
        return snapToEdge(prev.x, prev.y);
      });
    }
  }, [handlePointerMove]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture?.(e.nativeEvent.pointerId);
    draggingRef.current = true;
    didDragRef.current = false;
    startMouse.current = { x: e.clientX, y: e.clientY };
    startPos.current = { ...btnPos };
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
  }, [btnPos, handlePointerMove, handlePointerUp]);

  const handleBtnClick = useCallback(() => {
    if (!didDragRef.current) onToggle();
  }, [onToggle]);

  useEffect(() => {
    const onResize = () => {
      setBtnPos((p) => snapToEdge(p.x, p.y));
      setIsSnapping(true);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return { btnPos, isSnapping, handlePointerDown, handleBtnClick };
}
