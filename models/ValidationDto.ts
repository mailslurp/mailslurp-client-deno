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

import { HTMLValidationResult } from './HTMLValidationResult.ts';
import { HttpFile } from '../http/http.ts';

/**
* Response object for email validation operation
*/
export class ValidationDto {
    /**
    * ID of the email validated
    */
    'emailId': string;
    'html': HTMLValidationResult;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "emailId",
            "baseName": "emailId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "html",
            "baseName": "html",
            "type": "HTMLValidationResult",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ValidationDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}

