/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It's designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
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
* EMAIL_READ webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is read. This happens when an email is requested in full from the API or a user views the email in the dashboard.
*/
export class WebhookEmailReadPayload {
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
    'eventName': WebhookEmailReadPayloadEventNameEnum;
    /**
    * Name of the webhook being triggered
    */
    'webhookName'?: string;
    /**
    * ID of the email that was received. Use this ID for fetching the email with the `EmailController`.
    */
    'emailId': string;
    /**
    * Id of the inbox that received an email
    */
    'inboxId': string;
    /**
    * Is the email read
    */
    'emailIsRead': boolean;
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
            "type": "WebhookEmailReadPayloadEventNameEnum",
            "format": ""
        },
        {
            "name": "webhookName",
            "baseName": "webhookName",
            "type": "string",
            "format": ""
        },
        {
            "name": "emailId",
            "baseName": "emailId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "inboxId",
            "baseName": "inboxId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "emailIsRead",
            "baseName": "emailIsRead",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return WebhookEmailReadPayload.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type WebhookEmailReadPayloadEventNameEnum = "EMAIL_RECEIVED" | "NEW_EMAIL" | "NEW_CONTACT" | "NEW_ATTACHMENT" | "EMAIL_OPENED" | "EMAIL_READ" | "BOUNCE" | "BOUNCE_RECIPIENT" ;

