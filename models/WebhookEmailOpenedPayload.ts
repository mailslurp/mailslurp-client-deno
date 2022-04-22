/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It's designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * OpenAPI spec version: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

/**
* EMAIL_OPENED webhook payload. Sent to your webhook url endpoint via HTTP POST when an email containing a tracking pixel is opened and the pixel image is loaded by a reader.
*/
export class WebhookEmailOpenedPayload {
    /**
    * Idempotent message ID. Store this ID locally or in a database to prevent message duplication.
    */
    'messageId': string;
    /**
    * ID of webhook entity being triggered
    */
    'webhookId': string;
    /**
    * Name of the event type webhook is being triggered for.
    */
    'eventName': WebhookEmailOpenedPayloadEventNameEnum;
    /**
    * Name of the webhook being triggered
    */
    'webhookName'?: string;
    /**
    * Id of the inbox that received an email
    */
    'inboxId': string;
    /**
    * ID of the tracking pixel
    */
    'pixelId': string;
    /**
    * ID of sent email
    */
    'sentEmailId': string;
    /**
    * Email address for the recipient of the tracking pixel
    */
    'recipient': string;
    /**
    * Date time of event creation
    */
    'createdAt': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "messageId",
            "baseName": "messageId",
            "type": "string",
            "format": ""
        },
        {
            "name": "webhookId",
            "baseName": "webhookId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "eventName",
            "baseName": "eventName",
            "type": "WebhookEmailOpenedPayloadEventNameEnum",
            "format": ""
        },
        {
            "name": "webhookName",
            "baseName": "webhookName",
            "type": "string",
            "format": ""
        },
        {
            "name": "inboxId",
            "baseName": "inboxId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "pixelId",
            "baseName": "pixelId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "sentEmailId",
            "baseName": "sentEmailId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "recipient",
            "baseName": "recipient",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return WebhookEmailOpenedPayload.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type WebhookEmailOpenedPayloadEventNameEnum = "EMAIL_RECEIVED" | "NEW_EMAIL" | "NEW_CONTACT" | "NEW_ATTACHMENT" | "EMAIL_OPENED" | "EMAIL_READ" | "BOUNCE" | "BOUNCE_RECIPIENT" ;

