import { Wrapper } from "@/components/Grid/Grid.styled";
import GridItem from "@/components/Grid/Item";
import GridLoadMore from "@/components/Grid/LoadMore";
import { useMediaQuery } from "@/hooks/use-media-query";
import { width } from "@/styles/media";
import { useEffect, useState } from "react";

const Grid = ({ children }) => {
  /**
   * @todo move this elsewhere and make it smarter
   */
  let mediaQuery = new Map();
  mediaQuery.set("xs", useMediaQuery(width.xs));
  mediaQuery.set("sm", useMediaQuery(width.sm));
  mediaQuery.set("md", useMediaQuery(width.md));
  mediaQuery.set("lg", useMediaQuery(width.lg));
  mediaQuery.set("xl", useMediaQuery(width.xl));

  useEffect(() => {
    if (mediaQuery.get("xs")) {
      setCols(1);
      return;
    }
    if (mediaQuery.get("sm")) {
      setCols(2);
      return;
    }
    if (mediaQuery.get("md")) {
      setCols(3);
      return;
    }
    if (mediaQuery.get("lg")) {
      setCols(4);
      return;
    }
    if (mediaQuery.get("xl")) {
      setCols(5);
      return;
    }
  }, [mediaQuery]);

  const [cols, setCols] = useState(5);

  return (
    <Wrapper
      breakpointCols={cols}
      className="can-grid"
      columnClassName="can-grid-column"
    >
      {children}
    </Wrapper>
  );
};

Grid.Item = GridItem;
Grid.LoadMore = GridLoadMore;

export default Grid;
