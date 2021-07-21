/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It's designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository 
 *
 * OpenAPI spec version: 6.5.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AttachmentMetaData } from './AttachmentMetaData.ts';
import { HttpFile } from '../http/http.ts';

/**
* NEW_EMAIL webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is received by the inbox that your webhook is attached to. Use the email ID to fetch the full email body or attachments.
*/
export class WebhookNewEmailPayload {
    /**
    * List of attachment meta data objects if attachments present
    */
    'attachmentMetaDatas'?: Array<AttachmentMetaData>;
    /**
    * List of `BCC` recipients email was addressed to
    */
    'bcc'?: Array<string>;
    /**
    * List of `CC` recipients email was addressed to
    */
    'cc'?: Array<string>;
    /**
    * Date time of event creation
    */
    'createdAt'?: Date;
    /**
    * ID of the email that was received. Use this ID for fetching the email with the `EmailController`.
    */
    'emailId'?: string;
    /**
    * Name of the event type webhook is being triggered for.
    */
    'eventName'?: WebhookNewEmailPayloadEventNameEnum;
    /**
    * Who the email was sent from
    */
    'from'?: string;
    /**
    * Id of the inbox that received an email
    */
    'inboxId'?: string;
    /**
    * Idempotent message ID. Store this ID locally or in a database to prevent message duplication.
    */
    'messageId'?: string;
    /**
    * The subject line of the email message
    */
    'subject'?: string;
    /**
    * List of `To` recipients that email was addressed to
    */
    'to'?: Array<string>;
    /**
    * ID of webhook entity being triggered
    */
    'webhookId'?: string;
    /**
    * Name of the webhook being triggered
    */
    'webhookName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attachmentMetaDatas",
            "baseName": "attachmentMetaDatas",
            "type": "Array<AttachmentMetaData>",
            "format": ""
        },
        {
            "name": "bcc",
            "baseName": "bcc",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "cc",
            "baseName": "cc",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "emailId",
            "baseName": "emailId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "eventName",
            "baseName": "eventName",
            "type": "WebhookNewEmailPayloadEventNameEnum",
            "format": ""
        },
        {
            "name": "from",
            "baseName": "from",
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
            "name": "messageId",
            "baseName": "messageId",
            "type": "string",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<string>",
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
        }    ];

    static getAttributeTypeMap() {
        return WebhookNewEmailPayload.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type WebhookNewEmailPayloadEventNameEnum = "EMAIL_RECEIVED" | "NEW_EMAIL" | "NEW_CONTACT" | "NEW_ATTACHMENT" | "EMAIL_OPENED" ;

