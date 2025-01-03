import React, { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Ensure the ref exists and the click is outside the element
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event); // Invoke the callback with the event
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};



















// import React, { useEffect } from "react";

// export const useOutsideClick = (
//   ref: React.RefObject<HTMLDivElement>,
//   callback: Function
// ) => {
//   useEffect(() => {
//     const listener = (event: any) => {
//       if (!ref.current || ref.current.contains(event.target)) {
//         return;
//       }
//       callback(event);
//     };

//     document.addEventListener("mousedown", listener);
//     document.addEventListener("touchstart", listener);

//     return () => {
//       document.removeEventListener("mousedown", listener);
//       document.removeEventListener("touchstart", listener);
//     };
//   }, [ref, callback]);
// };
