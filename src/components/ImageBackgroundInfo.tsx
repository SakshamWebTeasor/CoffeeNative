import {
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import GradientBGIcon from './GradientBGIcon';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';

interface ImageBackgroungInfoProps {
  EnableBackHandler: boolean;
  imageLink_portrait: ImageProps;
  type: string;
  id: string;
  favorite: boolean;
  name: string;
  special_ingredient: string;
  ingredients: string;
  average_rating: number;
  rating_count: string;
  roasted: string;
  BackHandler?: any;
  ToggleFavourite: any;
}

const ImageBackgroungInfo: React.FC<ImageBackgroungInfoProps> = ({
  EnableBackHandler,
  imageLink_portrait,
  type,
  id,
  favorite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  rating_count,
  roasted,
  BackHandler,
  ToggleFavourite,
}) => {
  return (
    <View>
      <ImageBackground
        source={imageLink_portrait}
        style={styles.ItemBackgroundImage}>
        {EnableBackHandler ? (
          <View style={styles.ImageHeaderContainerWithBack}>
            <TouchableOpacity onPress={BackHandler}>
              <GradientBGIcon
                name="left"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ToggleFavourite(favorite, type, id)}>
              <GradientBGIcon
                name="like"
                color={
                  favorite
                    ? COLORS.primaryOrangeHex
                    : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
              <Text>{favorite ? 'Favourite' : 'Not Favourite'}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.ImageHeaderContainerWithoutBack}>
            <TouchableOpacity
              onPress={() => ToggleFavourite(favorite, type, id)}>
              <GradientBGIcon
                name="like"
                color={
                  favorite
                    ? COLORS.primaryOrangeHex
                    : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
              <Text>{favorite ? 'Favourite' : 'Not Favourite'}</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.ImageInfoOuterContainer}>
          <View style={styles.ImageInfoInnerContainer}>
            <View style={styles.InfoConatinerRow}>
              <View>
                <Text style={styles.ItemTitleText}>{name}</Text>
                <Text style={styles.ItemSubTitleText}>
                  {special_ingredient}
                </Text>
              </View>
              <View style={styles.ItemPropertiesContainer}>
                <View style={styles.ProperFirst}>
                  <CustomIcon
                    name={type === 'Bean' ? 'bean' : 'beans'}
                    size={type === 'Bean' ? FONTSIZE.size_16 : FONTSIZE.size_24}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text
                    style={[
                      styles.PropertyTextFirst,
                      {
                        marginTop:
                          type == 'Bean'
                            ? SPACING.space_4 + SPACING.space_4
                            : 0,
                      },
                    ]}>
                    {type}
                  </Text>
                </View>
                <View style={styles.ProperFirst}>
                  <CustomIcon
                    name={type === 'Bean' ? 'location' : 'drop'}
                    size={FONTSIZE.size_16}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text style={styles.PropertyTextLast}>{ingredients}</Text>
                </View>
              </View>
            </View>
            <View style={styles.InfoConatinerRow}>
              <View style={styles.RatingContainer}>
                <CustomIcon
                  name="star"
                  size={FONTSIZE.size_20}
                  color={COLORS.primaryOrangeHex}
                />
                <Text style={styles.RatingText}>{average_rating}</Text>
                <Text style={styles.RatingCountText}>({rating_count})</Text>
              </View>
              <View style={styles.RoastedContainer}>
                <Text style={styles.RoastedText}>{roasted}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ImageBackgroungInfo;

const styles = StyleSheet.create({
  ItemBackgroundImage: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
  },
  ImageHeaderContainerWithBack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  ImageHeaderContainerWithoutBack: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  ImageInfoOuterContainer: {
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_30,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
  },
  ImageInfoInnerContainer: {
    justifyContent: 'space-between',
    gap: SPACING.space_15,
  },
  InfoConatinerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ItemTitleText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  ItemSubTitleText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  ItemPropertiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_20,
  },
  ProperFirst: {
    height: 55,
    width: 55,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  PropertyTextFirst: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  RatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_10,
  },
  RatingText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  RatingCountText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  RoastedContainer: {
    height: 55,
    width: 55 * 2 + SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  RoastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  PropertyTextLast: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
    marginTop: SPACING.space_4 + SPACING.space_2,
  },
});
