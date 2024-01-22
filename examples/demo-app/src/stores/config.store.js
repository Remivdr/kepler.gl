import {DEFAULT_LAYER_GROUPS} from '@kepler.gl/constants';

class ConfigStore {
  _mapStyles = {
    dark: {
      id: 'dark',
      label: 'dark',
      url: null,
      icon: null,
      layersGroup: DEFAULT_LAYER_GROUPS
    },
    light: {
      id: 'light',
      label: 'light',
      url: null,
      icon: null,
      layersGroup: DEFAULT_LAYER_GROUPS
    }
  };

  get mapStyles() {
    return this._mapStyles;
  }

  setMapStyles(value) {
    this._mapStyles = value;
  }

  loadConfig = () => {
    return fetch('./config/config.json').then((response) => response.json()).then((config) => {
      if(config.url_dark) {
        this.mapStyles.dark.url = config.url_dark
      }
      if(config.url_dark_icon) {
        this.mapStyles.dark.icon = config.url_dark_icon
      }
      if(config.url_light) {
        this.mapStyles.light.url = config.url_light
      }
      if(config.url_light) {
        this.mapStyles.light.icon = config.url_light_icon
      }
    });
  };
}

export const configstore = new ConfigStore()
