import Bus from 'rxjs-event-bus';

export declare interface Webcc {
  eventBus: Bus<any>;
  toolManager: ToolManager;
  shapeManager: ShapeManager;
  mometoManager: MometoManager;
  dimManager: IDimInfoManager;
  langMode: string;
  readonly isDragging: boolean;
  serialize(): string;
  deserialize(cp: string): void;
  refresh(): void;
  destoryAll(): void;
  changeMode(): void;
  setCanvasScale(newScaleX?: number, newScaleY?: number, positionX?: number, positionY?: number): void;
}

export declare class ToolManager {
  readonly currentToolText: ToolType;
  mousePosition: any;
  handleKey(key: string): void;
  takeTool(tool: ToolType, triggeredByShortKey?: boolean): void;
}
export declare enum ToolType {
  none = 'none',
  pan = 'pan',
  wall = 'wall',
  frame_rectangle = 'frame_rectangle',
  frame_circle = 'frame_circle',
  frame_polygon = 'frame_polygon',
  frame_triangle = 'frame_triangle',
  frame_half_circle = 'frame_half_circle',
  frame_quarter_circle = 'frame_quarter_circle',
  frame_gothic = 'frame_gothic',
  frame_octagon = 'frame_octagon',
  frame_springline = 'frame_springline',
  frame_springline_flanker = 'frame_springline_flanker',
  frame_isosceles_triangle = 'frame_isosceles_triangle',
  frame_hexagon = 'frame_hexagon',
  frame_parallelogram = 'frame_parallelogram',
  frame_diamond = 'frame_diamond',
  frame_trapezoid = 'frame_trapezoid',
  frame_peak_pentagon = 'frame_peak_pentagon',
  frame_angled_pentagon = 'frame_angled_pentagon',
  frame_hollow_side = 'frame_hollow_side',
  frame_hollow = 'frame_hollow',
  frame_convex = 'frame_convex',
  frame_quarter_arch = 'frame_quarter_arch',
  frame_extended_partial_arch = 'frame_extended_partial_arch',
  frame_quatrefoil = 'frame_quatrefoil',
  frame_three_dimensional_arc = 'frame_three_dimensional_arc',
  frame_ear = 'frame_ear',
  frame_double_ears = 'frame_double_ears',
  frame_single_track = 'frame_single_track',
  frame_kfc = 'frame_kfc',
  frame_kfc2 = 'frame_kfc2',
  frame_wave = 'frame_wave',
  frame_onion = 'frame_onion',
  frame_mosque = 'frame_mosque',
  mullion_horizontal = 'mullion_horizontal',
  mullion_vertical = 'mullion_vertical',
  mullion_diagnoal = 'mullion_diagnoal',
  mullion_counterdiagnoal = 'mullion_counterdiagnoal',
  mullion_spin = 'mullion_spin',
  mullion_compound_square = 'mullion_compound_square',
  mullion_compound_diamond = 'mullion_compound_diamond',
  mullion_compound_circle = 'mullion_compound_circle',
  mullion_compound_hexagon = 'mullion_compound_hexagon',
  mullion_compound_x_square = 'mullion_compound_x_square',
  mullion_inner_arc = 'mullion_inner_arc',
  mullion_half_hexagon = 'mullion_half_hexagon',
  mullion_compound_rectangle_single = 'mullion_compound_rectangle_single',
  mullion_compound_rectangle_double = 'mullion_compound_rectangle_double',
  mullion_compound_long_octagon = 'mullion_compound_long_octagon',
  mullion_compound_double_octagon = 'mullion_compound_double_octagon',
  mullion_wave = 'mullion_wave',
  editSplitter = 'editSplitter',
  editInnerSplitter = 'editInnerSplitter',
  editDragRobot = 'editDragRobot',
  editWallDragRobot = 'editWallDragRobot',
  editTopViewDragRobot = 'editTopViewDragRobot',
  editEdgeRobot = 'editEdgeRobot',
  editWallEdgeRobot = 'editWallEdgeRobot',
  editMullionRobot = 'editMullionRobot',
  editDoubleSashSpliterRobot = 'editDoubleSashSpliterRobot',
  sash = 'sash',
  kfcSash = 'kfcSash',
  doubleKfcSash = 'doubleKfcSash',
  doubleSash = 'doubleSash',
  screen = 'screen',
  doubleScreen = 'doubleScreen',
  antiTheft = 'antiTheft',
  editDim = 'editDim',
  editDimension = 'editDimension',
  editExtraDim = 'editExtraDim',
  extraDimArbitrary = 'extraDimArbitrary',
  extraDimHorizontal = 'extraDimHorizontal',
  extraDimVertical = 'extraDimVertical',
  extraDimRadius = 'extraDimRadius',
  extraDimAngle = 'extraDimAngle',
  editNote = 'editNote',
  editSash = 'editSash',
  editHinge = 'editHinge',
  editHandle = 'editHandle',
  editHardware = 'editHardware',
  editHardwareOnFrame = 'editHardwareOnFrame',
  editHardwareOnMullion = 'editHardwareOnMullion',
  editCommercialHandle = 'editCommercialHandle',
  editCrossHandle = 'editCrossHandle',
  foldSash = 'foldSash',
  foldScreen = 'foldScreen',
  slide = 'slide',
  dim = 'dim',
  editCornerRobot = 'editCornerRobot',
  connerJoiner = 'connerJoiner',
  editCornerJoiner = 'editCornerJoiner',
  note = 'note',
  connector = 'connector',
  editConnector = 'editConnector',
  editConnectorRobot = 'editConnectorRobot',
  door = 'door',
  editSkewText = 'editSkewText',
}

export declare class MometoManager {
  readonly isDirty: boolean;
  /** Undo last action. */
  undo(): void;
  redo(): void;
  checkPoint(remember?: boolean): void;
  clean(): void;
}

export declare enum dimModeEnum {
  normal = 'normal',
  calculate = 'calculate',
  order = 'order',
}
export declare class IDimInfoManager {
  initDimName(): void;
  updateDimByName(name: string, value: number): void;
  readonly visualIDimInfos: IDimInfo[];
}

export interface IDimInfo {
  dimShow: boolean;
  name: string;
  value: number;
  obj: object;
  applyDiff(value: number): void;
}

export declare class ShapeManager {
  readonly isDirty: boolean;
  readonly area: number;
  readonly height: number;
  readonly width: number;
  readonly isEmpty: boolean;
  readonly ccBar: any;
  shapeMode: dimModeEnum;
  darkMode: boolean;
  preventScale: boolean;
  asSimpleView: boolean;
  enLangMode: boolean;
  profileSize: ProfileSizeSettings;
  barNormal: string | HTMLImageElement;
  handleColor: string;
  addFrame(linePath: any[]): void;
  openFile(data: string, remember?: boolean, x?: boolean): void;
  moveShapeToCenter(dstContainer?: HTMLElement): void;
  toData(): string | undefined;
  toSimpleData(): string | undefined;
  toNoDimData(): string | undefined;
  toData2d(): string;
  toDataCC(): string;
  setFrameSize(width: number, height: number): void;
  exportJson(): void;
  export(name?: string): void;
  export3dJson(asFile?: boolean): string | void;
  remove(): void;
  clear(refresh?: boolean): void;
}

export interface ProfileSizeSettings {
  antiTheft?: number;
  antiTheftMullion?: number;
  /**Junquillo */
  bead?: number;
  frame?: number;
  frameMullion?: number;
  glassGap?: number;

  sashMullion?: number;
  sash?: number;
  interlock?: number;
  downSash?: number;
  upSash?: number;

  kfcWaist?: number;
  millingFrame?: number;
  millingSash?: number;
  reinforcedFrameMullion?: number;
  screen?: number;
  shadeMullion?: number;
  shadeSash?: number;
  shadeSashMullion?: number;
}
