// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAUHiuqZS72tVFG_qDeIs2TUnVbE_A6aTY",
    authDomain: "greaterdemand-dev.firebaseapp.com",
    databaseURL: "https://greaterdemand-dev.firebaseio.com",
    projectId: "greaterdemand-dev",
    storageBucket: "greaterdemand-dev.appspot.com",
    messagingSenderId: "262629809948",
    appId: "1:262629809948:web:88cb05c5fc53921b9224d9"
  },
  
};

export const actionCodeSettings = {
  // Your redirect URL
  url: 'https://localhost:4200/login', 
  handleCodeInApp: true,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
