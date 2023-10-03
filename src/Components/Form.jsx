import './Form.css';
import {useState} from 'react';

function Form(){
  
  const [text , setText] = useState('');
  
  const onChangeFunc = (event)=>{
    setText(event.target.value)
  }
  
  const toUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }
  
  const toLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }
  
  const copy = ()=>{
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value)
  }
  
  return(
      <section className="analyser-section">
        <div className="section-heading">
          <h2>ANALYSER</h2>
        </div>
        <div className="text-section">
          <form>
            <textarea name="paragraph" className="textarea" value={text} onChange={onChangeFunc} id='myBox' placeholder="Your Text Here" />
            <div className="buttons-section">
              <button type="button" class="button capital" onClick={toUpperCase}>CAPITAL</button>
              <button type="button" class="button small" onClick={toLowerCase}>SMALL</button>
              <button type="button" class="button copy" onClick={copy}>COPY</button>
            </div>
            <div className="info">
              <label>Your Text Have<span>{text.length}</span> Characters and<span>{text.split(" ").length}</span>Words</label>
            </div>
          </form>
        </div>
      </section>
    )
};

export default Form;