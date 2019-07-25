import React from 'react'
import './Giphy.css';
import axios from 'axios'
import GiphyBlocks from './GiphyBlocks';
class GiphyHeader extends React.Component {
    render(){
        return <h1>GIPHY Search</h1>
    }
}

class GiphyInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            giphyCode : ''
        }
        this.updateGiphy = this.updateGiphy.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    updateGiphy(event){
        this.setState({
            giphyCode : event.target.value
        })
    }
    fetchData(){
        this.props.val(this.state.giphyCode);
    }
    render(){
        return <div id = 'giphyInput'><span>GIPHY Keyword: </span>
            <input onChange = {this.updateGiphy}></input>
            <button onClick = {this.fetchData}>Enter</button>
        </div>
    }
}


class Giphy extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            giphyCode : '',
            data : [],
            apiKey : 'HjOOGMMMS8b3P2LDu6Kb6xOEBh5hDuVA'
        }
        this.updateData = this.updateData.bind(this);
        this.fetchGiphyData = this.fetchGiphyData.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        this.fetchGiphyData();
    }
    updateData(val){
        console.log(val);
        this.fetchGiphyData(val);
        this.setState({
            giphyCode : val
        })
    }

    async fetchGiphyData(val){
        let s;
        if (val === "") s = "http://api.giphy.com/v1/gifs/trending?api_key="+this.state.apiKey;
        else{
            s = "http://api.giphy.com/v1/gifs/search?q="+val+"&api_key="+this.state.apiKey;
        }
        axios.get(s)
        .then(response =>{
            let result = response.data.data;
            this.setState({
                data : result
            })
        })
        .catch(err => console.log(err));
    }
    render(){
        return <div>
        <GiphyHeader></GiphyHeader>
        <GiphyInput val = {this.updateData}></GiphyInput>
        <GiphyBlocks val = {this.state.data}></GiphyBlocks>
        </div>
    }
}

export default Giphy;