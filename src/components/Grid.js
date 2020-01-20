import React, { Component } from 'react';
import _ from 'lodash'

class Grid extends Component {
    state = {
       userInput: 0,
       newRow: [],
       pixelColor: 'inherit'
    }

    handleChange = async ({ target: {value}}) => {
       this.setState({ userInput: value })
    }

    handleClick = (col) => {
        let arr = this.state.newRow
        let indexId = _.findIndex(arr[col])
        console.log(`INDEX: ${indexId}`)
        let newId = `${indexId}-${col.id}`
        console.log(newId)
        let thisCol = this.state.newRow.id
        console.log(col.id)
        this.setState({ pixelColor: 'blue' })
    }

    handleSubmit = async (e) => {
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
            <tr key={i} className='bg-pixel'>
               {arr.map((col, j) =>{
                   return (
                       <td key={j}  style={{ backgroundColor: this.state.pixelColor }} onClick={()=>this.handleClick(col)}></td>
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
                Table <br/>
                      <input onChange={this.handleChange} type='text' name='input' value={this.state.userInput} maxLength='2'/> x
                      <input onChange={this.handleChange} type='text' name='input' value={this.state.userInput} disabled/> <br/><br/><br/>
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