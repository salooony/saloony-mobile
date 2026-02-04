
import { Image, Pressable, TouchableOpacity, View } from 'react-native';
import { Button, Icon, IconButton, Modal, Portal, Surface, Text } from 'react-native-paper';
import ThemedText from '@/components/atoms/typography/ThemedText';
import { styles } from './style';
import { Link } from 'expo-router';
import { ROUTES } from '@/constants/routes';
import { Colors } from '@/theme/colors';
import CustomButton from '@/components/atoms/button';
import { Beauty, Braber, establishment, Hairdresser, Manicure, featuresText } from '@/constants/settingsSidebar.constants';

type SettingsSidebarProps = {
  sidebarVisible: boolean;
  setSidebarVisible: () => void;
};

const SettingsSidebar = ({ sidebarVisible: visible, setSidebarVisible }: SettingsSidebarProps) => {
  const onClose = () => {
    setSidebarVisible(false);
  }





  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onClose}
        contentContainerStyle={styles.modalContainer}
      >
        <Surface style={styles.surface}>
          <Pressable style={styles.cross} onPress={onClose}>
            <IconButton icon="close" size={30} iconColor={Colors.light.tabIconDefault} />
          </Pressable>

          <TouchableOpacity>
            <Image
              source={require('@/assets/images/saloony-logo-noir.png')}
              style={styles.SidebarImage}
            />
          </TouchableOpacity>
          <CustomButton
            style={styles.containedButton}
            mode="contained"
            message='Log in'
          />

          <View style={styles.separator} />

          <CustomButton
            style={styles.outlinedButton}
            mode="outlined"
            message='Add your establishment'
          />


          <View style={styles.itemsContainer}>
            <TouchableOpacity style={styles.item}>
              <ThemedText> {Hairdresser}</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
              <ThemedText> {Braber}</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
              <ThemedText> {Manicure}</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <ThemedText> {Beauty}</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.features}>
              <View >
                <Icon source={"infinity"} size={25} color='#AC8D5F' />
              </View>
              <View>
                <ThemedText style={styles.featuresText}> {featuresText}</ThemedText>
              </View>
            </TouchableOpacity>

            <View style={styles.media}>
              <Icon source="instagram" size={28} color={Colors.light.tabIconDefault} />
              <Icon source="facebook" size={28} color={Colors.light.tabIconDefault} />
            </View>


          </View>
        </Surface>
      </Modal>
    </Portal>
  );
};

export default SettingsSidebar;


