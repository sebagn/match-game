import { StyleSheet } from "react-native";
import { theme } from "../../../utils/constants/theme";

export const styles = StyleSheet.create ({
    carta: {
        width:'22.3%',
        aspectRatio: 1,
        backgroundColor: theme.secColor,
        margin: 5,
        padding: 10,
        elevation: 10,
        borderRadius: 5,
    }
})