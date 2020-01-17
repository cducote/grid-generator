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
       }
    }

    componentDidMount = () => {
     this.makeGrid()
    }

    handleChange = async (e) => {
        let editGrid = { ...this.state.editGrid }
        editGrid[e.target.name] = e.target.value
        this.setState({ editGrid })
    }

    handleSubmit = async (e) => {
        let grid = this.state.grid
        e.preventDefault()
        let editGrid = { ...this.state.grid }
        editGrid = {
            row: 10,
            col: 10
        }
        this.setState({
           grid: editGrid
        })
        // Swal.fire(
        //     'Good job!',
        //     'Grid has been set!',
        //     'success'
        //   )
        this.makeGrid(editGrid)
    }

    makeGrid = (grid) => {
        for (var i=1; i <= this.state.grid.row; i++) {
            console.log(this.state.grid.row)
            return <tr></tr>
        }
        // for (var j=1; j <= grid.row; j++) {
        //     return <td></td>
        // }
    }

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