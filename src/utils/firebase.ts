/* firebaseMessaging.ts */
import { getApp } from '@react-native-firebase/app';
import {
  AuthorizationStatus,
  getMessaging,
  getToken,
  onMessage,
  requestPermission,
  setBackgroundMessageHandler,
} from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';
import { Platform } from 'react-native';

const messaging = getMessaging(getApp());

export const initializeApp = async () => {
  console.log("Initializing firebase");
  await requestUserPermission();
  await getFCMToken();
}

// iOS 전용 알림 표시 함수
const displayNotificationApple = async (title: string, body: string) => {
  console.log('🍎 displayNotificationApple');
  console.log('title :', title);
  console.log('body :', body);

  try {
    // iOS 알림 표시
    await notifee.displayNotification({
      title,
      body,
      ios: {
        sound: 'default',
        foregroundPresentationOptions: {
          badge: true,
          sound: true,
          banner: true,
          list: true,
        },
      },
    });
    console.log('✅ iOS 알림 표시 완료');
  } catch (error) {
    console.error('❌ iOS 알림 표시 실패:', error);
  }
};

// Android 전용 알림 표시 함수
const displayNotificationAndroid = async (title: string, body: string) => {
  console.log('🤖 displayNotificationAndroid');

  // Android 채널 생성 (Android 8.0 이상 필수)
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
  });

  console.log('channelId :', channelId);
  console.log('title :', title);
  console.log('body :', body);

  // 알림 표시
  await notifee.displayNotification({
    title,
    body,
    android: {
      channelId,
      smallIcon: 'ic_launcher',
      pressAction: {
        id: 'default',
      },
    },
  });
  console.log('✅ Android 알림 표시 완료');
};

// 플랫폼에 따라 적절한 알림 표시 함수 호출
const displayNotification = async (title: string, body: string) => {
  if (Platform.OS === 'ios') {
    await displayNotificationApple(title, body);
  } else {
    await displayNotificationAndroid(title, body);
  }
};

// FCM 토큰 가져오기
export const getFCMToken = async () => {
  try {
    const token = await getToken(messaging);
    console.log('FCM Token:', token);
    return token;
  } catch (error) {
    console.error('FCM Token 가져오기 실패:', error);
  }
};

// 알림 권한 요청
export const requestUserPermission = async () => {
  console.log("알림 권한")
  // Firebase 메시징 권한 요청
  const authStatus = await requestPermission(messaging);
  const enabled =
    authStatus === AuthorizationStatus.AUTHORIZED ||
    authStatus === AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('푸시 알림 권한 승인됨');
  }

  // Android 13+ 알림 권한 요청 (notifee)
  await notifee.requestPermission();
};

// Background & Quit 상태 알림 수신
setBackgroundMessageHandler(messaging, async remoteMessage => {
  console.log('백그라운드 상태 푸시 메세지 : ', remoteMessage);

  // 백그라운드에서도 notifee로 알림 표시 (data-only 메시지 처리)
  if (remoteMessage.notification) {
    await displayNotification(
      remoteMessage.notification.title || '알림',
      remoteMessage.notification.body || '',
    );
  }
});

// foreground 상태 알림 수신
onMessage(messaging, async remoteMessage => {
  console.log('포그라운드 상태 푸시 메세지 : ', remoteMessage);

  // 포그라운드에서 상단 알림 표시
  if (remoteMessage.notification) {
    await displayNotification(
      remoteMessage.notification.title || '알림',
      remoteMessage.notification.body || '',
    );
  }
});
