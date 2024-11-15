// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

// UTILS

export {
  hexToRgb,
  isHexColor,
  rgbToHex,
  getColorGroupByName,
  reverseColorRange,
  createLinearGradient,
  colorMaybeToRGB,
  isRgbColor,
  normalizeColor
} from './color-utils';
export {errorNotification} from './notifications-utils';

export {createNotification, exportImageError, successNotification} from './notifications-utils';

export {setStyleSheetBaseHref} from './dom-utils';
export {default as domtoimage} from './dom-to-image';
export {getFrequency, getMode, aggregate} from './aggregation';
export {
  getBinThresholds,
  histogramFromThreshold,
  histogramFromDomain,
  runGpuFilterForPlot,
  adjustValueToAnimationWindow,
  updateTimeFilterPlotType
} from './plot';
// eslint-disable-next-line prettier/prettier
export type {FieldFormatter} from './data-utils';
export * from './data-utils';
export * from './strings';
export {
  getTimelineFromAnimationConfig,
  getTimelineFromFilter,
  SAMPLE_TIMELINE,
  TIMELINE_MODES,
  LayerToFilterTimeInterval,
  TIME_INTERVALS_ORDERED,
  TileTimeInterval
} from './time';

export {
  datasetColorMaker,
  findDefaultColorField,
  ACCEPTED_ANALYZER_TYPES,
  validateInputData,
  getSampleForTypeAnalyze,
  getFieldsFromData,
  renameDuplicateFields,
  analyzerTypeToFieldType,
  getFormatLabels,
  getFieldFormatLabels
} from './dataset-utils';
export {getFormatValue, getDefaultTimeFormat} from './format';
export {exportMapToHTML} from './export-map-html';
export {
  isMSEdge,
  getScaleFromImageSize,
  calculateExportImageSize,
  convertToPng,
  dataURItoBlob,
  downloadFile,
  exportImage,
  exportToJsonString,
  getMapJSON,
  exportJson,
  exportHtml,
  exportMap,
  default as exporters
} from './export-utils';
export {setLayerBlending} from './gl-utils';
export {flattenMessages, mergeMessages} from './locale-utils';
export type {Dimensions} from './observe-dimensions';
export * from './observe-dimensions';
export * from './projection-utils';
export {validateToken} from './mapbox-utils';
export {
  getDefaultLayerGroupVisibility,
  editTopMapStyle,
  editBottomMapStyle,
  getStyleDownloadUrl,
  getStyleImageIcon,
  scaleMapStyleByResolution,
  mergeLayerGroupVisibility
} from './map-style-utils/mapbox-gl-style-editor';
export {isValidMapInfo} from './map-info-utils';
export * from './utils';
export * from './split-map-utils';
export {snapToMarks} from './plot';

export {
  computeDeckEffects,
  fixEffectOrder,
  reorderEffectOrder,
  validateEffectParameters
} from './effect-utils';

// Mapbox
export {transformRequest, isStyleUsingMapboxTiles} from './map-style-utils/mapbox-utils';

// Map
export * from './map-utils';

export {
  createDataContainer,
  createIndexedDataContainer,
  getSampleData as getSampleContainerData,
  DataForm
} from './data-container-utils';
export type {DataContainerInterface} from './data-container-interface';
export {
  ArrowDataContainer,
  arrowDataTypeToFieldType,
  arrowDataTypeToAnalyzerDataType
} from './arrow-data-container';
export type {FilterResult, FilterChanged, dataValueAccessor} from './filter-utils';
export * from './filter-utils';

export {
  getQuantileDomain,
  getOrdinalDomain,
  getLinearDomain,
  getLogDomain
} from './data-scale-utils';

export {DataRow} from './data-row';

export type {Centroid} from './h3-utils';
export {getCentroid, idToPolygonGeo, h3IsValid, getHexFields} from './h3-utils';

// Application config
export {getApplicationConfig, initApplicationConfig} from '../../utils/src/application-config';
export type {KeplerApplicationConfig, MapLibInstance} from '../../utils/src/application-config';
