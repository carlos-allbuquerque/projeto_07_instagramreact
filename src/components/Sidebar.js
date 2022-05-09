function User(props) {
    return (
        <div class="sidebar-topo">
            <div class="foto-perfil"><img src={props.picture} alt="" /></div>
            <div>
                <h3 class="nome-sidebar">{props.nickname}</h3>
                <h3 class="catana">{props.name}</h3>
            </div>
        </div>  
    );
}

const sugestions = [
        {
            picture: "./Arquivos/badvibesmemes 1.svg",
            nickname: "bad.vibe.memes",
        },

        {
            picture: "./Arquivos/chibirdart 1.svg",
            nickname: "chibirdart",

        },

        {
            picture: "./Arquivos/razoesparaacreditar 1.svg",
            nickname: "razoesparaacreditar",
        },

        {
            picture: "./Arquivos/adorableanimals 1.svg",
            nickname: "adorable-animals",
        },

        {
            picture: "./Arquivos/smallcutecats 1.svg",
            nickname: "smallcutecats",
        },

];

function Sugestion(props) {
    return (
        <div class="sugestao">
            <div class="sugest-direita">
                <div class="foto-perfil"><img src={props.picture} alt="" /></div>
                <div>
                    <h3 class="nome-sidebar">{props.nickname}</h3>
                    <h3 class="bottom-nome">Segue você</h3>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div> 
    );
}
export default function Sidebar() {
    return (
        <div class="sidebar">
            <User picture="./Arquivos/catanacomics 1.svg" nickname="catanacomics" name="Catana" />
            <div class="sidebar-meio">
                <div class="sugest-topo">
                <div class="sugest">Sugestões para você</div>
                    <div class="ver">Ver tudo</div>
                </div>

                {sugestions.map(item => <Sugestion picture={item.picture} nickname={item.nickname} />)}

            </div>
            <div class="sidebar-fim">
                <div class="adicional">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags • 
                    Idioma
                </div>
                <div class="adicional">© 2021 INSTAGRAM DO FACEBOOK</div>
            </div>
        </div>
    );
}