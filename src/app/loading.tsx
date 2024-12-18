"use client"

import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="-mt-[100px] flex items-center justify-center min-h-screen">
      <Loader2 className="animate-spin w-10 h-10" />
    </div>
  );
};

export default Loading;
