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
* Collection of items
*/
export class SentEmailProjection {
    'id': string;
    'from'?: string;
    'userId': string;
    'subject'?: string;
    'to': Array<string>;
    'inboxId': string;
    'attachments': Array<string>;
    'bodyMD5Hash'?: string;
    'createdAt': Date;
    'bcc': Array<string>;
    'cc': Array<string>;
    'virtualSend'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "from",
            "baseName": "from",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": "uuid"
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
            "name": "inboxId",
            "baseName": "inboxId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "bodyMD5Hash",
            "baseName": "bodyMD5Hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
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
            "name": "virtualSend",
            "baseName": "virtualSend",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SentEmailProjection.attributeTypeMap;
    }
    
    public constructor() {
    }
}

