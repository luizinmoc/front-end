import { useState } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal
} from "@floating-ui/react";


export default function Tooltip({children,label,disabled}:{children:React.ReactNode,label:string,disabled?:boolean}) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen&&!disabled,
    onOpenChange: setIsOpen,
    placement: "bottom",
    
    // Make sure the tooltip stays on the screen
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        fallbackAxisSideDirection: "end"
      }),
      shift()
    ]
  });

  // Event listeners to change the open state
  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  // Role props for screen readers
  const role = useRole(context, { role: "tooltip" });

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role
  ]);

  return (
    <>
      <div className=" bg-transparent border-0 hover:border-0 focus:border-0 focus:outline-none p-0 m-0 w-full" ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      <FloatingPortal>
        {isOpen&&(disabled?!disabled:true) && (
          <div
            className=" z-[999] w-max dark:bg-zinc-800 dark:text-slate-50 bg-zinc-100 border border-zinc-200 dark:border-zinc-700 text-slate-950  px-2 py-1 rounded-md text-sm"
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {label}
          </div>
        )}
      </FloatingPortal>
    </>
  );
}