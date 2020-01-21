import React, { Component } from 'react';
import _ from 'lodash'

class Grid extends Component {
    state = {
       userInput: 0,
       newRow: [],
       pixelColor: 'blue',
       cells: []
    }

    handleChange = async ({ target: {value}}) => {
       this.setState({ userInput: value })
    }

    handleClick = (currentTarget) => {

        console.log(currentTarget.data)
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
            objects[i] = { id: i }
        } 
        this.setState({ newRow: objects })
    }
    createObjectsAgain = async () => {
        let count = this.state.newRow.length
        let x = count * count
        let objects = []
        for (var i = 0; i < x; i++) {
            objects[i] = { id: i }
        }
        this.setState({ cells: objects })
        console.log(objects)
    }

    makeGrid() {
        let arr = this.state.newRow
        let cells = []
        return arr.map((row, i) => {
            return (
            <tr key={i} id={i++}>
               {arr.map((col, j) =>{
                   cells[j] = { id: `${i}${j}` }
                   return (
                       <td 
                            key={j}  
                            // style={{ backgroundColor: this.state.pixelColor }} 
                            onClick={currentTarget => this.handleClick(currentTarget)}
                            id={`${i}-${j}`}
                            >
                        </td>
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
                <button onClick={this.createObjectsAgain}>SET CELLS</button>
            </div>
        );
    }
}

export default Grid;