import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export function Tilt({ children, options, ...rest }) {
  const tilt = useRef(null);

  useEffect(() => {
    const node = tilt.current;
    if (!node) return;

    VanillaTilt.init(node, options);

    return () => {
      if (node.vanillaTilt) {
        node.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return (
    <div ref={tilt} {...rest}>
      {children}
    </div>
  );
}
