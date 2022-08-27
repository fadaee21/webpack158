export default class Alert12 {
    render() {
        const para = document.createElement("p")
        para.textContent = "my life be like"
        para.className = "alert alert-info"
        document.querySelector("body").append(para)
    }
}