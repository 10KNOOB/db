import React, { useRef, useEffect } from "react";

const cursor = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      const blob = blobRef.current;

      blob.style.left = `${clientX}px`;
      blob.style.top = `${clientY}px`;
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <div id="blob" ref={blobRef}></div>
      <div id="blur"></div>
    </>
  );
};

export default cursor;
