// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import React, {Component} from 'react';
import {createSelector} from 'reselect';

import {Button} from '../common/styled-components';
import MapStyleSelectorFactory from './map-style-panel/map-style-selector';
import LayerGroupSelectorFactory from './map-style-panel/map-layer-selector';
import PanelTitleFactory from '../side-panel/panel-title';

import {Add, Trash} from '../common/icons';
import {PanelMeta} from './common/types';
import {injectIntl, WrappedComponentProps} from 'react-intl';
import {FormattedMessage} from '@kepler.gl/localization';
import {MapStyle} from '@kepler.gl/reducers';
import {MapStyleActions} from '@kepler.gl/actions';
import {MapStyles} from '@kepler.gl/types';

export type ColdLayersManagerProps = {
  mapStyle: MapStyle;
  mapStyleActions: {
    mapStyleChange: typeof MapStyleActions.mapStyleChange;
    mapConfigChange: typeof MapStyleActions.mapConfigChange;
    set3dBuildingColor: typeof MapStyleActions.set3dBuildingColor;
    setBackgroundColor: typeof MapStyleActions.setBackgroundColor;
    removeCustomMapStyle: typeof MapStyleActions.removeCustomMapStyle;
  };
  showAddMapStyleModal: () => void;
  panelMetadata: PanelMeta;
} & WrappedComponentProps;

ColdManagerFactory.deps = [MapStyleSelectorFactory, LayerGroupSelectorFactory, PanelTitleFactory];

function ColdManagerFactory(
  MapStyleSelector: ReturnType<typeof MapStyleSelectorFactory>,
  LayerGroupSelector: ReturnType<typeof LayerGroupSelectorFactory>,
  PanelTitle: ReturnType<typeof PanelTitleFactory>
) {
  class MapManager extends Component<ColdLayersManagerProps> {
    state = {
      isSelecting: false
    };

    _toggleSelecting = () => {
      this.setState({isSelecting: !this.state.isSelecting});
    };

    _selectStyle = (val: string) => {
      const {mapStyleActions} = this.props;
      const {mapStyleChange} = mapStyleActions;
      mapStyleChange(val);
      this._toggleSelecting();
    };

    getCustomMapStylesActions = createSelector(
      (props: ColdLayersManagerProps) => props.mapStyle.mapStyles,
      (props: ColdLayersManagerProps) => props.mapStyleActions,
      (mapStyles: MapStyles, mapStyleActions) => {
        const actionsPerCustomStyle = {};
        Object.values(mapStyles)
          .filter(mapStyle => {
            return Boolean(mapStyle.custom);
          })
          .forEach(({id}) => {
            actionsPerCustomStyle[id] = [
              {
                id: `remove-map-style-${id}`,
                IconComponent: Trash,
                tooltip: 'tooltip.removeBaseMapStyle',
                onClick: () => mapStyleActions.removeCustomMapStyle({id})
              }
            ];
          });
        return actionsPerCustomStyle;
      }
    );

    render() {

      return (
        <div className="map-style-panel">
          <PanelTitle
            className="map-manager-title"
            title={"Cold Layers"}
          >
          </PanelTitle>
        </div>
      );
    }
  }
  return injectIntl(MapManager);
}

export default ColdManagerFactory;
