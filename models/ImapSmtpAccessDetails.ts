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
* Access details for inbox using SMTP or IMAP
*/
export class ImapSmtpAccessDetails {
    /**
    * SMTP server host domain
    */
    'smtpServerHost': string;
    /**
    * SMTP server host port
    */
    'smtpServerPort': number;
    /**
    * SMTP username for login
    */
    'smtpUsername': string;
    /**
    * SMTP  for login
    */
    'smtpPassword': string;
    /**
    * IMAP server host domain
    */
    'imapServerHost': string;
    /**
    * IMAP server host port
    */
    'imapServerPort': number;
    /**
    * IMAP username for login
    */
    'imapUsername': string;
    /**
    * IMAP password for login
    */
    'imapPassword': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "smtpServerHost",
            "baseName": "smtpServerHost",
            "type": "string",
            "format": ""
        },
        {
            "name": "smtpServerPort",
            "baseName": "smtpServerPort",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "smtpUsername",
            "baseName": "smtpUsername",
            "type": "string",
            "format": ""
        },
        {
            "name": "smtpPassword",
            "baseName": "smtpPassword",
            "type": "string",
            "format": ""
        },
        {
            "name": "imapServerHost",
            "baseName": "imapServerHost",
            "type": "string",
            "format": ""
        },
        {
            "name": "imapServerPort",
            "baseName": "imapServerPort",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "imapUsername",
            "baseName": "imapUsername",
            "type": "string",
            "format": ""
        },
        {
            "name": "imapPassword",
            "baseName": "imapPassword",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ImapSmtpAccessDetails.attributeTypeMap;
    }
    
    public constructor() {
    }
}

