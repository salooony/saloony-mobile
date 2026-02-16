import CustomButton from '@/components/atoms/button';
import ThemedText from '@/components/atoms/typography/ThemedText';
import {
  SIDEBAR_CATEGORY_LABELS,
  SIDEBAR_ESTABLISHMENT_LABEL,
  SIDEBAR_FEATURES_TEXT,
} from '@/constants/settings-sidebar.constants';
import { Colors } from '@/theme/colors';
import { Image, Pressable, TouchableOpacity, View } from 'react-native';
import { Icon, IconButton, Modal, Portal, Surface } from 'react-native-paper';
import { styles } from './style';

type SettingsSidebarProps = {
  sidebarVisible: boolean;
  setSidebarVisible: (visible: boolean) => void;
};

const SettingsSidebar = ({ sidebarVisible: visible, setSidebarVisible }: SettingsSidebarProps) => {
  const onClose = () => {
    setSidebarVisible(false);
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onClose}
        style={styles.modalWrapper}
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
          <CustomButton mode="contained" message="Log in" isSubmitting={false} onPress={() => {}} />

          <View style={styles.separator} />

          <CustomButton
            mode="outlined"
            message={SIDEBAR_ESTABLISHMENT_LABEL}
            isSubmitting={false}
            onPress={() => {}}
          />

          <View style={styles.itemsContainer}>
            {SIDEBAR_CATEGORY_LABELS.map((label) => (
              <TouchableOpacity key={label} style={styles.item}>
                <ThemedText> {label}</ThemedText>
              </TouchableOpacity>
            ))}

            <TouchableOpacity style={styles.features}>
              <View>
                <Icon source={'infinity'} size={25} color="#AC8D5F" />
              </View>
              <View>
                <ThemedText style={styles.featuresText}> {SIDEBAR_FEATURES_TEXT}</ThemedText>
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
