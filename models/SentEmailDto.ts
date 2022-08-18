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
* Sent email details
*/
export class SentEmailDto {
    /**
    * ID of sent email
    */
    'id': string;
    /**
    * User ID
    */
    'userId': string;
    /**
    * Inbox ID email was sent from
    */
    'inboxId': string;
    /**
    * Domain ID
    */
    'domainId'?: string;
    /**
    * Recipients email was sent to
    */
    'to'?: Array<string>;
    'from'?: string;
    'replyTo'?: string;
    'cc'?: Array<string>;
    'bcc'?: Array<string>;
    /**
    * Array of IDs of attachments that were sent with this email
    */
    'attachments'?: Array<string>;
    'subject'?: string;
    /**
    * MD5 Hash
    */
    'bodyMD5Hash'?: string;
    'body'?: string;
    'toContacts'?: Array<string>;
    'toGroup'?: string;
    'charset'?: string;
    'isHTML'?: boolean;
    'sentAt': Date;
    'pixelIds'?: Array<string>;
    'messageId'?: string;
    'messageIds'?: Array<string>;
    'virtualSend'?: boolean;
    'templateId'?: string;
    'templateVariables'?: { [key: string]: any; };
    'html'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "userId",
            "baseName": "userId",
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
            "name": "domainId",
            "baseName": "domainId",
            "type": "string",
            "format": "uuid"
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
            "name": "replyTo",
            "baseName": "replyTo",
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
            "name": "attachments",
            "baseName": "attachments",
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
            "name": "bodyMD5Hash",
            "baseName": "bodyMD5Hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string",
            "format": ""
        },
        {
            "name": "toContacts",
            "baseName": "toContacts",
            "type": "Array<string>",
            "format": "uuid"
        },
        {
            "name": "toGroup",
            "baseName": "toGroup",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "charset",
            "baseName": "charset",
            "type": "string",
            "format": ""
        },
        {
            "name": "isHTML",
            "baseName": "isHTML",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sentAt",
            "baseName": "sentAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "pixelIds",
            "baseName": "pixelIds",
            "type": "Array<string>",
            "format": "uuid"
        },
        {
            "name": "messageId",
            "baseName": "messageId",
            "type": "string",
            "format": ""
        },
        {
            "name": "messageIds",
            "baseName": "messageIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "virtualSend",
            "baseName": "virtualSend",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "templateId",
            "baseName": "templateId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "templateVariables",
            "baseName": "templateVariables",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "html",
            "baseName": "html",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SentEmailDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}

