import { Button } from 'react-native';
import React, { Component } from 'react';


type Props = {
    title: string,
    nav: any,
}
  

class ToWorkout extends Component<Props> {
    state = {  }
    constructor(props: Props){
        super(props)
    }

    // static defaultProps = {
    //     secondProp: 'asd'
    // }

    onPress = () => {
        this.props.nav.navigate()
    }

    render() {
        return (
            <Button title={this.props.title} onPress={this.onPress}/>
        );
    }
}

export default ToWorkout;