import { useId, useState, useEffect } from "react";

function TextInput(props){
  const { label, value, required } = props;
  const attrId = useId();
  const [currentValue, setValue] = useState(value);
  const [hasError, setError] = useState(false);

  const reqClass = required ? ' req' : '';

  useEffect(()=>{
    setValue(value)
  }, [value]);

  const checkValue = function(){
    if(required && currentValue===''){
      setError(true)
    }
    props.setInputValue(currentValue);
  }

  const resetError = function(){
    if(hasError){
      setError(false)
    }
  }
  return (
      <div className={`form-group${hasError ? ' has-error' : ''}`}>
        <input
            type="text" 
            value={currentValue}
            className='form-control form-control-lg'
            id={ attrId }
            placeholder=" "
            onChange={(e)=>{setValue(e.target.value)}}
            onBlur={checkValue}
            onFocus={resetError}
        />
        <label className={`form-label${reqClass}`} htmlFor={ attrId }>{ label }</label>
      </div>
  )
}
export default TextInput