import reactDom from "react-dom";
import Menu from "./components/Menu";


function App() {
    return (
        <Menu />
    );
}


reactDom.render(<App />, document.querySelector(".root"));