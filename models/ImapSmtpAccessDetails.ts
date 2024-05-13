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
    * Secure TLS SMTP server host domain
    */
    'secureSmtpServerHost': string;
    /**
    * Secure TLS SMTP server host port
    */
    'secureSmtpServerPort': number;
    /**
    * Secure TLS SMTP username for login
    */
    'secureSmtpUsername': string;
    /**
    * Secure TLS SMTP password for login
    */
    'secureSmtpPassword': string;
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
    * SMTP password for login
    */
    'smtpPassword': string;
    /**
    * Secure TLS IMAP server host domain
    */
    'secureImapServerHost': string;
    /**
    * Secure TLS IMAP server host port
    */
    'secureImapServerPort': number;
    /**
    * Secure TLS IMAP username for login
    */
    'secureImapUsername': string;
    /**
    * Secure TLS IMAP password for login
    */
    'secureImapPassword': string;
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
    /**
    * IMAP mailbox to SELECT
    */
    'imapMailbox': string;
    /**
    * Mail from domain or SMTP HELO value
    */
    'mailFromDomain'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "secureSmtpServerHost",
            "baseName": "secureSmtpServerHost",
            "type": "string",
            "format": ""
        },
        {
            "name": "secureSmtpServerPort",
            "baseName": "secureSmtpServerPort",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "secureSmtpUsername",
            "baseName": "secureSmtpUsername",
            "type": "string",
            "format": ""
        },
        {
            "name": "secureSmtpPassword",
            "baseName": "secureSmtpPassword",
            "type": "string",
            "format": ""
        },
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
            "name": "secureImapServerHost",
            "baseName": "secureImapServerHost",
            "type": "string",
            "format": ""
        },
        {
            "name": "secureImapServerPort",
            "baseName": "secureImapServerPort",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "secureImapUsername",
            "baseName": "secureImapUsername",
            "type": "string",
            "format": ""
        },
        {
            "name": "secureImapPassword",
            "baseName": "secureImapPassword",
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
        },
        {
            "name": "imapMailbox",
            "baseName": "imapMailbox",
            "type": "string",
            "format": ""
        },
        {
            "name": "mailFromDomain",
            "baseName": "mailFromDomain",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ImapSmtpAccessDetails.attributeTypeMap;
    }
    
    public constructor() {
    }
}

