import React, { Component } from 'react';
// import Swal from 'sweetalert2'

class Grid extends Component {
    state = {
       userInput: 0,
       newRow: []
    }
    

    componentDidUpdate = async () => {
        
    }

    handleChange = async ({ target: {value}}) => {
       this.setState({ userInput: value })
    }

    handleSubmit = async (e) => {
        // let grid = this.state.grid
        e.preventDefault()
        let input = parseInt(this.state.userInput, 10)
        this.setState({
           userInput: input
        })
        this.createObjects()
        this.makeGrid()
    }

    createObjects(){
        const x = this.state.userInput
        let objects = []
        for (var i = 0; i < x; i++) {
            objects[i] = {id: i}
        } 
        this.setState({ newRow: objects })
    }

    makeGrid() {
        let arr = this.state.newRow
        return arr.map((row, i) => {
            return (
            <tr key={i}>
               {arr.map((col, j) =>{
                   return (
                       <td key={j}></td>
                   )
               })}
            </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                Row <input onChange={this.handleChange} type='text' name='input' defaultValue='0' value={this.state.userInput}/> X
                Col <input onChange={this.handleChange} type='text' name='input' defaultValue='0'  value={this.state.userInput} disabled/> <br/><br/><br/>
                <div>
                    <button type='submit'>Submit</button>
                </div>
                </form>
                <br/>
                <br/>
                <table>
                  <tbody>
                    {this.makeGrid()}
                  </tbody>
                </table>
            </div>
        );
    }
}

export default Grid;