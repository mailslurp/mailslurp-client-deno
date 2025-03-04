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
* Bounced email
*/
export class BouncedEmailDto {
    'id': string;
    'userId': string;
    'notificationType': string;
    'sentToRecipients'?: Array<string>;
    'sender': string;
    'bounceMta'?: string;
    'bounceType'?: string;
    'bounceRecipients'?: Array<string>;
    'bounceSubType'?: string;
    'sentEmailId'?: string;
    'subject'?: string;
    'createdAt': Date;

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
            "name": "notificationType",
            "baseName": "notificationType",
            "type": "string",
            "format": ""
        },
        {
            "name": "sentToRecipients",
            "baseName": "sentToRecipients",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "sender",
            "baseName": "sender",
            "type": "string",
            "format": ""
        },
        {
            "name": "bounceMta",
            "baseName": "bounceMta",
            "type": "string",
            "format": ""
        },
        {
            "name": "bounceType",
            "baseName": "bounceType",
            "type": "string",
            "format": ""
        },
        {
            "name": "bounceRecipients",
            "baseName": "bounceRecipients",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "bounceSubType",
            "baseName": "bounceSubType",
            "type": "string",
            "format": ""
        },
        {
            "name": "sentEmailId",
            "baseName": "sentEmailId",
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
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return BouncedEmailDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}

