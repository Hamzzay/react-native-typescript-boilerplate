import React from 'react';
import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import MenuSvg from '../../../../assets/icons/MenuSvg.svg';
import Text from '../../../components/CustomText';
import Header from '../../../components/LoggedInHeader';
import createStyles from './styles';
import {useThemeAwareObject} from '../../../theme/index';

function Home({navigation}) {
  const styles = useThemeAwareObject(createStyles);
console.log("helloooooo home");
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.headerImage}
        source={require('../../../../assets/images/headerBackgroundImage.png')}
        resizeMode={'stretch'}>
        <Header
          placement={'center'}
          barStyle={'light-content'}
          containerStyle={styles.headerContainerStyle}
          backgroundColor={styles.headerColor}
          statusbar={styles.statusBar}
          leftContainerStyle={{flex: 0}}
          leftComponent={
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => {
                  navigation.openDrawer();
                }}>
                <MenuSvg />
              </TouchableOpacity>
              <Text style={styles.headerText}>Home</Text>
            </View>
          }
        />
      </ImageBackground>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="always">
        <Text style={styles.homeText}>Home Screen</Text>
      </ScrollView>
    </View>
  );
}

export default Home;
