import { StyleSheet, Image, ImageSourcePropType } from "react-native";
import { FC } from "react";

type MainImageProps = {
  source: ImageSourcePropType;
};

const MainImage: FC<MainImageProps> = ({ source }) => {
  return <Image source={source} resizeMode="cover" style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 16 / 9,
    width: "100%",
    marginBottom: 16,
  },
});

export default MainImage;
