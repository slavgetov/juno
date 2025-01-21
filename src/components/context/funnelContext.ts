import { createContext } from "react";

type FunnelContextProps = {
  firstName: string;
  nickname: string;
};

const FunnelContext = createContext<FunnelContextProps | null>(null);

export { FunnelContext, type FunnelContextProps };
