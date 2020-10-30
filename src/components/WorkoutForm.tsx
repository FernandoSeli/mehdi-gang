// import * as React from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import { useForm } from 'react-hook-form';

// export interface AppProps {
// }
// export interface AppState {
// }

// const { register, handleSubmit, errors } = useForm();
// const onSubmit = data => console.log(data); //Output destination.
// console.log(errors);

// export default class WorkoutForm extends React.Component<AppProps, AppState> {
//     constructor(props: AppProps) {
//         super(props);
//         this.state = {
//         };
//     }

//     render() {
//         return (
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input type="text" placeholder="Exercise Name" name="Exercise Name" ref={register({ required: true, min: 1, maxLength: 50 })} />
//                 <input type="number" placeholder="Repetitions" name="Repetitions" ref={register({ required: true, min: 0 })} />
//                 <input type="number" placeholder="Sets" name="Sets" ref={register({ required: true, min: 0 })} />
//                 <input type="number" placeholder="Rest Time" name="Rest Time" ref={register({ min: 0 })} />
//                 <input type="number" placeholder="Current weight" name="Current weight" ref={register({ required: true, min: 0 })} />
//                 <input type="number" placeholder="Current 1RM" name="Current 1RM" ref={register({ min: 0 })} />
//                 <input type="submit" />
//             </form>
//         );
//     }
// }

// Formik x React Native example

import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';

interface FormValues {
    email: string;
}

const WorkoutForm: React.FC<FormValues> = props => { 
    const initialValues: FormValues={
        email: '',
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <Text>E-mail</Text>
                    <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    <Button title="Submit" onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    );
}

export default WorkoutForm;