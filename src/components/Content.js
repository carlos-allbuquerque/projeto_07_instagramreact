import Stories from "./Stories"
import Posts from "./Posts";

export default function Content() {
    return (
        <div class="conteudo branco">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
        </div>
    );
}