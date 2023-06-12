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
* Options for the email to be sent
*/
export class SendEmailOptions {
    /**
    * Optional list of contact IDs to send email to. Manage your contacts via the API or dashboard. When contacts are used the email is sent to each contact separately so they will not see other recipients.
    */
    'toContacts'?: Array<string>;
    /**
    * Optional contact group ID to send email to. You can create contacts and contact groups in the API or dashboard and use them for email campaigns. When contact groups are used the email is sent to each contact separately so they will not see other recipients
    */
    'toGroup'?: string;
    /**
    * List of destination email addresses. Each email address must be RFC 5322 format. Even single recipients must be in array form. Maximum recipients per email depends on your plan. If you need to send many emails try using contacts or contact groups or use a non standard sendStrategy to ensure that spam filters are not triggered (many recipients in one email can affect your spam rating). Be cautious when sending emails that your recipients exist. High bounce rates (meaning a high percentage of emails cannot be delivered because an address does not exist) can result in account freezing.
    */
    'to'?: Array<string>;
    /**
    * Optional from address. Email address is RFC 5322 format and may include a display name and email in angle brackets (`my@address.com` or `My inbox <my@address.com>`). If no sender is set the source inbox address will be used for this field. If you set `useInboxName` to `true` the from field will include the inbox name as a display name: `inbox_name <inbox@address.com>`. For this to work use the name field when creating an inbox. Beware of potential spam penalties when setting the from field to an address not used by the inbox. Your emails may get blocked by services if you impersonate another address. To use a custom email addresses use a custom domain. You can create domains with the DomainController. The domain must be verified in the dashboard before it can be used.
    */
    'from'?: string;
    /**
    * Optional list of cc destination email addresses
    */
    'cc'?: Array<string>;
    /**
    * Optional list of bcc destination email addresses
    */
    'bcc'?: Array<string>;
    /**
    * Optional email subject line
    */
    'subject'?: string;
    /**
    * Optional replyTo header
    */
    'replyTo'?: string;
    /**
    * Optional contents of email. If body contains HTML then set `isHTML` to true to ensure that email clients render it correctly. You can use moustache template syntax in the email body in conjunction with `toGroup` contact variables or `templateVariables` data. If you need more templating control consider creating a template and using the `template` property instead of the body.
    */
    'body'?: string;
    /**
    * Optional HTML flag to indicate that contents is HTML. Set's a `content-type: text/html` for email. (Deprecated: use `isHTML` instead.)
    */
    'html'?: boolean;
    /**
    * Optional HTML flag. If true the `content-type` of the email will be `text/html`. Set to true when sending HTML to ensure proper rending on email clients
    */
    'isHTML'?: boolean;
    /**
    * Optional charset
    */
    'charset'?: string;
    /**
    * Optional list of attachment IDs to send with this email. You must first upload each attachment separately via method call or dashboard in order to obtain attachment IDs. This way you can reuse attachments with different emails once uploaded. There are several ways to upload that support `multi-part form`, `base64 file encoding`, and octet stream binary uploads. See the `UploadController` for available methods. 
    */
    'attachments'?: Array<string>;
    /**
    * Optional map of template variables. Will replace moustache syntax variables in subject and body or template with the associated values if found.
    */
    'templateVariables'?: { [key: string]: any; };
    /**
    * Optional template ID to use for body. Will override body if provided. When using a template make sure you pass the corresponding map of `templateVariables`. You can find which variables are needed by fetching the template itself or viewing it in the dashboard.
    */
    'template'?: string;
    /**
    * How an email should be sent based on its recipients
    */
    'sendStrategy'?: SendEmailOptionsSendStrategyEnum;
    /**
    * Use name of inbox as sender email address name. Will construct RFC 5322 email address with `Inbox name <inbox@address.com>` if the inbox has a name.
    */
    'useInboxName'?: boolean;
    /**
    * Add tracking pixel to email
    */
    'addTrackingPixel'?: boolean;
    /**
    * Filter recipients to remove any bounced recipients from to, bcc, and cc before sending
    */
    'filterBouncedRecipients'?: boolean;
    /**
    * Validate recipient email addresses before sending
    */
    'validateEmailAddresses'?: SendEmailOptionsValidateEmailAddressesEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "from",
            "baseName": "from",
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
            "name": "bcc",
            "baseName": "bcc",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        },
        {
            "name": "replyTo",
            "baseName": "replyTo",
            "type": "string",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string",
            "format": ""
        },
        {
            "name": "html",
            "baseName": "html",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isHTML",
            "baseName": "isHTML",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "charset",
            "baseName": "charset",
            "type": "string",
            "format": ""
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "templateVariables",
            "baseName": "templateVariables",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "sendStrategy",
            "baseName": "sendStrategy",
            "type": "SendEmailOptionsSendStrategyEnum",
            "format": ""
        },
        {
            "name": "useInboxName",
            "baseName": "useInboxName",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "addTrackingPixel",
            "baseName": "addTrackingPixel",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "filterBouncedRecipients",
            "baseName": "filterBouncedRecipients",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "validateEmailAddresses",
            "baseName": "validateEmailAddresses",
            "type": "SendEmailOptionsValidateEmailAddressesEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendEmailOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type SendEmailOptionsSendStrategyEnum = "SINGLE_MESSAGE" ;
export type SendEmailOptionsValidateEmailAddressesEnum = "VALIDATE_FILTER_REMOVE_INVALID" | "VALIDATE_ERROR_IF_INVALID" | "NO_VALIDATION" ;

