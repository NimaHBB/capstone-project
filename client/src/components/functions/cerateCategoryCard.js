
const CreateCategoryCard=({doClick,bgColor})=>{

    return(
        <article onClick={doClick} style={{background:bgColor}}>
            <img src={require("../../images/sofa.png")} alt="Sofa"/>
            <p>Möbel</p>
        </article>
        

    )

}

export default CreateCategoryCard;