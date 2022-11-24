import { Highlight, Items } from "@/components/Nav/Nav.styled";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItems = ({ items }) => {
  const router = useRouter();

  const [itemBoundingBox, setItemBoundingBox] = useState(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState(null);
  const [highlightedItem, setHighlightedItem] = useState(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true);

  /**
   * highlight positioning
   */
  const highlightRef = useRef(null);
  const wrapperRef = useRef(null);

  const repositionHighlight = (e, item) => {
    setItemBoundingBox(e.target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedItem);
    setHighlightedItem(item);
  };

  const resetHighlight = () => setHighlightedItem(null);

  let highlightStyles = {};

  if (itemBoundingBox && wrapperBoundingBox) {
    highlightStyles = {
      transitionDuration: isHoveredFromNull ? "0ms" : "200ms",
      opacity: highlightedItem ? 0.25 : 0,
      width: `${itemBoundingBox.width}px`,
      transform: `translate(${
        itemBoundingBox.left - wrapperBoundingBox.left
      }px)`,
    };
  }

  return (
    <Items ref={wrapperRef} onMouseLeave={resetHighlight}>
      <Highlight ref={highlightRef} css={highlightStyles} />
      {items.map((item) => (
        <Link
          href={item.path}
          key={item.path}
          className={router.pathname == item.path ? "active" : ""}
          onMouseOver={(ev) => repositionHighlight(ev, item)}
        >
          {item.text}
        </Link>
      ))}
    </Items>
  );
};

export default NavItems;
