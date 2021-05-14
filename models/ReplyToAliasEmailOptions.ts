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
* Options for replying to an alias email using the alias inbox
*/
export class ReplyToAliasEmailOptions {
    /**
    * List of uploaded attachments to send with the reply. Optional.
    */
    'attachments'?: Array<string>;
    /**
    * Body of the reply email you want to send
    */
    'body'?: string;
    /**
    * The charset that your message should be sent with. Optional. Default is UTF-8
    */
    'charset'?: string;
    /**
    * Is the reply HTML
    */
    'isHTML'?: boolean;
    /**
    * When to send the email. Typically immediately
    */
    'sendStrategy'?: ReplyToAliasEmailOptionsSendStrategyEnum;
    /**
    * Template ID to use instead of body. Will use template variable map to fill defined variable slots.
    */
    'template'?: string;
    /**
    * Template variables if using a template
    */
    'templateVariables'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string",
            "format": ""
        },
        {
            "name": "charset",
            "baseName": "charset",
            "type": "string",
            "format": ""
        },
        {
            "name": "isHTML",
            "baseName": "isHTML",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sendStrategy",
            "baseName": "sendStrategy",
            "type": "ReplyToAliasEmailOptionsSendStrategyEnum",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "templateVariables",
            "baseName": "templateVariables",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReplyToAliasEmailOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type ReplyToAliasEmailOptionsSendStrategyEnum = "SINGLE_MESSAGE" ;

