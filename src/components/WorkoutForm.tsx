import React, { Component } from 'react';
import { View, Text } from 'react-native';
import style from '../styles/Styles';
import { useForm } from 'react-hook-form';

type Props = {
    type: number; //1 = New Form, 2 = Update Form
}
//Form Setup
const { register, handleSubmit, watch, errors } = useForm();
const onSubmit = data => console.log(data);

class WorkoutForm extends Component<Props> {
    state = {}
    render() {
        if (this.props.type === 1) {
            return (
                <form onSubmit={handleSubmit(onSubmit)}>  {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                    {/* register your input into the hook by invoking the "register" function */}
                    <input name="example" defaultValue="test" ref={register} />
                    {/* include validation with required or other standard HTML validation rules */}
                    <input name="exampleRequired" ref={register({ required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
                </form>
            );
        }
        else if (this.props.type === 2){
            return(
                <View>
                    <Text>This will be the update workout form/</Text>
                </View>
            );
        }

    }
}

export default WorkoutForm;