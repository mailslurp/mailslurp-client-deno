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
* Result of webhook test request
*/
export class WebhookTestRequest {
    'url': string;
    'method': WebhookTestRequestMethodEnum;
    'headers': { [key: string]: string; };
    'payload'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "WebhookTestRequestMethodEnum",
            "format": ""
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebhookTestRequest.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type WebhookTestRequestMethodEnum = "POST" | "DELETE" | "GET" | "PUT" | "PATCH" | "HEAD" | "OPTIONS" | "TRACE" ;

