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
* Options for creating inbox rulesets. Inbox rulesets can be used to block, allow, filter, or forward emails when sending or receiving using the inbox.
*/
export class CreateInboxRulesetOptions {
    /**
    * Action to be taken when the ruleset matches an email for the given scope. For example: `BLOCK` action with target `*` and scope `SENDING_EMAILS` blocks sending to all recipients. Note `ALLOW` takes precedent over `BLOCK`. `FILTER_REMOVE` is like block but will remove offending email addresses during a send or receive event instead of blocking the action.
    */
    'action'?: CreateInboxRulesetOptionsActionEnum;
    /**
    * What type of emails actions to apply ruleset to. Either `SENDING_EMAILS` or `RECEIVING_EMAILS` will apply action and target to any sending or receiving of emails respectively.
    */
    'scope'?: CreateInboxRulesetOptionsScopeEnum;
    /**
    * Target to match emails with. Can be a wild-card type pattern or a valid email address. For instance `*@gmail.com` matches all gmail addresses while `test@gmail.com` matches one address exactly. The target is applied to every recipient field email address when `SENDING_EMAILS` is the scope and is applied to sender of email when `RECEIVING_EMAILS`.
    */
    'target'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "CreateInboxRulesetOptionsActionEnum",
            "format": ""
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "CreateInboxRulesetOptionsScopeEnum",
            "format": ""
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateInboxRulesetOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type CreateInboxRulesetOptionsActionEnum = "BLOCK" | "ALLOW" | "FILTER_REMOVE" ;
export type CreateInboxRulesetOptionsScopeEnum = "RECEIVING_EMAILS" | "SENDING_EMAILS" ;
