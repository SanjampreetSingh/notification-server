import { Router } from 'express';
import { subscribe, pushNotification } from '../controllers/subscription-controller';

const router = Router();

/**
 * @swagger
 * /subscribe:
 *   post:
 *     summary: Subscribe to notifications
 *     description: Subscribes a user to push notifications.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               endpoint:
 *                 type: string
 *               keys:
 *                 type: object
 *                 properties:
 *                   p256dh:
 *                     type: string
 *                   auth:
 *                     type: string
 *     responses:
 *       201:
 *         description: Subscription added successfully.
 *       500:
 *         description: Failed to subscribe.
 */
router.post('/subscribe', subscribe);

/**
 * @swagger
 * /push:
 *   post:
 *     summary: Send a push notification
 *     description: Sends a push notification to all subscribed users.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               body:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Notification sent successfully.
 *       500:
 *         description: Failed to send notification.
 */
router.post('/push', pushNotification);

export default router;
