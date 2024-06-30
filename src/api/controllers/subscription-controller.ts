import { Request, Response } from 'express';
import { saveSubscription, sendNotification } from '../services/subscription-service';

export const subscribe = async (req: Request, res: Response) => {
    try {
        const subscription = req.body;
        await saveSubscription(subscription);
        res.status(201).json({ message: 'Subscription added successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to subscribe.' });
    }
};

export const pushNotification = async (req: Request, res: Response) => {
    try {
        const { title, body, image } = req.body;
        await sendNotification(title, body, image);
        res.status(200).json({ message: 'Notification sent successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send notification.' });
    }
};
