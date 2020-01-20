import React, { Component } from 'react';
// import Swal from 'sweetalert2'

class Grid extends Component {
    state = {
    //     editGrid:{
    //         col: 0,
    //         row: 0
    //    },
       grid: {
           row: 1,
           col: 1
       },
       arr: [
           {
               id: 0,
           },
           {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
       ]
    }

    // componentDidMount = () => {
    //  this.makeGrid()
    // }

    handleChange = async (e) => {
        let editGrid = { ...this.state.editGrid }
        editGrid[e.target.name] = e.target.value
        this.setState({ editGrid })
    }

    handleSubmit = async (e) => {
        // let grid = this.state.grid
        e.preventDefault()
        let editGrid = { ...this.state.grid }
        editGrid = {
            row: 10,
            col: 10
        }
        this.setState({
           grid: editGrid
        })
        this.makeGrid()
    }

    makeGrid() {
        let arr = this.state.arr
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
    // makeGrid() {
    //     let arr = this.state.arr
    //     for (var i=0; i < arr.length; i++) {
            
    //         console.log(arr.length)
    //         return(
    //         <tr>
    //             <td>
    //             </td>
    //         </tr>
    //         )
    //     }
    // }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                Row<input onChange={this.handleChange} type='text' name='row' defaultValue='0'/>
                Col<input onChange={this.handleChange} type='text' name='col' defaultValue='0' />
                <button type='submit'>Submit</button>
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