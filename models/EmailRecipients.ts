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

import { Recipient } from './Recipient.ts';
import { HttpFile } from '../http/http.ts';

export class EmailRecipients {
    'bcc'?: Array<Recipient>;
    'cc'?: Array<Recipient>;
    'to'?: Array<Recipient>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bcc",
            "baseName": "bcc",
            "type": "Array<Recipient>",
            "format": ""
        },
        {
            "name": "cc",
            "baseName": "cc",
            "type": "Array<Recipient>",
            "format": ""
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<Recipient>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EmailRecipients.attributeTypeMap;
    }
    
    public constructor() {
    }
}
