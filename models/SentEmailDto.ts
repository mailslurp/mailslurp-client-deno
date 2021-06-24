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
* Sent email details
*/
export class SentEmailDto {
    /**
    * Array of IDs of attachments that were sent with this email
    */
    'attachments'?: Array<string>;
    'bcc'?: Array<string>;
    'body'?: string;
    /**
    * MD5 Hash
    */
    'bodyMD5Hash'?: string;
    'cc'?: Array<string>;
    'charset'?: string;
    'from'?: string;
    /**
    * ID of sent email
    */
    'id'?: string;
    /**
    * Inbox ID email was sent from
    */
    'inboxId'?: string;
    'isHTML'?: boolean;
    'replyTo'?: string;
    'sentAt': Date;
    'subject'?: string;
    /**
    * Recipients email was sent to
    */
    'to'?: Array<string>;
    /**
    * User ID
    */
    'userId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attachments",
            "baseName": "attachments",
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
            "name": "body",
            "baseName": "body",
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
            "name": "cc",
            "baseName": "cc",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "charset",
            "baseName": "charset",
            "type": "string",
            "format": ""
        },
        {
            "name": "from",
            "baseName": "from",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
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
            "name": "isHTML",
            "baseName": "isHTML",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "replyTo",
            "baseName": "replyTo",
            "type": "string",
            "format": ""
        },
        {
            "name": "sentAt",
            "baseName": "sentAt",
            "type": "Date",
            "format": "date-time"
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
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return SentEmailDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}

