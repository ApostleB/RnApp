# 변경 내역

## iOS

| 파일 | 변경 내용 |
|------|----------|
| `GoogleService-Info.plist` | Firebase iOS 설정 파일 추가 (git 제외 대상) |
| `AppDelegate.swift` | Firebase 초기화 코드 추가 |
| `Info.plist` | Firebase 및 푸시 알림 관련 설정 추가 |
| `Podfile` | Firebase 관련 CocoaPods 의존성 추가 |
| `Podfile.lock` | Pod 의존성 lock 파일 업데이트 |
| `project.pbxproj` | GoogleService-Info.plist 파일 참조 및 빌드 설정 추가 |
| `RnApp.xcscheme` | Xcode 스킴 설정 업데이트 |
| `LaunchScreen.storyboard` | 런치 스크린 UI 수정 |
| `PrivacyInfo.xcprivacy` | 개인정보 보호 매니페스트 업데이트 |
| `Gemfile.lock` | Ruby 의존성 lock 파일 업데이트 |

## Android

| 파일 | 변경 내용 |
|------|----------|
| `AndroidManifest.xml` | POST_NOTIFICATIONS 권한 및 FirebaseMessagingService 추가 |
| `build.gradle` (app) | Firebase 플러그인 및 의존성 설정 추가 |
| `build.gradle` (project) | Google Services 플러그인 classpath 추가 |
| `MainActivity.kt` | 기본 Activity 설정 |
| `MainApplication.kt` | Firebase 초기화 관련 설정 |

## 소스 코드

| 파일 | 변경 내용 |
|------|----------|
| `App.tsx` | Firebase 초기화 및 푸시 알림 권한 요청 로직 추가 |
| `Menu1Screen.tsx` | WebView 컴포넌트 추가 |
| `firebase.ts` | FCM 토큰 발급, 푸시 알림 수신(foreground/background), notifee 로컬 알림 표시 기능 구현 |

## 문서

| 파일 | 변경 내용 |
|------|----------|
| `README.md` | 프로젝트 설명 업데이트 |
