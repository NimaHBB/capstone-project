
const CreateCategoryCard=({doClick,catObject})=>{

    return(
        <article onClick={doClick} style={{background:catObject.bgColor}}>
            <img src={catObject.imageUrl} alt="Sofa"/>
            <p>{catObject.catName}</p>
        </article>
    )
}

export default CreateCategoryCard;