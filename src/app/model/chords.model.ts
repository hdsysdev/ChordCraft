type ChordFinger = [number, string | number, (string | { text: string; color: string; className: string; })?]

interface ChordBarre {
  fromString: number;
  toString: number;
  fret: number;
  text?: string;
  color?: string;
  textColor?: string;
  className?: string;
}

interface ChordConfig {
  fingers: ChordFinger[];
  barres?: ChordBarre[];
  title?: string;
  position?: number;
}

interface ChordDiagramConfig {
  orientation?: 'vertical' | 'horizontal';
  style?: 'normal' | 'handdrawn';
  strings?: number;
  frets?: number;
  position?: number;
  tuning?: string[];
  fretLabelPosition?: 'right' | 'left';
  fretLabelFontSize?: number;
  tuningsFontSize?: number;
  fingerSize?: number;
  fingerColor?: string;
  fingerTextColor?: string;
  fingerTextSize?: number;
  fingerStrokeColor?: string;
  fingerStrokeWidth?: number;
  barreChordStrokeColor?: string;
  barreChordStrokeWidth?: number;
  fretSize?: number;
  sidePadding?: number;
  fontFamily?: string;
  title?: string;
  titleFontSize?: number;
  titleBottomMargin?: number;
  color?: string;
  backgroundColor?: string;
  barreChordRadius?: number;
  emptyStringIndicatorSize?: number;
  strokeWidth?: number;
  nutWidth?: number;
  noPosition?: boolean;
  fretLabelColor?: string;
  stringColor?: string;
  tuningsColor?: string;
  fretColor?: string;
  fixedDiagramPosition?: boolean;
  watermark?: string;
  watermarkFontSize?: number;
  watermarkColor?: string;
  watermarkFontFamily?: string;
  svgTitle?: string;
}
