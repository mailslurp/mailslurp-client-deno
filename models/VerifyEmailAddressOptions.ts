/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It's designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.   ## Resources - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository 
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
* Options for verifying that an email address exists at a remote mail server.
*/
export class VerifyEmailAddressOptions {
    'mailServerDomain'?: string;
    'emailAddress': string;
    'senderEmailAddress'?: string;
    'port'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "mailServerDomain",
            "baseName": "mailServerDomain",
            "type": "string",
            "format": ""
        },
        {
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "senderEmailAddress",
            "baseName": "senderEmailAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return VerifyEmailAddressOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}

