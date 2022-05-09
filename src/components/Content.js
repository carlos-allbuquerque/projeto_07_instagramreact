import Stories from "./Stories"
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function Content() {
    return (
        <div class="conteudo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>

            <div class="direita">
                <Sidebar />
            </div>
        </div>
    );
}