"use client";

import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "../loading";
import ErrorHandler from "../ErrorHandler";
import RotationContent from "./RotationContent";

const RotationPage = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorHandler}
      onReset={() => {
        console.log("Error boundary reset triggered.");
      }}
    >
      <Suspense fallback={<Loading />}>
        <RotationContent />
      </Suspense>
    </ErrorBoundary>
  );
};

export default RotationPage;
