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
* Email verification result. Valid means email address exists according to response from mail server running at the domian and port given.
*/
export class EmailVerificationResult {
    'domainName': string;
    'emailAddress': string;
    'error'?: string;
    'isValid': boolean;
    'port': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "domainName",
            "baseName": "domainName",
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
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        {
            "name": "isValid",
            "baseName": "isValid",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return EmailVerificationResult.attributeTypeMap;
    }
    
    public constructor() {
    }
}

