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

/**
* Options for matching emails in an inbox based on a condition such as `HAS_ATTACHMENTS=TRUE`
*/
export class ConditionOption {
    /**
    * Condition of an email object that can be used to filter results
    */
    'condition'?: ConditionOptionConditionEnum;
    /**
    * Expected condition value
    */
    'value'?: ConditionOptionValueEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "condition",
            "baseName": "condition",
            "type": "ConditionOptionConditionEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "ConditionOptionValueEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConditionOption.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type ConditionOptionConditionEnum = "HAS_ATTACHMENTS" ;
export type ConditionOptionValueEnum = "TRUE" | "FALSE" ;

