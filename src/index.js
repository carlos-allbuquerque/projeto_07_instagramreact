import reactDom from "react-dom";
import Menu from "./components/Menu";
import Content from "./components/Content";


function App() {
    return (
        <div>
            <Menu />
            <Content /> 
        </div>

    );
}


reactDom.render(<App />, document.querySelector(".root"));