// plugins/liff.client.js

// Import NPM version LIFF JS SDK
import {defineNuxtPlugin} from '#app';
import liff from '@line/liff';

export default defineNuxtPlugin((nuxtApp) => {
    // Initialize liff
    liff.init({liffId: '2000383540-BegEJ63g'})
        .then(() => {
            console.log('liff.init() done');
        })
        .catch((error) => {
            console.log(`liff.init() failed: ${error}`);
            if (!'2000383540-BegEJ63g') {
                console.info('LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable.');
            }
            return Promise.reject(error);
        });

    // Inject liff object as this.$liff
    nuxtApp.provide('liff', liff);

    // Inject liff.init()'s return value (Promise object) as this.$liffInit()
    nuxtApp.provide('liffInit', liff.init({liffId: '2000383540-BegEJ63g'}));
});
