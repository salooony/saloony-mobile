import BlockTitle from '@/components/atoms/BlockTitle';
import CustomButton from '@/components/atoms/button';
import InputField from '@/components/atoms/input-field';
import { CONTACT_DETAILS_FORM_FIELDS } from '@/constants/formFields.constants';
import { PERSONAL_INFO_TEXTS } from '@/constants/personalInfo.constants';
import { TABS_PERSONAL_INFO } from '@/constants/tabsPersonalInfo';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from './styles';
import usePersonalInfo from './usePersonalInfo';

const PersonalInfoPage = () => {
  const { control, secureText, setSecureText, activeTab, handleSubmit, onSubmit } = usePersonalInfo();

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContainer}
        >
          {TABS_PERSONAL_INFO.map((t) => {
            const isActive = t === activeTab;
            return (
              <TouchableOpacity key={t} activeOpacity={0.8} style={styles.tabItem}>
                <Text
                  variant="titleMedium"
                  style={[styles.tabText, isActive && styles.tabTextActive]}
                >
                  {t}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Contact details */}
        <BlockTitle title={PERSONAL_INFO_TEXTS.CONTACT_TITLE} />
        <View style={styles.card}>
          {CONTACT_DETAILS_FORM_FIELDS.map((field) => (
            <InputField
              key={field.name}
              control={control}
              name={field.name}
              label={field.label}
              rules={field.rules}
              placeholder={field.placeholder}
            />
          ))}

          <CustomButton
            mode="contained-tonal"
            onPress={() => {}}
            message={PERSONAL_INFO_TEXTS.SAVE_BUTTON}
            isSubmitting={false}
            disabled={true}
          />
        </View>

        {/* Credit card */}
        <BlockTitle title={PERSONAL_INFO_TEXTS.CREDIT_CARD_TITLE} />
        <View style={styles.card}>
          <Text variant="bodySmall" style={styles.helperText}>
            {PERSONAL_INFO_TEXTS.CARD_HELPER}
          </Text>
        </View>

        {/* Password */}
        <BlockTitle title={PERSONAL_INFO_TEXTS.PASSWORD_TITLE} />
        <View style={styles.card}>
          <Text variant="bodySmall" style={styles.helperText}>
            {PERSONAL_INFO_TEXTS.PASSWORD_HELPER}
          </Text>

          <View style={styles.passwordInputContainer}>
            <InputField
              control={control}
              name="currentPassword"
              placeholder={PERSONAL_INFO_TEXTS.PASSWORD_PLACEHOLDER}
              secureText={secureText}
              toggleSecureText={() => setSecureText((v) => !v)}
              isSecureText={secureText}
            />

            <View style={styles.buttonWrapper}>
              <View style={styles.buttonSizeContainer}>
                <CustomButton
                  mode="contained-tonal"
                  onPress={handleSubmit(onsubmit)}
                  message={'Confirm'}
                  isSubmitting={false}
                  disabled={true}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PersonalInfoPage;
