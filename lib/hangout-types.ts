type HangoutEvent = "ADDED_TO_SPACE" | "MESSAGE";
type HangoutSpace = "TYPE_UNSPECIFIED" | "ROOM" | "DM";
type HangoutUser = "TYPE_UNSPECIFIED" | "HUMAN" | "BOT";
type HangoutImageStyle = "IMAGE_STYLE_UNSPECIFIED" | "IMAGE" | "AVATAR";
type HangoutIcon =
  | "ICON_UNSPECIFIED"
  | "AIRPLANE"
  | "BOOKMARK"
  | "BUS"
  | "CAR"
  | "CLOCK"
  | "CONFIRMATION_NUMBER_ICON"
  | "DOLLAR"
  | "DESCRIPTION"
  | "EMAIL"
  | "EVENT_PERFORMER"
  | "EVENT_SEAT"
  | "FLIGHT_ARRIVAL"
  | "FLIGHT_DEPARTURE"
  | "HOTEL"
  | "HOTEL_ROOM_TYPE"
  | "INVITE"
  | "MAP_PIN"
  | "MEMBERSHIP"
  | "MULTIPLE_PEOPLE"
  | "OFFER"
  | "PERSON"
  | "PHONE"
  | "RESTAURANT_ICON"
  | "SHOPPING_CART"
  | "STAR"
  | "STORE"
  | "TICKET"
  | "TRAIN"
  | "VIDEO_CAMERA"
  | "VIDEO_PLAY";
type HangoutAnnotation = "ANNOTATION_TYPE_UNSPECIFIED" | "USER_MENTION";
type HangoutUserMention = "TYPE_UNSPECIFIED" | "ADD" | "MENTION";
type HangoutBotResponse =
  | "TYPE_UNSPECIFIED"
  | "NEW_MESSAGE"
  | "UPDATE_MESSAGE"
  | "REQUEST_CONFIG";

interface IHangoutActionParameter {
  key: string;
  value: string;
}

interface IHangoutActionClickDefinition {
  actionMethodName: string;
  parameters: Array<IHangoutActionParameter>;
}

interface IHangoutOpenLinkClickDefinition {
  url: string;
}

type HangoutClickDefinition =
  | IHangoutActionClickDefinition
  | IHangoutOpenLinkClickDefinition;

interface IHangoutTextButtonWidget {
  text: string;
  onClick: HangoutClickDefinition;
}

interface IHangoutBaseImageButtonWidget {
  onClick: HangoutClickDefinition;
  name: string;
}

interface IHangoutIconImageButtonWidget extends IHangoutBaseImageButtonWidget {
  icon: HangoutIcon;
}

interface IHangoutRemoteIconImageButtonWidget
  extends IHangoutBaseImageButtonWidget {
  iconUrl: string;
}

type HangoutImageButtonWidget =
  | IHangoutIconImageButtonWidget
  | IHangoutRemoteIconImageButtonWidget;

type HangoutButtonWidget =
  | {
      textButton: IHangoutTextButtonWidget;
    }
  | {
      imageButton: HangoutImageButtonWidget;
    };

interface IHangoutCardHeader {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageStyle: HangoutImageStyle;
}

interface IHangoutBaseWidgetMarkup {
  buttons: Array<HangoutButtonWidget>;
}

interface IHangoutTextParagraphWidgetMarkup extends IHangoutBaseWidgetMarkup {
  textParagraph: {
    text: string;
  };
}

interface IHangoutImageWidgetMarkup extends IHangoutBaseWidgetMarkup {
  image: {
    imageUrl: string;
    onClick: HangoutClickDefinition;
    aspectRatio: number;
  };
}

interface IHangoutKeyValueBaseWidgetContent {
  topLabel: string;
  content: string;
  contentMultiline: string;
  bottomLabel: string;
  onClick: HangoutClickDefinition;
  button: HangoutButtonWidget;
}

interface IHangoutKeyValueIconWidgetContent
  extends IHangoutKeyValueBaseWidgetContent {
  icon: HangoutIcon;
}

interface IHangoutKeyValueRemoteIconWidgetContent
  extends IHangoutKeyValueBaseWidgetContent {
  iconUrl: string;
}

type HangoutKeyValueWidgetContent =
  | IHangoutKeyValueIconWidgetContent
  | IHangoutKeyValueRemoteIconWidgetContent;

interface IHangoutKeyValueWidgetMarkup extends IHangoutBaseWidgetMarkup {
  keyValue: HangoutKeyValueWidgetContent;
}

type HangoutWidgetMarkup =
  | IHangoutTextParagraphWidgetMarkup
  | IHangoutImageWidgetMarkup
  | IHangoutKeyValueWidgetMarkup;

interface IHangoutCardSection {
  header: string;
  widgets: Array<HangoutWidgetMarkup>;
}

interface IHangoutCardAction {
  actionLabel: string;
  onClick: HangoutClickDefinition;
}

interface IHangoutCard {
  header: IHangoutCardHeader;
  sections: Array<IHangoutCardSection>;
  cardActions: Array<IHangoutCardAction>;
  name: string;
}

interface IHangoutUserMentionMetadata {
  user: IHangoutUser;
  type: HangoutUserMention;
}

interface IHangoutAnnotation {
  type: HangoutAnnotation;
  startIndex: number;
  length: number;
  userMention: IHangoutUserMentionMetadata;
}

interface IHangoutThread {
  name: string;
}

interface IHangoutSpace {
  name: string;
  displayName: string;
  type: HangoutSpace;
}

interface IHangoutActionResponse {
  type: HangoutBotResponse;
  url: string;
}

interface IHangoutUser {
  name: string;
  displayName: string;
  domainId: string;
  type: HangoutUser;
}

interface IHangoutFormAction {
  actionMethodName: string;
  parameters: Array<IHangoutActionParameter>;
}

export interface IHangoutMessage {
  name: string;
  createTime: string;
  text: string;
  cards: Array<IHangoutCard>;
  previewText: string;
  annotations: Array<IHangoutAnnotation>;
  thread: IHangoutThread;
  space: IHangoutSpace;
  fallbackText: string;
  actionResponse: IHangoutActionResponse;
  argumentText: string;
}

export interface IHangoutEvent {
  type: HangoutEvent;
  eventTime: string;
  token: string;
  threadKey: string;
  configCompleteRedirectUrl: string;
  message: IHangoutMessage;
  user: IHangoutUser;
  space: IHangoutSpace;
  action: IHangoutFormAction;
}
