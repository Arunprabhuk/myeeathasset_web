import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images } from "../data/ComponentData";
import { useSelector } from "react-redux";
import { useService } from "../helpers/useService";

export default function ImageViewer() {
  const [index, setIndex] = useState(-1);
  const url = useService();
  const { id, allUserAssetsDetails } = useSelector((state) => state.user);
  const filterImageNameById =
    allUserAssetsDetails.length > 0 &&
    allUserAssetsDetails
      .filter((item) => {
        return item.id === id;
      })
      .map((item, index) => {
        return {
          src: `${url}/${item.imageUrl.split("/").pop()}`,
          original: `${url}/${item.imageUrl.split("/").pop()}`,
          width: 500,
          height: 500,
          tags: [
            { value: "Nature", title: "Nature" },
            { value: "Flora", title: "Flora" },
          ],
          caption: "After Rain (Jeshu John - designerspics.com)",
        };
      });
  const slides = filterImageNameById.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));
  const handleClick = (index, item) => setIndex(index);
  return (
    <div
      style={{
        backgroundColor: "beige",
        padding: 5,
      }}
    >
      <Gallery
        images={filterImageNameById}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}
