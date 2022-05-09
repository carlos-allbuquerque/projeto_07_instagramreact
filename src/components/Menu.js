import Icone from "./Icone";

function MenuDireita() {
    return (
        <div class="menu-direita">
            <Icone name="paper-plane-outline" />
            <Icone name="compass-outline" />
            <Icone name="heart-outline" />
            <Icone name="person-outline" />
        </div>
    );
}



function MenuEsquerda() {
    return (
        <div class="menu-esquerda">
            <Icone class="icone" name="logo-instagram" />
            <div class="borda"></div>
            <div class="logo"><img src="./Arquivos/logo.png" alt="" /></div>
        </div>
    );
}

function MenuPequeno() {
    return (
        <div class="menu-pequeno branco">
            <div class="conteudo-menu">
                <Icone name="logo-instagram" />
                <div class="logo"><img src="./Arquivos/logo.png" alt=""/></div>
                <Icone name="paper-plane-outline" />
            </div>
        </div>
    );
}
export default function Menu () {

    return (
        <div>
            <div class="menu branco">
                <div class="conteudo-menu">

                    <MenuEsquerda />
        
                    <div class="barra-pesquisa">
                        Pesquisar
                    </div>
                    <MenuDireita />
                </div>
            </div>
            <MenuPequeno />
        </div>
    );
}