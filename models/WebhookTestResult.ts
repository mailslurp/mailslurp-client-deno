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

import { WebhookTestRequest } from './WebhookTestRequest.ts';
import { WebhookTestResponse } from './WebhookTestResponse.ts';
import { HttpFile } from '../http/http.ts';

/**
* Results of testing a webhook
*/
export class WebhookTestResult {
    'message'?: string;
    'request': WebhookTestRequest;
    'response': WebhookTestResponse;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "request",
            "baseName": "request",
            "type": "WebhookTestRequest",
            "format": ""
        },
        {
            "name": "response",
            "baseName": "response",
            "type": "WebhookTestResponse",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebhookTestResult.attributeTypeMap;
    }
    
    public constructor() {
    }
}

