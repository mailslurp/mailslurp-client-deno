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
* Inbox forwarder event. Describes how an email was handled by an inbox forwarder.
*/
export class InboxForwarderEventDto {
    'id'?: string;
    'inboxId'?: string;
    'emailId'?: string;
    'sentId'?: string;
    'userId'?: string;
    'forwarderId'?: string;
    'message'?: string;
    'status'?: InboxForwarderEventDtoStatusEnum;
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
            "name": "inboxId",
            "baseName": "inboxId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "emailId",
            "baseName": "emailId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "sentId",
            "baseName": "sentId",
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
            "name": "forwarderId",
            "baseName": "forwarderId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "InboxForwarderEventDtoStatusEnum",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return InboxForwarderEventDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type InboxForwarderEventDtoStatusEnum = "SUCCESS" | "FAILURE" ;

