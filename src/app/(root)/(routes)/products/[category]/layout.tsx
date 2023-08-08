import React, { Suspense } from "react";
import SpinnerLoading from "../../loading";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Suspense fallback={<SpinnerLoading />}>{children}</Suspense>
    </>
  );
};

export default AuthLayout;
