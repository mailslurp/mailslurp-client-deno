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

import { AttachmentMetaData } from './AttachmentMetaData.ts';
import { HttpFile } from '../http/http.ts';

/**
* NEW_EMAIL webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is received by the inbox that your webhook is attached to. Use the email ID to fetch the full email body or attachments.
*/
export class WebhookNewEmailPayload {
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
    'eventName': WebhookNewEmailPayloadEventNameEnum;
    /**
    * Name of the webhook being triggered
    */
    'webhookName'?: string;
    /**
    * Id of the inbox that received an email
    */
    'inboxId': string;
    /**
    * Id of the domain that received an email
    */
    'domainId'?: string;
    /**
    * ID of the email that was received. Use this ID for fetching the email with the `EmailController`.
    */
    'emailId': string;
    /**
    * Date time of event creation
    */
    'createdAt': Date;
    /**
    * List of `To` recipient email addresses that the email was addressed to. See recipients object for names.
    */
    'to': Array<string>;
    /**
    * Who the email was sent from. An email address - see fromName for the sender name.
    */
    'from': string;
    /**
    * List of `CC` recipients email addresses that the email was addressed to. See recipients object for names.
    */
    'cc': Array<string>;
    /**
    * List of `BCC` recipients email addresses that the email was addressed to. See recipients object for names.
    */
    'bcc': Array<string>;
    /**
    * The subject line of the email message as specified by SMTP subject header
    */
    'subject'?: string;
    /**
    * List of attachment meta data objects if attachments present
    */
    'attachmentMetaDatas': Array<AttachmentMetaData>;

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
            "type": "WebhookNewEmailPayloadEventNameEnum",
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
            "name": "domainId",
            "baseName": "domainId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "emailId",
            "baseName": "emailId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "from",
            "baseName": "from",
            "type": "string",
            "format": ""
        },
        {
            "name": "cc",
            "baseName": "cc",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "bcc",
            "baseName": "bcc",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        },
        {
            "name": "attachmentMetaDatas",
            "baseName": "attachmentMetaDatas",
            "type": "Array<AttachmentMetaData>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebhookNewEmailPayload.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type WebhookNewEmailPayloadEventNameEnum = "EMAIL_RECEIVED" | "NEW_EMAIL" | "NEW_CONTACT" | "NEW_ATTACHMENT" | "EMAIL_OPENED" | "EMAIL_READ" | "BOUNCE" | "BOUNCE_RECIPIENT" | "NEW_SMS" ;

