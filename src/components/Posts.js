import Icone from "./Icone";
function Post(props) {
    return (
        <div class="post">
        <div class="topo-post branco">
            <div class="topo-esquerda">
                <div class="foto-perfil"><img src={props.profileImage} alt="" /></div>
                <h3>{props.profileName}</h3>
            
            </div>
            <div class="topo-direita">
                <Icone name="ellipsis-horizontal-outline" />
            </div>
         </div>
         <div class="imagem">
            <img src={props.postImage} alt="" />
         </div>
         <div class="baixo-post branco">
             <div class="baixo-esquerda">
                 <div class="baixo-topo">
                    <Icone name="heart-outline" />
                    <Icone name="chatbubble-outline" />
                    <Icone name="paper-plane-outline" />
                </div>
                <div class="comentarios">
                    <div class="foto-comentarios"><img src={props.commentImage} alt="" /></div>
                    <div>Curtido por <span>{props.commentName}</span>  e <span>outras 101.523 pessoas</span> </div>
                </div>
            </div>
            < div class="baixo-direita">
                <Icone name="bookmark-outline" />
            </div>
         </div>
    </div>
    );
}
export default function postMessage() {

    const posts = [
        {
            profileImage: "./Arquivos/meowed 2.svg",
            profileName: "meowed",
            postImage: "./Arquivos/gato-telefone 1.svg",
            commentImage: "./Arquivos/respondeai 2.svg",
            commentName: "respondeai"

        },

        {
            profileImage:"./Arquivos/barked 2.svg",
            profileName: "barked",
            postImage: "./Arquivos/dog 1.svg",
            commentImage: "./Arquivos/adorableanimals 2.svg",
            commentName: "adorable_animals" 
        },

        {
            profileImage: "./Arquivos/meowed 2.svg",
            profileName: "meowed",
            postImage: "./Arquivos/gato-telefone 1.svg",
            commentImage: "./Arquivos/respondeai 2.svg",
            commentName: "respondeai"
        }
    ]

    return (
        <div class="coluna-posts">
            {posts.map(item => <Post profileImage={item.profileImage} profileName={item.profileName} postImage={item.postImage} commentImage={item.commentImage} commentName={item.commentName} />)}    
        </div>
    );
}