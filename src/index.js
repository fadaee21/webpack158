import './style/all.scss'
import 'bootstrap'
import Button from "./components/button/button";
import Image from "./components/image/Image"
import Alert12 from "./components/alert/alert";

const button = new Button();
button.render()

const image = new Image()
image.render()

const alert = new Alert12
alert.render()
