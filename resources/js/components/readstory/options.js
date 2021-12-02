import React from 'react'
import reactDOM from 'react-dom'

function Options(props){
	return (<div className="row my-3">
		{
			props.options.map((option,i)=>{
             	return <button key={ i } type="button" className="btn btn-outline-secondary btn-block" onClick={()=>props.getPage( option.next_page, option.optionid)}>{ option.option_content }</button> 
             })
		}
		</div>
             )
}

export default Options