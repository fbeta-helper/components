/// <reference types="react" />
export default function useSideBar(): {
    activeKey: string;
    setActiveKey: import("react").Dispatch<import("react").SetStateAction<string>>;
};
