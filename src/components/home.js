import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
    constructor() {
        super()
        // this.state = {
        //     habits: [],
        //     username: ''
        // }
        // this.getHabits = this.getHabits.bind(this)
        // this.componentDidMount = this.componentDidMount.bind(this)
    }

    // componentDidMount(){
    //     this.getHabits();
    // }
    // getHabits() {
    //     axios.get('/api/user/habits').then(response => {
    //       console.log('THIS ONE IN THE HOME PAGE', response);
    //     })
    // }

    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>It's good to be home</p>
                <img style={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" />

            </div>
        )

    }
}

export default Home
