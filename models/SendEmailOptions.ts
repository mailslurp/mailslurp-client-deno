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
* Options for sending an email message from an inbox. You must provide one of: `to`, `toGroup`, or `toContacts` to send an email. All other parameters are optional. 
*/
export class SendEmailOptions {
    /**
    * Optional list of attachment IDs to send with this email. You must first upload each attachment separately in order to obtain attachment IDs. This way you can reuse attachments with different emails once uploaded.
    */
    'attachments'?: Array<string>;
    /**
    * Optional list of bcc destination email addresses
    */
    'bcc'?: Array<string>;
    /**
    * Optional contents of email. If body contains HTML then set `isHTML` to true to ensure that email clients render it correctly. You can use moustache template syntax in the email body in conjunction with `toGroup` contact variables or `templateVariables` data. If you need more templating control consider creating a template and using the `template` property instead of the body.
    */
    'body'?: string;
    /**
    * Optional list of cc destination email addresses
    */
    'cc'?: Array<string>;
    /**
    * Optional charset
    */
    'charset'?: string;
    /**
    * Optional from address. If not set the source inbox address will be used for this field. Beware of potential spam penalties when setting this field to an address not used by the inbox. For custom email addresses use a custom domain.
    */
    'from'?: string;
    /**
    * Optional HTML flag. If true the `content-type` of the email will be `text/html`. Set to true when sending HTML to ensure proper rending on email clients
    */
    'isHTML'?: boolean;
    /**
    * Optional replyTo header
    */
    'replyTo'?: string;
    /**
    * Optional strategy to use when sending the email
    */
    'sendStrategy'?: SendEmailOptionsSendStrategyEnum;
    /**
    * Optional email subject line
    */
    'subject'?: string;
    /**
    * Optional template ID to use for body. Will override body if provided. When using a template make sure you pass the corresponding map of `templateVariables`. You can find which variables are needed by fetching the template itself or viewing it in the dashboard.
    */
    'template'?: string;
    /**
    * Optional map of template variables. Will replace moustache syntax variables in subject and body or template with the associated values if found.
    */
    'templateVariables'?: any;
    /**
    * List of destination email addresses. Even single recipients must be in array form. Maximum recipients per email depends on your plan. If you need to send many emails try using contacts or contact groups or use a non standard sendStrategy to ensure that spam filters are not triggered (many recipients in one email can affect your spam rating).
    */
    'to'?: Array<string>;
    /**
    * Optional list of contact IDs to send email to. Manage your contacts via the API or dashboard. When contacts are used the email is sent to each contact separately so they will not see other recipients.
    */
    'toContacts'?: Array<string>;
    /**
    * Optional contact group ID to send email to. You can create contacts and contact groups in the API or dashboard and use them for email campaigns. When contact groups are used the email is sent to each contact separately so they will not see other recipients
    */
    'toGroup'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "bcc",
            "baseName": "bcc",
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
            "name": "cc",
            "baseName": "cc",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "charset",
            "baseName": "charset",
            "type": "string",
            "format": ""
        },
        {
            "name": "from",
            "baseName": "from",
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
            "name": "replyTo",
            "baseName": "replyTo",
            "type": "string",
            "format": ""
        },
        {
            "name": "sendStrategy",
            "baseName": "sendStrategy",
            "type": "SendEmailOptionsSendStrategyEnum",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
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
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "toContacts",
            "baseName": "toContacts",
            "type": "Array<string>",
            "format": "uuid"
        },
        {
            "name": "toGroup",
            "baseName": "toGroup",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return SendEmailOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type SendEmailOptionsSendStrategyEnum = "SINGLE_MESSAGE" ;

