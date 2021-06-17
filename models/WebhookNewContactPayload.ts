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

import { HttpFile } from '../http/http.ts';

/**
* NEW_CONTACT webhook payload
*/
export class WebhookNewContactPayload {
    'company'?: string;
    'contactId': string;
    'createdAt': Date;
    'emailAddresses': Array<string>;
    /**
    * Name of the event type webhook is being triggered for.
    */
    'eventName'?: WebhookNewContactPayloadEventNameEnum;
    'firstName'?: string;
    'groupId'?: string;
    'lastName'?: string;
    /**
    * Idempotent message ID. Store this ID locally or in a database to prevent message duplication.
    */
    'messageId'?: string;
    'metaData'?: any;
    'optOut'?: boolean;
    'primaryEmailAddress'?: string;
    'tags': Array<string>;
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
            "name": "company",
            "baseName": "company",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactId",
            "baseName": "contactId",
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
            "name": "emailAddresses",
            "baseName": "emailAddresses",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "eventName",
            "baseName": "eventName",
            "type": "WebhookNewContactPayloadEventNameEnum",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "messageId",
            "baseName": "messageId",
            "type": "string",
            "format": ""
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "any",
            "format": ""
        },
        {
            "name": "optOut",
            "baseName": "optOut",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "primaryEmailAddress",
            "baseName": "primaryEmailAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
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
        return WebhookNewContactPayload.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type WebhookNewContactPayloadEventNameEnum = "EMAIL_RECEIVED" | "NEW_EMAIL" | "NEW_CONTACT" | "NEW_ATTACHMENT" ;
