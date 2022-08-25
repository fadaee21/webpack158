import './button.css'
class Button {
    render() {
        const button = document.createElement("button");
        button.textContent = "say Hello";
        button.className = "btn-dark";
        const body = document.querySelector("body");
        body.appendChild(button);


        button.onclick = () => {
            const para = document.createElement("p")
            para.innerText = "Hello World"
            para.classList.add("text-info")
            body.appendChild(para)
        }
    }
}

export default Button;