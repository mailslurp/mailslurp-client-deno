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

import { CreateInboxRulesetOptions } from './CreateInboxRulesetOptions.ts';
import { InboxRulesetTestOptions } from './InboxRulesetTestOptions.ts';
import { HttpFile } from '../http/http.ts';

export class TestNewInboxRulesetOptions {
    'inboxRulesetTestOptions': InboxRulesetTestOptions;
    'createInboxRulesetOptions': CreateInboxRulesetOptions;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inboxRulesetTestOptions",
            "baseName": "inboxRulesetTestOptions",
            "type": "InboxRulesetTestOptions",
            "format": ""
        },
        {
            "name": "createInboxRulesetOptions",
            "baseName": "createInboxRulesetOptions",
            "type": "CreateInboxRulesetOptions",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TestNewInboxRulesetOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}

