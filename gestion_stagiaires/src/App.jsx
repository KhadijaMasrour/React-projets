import Aside from "./layout/Aside.jsx";
import Content from "./layout/Content.jsx";
import Header from "./layout/Header.jsx";

export default function App() {
    return(
        <div>
            <Header />
            <div className="flex">
                <Aside />
                <Content />
            </div>
        </div>
    )
}