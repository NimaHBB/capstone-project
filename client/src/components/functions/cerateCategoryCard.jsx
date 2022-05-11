import React from "react";

const CreateCategoryCard = ({ doClick, catObject, imagesPath }) => {
  return (
    <article
      onClick={() => doClick(catObject.catName)}
      style={{ background: catObject.bgColor }}
    >
      <img src={imagesPath + catObject.imageUrl} alt="Sofa" />
      <p>{catObject.catName}</p>
    </article>
  );
};

export default CreateCategoryCard;
