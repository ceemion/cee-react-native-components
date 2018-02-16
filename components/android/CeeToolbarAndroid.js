import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

/** Usage

As an homepage with menu on the left
<CeeToolbarAndroid
  title="Home"
  onLeftPress={() => console.log('pressed left')} />

As a nested route you can go 'back' from
<CeeToolbarAndroid
  title="About Us"
  left="back"
  leftReturnId={3}
  onLeftPress={(id) => console.log('ID is : ', id)}
  subtitle={true} />
*/


const CeeToolbarAndroid = (props) => {
  const {
    left,
    right,
    title,
    leftArg,
    subtitle,
    itemColor,
    rightIcon,
    background,
    onLeftPress,
    onRightPress,
  } = props;
  const leftIcon = left === 'back' ? 'arrow-back' : left;
  const elevation = subtitle ? 0 : 8;

  return (
    <View style={[styles.container, {backgroundColor: background, elevation: elevation}]}>
      <View style={styles.left}>
        <TouchableNativeFeedback onPress={() => onLeftPress(leftArg)}>
          <View style={styles.leftIcon}>
            <MaterialIcons name={leftIcon} size={24} color={itemColor} />
          </View>
        </TouchableNativeFeedback>

        <View style={styles.titleBox}>
          <Text style={[styles.title, {color: itemColor}]}>{title}</Text>
        </View>
      </View>

      { right ? (
        <View style={styles.right}>
          <TouchableNativeFeedback onPress={onRightPress}>
            <View style={styles.rightIcon}>
              <MaterialIcons name={rightIcon || 'more-vert'} size={24} color={itemColor} />
            </View>
          </TouchableNativeFeedback>
        </View>
      ) : null
    }
    </View>
  )
}

CeeToolbarAndroid.propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.string,
  itemColor: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.bool,
  rightIcon: PropTypes.string,
  subtitle: PropTypes.bool,
  leftArg: PropTypes.string,
  onLeftPress: PropTypes.func,
  onRightPress: PropTypes.func
};

CeeToolbarAndroid.defaultProps = {
  background: 'white',
  itemColor: 'black',
  left: 'menu',
  right: false,
  subtitle: false
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 56,
    justifyContent: 'space-between',
    padding: 4,
  },
  left: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftIcon: {
    padding: 12
  },
  titleBox: {
    marginLeft: 20
  },
  title: {
    fontSize: 20,
  },
  right: {},
  rightIcon: {
    padding: 12
  }
});

export default CeeToolbarAndroid;
