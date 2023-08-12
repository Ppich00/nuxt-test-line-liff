import liff from "@line/liff";

export default defineNuxtRouteMiddleware(async (to, from) => {
    console.log('middleware/initialize.client.ts: to.path = ' + to.path);

    await liff.init({liffId: '2000383540-BegEJ63g'}).then(() => {
        if (!liff.isLoggedIn()) {
            liff.login({redirectUri: 'https://www.facebook.com'});
        }
    })
})