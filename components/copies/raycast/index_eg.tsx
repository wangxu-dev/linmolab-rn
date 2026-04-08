import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import BackIcon from '@/assets/svg/back.svg';
import AppleIcon from '@/assets/svg/apple1.svg';
import GoogleIcon from '@/assets/svg/google1.svg';
import GithubIcon from '@/assets/svg/github1.svg';

export default function RayCast() {
    return (
        <View style={styles.container}>
            {/* 顶部导航栏 */}
            <View style={styles.header}>
                <View style={styles.backButton}>
                    <BackIcon width={20} height={20} />
                </View>
                <Text style={styles.headerTitle}>Log in</Text>
            </View>

            {/* 登录表单区域 */}
            <View style={styles.formContainer}>
                <View style={styles.topSection}>
                    {/* 用户名输入框 */}
                    <TextInput
                        style={styles.input}
                        placeholder='alexsmith.mobbin@gmail.com'
                        placeholderTextColor='#FFFFFF'
                        value='alexsmith.mobbin@gmail.com'
                    />

                    {/* 密码输入框 */}
                    <View style={styles.input} />

                    {/* Log in 按钮 */}
                    <Pressable style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Log in</Text>
                    </Pressable>
                </View>

                {/* OR 分隔 */}
                <View style={styles.orSection}>
                    <Text style={styles.orText}>or</Text>
                </View>

                {/* 第三方登录 */}
                <View style={styles.socialSection}>
                    <Pressable style={styles.appleButton}>
                        <AppleIcon width={20} height={20} />
                        <Text style={styles.appleButtonText}>Continue with Apple</Text>
                    </Pressable>

                    <Pressable style={styles.socialButton}>
                        <GithubIcon width={20} height={20} />
                        <Text style={styles.socialButtonText}>Continue with Github</Text>
                    </Pressable>

                    <Pressable style={styles.socialButton}>
                        <GoogleIcon width={20} height={20} />
                        <Text style={styles.socialButtonText}>Continue with Google</Text>
                    </Pressable>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 20,
        height: 64,
        gap: 12,
    },
    backButton: {
        width: 44,
        height: 44,
        backgroundColor: '#2F2C32',
        borderRadius: 296,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 17,
        fontWeight: '500',
        color: '#FFFFFF',
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    topSection: {
        alignItems: 'center',
        paddingTop: 26,
        paddingBottom: 12,
        gap: 12,
    },
    input: {
        width: 370,
        height: 54,
        backgroundColor: '#171717',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#2F2C32',
        paddingHorizontal: 16,
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    loginButton: {
        width: 370,
        height: 54,
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        fontSize: 17,
        fontWeight: '600',
        color: '#000000',
    },
    orSection: {
        alignItems: 'center',
        paddingVertical: 6,
    },
    orText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#464946',
    },
    socialSection: {
        alignItems: 'center',
        paddingTop: 30,
        gap: 12,
    },
    appleButton: {
        width: 370,
        height: 54,
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        gap: 68,
    },
    appleButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
    },
    socialButton: {
        width: 370,
        height: 54,
        backgroundColor: '#171717',
        borderRadius: 18,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        gap: 68,
    },
    socialButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
});
