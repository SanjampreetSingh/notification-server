import webPush from 'web-push';
import Subscription from '../../models/subscription';

const vapidKeys = {
    publicKey: process.env.VAPID_PUBLIC_KEY!,
    privateKey: process.env.VAPID_PRIVATE_KEY!
};

webPush.setVapidDetails(
    'mailto:your-email@example.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

export const saveSubscription = async (subscription: any): Promise<void> => {
    await Subscription.create({
        endpoint: subscription.endpoint,
        p256dh: subscription.keys.p256dh,
        auth: subscription.keys.auth
    });
};

export const sendNotification = async (title: string, body: string, image: string): Promise<void> => {
    const subscriptions = await Subscription.findAll();
    subscriptions.forEach((subscription) => {
        const sub = {
            endpoint: subscription.endpoint,
            keys: {
                p256dh: subscription.p256dh,
                auth: subscription.auth
            }
        };
        const payload = JSON.stringify({
            title,
            body,
            image,
        });
        webPush.sendNotification(sub, payload)
            .catch(error => console.error('Error sending notification:', error));
    });
};
