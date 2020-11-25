import { Button, TouchableHighlight, Text} from 'react-native';
import React, { Component } from 'react';
import style from '../../styles/Styles';

type Props = {
    title: string,
    nav: any,
}
  

class NewWorkoutBtn extends Component<Props> {
    state = { 
        temporaryId: "New Workout" //This might change to Workout Name down the road.
     }
    constructor(props: Props){
        super(props)
    }

    //static defaultProps = {
    //    secondProp: 'asd'
    //}

    onPress = () => {
        this.props.nav.navigate("Workout", {name: this.state.temporaryId}); //This is where you pass the form ID later on.
    }


    render() {
        return (
            // <Button title={this.props.title} onPress={this.onPress}/>
            <TouchableHighlight style={[style.button, this.props.style]} onPress={this.onPress} underlayColor='#FBFBFB'>
                <Text style={style.buttonText}>{this.props.title}</Text>
            </TouchableHighlight>
        );
    }
}

export default NewWorkoutBtn;