
function ActivityInput(props){
    
    return (
        
            <input placeholder="e.g. coding" 
                   id="activityName" 
                   type="text"
                   className="w-80 h-10 my-5 border-2"
                   onKeyUp={props.handleInput}
                />
    )
}

export default ActivityInput;
