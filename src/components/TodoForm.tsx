import React, {useRef} from 'react';

interface TodoFormProps{
  onAdd(title:string):void
}

export const  TodoForm:React.FC<TodoFormProps> = (props) =>{
  const ref= useRef<HTMLInputElement>(null);
  // const[title, setTitle] = useState<string>('');

  // const onChangeTitle = (event:React.ChangeEvent<HTMLInputElement>)=>{
  //   setTitle(event.target.value);
  // };

  const keyPressHandler = (event:React.KeyboardEvent)=>{
    if(event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value='';
    }
  };


  return(
    <div>
      <div className="input-field mt2">
        <input 
              // onChange={onChangeTitle}  
              // value={title} 
              ref={ref}
              type="text" 
              placeholder="Enter the work title"
              onKeyPress={keyPressHandler}
              />
        <label htmlFor="text" className="active">Enter the work title</label>
      </div>
      {/* <div className="collection">
  <p className="collection-item"><span className="badge">{title}</span></p>
      </div> */}
    </div>
  )
}