import { Injectable } from '@angular/core';
import { SessionService } from './services/session.service';

// var contentful = require('contentful');

export interface ContentfulSettings {
    space: string;
    accessToken: string;
    contenttype_post: string;
    contenttype_author: string;
}

export interface CMSSettings {
    mode: any;
    host: string;
    port: number;
}

export enum CMSTypes {
    Stub,
    Drupal
}

/* Settings Service for
      1) Storing the settings for app
*/
@Injectable()
export class SettingsService {
    name: string = 'cmssettings';

    cmsSettings: CMSSettings = {
        mode: CMSTypes.Stub,
        host: 'localhost',
        port: 8080
    };

    constructor(public session: SessionService) {
        if (this.session.get(this.name)) {
            this.cmsSettings = this.session.get(this.name);
        } else {
            this.cmsSettings.mode = CMSTypes.Stub;
            this.cmsSettings.host = 'localhost';
            this.cmsSettings.port = 8080;
            this.store();
        }
    }

    save(settings: CMSSettings) {
        this.cmsSettings = settings;
        this.store();
    }

    store() {
        this.session.set(this.name, this.cmsSettings);
    }

    /*   getContentfulClient(): any {
           return this.contentfulClient;
       }
   
       getContentfulSettings(): ContentfulSettings {
           return this.contentfulSettings;
       }
      */

    getCmsSettings(): CMSSettings {
        return this.cmsSettings;
    }
    setCmsType(cmsType: any) {
        this.cmsSettings.mode = parseInt(cmsType);
        this.store();
    }

    getCmsType(): any {
        return parseInt(this.cmsSettings.mode);
    }

    setCmsHost(cmsHost: string) {
        this.cmsSettings.host = cmsHost;
        this.store();
    }

    getCmsHost(): string {
        return this.cmsSettings.host;
    }

    setCmsPort(cmsPort: number) {
        this.cmsSettings.port = cmsPort;
        this.store();
    }

    getCmsPort(): number {
        return this.cmsSettings.port;
    }
}
