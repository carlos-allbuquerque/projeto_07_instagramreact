function MenuDireita() {
    return (
        <div class="menu-direita">
            <Icone class="icone" name="paper-plane-outline" />
            <Icone class="icone" name="compass-outline" />
            <Icone class="icone" name="heart-outline" />
            <Icone class="icone" name="person-outline" />
        </div>
    );
}

function Icone(props) {
    return (
        <div class={props.class}>
            <ion-icon name={props.name}></ion-icon>
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
                <div class="icone"><ion-icon name="logo-instagram"></ion-icon></div>
                <div class="logo"><img src="./Arquivos/logo.png" alt=""/></div>
                <div class="icone"><ion-icon name="paper-plane-outline"></ion-icon></div>
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