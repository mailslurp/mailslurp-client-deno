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

export class WebhookTestRequest {
    'headers': { [key: string]: string; };
    'method': WebhookTestRequestMethodEnum;
    'payload'?: string;
    'url': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "headers",
            "baseName": "headers",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "WebhookTestRequestMethodEnum",
            "format": ""
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebhookTestRequest.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type WebhookTestRequestMethodEnum = "GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "TRACE" ;

