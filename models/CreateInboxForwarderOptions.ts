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

export class CreateInboxForwarderOptions {
    'field': CreateInboxForwarderOptionsFieldEnum;
    'match': string;
    'forwardToRecipients': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "field",
            "baseName": "field",
            "type": "CreateInboxForwarderOptionsFieldEnum",
            "format": ""
        },
        {
            "name": "match",
            "baseName": "match",
            "type": "string",
            "format": ""
        },
        {
            "name": "forwardToRecipients",
            "baseName": "forwardToRecipients",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateInboxForwarderOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type CreateInboxForwarderOptionsFieldEnum = "RECIPIENTS" | "SENDER" | "SUBJECT" | "ATTACHMENTS" ;
