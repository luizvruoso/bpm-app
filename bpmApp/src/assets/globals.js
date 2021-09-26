import {StyleSheet} from 'react-native';
import {variables} from './variables';

export default styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  bold1: {
    fontWeight: '700',
  },
  bold2: {
    fontWeight: '800',
  },
  bold3: {
    fontWeight: '900',
  },
  bold100: {
    fontWeight: '100',
  },
  bold200: {
    fontWeight: '100',
  },
  bold300: {
    fontWeight: '100',
  },

  lineSmaller: {
    lineHeight: variables.fontSmaller,
  },
  lineSmall: {
    lineHeight: variables.fontSmall,
  },
  lineNormal: {
    lineHeight: variables.fontNormal,
  },
  lineLarge: {
    lineHeight: variables.fontLarge,
  },
  lineLarger: {
    lineHeight: variables.fontLarger,
  },
  lineLarger2: {
    lineHeight: variables.fontLarger2,
  },

  h1: {
    fontSize: variables.titulo1,
    fontWeight: 'bold',
  },
  h1Primary: {
    fontSize: variables.titulo1,
    fontWeight: 'bold',
    color: variables.primary,
  },
  h1Secondary: {
    fontSize: variables.titulo1,
    fontWeight: 'bold',
    color: variables.secondary,
  },
  h1Gray: {
    fontSize: variables.titulo1,
    fontWeight: 'bold',
    color: variables.darkGray3,
  },
  h2: {
    fontSize: variables.titulo2,
    fontWeight: 'bold',
  },
  h2Primary: {
    fontSize: variables.titulo2,
    fontWeight: 'bold',
    color: variables.primary,
  },
  h2Secondary: {
    fontSize: variables.titulo2,
    fontWeight: 'bold',
    color: variables.secondary,
  },
  h2Gray: {
    fontSize: variables.titulo2,
    fontWeight: 'bold',
    color: variables.darkGray3,
  },
  h3: {
    fontSize: variables.titulo3,
    fontWeight: 'bold',
  },
  h3Primary: {
    fontSize: variables.titulo3,
    fontWeight: 'bold',
    color: variables.primary,
  },
  h3Secondary: {
    fontSize: variables.titulo3,
    fontWeight: 'bold',
    color: variables.secondary,
  },
  h3Gray: {
    fontSize: variables.titulo3,
    fontWeight: 'bold',
    color: variables.darkGray3,
  },
  h4: {
    fontSize: variables.titulo4,
    fontWeight: 'bold',
  },
  h4Primary: {
    fontSize: variables.titulo4,
    fontWeight: 'bold',
    color: variables.primary,
  },
  h4Secondary: {
    fontSize: variables.titulo4,
    fontWeight: 'bold',
    color: variables.secondary,
  },
  h4Gray: {
    fontSize: variables.titulo4,
    fontWeight: 'bold',
    color: variables.darkGray3,
  },
  h5: {
    fontSize: variables.titulo5,
    fontWeight: 'bold',
  },
  h5Primary: {
    fontSize: variables.titulo5,
    fontWeight: 'bold',
    color: variables.primary,
  },
  h5Secondary: {
    fontSize: variables.titulo5,
    fontWeight: 'bold',
    color: variables.secondary,
  },
  h5Gray: {
    fontSize: variables.titulo5,
    fontWeight: 'bold',
    color: variables.darkGray3,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
  },

  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  rowWrap: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },

  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  flex6: {
    flex: 6,
  },

  flexStart: {
    alignSelf: 'flex-start',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  flexCenter: {
    alignSelf: 'center',
  },
  contentCenter: {
    alignContent: 'center',
  },
  flexStretch: {
    alignSelf: 'stretch',
  },

  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  maxWidthFull: {
    maxWidth: '100%',
  },
  maxHeightFull: {
    maxHeight: '100%',
  },
  fullSize: {
    width: '100%',
    height: '100%',
  },

  colorWhite: {
    color: variables.white,
  },
  bgWhite: {
    backgroundColor: variables.white,
  },
  colorBlack: {
    color: variables.black,
  },
  bgBlack: {
    backgroundColor: variables.black,
  },

  colorGray1: {
    color: variables.gray1,
  },
  colorGray2: {
    color: variables.gray2,
  },
  colorGray3: {
    color: variables.gray3,
  },
  colorDarkGray1: {
    color: variables.darkGray1,
  },
  colorDarkGray2: {
    color: variables.darkGray2,
  },
  colorDarkGray3: {
    color: variables.darkGray3,
  },
  colorDarkGray4: {
    color: variables.darkGray4,
  },

  bgGray1: {
    backgroundColor: variables.gray1,
  },
  bgGray2: {
    backgroundColor: variables.gray2,
  },
  bgGray3: {
    backgroundColor: variables.gray3,
  },
  bgDarkGray1: {
    backgroundColor: variables.darkGray1,
  },
  bgDarkGray2: {
    backgroundColor: variables.darkGray2,
  },
  bgDarkGray3: {
    backgroundColor: variables.darkGray3,
  },
  bgDarkGray4: {
    backgroundColor: variables.darkGray4,
  },

  btn: {
    alignItems: 'center',
    padding: variables.btnPadding,
    borderRadius: variables.btnBorderRadius,
    fontWeight: variables.btnFontWeight,
    elevation: variables.btnElevation,
    height: variables.btnHeight,
    alignSelf: 'center',
  },

  btnPrimary: {
    alignItems: 'center',
    width: variables.btnSize,
    height: variables.btnHeight,
    padding: variables.btnPadding,
    borderRadius: variables.btnBorderRadius,
    fontWeight: variables.btnFontWeight,
    elevation: variables.btnElevation,
    backgroundColor: variables.primary,
    color: variables.white,
    alignSelf: 'center',
  },
  btnPrimaryInverse: {
    alignItems: 'center',
    width: variables.btnSize,
    height: variables.btnHeight,
    padding: variables.btnPadding,
    borderRadius: variables.btnBorderRadius,
    fontWeight: variables.btnFontWeight,
    elevation: variables.btnElevation,
    color: variables.primary,
    backgroundColor: variables.white,
    alignSelf: 'center',
  },

  btnSecondary: {
    alignItems: 'center',
    width: variables.btnSize,
    height: variables.btnHeight,
    padding: variables.btnPadding,
    borderRadius: variables.btnBorderRadius,
    fontWeight: variables.btnFontWeight,
    elevation: variables.btnElevation,
    backgroundColor: variables.secondary,
    color: variables.white,
    alignSelf: 'center',
  },
  btnSecondaryInverse: {
    alignItems: 'center',
    width: variables.btnSize,
    height: variables.btnHeight,
    padding: variables.btnPadding,
    borderRadius: variables.btnBorderRadius,
    fontWeight: variables.btnFontWeight,
    elevation: variables.btnElevation,
    color: variables.secondary,
    backgroundColor: variables.white,
    alignSelf: 'center',
  },
  btnInfo: {
    alignItems: 'center',
    width: variables.btnSize,
    height: variables.btnHeight,
    padding: variables.btnPadding,
    borderRadius: variables.btnBorderRadius,
    fontWeight: variables.btnFontWeight,
    elevation: variables.btnElevation,
    backgroundColor: variables.info,
    color: variables.white,
    alignSelf: 'center',
  },
  btnInfoInverse: {
    alignItems: 'center',
    width: variables.btnSize,
    height: variables.btnHeight,
    padding: variables.btnPadding,
    borderRadius: variables.btnBorderRadius,
    fontWeight: variables.btnFontWeight,
    elevation: variables.btnElevation,
    color: variables.info,
    backgroundColor: variables.white,
    alignSelf: 'center',
  },
  btnWarning: {
    alignItems: 'center',
    width: variables.btnSize,
    height: variables.btnHeight,
    padding: variables.btnPadding,
    borderRadius: variables.btnBorderRadius,
    fontWeight: variables.btnFontWeight,
    elevation: variables.btnElevation,
    backgroundColor: variables.warning,
    color: variables.white,
    alignSelf: 'center',
  },
  btnWarningInverse: {
    alignItems: 'center',
    width: variables.btnSize,
    height: variables.btnHeight,
    padding: variables.btnPadding,
    borderRadius: variables.btnBorderRadius,
    fontWeight: variables.btnFontWeight,
    elevation: variables.btnElevation,
    color: variables.warning,
    backgroundColor: variables.white,
    alignSelf: 'center',
  },
  btnDanger: {
    alignItems: 'center',
    width: variables.btnSize,
    height: variables.btnHeight,
    padding: variables.btnPadding,
    borderRadius: variables.btnBorderRadius,
    fontWeight: variables.btnFontWeight,
    elevation: variables.btnElevation,
    backgroundColor: variables.danger,
    color: variables.white,
    alignSelf: 'center',
  },
  btnDangerInverse: {
    alignItems: 'center',
    width: variables.btnSize,
    height: variables.btnHeight,
    padding: variables.btnPadding,
    borderRadius: variables.btnBorderRadius,
    fontWeight: variables.btnFontWeight,
    elevation: variables.btnElevation,
    color: variables.danger,
    backgroundColor: variables.white,
    alignSelf: 'center',
  },
  btnSuccess: {
    alignItems: 'center',
    width: variables.btnSize,
    height: variables.btnHeight,
    padding: variables.btnPadding,
    borderRadius: variables.btnBorderRadius,
    fontWeight: variables.btnFontWeight,
    elevation: variables.btnElevation,
    backgroundColor: variables.success,
    color: variables.white,
    alignSelf: 'center',
  },
  btnSuccessInverse: {
    alignItems: 'center',
    width: variables.btnSize,
    height: variables.btnHeight,
    padding: variables.btnPadding,
    borderRadius: variables.btnBorderRadius,
    fontWeight: variables.btnFontWeight,
    elevation: variables.btnElevation,
    color: variables.success,
    backgroundColor: variables.white,
    alignSelf: 'center',
  },

  //texto padrão pra botões
  btnText: {
    fontSize: variables.fontNormal,
    textAlign: 'center',
    fontWeight: variables.btnFontWeight,
  },
  txtBtnWhite: {
    fontSize: variables.fontNormal,
    color: variables.white,
    fontWeight: variables.btnFontWeight,
    textAlign: 'center',
  },

  btnClose: {
    backgroundColor: variables.danger,
    padding: variables.btnPadding,
    borderRadius: variables.btnBorderRadius,
    elevation: variables.btnElevation,
    color: variables.white,
  },

  btnHeight: {
    height: variables.btnHeight,
  },

  btnBorderRadius: {
    borderRadius: variables.btnBorderRadius,
  },

  modalBorderRadius: {
    borderRadius: variables.modalBorderRadius,
  },

  //imagens
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    height: variables.logoHeight,
    width: variables.logoWidth,
    marginTop: 10,
    marginBottom: 30,
    resizeMode: 'contain',
  },

  //forms
  input: {
    backgroundColor: variables.white,
    height: variables.inputHeight,
    width: variables.inputSize,
    padding: variables.inputPadding,
    margin: variables.inputMargin,
    borderWidth: variables.inputBorderWidth,
    borderColor: variables.darkGray2,
    borderRadius: variables.inputBorderRadius,
    color: variables.darkGray4,
    fontSize: variables.fontNormal,
  },

  inputWhite: {
    height: variables.inputHeight,
    width: variables.inputSize,
    padding: variables.inputPadding,
    margin: variables.inputMargin,
    borderWidth: variables.inputBorderWidth,
    borderColor: variables.white,
    borderRadius: variables.inputBorderRadius,
    color: variables.white,
  },

  //alinhamento
  textCenter: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textRight: {
    textAlign: 'right',
  },
  textLeft: {
    textAlign: 'left',
  },
  textVerticalCenter: {
    textAlignVertical: 'center',
  },

  centerXY: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerX: {
    alignItems: 'center',
  },
  centerY: {
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },

  //CLASSES DE PADDING

  //padding geral
  p5: {
    padding: 5,
  },
  p10: {
    padding: 10,
  },
  p20: {
    padding: 20,
  },
  p30: {
    padding: 30,
  },
  p40: {
    padding: 40,
  },
  p50: {
    padding: 50,
  },

  //padding top
  pt5: {
    paddingTop: 5,
  },
  pt10: {
    paddingTop: 10,
  },
  pt20: {
    paddingTop: 20,
  },
  pt30: {
    paddingTop: 30,
  },
  pt40: {
    paddingTop: 40,
  },
  pt50: {
    paddingTop: 50,
  },

  //padding right
  pr5: {
    paddingRight: 5,
  },
  pr10: {
    paddingRight: 10,
  },
  pr20: {
    paddingRight: 20,
  },
  pr30: {
    paddingRight: 30,
  },
  pr40: {
    paddingRight: 40,
  },
  pr50: {
    paddingRight: 50,
  },

  //padding bottom
  pb5: {
    paddingBottom: 5,
  },
  pb10: {
    paddingBottom: 10,
  },
  pb20: {
    paddingBottom: 20,
  },
  pb30: {
    paddingBottom: 30,
  },
  pb40: {
    paddingBottom: 40,
  },
  pb50: {
    paddingBottom: 50,
  },

  //padding left
  pl5: {
    paddingLeft: 5,
  },
  pl10: {
    paddingLeft: 10,
  },
  pl20: {
    paddingLeft: 20,
  },
  pl30: {
    paddingLeft: 30,
  },
  pl40: {
    paddingLeft: 40,
  },
  pl50: {
    paddingLeft: 50,
  },

  //padding eixo X
  px5: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  px10: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  px20: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  px30: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  px40: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  px50: {
    paddingLeft: 50,
    paddingRight: 50,
  },

  //padding eixo Y
  py5: {
    paddingBottom: 5,
    paddingTop: 5,
  },
  py10: {
    paddingBottom: 10,
    paddingTop: 10,
  },
  py20: {
    paddingBottom: 20,
    paddingTop: 20,
  },
  py30: {
    paddingBottom: 30,
    paddingTop: 30,
  },
  py40: {
    paddingBottom: 40,
    paddingTop: 40,
  },
  py50: {
    paddingBottom: 50,
    paddingTop: 50,
  },
  //CLASSES DE MARGIN

  //margin geral
  m5: {
    margin: 5,
  },
  m10: {
    margin: 10,
  },
  m20: {
    margin: 20,
  },
  m30: {
    margin: 30,
  },
  m40: {
    margin: 40,
  },
  m50: {
    margin: 50,
  },

  //margin top
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mt20: {
    marginTop: 20,
  },
  mt30: {
    marginTop: 30,
  },
  mt40: {
    marginTop: 40,
  },
  mt50: {
    marginTop: 50,
  },

  //margin right
  mr5: {
    marginRight: 5,
  },
  mr10: {
    marginRight: 10,
  },
  mr20: {
    marginRight: 20,
  },
  mr30: {
    marginRight: 30,
  },
  mr40: {
    marginRight: 40,
  },
  mr50: {
    marginRight: 50,
  },

  //margin bottom
  mPosiçãob5: {
    marginBottom: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  mb20: {
    marginBottom: 20,
  },
  mb30: {
    marginBottom: 30,
  },
  mb40: {
    marginBottom: 40,
  },
  mb50: {
    marginBottom: 50,
  },

  //margin left
  ml5: {
    marginLeft: 5,
  },
  ml10: {
    marginLeft: 10,
  },
  ml20: {
    marginLeft: 20,
  },
  ml30: {
    marginLeft: 30,
  },
  ml40: {
    marginLeft: 40,
  },
  ml50: {
    marginLeft: 50,
  },

  //margin eixo X
  mx5: {
    marginLeft: 5,
    marginRight: 5,
  },
  mx10: {
    marginLeft: 10,
    marginRight: 10,
  },
  mx20: {
    marginLeft: 20,
    marginRight: 20,
  },
  mx30: {
    marginLeft: 30,
    marginRight: 30,
  },
  mx40: {
    marginLeft: 40,
    marginRight: 40,
  },
  mx50: {
    marginLeft: 50,
    marginRight: 50,
  },

  //margin eixo Y
  my5: {
    marginBottom: 5,
    marginTop: 5,
  },
  my10: {
    marginBottom: 10,
    marginTop: 10,
  },
  my20: {
    marginBottom: 20,
    marginTop: 20,
  },
  my30: {
    marginBottom: 30,
    marginTop: 30,
  },
  my40: {
    marginBottom: 40,
    marginTop: 40,
  },
  my50: {
    marginBottom: 50,
    marginTop: 50,
  },

  //alinhamento e posicionamento
  bottom0: {
    bottom: 0,
  },
  bottom5: {
    bottom: 5,
  },

  bottom10: {
    bottom: 10,
  },
  bottom15: {
    bottom: 15,
  },
  top0: {
    top: 0,
  },
  top5: {
    top: 5,
  },

  top10: {
    top: 10,
  },
  top15: {
    top: 15,
  },
  left0: {
    left: 0,
  },
  left5: {
    left: 5,
  },

  left10: {
    left: 10,
  },
  left15: {
    left: 15,
  },
  right0: {
    right: 0,
  },
  right5: {
    right: 5,
  },

  right10: {
    right: 10,
  },
  right15: {
    right: 15,
  },
  absolute: {
    position: 'absolute',
  },
  overflowHidden: {
    overflow: 'hidden',
  },

  //CLASSES ESPECÍFICAS

  itemDash: {
    margin: '3%',
    height: 120,
    shadowColor: variables.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    width: '44%',
    borderRadius: variables.btnBorderRadius,
  },
  itemDashFullWidth: {
    margin: '3%',
    height: 80,
    shadowColor: variables.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    flex: 1,
    borderRadius: variables.btnBorderRadius,
  },
  btnDash: {
    flexDirection: 'row',
    padding: 20,
    flexWrap: 'wrap',
  },
  //barra inferior
  bottomBar: {
    width: variables.bottomBarWidth,
    height: variables.bottomBarHeight,
  },

  //classes de modal

  modalView: {
    width: variables.modalWidth,
    height: variables.modalLgHeight,
    margin: variables.modalmargin,
    backgroundColor: variables.white,
    borderRadius: variables.modalBorderRadius,
    padding: variables.modalPadding,
    alignItems: variables.modalItemsAlign,
    shadowColor: variables.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: variables.modalElevation,
  },
  modalViewSm: {
    width: variables.modalWidth,
    maxHeight: variables.modalLgHeight,
    margin: variables.modalmargin,
    backgroundColor: variables.white,
    borderRadius: variables.modalBorderRadius,
    padding: variables.modalPadding,
    alignItems: variables.modalItemsAlign,
    shadowColor: variables.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: variables.modalElevation,
  },
  modalViewFull: {
    width: '100%',
    height: '100%',
    margin: variables.modalmargin,
    backgroundColor: variables.white,
    borderRadius: variables.modalBorderRadius,
    padding: variables.modalPadding,
    alignItems: variables.modalItemsAlign,
    shadowColor: variables.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: variables.modalElevation,
  },

  input: {
    //flex: 1,
    borderRadius: 3,
    borderWidth: 0.2,
    borderColor: '#000000',
    height: 50,
    backgroundColor: '#fcfcfc',
    paddingLeft: 10,
    marginBottom: 20,
    fontSize: variables.fontNormal,
  },
  //outras classes
  iconSm: {
    width: variables.iconSm,
    height: variables.iconSm,
  },
  icon: {
    width: variables.icon,
    height: variables.icon,
  },
  iconLg: {
    width: variables.iconLg,
    height: variables.iconLg,
  },
  loading: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    backgroundColor: '#ffffff',
    elevation: 17,
    opacity: 0.95,
    position: 'absolute',
    top: 60,
  },
  listView: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 10,
    height: 50,
  },
  activityIndicator: {
    marginTop: '20%',
    marginBottom: '20%',
  },

  textInput: {
    height: 50,
    width: '85%',
    borderColor: variables.gray3,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 0,
    color: '#000000',
  },

  header: {
    marginTop: 20,
    marginLeft: 25,
  },
  headerColor: {
    color: variables.headerColor,
  },
  headerBgColor: {
    backgroundColor: variables.headerBgColor,
  },
  listItem: {
    justifyContent: 'center',
    width: '100%',
    height: 30,
    margin: 10,
  },
  weatherView: {
    minHeight: 50,
    maxHeight: 70,
  },
  img20: {
    width: 20,
    height: 20,
  },
  img50: {
    width: 50,
    height: 50,
  },
  img70: {
    width: 70,
    height: 70,
  },

  //TODO: classes de height e width
  h50: {
    height: 50,
  },
  h60: {
    height: 60,
  },

  //table
  tableHeader: {
    borderTopStartRadius: variables.tableBorderRadius,
    borderTopEndRadius: variables.tableBorderRadius,
    backgroundColor: variables.tableHeaderBackground,
  },
  tableCell: {
    borderLeftWidth: variables.tableBorderWidth,
    borderRightWidth: variables.tableBorderWidth,
    borderColor: variables.tableBorderColor,
  },
  tableHeaderText: {
    color: variables.tableHeaderColor,
    fontWeight: '600',
  },
  tableRowColor1: {
    backgroundColor: variables.tableColor1,
  },
  tableRowColor2: {},

  //classes do chatbot

  containerLeft: {
    borderBottomLeftRadius: 0,
    borderBottomEndRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 8,
  },
  containerRight: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 8,
  },

  borderContainers: {
    borderColor: variables.gray3,
    borderWidth: 1,
  },

  marginContainers: {
    marginBottom: 2,
    marginRight: 8,
    marginTop: 5,
  },

  containerChatBox: {
    width: '100%',
    minHeight: 30,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    //margin: 500,
  },

  containerMessage: {
    maxWidth: '85%',
    minWidth: '20%',
    minHeight: 20,
    borderRadius: variables.chatBotBorderRadius,
    justifyContent: 'center',
    padding: 9,
    backgroundColor: variables.gray1,
    borderWidth: variables.chatBotBorderWidth,
    borderColor: variables.gray3,
    marginBottom: 10,
    marginTop: 10,
  },
  containerMessageWatson: {
    maxWidth: '85%',
    minWidth: '20%',
    minHeight: 20,
    padding: 9,
    justifyContent: 'center',
    borderRadius: variables.chatBotBorderRadius,
    backgroundColor: variables.white,
    borderWidth: variables.chatBotBorderWidth,
    borderColor: variables.gray3,
  },
  containerMessageWatsonDocument: {
    maxWidth: '85%',
    minWidth: '45%',
    minHeight: 20,
    padding: 9,
    justifyContent: 'center',
    borderRadius: variables.chatBotBorderRadius,
    backgroundColor: variables.white,
    borderWidth: variables.chatBotBorderWidth,
    borderColor: variables.gray3,
  },

  map: {
    height: 250,
    width: '100%',
    overflow: 'hidden',
  },
  containerMap: {
    width: '80%',
    overflow: 'hidden',
  },
  contentText: {
    fontSize: variables.fontNormal,
    color: variables.black,
  },
  containerTime: {
    justifyContent: 'flex-end',
    //width: '30%',
    //height: 20,
    flexDirection: 'row',
  },
  contentTextTime: {
    fontSize: variables.fontSmaller,
    color: variables.black,
  },
  chatBotBtn: {
    alignItems: 'center',
    padding: variables.btnPadding,
    borderRadius: variables.btnBorderRadius,
    fontWeight: variables.btnFontWeight,
    elevation: variables.btnElevation,
    height: variables.btnHeight,
  },
  chatBotContent: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
  },

  //Transformações
  vertical1: {
    transform: [{rotate: '-90deg'}],
    // alignContent: 'center',
    // textAlign: 'center'
  },
  textVertical: {
    minWidth: 120,
    paddingTop: 30,
  },
  modalBorderRadiusLeft: {
    borderBottomLeftRadius: variables.modalBorderRadius,
    borderTopLeftRadius: variables.modalBorderRadius,
  },
});
