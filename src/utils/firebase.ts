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

const messaging = getMessaging(getApp());

// 로컬 알림 표시 함수
const displayNotification = async (title: string, body: string) => {
  // Android 채널 생성 (Android 8.0 이상 필수)
  console.log('displayNotification');
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
      smallIcon: 'ic_launcher', // 기본 앱 아이콘 사용
      pressAction: {
        id: 'default',
      },
    },
    ios: {
      sound: 'default',
    },
  });
  console.log('notifee end');
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
