"use client";

import { useCallback } from 'react';
import { soundManager } from '@/lib/sound';

export function useCyberSound() {
    const playHover = useCallback(() => {
        soundManager.playHover();
    }, []);

    const playClick = useCallback(() => {
        soundManager.playClick();
    }, []);

    return { playHover, playClick };
}
