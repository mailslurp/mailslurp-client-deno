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
* IMAP fetch content in raw format
*/
export class ImapServerFetchItem {
    /**
    * Content of the email
    */
    'content': string;
    /**
    * ID of the email
    */
    'id': string;
    /**
    * UID of the email
    */
    'uid': number;
    /**
    * Sequence number of the email
    */
    'seqNum': number;
    /**
    * Read status of the email
    */
    'read': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "content",
            "baseName": "content",
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
            "name": "uid",
            "baseName": "uid",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "seqNum",
            "baseName": "seqNum",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "read",
            "baseName": "read",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ImapServerFetchItem.attributeTypeMap;
    }
    
    public constructor() {
    }
}

