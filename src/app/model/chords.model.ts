export type ChordFinger = [number, number, string | ChordOptions];
export type ChordOptions = { text?: string; color?: string; className?: string; shape?: string };

export type Chords = Record<string, ChordFinger[]>;
