import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Context,
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { UserProvider } from "@auth0/nextjs-auth0";

type ShowState = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};
export const ShowStateContext = createContext({} as ShowState);

function MyApp({ Component, pageProps }: AppProps) {
  const [show, setShow] = useState(false);
  const showStateContextValue = {
    show,
    setShow,
  };
  return (
    <UserProvider>
      <ShowStateContext.Provider value={showStateContextValue}>
        <Component {...pageProps} />
      </ShowStateContext.Provider>
    </UserProvider>
  );
}

export default MyApp;
