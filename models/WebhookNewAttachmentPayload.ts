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
* NEW_ATTACHMENT webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is received by the inbox that your webhook is attached to that contains an attachment. You can use the attachmentId to download the attachment.
*/
export class WebhookNewAttachmentPayload {
    /**
    * Idempotent message ID. Store this ID locally or in a database to prevent message duplication.
    */
    'messageId': string;
    /**
    * ID of webhook entity being triggered
    */
    'webhookId': string;
    /**
    * Name of the webhook being triggered
    */
    'webhookName'?: string;
    /**
    * Name of the event type webhook is being triggered for.
    */
    'eventName': WebhookNewAttachmentPayloadEventNameEnum;
    /**
    * ID of attachment. Use the `AttachmentController` to
    */
    'attachmentId': string;
    /**
    * Filename of the attachment if present
    */
    'name': string;
    /**
    * Content type of attachment such as 'image/png' or 'application/pdf
    */
    'contentType': string;
    /**
    * Size of attachment in bytes
    */
    'contentLength': number;

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
            "name": "webhookName",
            "baseName": "webhookName",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventName",
            "baseName": "eventName",
            "type": "WebhookNewAttachmentPayloadEventNameEnum",
            "format": ""
        },
        {
            "name": "attachmentId",
            "baseName": "attachmentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "contentType",
            "baseName": "contentType",
            "type": "string",
            "format": ""
        },
        {
            "name": "contentLength",
            "baseName": "contentLength",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return WebhookNewAttachmentPayload.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type WebhookNewAttachmentPayloadEventNameEnum = "EMAIL_RECEIVED" | "NEW_EMAIL" | "NEW_CONTACT" | "NEW_ATTACHMENT" | "EMAIL_OPENED" | "EMAIL_READ" | "BOUNCE" | "BOUNCE_RECIPIENT" | "NEW_SMS" ;

