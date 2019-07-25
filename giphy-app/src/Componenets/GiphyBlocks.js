import React from 'react'
import './GiphyBlocks.css'

class GiphyBlock extends React.Component{
    render(){
        return <img src = {this.props.val.images.fixed_width.url} alt = {this.props.val.title}></img>
    }
}

class GiphyBlocks extends React.Component{
    render(){
        return <div id = "GiphyContainer">
        {
            this.props.val.map(obj => {
                return (
                    <GiphyBlock val={obj}/>
                )
            })
        }
    </div>

    }   
}  
export default GiphyBlocks;