import { useEffect, useState } from 'react';
import { TokenType, YodleeHookType } from '../models/index';

// useYodlee hook based on https://github.com/erhangundogan/yodlee-react-hook
export const useYodlee: YodleeHookType = ({
  // YodleeHookPropsType - below sets default argument and return values
  containerId,
  createScriptTag = true,
  fastLinkOptions: {
    fastLinkURL,
    token,
    userExperienceFlow = 'Verification'
  },
  onSuccess,
  onError,
  onExit,
  onEvent,
}) => {
  const [ready, setReady] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    // add script tag 
    let script: HTMLScriptElement;
    if (createScriptTag) {
      script = document.createElement('script');
      
      script.id = 'yodlee-fastlink-script';
      script.src = 'https://cdn.yodlee.com/fastlink/v3/initialize.js';
      script.async = true;
      script.defer = true;
      script.onload = () => setReady(true);
      script.onerror = () => setError('Yodlee FastLink library could not be loaded!');

      document.body.appendChild(script);
    }

    return () => {
      window.fastlink?.close();
      if (createScriptTag) {
        document.body.removeChild(script);
      }
    }
  }, []);
  
  // method to launch Fastlink
  const init = (currentToken?: TokenType) => {
    const getTokenString = (t?: TokenType) => {
      switch (t?.tokenType) {
        case 'AccessToken': {
          return { accessToken: `Bearer ${t.tokenValue}` };
        }
        case 'JwtToken': {
          return { jwtToken: `Bearer ${t.tokenValue}` };
        }
      }
    }

    setActive(true);

    window.fastlink?.open({
      fastLinkURL,
      params: { userExperienceFlow },
      ...getTokenString(currentToken || token),
      onSuccess: (customerData: any) => {
        setData(customerData);
        onSuccess && onSuccess(customerData);
      },
      onError: (fastLinkError: any) => {
        setError(fastLinkError);
        onError && onError(fastLinkError);
      },
      onExit,
      onEvent
    }, containerId);
  };
  // YodleeHookReturnType
  return {
    init, // method to initiate FastLink which creates an iframe
    data, // any - customer data received from onSuccess event
    error,  // any - error if Yodlee FastLink intercepts with any error
    ready, // boolean - whether Fastlink library loaded
    active // boolean - whether init method called
  }
}

export default useYodlee;