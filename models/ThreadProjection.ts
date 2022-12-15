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
* A thread is a message thread created for a message received by an alias
*/
export class ThreadProjection {
    /**
    * Name of thread
    */
    'name'?: string;
    /**
    * ID of email thread
    */
    'id': string;
    /**
    * Thread subject
    */
    'subject'?: string;
    /**
    * Inbox ID
    */
    'inboxId': string;
    /**
    * User ID
    */
    'userId': string;
    /**
    * Created at DateTime
    */
    'createdAt': Date;
    /**
    * Updated at DateTime
    */
    'updatedAt': Date;
    /**
    * To recipients
    */
    'to': Array<string>;
    /**
    * BCC recipients
    */
    'bcc'?: Array<string>;
    /**
    * CC recipients
    */
    'cc'?: Array<string>;
    /**
    * Alias ID
    */
    'aliasId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
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
            "name": "subject",
            "baseName": "subject",
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
            "name": "userId",
            "baseName": "userId",
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
            "name": "updatedAt",
            "baseName": "updatedAt",
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
            "name": "aliasId",
            "baseName": "aliasId",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return ThreadProjection.attributeTypeMap;
    }
    
    public constructor() {
    }
}

