import { OpaqueToken } from '@angular/core';

import { FirebaseAppConfig } from 'angularfire2';

export interface Config {
    xpRootURL: string;
    drupalRoot: string;
    title: string;
    xpLocalURL: string;
    solrRootURL: string;
    stubURL: string;
    omdbURL: string;
    fbAppEnabled: boolean;
    fbAppConfig: FirebaseAppConfig;
}

export const CONFIG: Config = {
    xpRootURL: 'http://10.146.201.41/Xperience',
    drupalRoot: 'http://10.146.201.41',
    title: 'Headless CMS Platform',
    xpLocalURL: 'http://10.146.201.41/Xperience',
    solrRootURL: 'http://10.146.201.83:8080/solr/collection1',
    stubURL: '/assets/blogs-json',
    omdbURL: 'http://www.omdbapi.com/',
    fbAppEnabled: false,
    fbAppConfig: {
        apiKey: 'AIzaSyBCQDofqIMCsMwm3MonWp68BRXP4WS35s0',
        authDomain: 'niranjans3ln.firebaseapp.com',
        databaseURL: 'https://niranjans3ln.firebaseio.com',
        storageBucket: 'niranjans3ln.appspot.com',
    }
};


export let APP_CONFIG = new OpaqueToken('app.config');
