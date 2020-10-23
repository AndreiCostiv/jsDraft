//style:
import './style.css';

//DOM refs:
const body = document.getElementsByTagName('body')[0];

//data to insert:
const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo ad natus possimus facere, optio quidem rem facilis minima ab omnis, et laboriosam cumque magni dignissimos quasi adipisci obcaecati delectus?';

body.appendChild = text;

const Paragraph = () => {
    if (body !== undefined){
        body.appendChild = text;
        console.log('text added');
    }
};

export default Paragraph;