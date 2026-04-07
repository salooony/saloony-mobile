import CustomButton from '@/components/atoms/button';
import ThemedText from '@/components/atoms/typography/ThemedText';
import { logoIcon } from '@/constants/icons';
import {
  SIDEBAR_CATEGORY_LABELS,
  SIDEBAR_ESTABLISHMENT_LABEL,
  SIDEBAR_FEATURES_TEXT,
} from '@/constants/settings-sidebar';
import { UI_STRINGS } from '@/constants/uiStrings';
import { Colors } from '@/theme/colors';
import { useEffect, useRef } from 'react';
import { Animated, Easing, Image, ImageSourcePropType, TouchableOpacity, View } from 'react-native';
import { Icon, IconButton, Modal, Portal, Surface } from 'react-native-paper';
import { styles } from './style';

type SettingsSidebarProps = {
  sidebarVisible: boolean;
  setSidebarVisible: (visible: boolean) => void;
};

const SettingsSidebar = ({ sidebarVisible: visible, setSidebarVisible }: SettingsSidebarProps) => {
  const slideX = useRef(new Animated.Value(-300)).current;

  const onClose = () => {
    setSidebarVisible(false);
  };

  useEffect(() => {
    Animated.timing(slideX, {
      toValue: visible ? 0 : -300,
      duration: 280,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [slideX, visible]);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onClose}
        dismissable
        dismissableBackButton
        style={styles.modalWrapper}
        contentContainerStyle={styles.modalContainer}
        theme={{ colors: { backdrop: 'transparent' } }}
      >
        <Animated.View
          style={{ flex: 1, transform: [{ translateX: slideX }], backgroundColor: 'transparent' }}
        >
          <Surface style={styles.surface}>
            <IconButton
              icon="close"
              size={30}
              iconColor={Colors.light.tabIconDefault}
              onPress={onClose}
              style={styles.cross}
            />
            <TouchableOpacity>
              <Image source={logoIcon as ImageSourcePropType} style={styles.SidebarImage} />
            </TouchableOpacity>
            <CustomButton mode="contained"  label={UI_STRINGS.LOGIN} isLoading={false} />

            <View style={styles.separator} />

            <CustomButton mode="outlined" label={SIDEBAR_ESTABLISHMENT_LABEL} isLoading={false} />

            <View style={styles.itemsContainer}>
              {SIDEBAR_CATEGORY_LABELS.map((label) => (
                <TouchableOpacity key={label} style={styles.item}>
                  <ThemedText> {label}</ThemedText>
                </TouchableOpacity>
              ))}

              <TouchableOpacity style={styles.features}>
                <View>
                  <Icon source={'infinity'} size={25} color={Colors.brand.primary} />
                </View>
                <View>
                  <ThemedText style={styles.featuresText}>{SIDEBAR_FEATURES_TEXT}</ThemedText>
                </View>
              </TouchableOpacity>
              <View style={styles.media}>
                <Icon source="instagram" size={28} color={Colors.light.tabIconDefault} />
                <Icon source="facebook" size={28} color={Colors.light.tabIconDefault} />
              </View>
            </View>
          </Surface>
        </Animated.View>
      </Modal>
    </Portal>
  );
};

export default SettingsSidebar;
