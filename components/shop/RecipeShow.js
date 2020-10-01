import React, { useState , useEffect} from 'react';
import { View, Text, Button, StyleSheet, Modal, Image } from 'react-native';
import CartItem from './CartItem';
import Colors from '../../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

const RecipeShow = props => {
    const [modalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState(null);
    useEffect(() => {
        (async () => {
            if (Constants.platform.ios) {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [9, 16],
            quality: 1,
        });
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={styles.recipeshow}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <View style={styles.detailItems}>
                {props.items.map(cartItem => (
                    <View>
                        <CartItem
                            key={cartItem.productId}
                            quantity={cartItem.quantity}
                            amount={cartItem.sum}
                            title={cartItem.productTitle}
                        />

                    </View>


                ))}

            </View>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >


                <View style={{ backgroundColor: "#000000aa", flex: 1,borderWidth:  3,  borderColor:  'yellow'}}>
                    <View style={styles.qrCodeContainer }>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/peeza5678-1242.appspot.com/o/qr.jpg?alt=media&token=803274a0-8201-495b-955f-c61781f7e532' }}
                            style={styles.qrCodePosition} />
                    </View>


                    <Button
                        color={Colors.accent}
                        title="close"
                        onPress={() => {
                            setModalVisible(!modalVisible);

                        }}
                    />
                </View>

            </Modal>





            <View style={styles.summary}>
                <Button
                    color={Colors.accent}
                    title="QR Code"

                    onPress={() => {
                        setModalVisible(!modalVisible);

                    }}
                />


       
                <Button
                    color={Colors.accent}
                    title="Choose Photo"
                   onPress={pickImage}
                />
                
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                {image && <Image source={{ uri: image }} style={{ width: 220, height: 400 }} />}
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    qrCodeContainer:{
        backgroundColor: "#ffffff",
        margin:30 , 
        borderRadius: 10, 
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 20
    },
    qrCodePosition:{
        width: 300, 
        height: 300,
    },
    recipeshow: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    totalAmount: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },
    date: {
        fontSize: 16,
        fontFamily: 'open-sans',
        color: '#888'
    },
    detailItems: {
        width: '100%'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        alignItems: 'center',







    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default RecipeShow;