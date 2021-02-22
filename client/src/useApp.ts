import { useState } from "react";
import { useAppData } from "./interfaces";

export const useApp: Function = (): useAppData => {
    const [state, setState] = useState('');

    return { state, setState }
} 