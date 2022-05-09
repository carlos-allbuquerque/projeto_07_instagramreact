function Story(props) {
    return (
        <div class="story">
            <div class="story-cima">
                <div class="story-foto">
                    <img src={props.image} alt="" />
                </div> 
                
            </div> 
            <div class="nome-story">{props.name}</div> 
        </div>
    );
}

export default function Stories() {

    const stories = [
        {
            image: "./Arquivos/9gag 1.svg",
            name: "9gag"    
        } ,

        {
            image: "./Arquivos/meowed 1.svg",
            name: "meowed"    
        } ,
    
        {
            image: "./Arquivos/barked 1.svg",
            name: "barked"    
        } ,
            
        {
            image: "./Arquivos/nathanwpylestrangeplanet 1.svg",
            name: "nathanwpyle..."    
        } ,

        {
            image: "./Arquivos/wawawiwacomicsa 1.svg",
            name: "wawawiwac..."    
        } ,

        {
            image: "./Arquivos/respondeai 1.svg",
            name: "respondeai"    
        } ,

        {
            image: "./Arquivos/filomoderna 1.svg",
            name: "filomoderna"    
        } ,

        {
            image: "./Arquivos/memeriagourmet 1.svg",
            name: "memeriago."   
        } ,
    ]


    return (
        <div class="stories branco">
            <div class="botao"><img src="Arquivos/Vector (1).svg" alt="" /></div>
                
            {stories.map (item => <Story image={item.image} name={item.name} /> )}

        </div>
    );
}