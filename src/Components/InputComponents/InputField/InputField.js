import React from 'react';
import { Input, Text, View, Item, Label } from 'native-base';

import AuxLayout from '../../../Containers/Layout/AuxLayout';

const InputField = ( props ) => {
    return (
        <AuxLayout>
            <Item stackedLabel style={ styles.containerStyle }>
                <Label style={ styles.containerStyle }>{ props.label }</Label>
                <Input
                    secureTextEntry={ props.secureTextEntry }
                    autoCorrect={false}
                    style={ styles.containerStyle } 
                    value={ props.value }
                    onChangeText={ props.onChangeText } />
            </Item>
        </AuxLayout>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 10,
        LineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 13,
        paddingLeft: 5,
        flex: 1
    },
    containerStyle: {
        flex: 1,
        alignItems: 'center'
    }
}

export default InputField;