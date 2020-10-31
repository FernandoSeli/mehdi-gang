import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { Form, Formik } from 'formik';
import style from '../styles/Styles';
import { TouchableHighlight } from 'react-native-gesture-handler';

interface FormValues {
    name: string;
    reps: number;
    sets: number;
}

const WorkoutForm: React.FC<{}> = props => {
    const initialValues: FormValues = {
        name: 'Bench Press',
        reps: 0,
        sets: 0,
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View> 
                    <View style={style.formRow}>
                        <Text style={style.inputLabel}>Name</Text>
                        <TextInput
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            style={style.inputBox}
                        />
                    </View>
                    <View style={style.formRow}>
                        <Text style={style.inputLabel}>Reps</Text>
                        <TextInput
                            onChangeText={handleChange('reps')}
                            onBlur={handleBlur('reps')}
                            value={values.reps} //idk wat the fk is going on
                            style={style.inputBox}
                        />
                    </View>
                    <View style={style.formRow}>
                        <Text style={style.inputLabel}>Sets</Text>
                        <TextInput
                            onChangeText={handleChange('sets')}
                            onBlur={handleBlur('sets')}
                            value={values.sets} //idk wat the fk is going on
                            style={style.inputBox}
                        />
                    </View>
                    <TouchableHighlight //Make this into a component later on.
                        style={style.buttonSolid}
                        underlayColor={'#922393'}
                        onPress={handleSubmit} //idk wat the fk is going on
                    >
                        <Text style={[style.buttonText, style.white]}>Submit</Text>
                    </TouchableHighlight>
                </View>
            )}
        </Formik>
    );
}

export default WorkoutForm;

// ==================================== Notes: ====================================
// 
// A single row ideally should look like this: 
// Name [         ] Reps [ ] Sets [ ] Rest [  ] 
// 
// Combined, a single workout will be made out of a series of exercises.
//
// Name [ Bench   ] Reps [ 6]+- Sets [4]+- Rest [150]+- 
// Name [ Rows    ] Reps [ 6]+- Sets [4]+- Rest [120]+- 
// Name [ Curls   ] Reps [ 8]+- Sets [4]+- Rest [ 70]+-
// Name [ Dips    ] Reps [10]+- Sets [3]+- Rest [ 70]+- 
// <- Submit ->
// 
// 
// ================== Known bugs and issues: ==================
// The three underlined props of the form. 
// Unable to have in number types.
// Easily fix status bar issues using the StatusBar class from the expo library.
// 
// 
// 
// 
// 
//
//


// =============================== REACT HOOK FORM. ===============================
// Will delete later.


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