import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ PlaceholderImage, SelectedImage }) {
  const imageSource = SelectedImage ? { uri: SelectedImage } : PlaceholderImage;
  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
