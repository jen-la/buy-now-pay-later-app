// custom typescript data types go here
export enum ViewMode {
  DESKTOP,
  MOBILE,
}

export type UserExperienceFlowType = 'Aggregation' | 'Verification' | 'Aggregation plus Verification';

export type TokenEnumType = 'AccessToken' | 'JwtToken';

export interface CategorySpend {
  category: string;
  spend: number;
}

export interface MerchantSpend {
  merchant: string;
  spend: number;
}

export interface TokenType {
  tokenType: TokenEnumType;
  tokenValue: string;
}

export interface FastLinkOptionsType {
  fastLinkURL: string;
  token?: TokenType;
  userExperienceFlow?: UserExperienceFlowType;
}

export interface YodleeHookPropsType {
  containerId: string;
  createScriptTag?: boolean;
  fastLinkOptions: FastLinkOptionsType;
  onSuccess?: (args: any) => void;
  onError?: (args: any) => void;
  onExit?: (args: any) => void;
  onEvent?: (args: any) => void;
}

export interface YodleeHookReturnType {
  init: (token?: TokenType) => void;
  data: any;
  error: any;
  ready: boolean;
  active: boolean;
}

export interface YodleeHookType {
  (props: YodleeHookPropsType): YodleeHookReturnType;
}

declare global {
  interface Window { fastlink: any; }
}