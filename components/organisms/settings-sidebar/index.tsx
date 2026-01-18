
import { Image, Pressable, TouchableOpacity, View } from 'react-native';
import { Button, Icon, IconButton, Modal, Portal, Surface, Text } from 'react-native-paper';
import ThemedText from '@/components/atoms/typography/ThemedText';
import { styles } from './style';
import { Link } from 'expo-router';
import { ROUTES } from '@/constants/routes';
import { Colors } from '@/theme/colors';

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
            <IconButton icon="close" size={30} iconColor={Colors.light.tabIconDefault}  />
          </Pressable>

          {/* <ThemedText variant="titleLarge">Settings</ThemedText> */}
            <TouchableOpacity>
              <Image
                source={require('@/assets/images/saloony-logo-noir.png')}
                style={styles.SidebarImage}
              />
            </TouchableOpacity>
          <Button
            style={styles.containedButton}
            // isSubmitting={isSubmitting}
            mode="contained"
            onPress={() => { }}
          >Log in</Button>

          <Button
            style={styles.outlinedButton}
            // isSubmitting={isSubmitting}
            mode="outlined"
            onPress={() => { }}
          ><Text >
              Add your establishment

            </Text>
          </Button>

          <View style={styles.itemsContainer}>
            <TouchableOpacity style={styles.item}>
              <ThemedText> Hairdresser</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
              <ThemedText> Braber</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
              <ThemedText> Manicure</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <ThemedText> Beauty Institute</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.features}>
              <View >
                <Icon source={"infinity"} size={25} color='#AC8D5F' />
              </View>
              <View>
                <ThemedText style={{ textAlign: "center", paddingLeft: 5, textDecorationLine: "underline", color: Colors.light.secondaryText }}> More features in the app.</ThemedText>
              </View>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "start", marginTop: "170"  }}>
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
