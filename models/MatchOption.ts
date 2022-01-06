/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It's designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
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
* Options for matching emails in an inbox. Each match option object contains a `field`, `should` and `value` property. Together they form logical conditions such as `SUBJECT` should `CONTAIN` value.
*/
export class MatchOption {
    /**
    * Fields of an email object that can be used to filter results
    */
    'field'?: MatchOptionFieldEnum;
    /**
    * How the value of the email field specified should be compared to the value given in the match options.
    */
    'should'?: MatchOptionShouldEnum;
    /**
    * The value you wish to compare with the value of the field specified using the `should` value passed. For example `BODY` should `CONTAIN` a value passed.
    */
    'value': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "field",
            "baseName": "field",
            "type": "MatchOptionFieldEnum",
            "format": ""
        },
        {
            "name": "should",
            "baseName": "should",
            "type": "MatchOptionShouldEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MatchOption.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type MatchOptionFieldEnum = "SUBJECT" | "TO" | "BCC" | "CC" | "FROM" ;
export type MatchOptionShouldEnum = "CONTAIN" | "EQUAL" ;

