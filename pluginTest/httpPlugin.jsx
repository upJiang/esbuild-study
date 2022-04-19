// 这段代码目前是无法运行的
import { render } from "https://cdn.skypack.dev/react-dom";

let Greet = () => <h1>Hello, juejin!</h1>;

render(<Greet />, document.getElementById("root"));