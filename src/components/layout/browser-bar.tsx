import { FC } from "react";

interface BrowserBarProps {
  url: string;
}

const BrowserBar: FC<BrowserBarProps> = ({ url }) => {
  return (
    <div className="absolute inset-x-0 top-0 z-20 flex h-9 items-center gap-2 bg-[rgba(30,30,30,0.95)] px-4 backdrop-blur-md">
      <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f57]" />
      <span className="h-[10px] w-[10px] rounded-full bg-[#febc2e]" />
      <span className="h-[10px] w-[10px] rounded-full bg-[#28c840]" />
      <span className="ml-3 max-w-[300px] flex-1 rounded-md bg-white/10 px-3 py-[3px] text-[11px] font-medium tracking-[0.02em] text-white/50">
        {url}
      </span>
    </div>
  );
};

export default BrowserBar;