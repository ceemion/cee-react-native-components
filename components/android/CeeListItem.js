import React, { PropTypes } from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Mixins from '../../../constants/Mixins';

// You can set you color scheme externally with these keys
const color = {
  background: 'white',
  lightGrey: '#f7f7f7',
  mainText: '#4a4a4a',
  touchableBg: '#dee8ff'
};

type Props = {
  text: string,
  itemColor: string,
  background: string,
  icon: boolean,
  onPress: () => void
}

type DefaultProps = {
  itemColor: string,
  background: string,
  icon: boolean,
}


/** Usage

<CeeListItem
  text="Click to view my world"
  onPress={() => console.log('I was clicked!')} />
  */


const CeeListItem = (props: Props) => {
  const {
    icon,
    text,
    onPress,
    itemColor,
    background
  } = props;
  const directionIcon = icon ? 'angle-right' : null;
  const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Touchable
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(color.touchableBg)}>

      <View style={styles.itemBox}>
        <Text style={styles.itemText}>{text}</Text>
        <FAIcon name={directionIcon} size={30} />
      </View>
    </Touchable>
  )
}

CeeListItem.propTypes = {
  text: PropTypes.string.isRequired,
  background: PropTypes.string,
  itemColor: PropTypes.string,
  icon: PropTypes.bool,
  onPress: PropTypes.func,
}

CeeListItem.defaultProps = ({
  background: color.white,
  itemColor: color.mainText,
  icon: true,
}: DefaultProps)

const styles = StyleSheet.create({
  itemBox: {
    alignItems: 'center',
    backgroundColor: color.white,
    borderBottomWidth: 1,
    borderBottomColor: color.lightGrey,
    flexDirection: 'row',
    height: 72,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  itemText: {
    color: color.mainText,
    // fontFamily: '', // Set the text font here
    fontSize: 18
  },
})

export default CeeListItem;
