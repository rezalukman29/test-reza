import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { FoodInterface } from '../../App.types';
import { COLORS, width } from '../../utils/config';
import { EntryAnimation } from '../animation/EntryAnimation';
import Spacer from '../atoms/Spacer/Spacer';

interface ItemCardProps {
    item: FoodInterface;
    index: number;
}

const CARD_HEIGHT: number = 180;

const ItemCard = ({ item, index }: ItemCardProps) => {
    return (
        <EntryAnimation index={index}>
            <>
                <ImageBackground
                    source={{ uri: item.url_image_absolute }}
                    style={styles.image}
                    imageStyle={{ borderRadius: 8 }}
                >

                    <LinearGradient
                        colors={['transparent', '#000']}
                        style={styles.infoWrapper}>
                        <View style={styles.content}>

                            <Text style={styles.text}>{item.food_name}</Text>


                        </View>

                    </LinearGradient>
                </ImageBackground>
                <Spacer m/>
            </>
        </EntryAnimation>
    );
};

export default ItemCard;

const styles = StyleSheet.create({
    container: {},
    image: {
        width: width - 60,
        borderRadius: 6,
        height: 180
    },
    infoWrapper: {
        padding: 4,
        position: 'absolute',
        borderRadius: 6,
        height: CARD_HEIGHT / 3,
        width: '100%',
        top: CARD_HEIGHT - (CARD_HEIGHT / 3)
    },
    text: {
        fontSize: 20,
        color: COLORS.white,
        fontWeight: 'bold'
    },
    content: {
        paddingTop: 24,
        paddingHorizontal: 8
    }
});
