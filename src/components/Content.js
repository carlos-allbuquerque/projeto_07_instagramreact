import Stories from "./Stories"
function LadoEsquerdo() {
    return (
        <Stories />
    );
}
export default function Content() {
    return (
        <div class="conteudo branco">
            <div class="esquerda">
                <LadoEsquerdo />
            </div>
        </div>
    );
}