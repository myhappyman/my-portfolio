// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string; // 배경색
    bgRGBAColor: string; // 배경색rgba
    bgGradientStartColor: string; // 배경 gradient 시작색
    bgGradientEndColor: string; // 배경 gradient 종료색
    logoColor: string; // 상단 헤더 로고 글씨 색상
    textColor: string; // 텍스트 색상
    btnColor: string; // 버튼류 배경 색상
    btnTxtColor: string; // 버튼류 텍스트 색상
    linkHoverColor: string; // 링크류 색상
  }
}
