import * as React from 'react';
import { StyleSheet, Text } from 'react-native';


interface HeaderProps {
    header: string;
}


const Header: React.FC<HeaderProps> = ({header}: HeaderProps) => {
    return (
        <Text style={styles.HeaderStyles}>
            {header}
        </Text>
        
    )
};

const styles = StyleSheet.create({
    HeaderStyles: {
        fontWeight: 'bold',
        fontSize: 25
    }
});


export default Header;
