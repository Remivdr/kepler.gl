// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project


import {connect} from 'react-redux';

import {replaceLoadDataModal} from './factories/load-data-modal';
import {replaceMapControl} from './factories/map-control';
import {replacePanelHeader} from './factories/panel-header';
import React, {useEffect, useState} from 'react';
import {configstore} from './stores/config.store';
import {ThemeProvider} from 'styled-components';
import {theme} from '@kepler.gl/styles';
import {AutoSizer} from 'react-virtualized';
import {messages} from '@kepler.gl/localization';


const KeplerGl = require('@kepler.gl/components').injectComponents([
  replaceLoadDataModal(),
  replaceMapControl(),
  replacePanelHeader()
]);

const keplerGlGetState = state => {
  return state.demo.keplerGl;
}
const mapStateToProps = (state) => {
  return state
}

export const App = () => {
  const [hasConfig, setHasConfig] = useState(false)

  useEffect(() => {
    configstore.loadConfig().then(() => {
      setHasConfig(true)
    })
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {hasConfig &&
      <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: 1}}>
        <AutoSizer>
          {({height, width}) => (
            <KeplerGl
              id="map"
              getState={keplerGlGetState}
              width={width}
              height={height}
              appName={"Replay"}
              version={"0.0.1"}
              localMessages={messages}
            >
            </KeplerGl>
          )}
        </AutoSizer>
      </div>
      }
    </ThemeProvider>
  )
}

export default connect(mapStateToProps)(App);
