/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails and SMS from dynamically allocated email addresses and phone numbers. It's designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
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
* Missed email
*/
export class MissedEmailDto {
    'id': string;
    'userId'?: string;
    'subject'?: string;
    'bodyExcerpt'?: string;
    'attachmentCount': number;
    'from'?: string;
    'rawUrl'?: string;
    'rawKey'?: string;
    'rawBucket'?: string;
    'canRestore'?: boolean;
    'to': Array<string>;
    'cc': Array<string>;
    'bcc': Array<string>;
    'inboxIds': Array<string>;
    'createdAt': Date;
    'updatedAt': Date;

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
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        },
        {
            "name": "bodyExcerpt",
            "baseName": "bodyExcerpt",
            "type": "string",
            "format": ""
        },
        {
            "name": "attachmentCount",
            "baseName": "attachmentCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "from",
            "baseName": "from",
            "type": "string",
            "format": ""
        },
        {
            "name": "rawUrl",
            "baseName": "rawUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "rawKey",
            "baseName": "rawKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "rawBucket",
            "baseName": "rawBucket",
            "type": "string",
            "format": ""
        },
        {
            "name": "canRestore",
            "baseName": "canRestore",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "to",
            "baseName": "to",
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
            "name": "bcc",
            "baseName": "bcc",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "inboxIds",
            "baseName": "inboxIds",
            "type": "Array<string>",
            "format": "uuid"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return MissedEmailDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}

