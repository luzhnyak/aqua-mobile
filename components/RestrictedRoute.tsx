import { Redirect, Slot } from "expo-router";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "@/redux/auth/selectors";
import { ReactNode } from "react";

type RouteProps = {
  children: ReactNode;
};

export const RestrictedRoute = ({ children }: RouteProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Redirect href="/home" />;
  }

  return <Slot />;
};
