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
* Result of a webhook notification
*/
export class WebhookResultDto {
    'id'?: string;
    'userId': string;
    'inboxId'?: string;
    'webhookId': string;
    'webhookUrl': string;
    'messageId': string;
    'redriveId'?: string;
    'httpMethod': WebhookResultDtoHttpMethodEnum;
    'webhookEvent': WebhookResultDtoWebhookEventEnum;
    'responseStatus'?: number;
    'responseTimeMillis': number;
    'responseBodyExtract'?: string;
    'resultType'?: WebhookResultDtoResultTypeEnum;
    'createdAt': Date;
    'updatedAt': Date;
    'seen': boolean;

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
            "name": "inboxId",
            "baseName": "inboxId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "webhookId",
            "baseName": "webhookId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "webhookUrl",
            "baseName": "webhookUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "messageId",
            "baseName": "messageId",
            "type": "string",
            "format": ""
        },
        {
            "name": "redriveId",
            "baseName": "redriveId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "httpMethod",
            "baseName": "httpMethod",
            "type": "WebhookResultDtoHttpMethodEnum",
            "format": ""
        },
        {
            "name": "webhookEvent",
            "baseName": "webhookEvent",
            "type": "WebhookResultDtoWebhookEventEnum",
            "format": ""
        },
        {
            "name": "responseStatus",
            "baseName": "responseStatus",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "responseTimeMillis",
            "baseName": "responseTimeMillis",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "responseBodyExtract",
            "baseName": "responseBodyExtract",
            "type": "string",
            "format": ""
        },
        {
            "name": "resultType",
            "baseName": "resultType",
            "type": "WebhookResultDtoResultTypeEnum",
            "format": ""
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
            "name": "seen",
            "baseName": "seen",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebhookResultDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type WebhookResultDtoHttpMethodEnum = "GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "TRACE" ;
export type WebhookResultDtoWebhookEventEnum = "EMAIL_RECEIVED" | "NEW_EMAIL" | "NEW_CONTACT" | "NEW_ATTACHMENT" | "EMAIL_OPENED" | "EMAIL_READ" | "BOUNCE" | "BOUNCE_RECIPIENT" ;
export type WebhookResultDtoResultTypeEnum = "BAD_RESPONSE" | "EXCEPTION" | "SUCCESS" ;

