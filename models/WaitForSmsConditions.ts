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

import { SmsMatchOption } from './SmsMatchOption.ts';
import { HttpFile } from '../http/http.ts';

/**
* Conditions to apply to emails that you are waiting for
*/
export class WaitForSmsConditions {
    /**
    * ID of phone number to search within and apply conditions to. Essentially filtering the SMS found to give a count.
    */
    'phoneNumberId': string;
    /**
    * Limit results
    */
    'limit'?: number;
    /**
    * Number of results that should match conditions. Either exactly or at least this amount based on the `countType`. If count condition is not met and the timeout has not been reached the `waitFor` method will retry the operation.
    */
    'count': number;
    /**
    * Max time in milliseconds to wait between retries if a `timeout` is specified.
    */
    'delayTimeout'?: number;
    /**
    * Max time in milliseconds to retry the `waitFor` operation until conditions are met.
    */
    'timeout': number;
    /**
    * Apply conditions only to **unread** SMS. All SMS messages begin with `read=false`. An SMS is marked `read=true` when an `SMS` has been returned to the user at least once. For example you have called `getSms` or `waitForSms` etc., or you have viewed the SMS in the dashboard.
    */
    'unreadOnly'?: boolean;
    /**
    * How result size should be compared with the expected size. Exactly or at-least matching result?
    */
    'countType'?: WaitForSmsConditionsCountTypeEnum;
    /**
    * Conditions that should be matched for an SMS to qualify for results. Each condition will be applied in order to each SMS within a phone number to filter a result list of matching SMSs you are waiting for.
    */
    'matches'?: Array<SmsMatchOption>;
    /**
    * Direction to sort matching SMSs by created time
    */
    'sortDirection'?: WaitForSmsConditionsSortDirectionEnum;
    /**
    * ISO Date Time earliest time of SMS to consider. Filter for matching SMSs that were received after this date
    */
    'since'?: Date;
    /**
    * ISO Date Time latest time of SMS to consider. Filter for matching SMSs that were received before this date
    */
    'before'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "phoneNumberId",
            "baseName": "phoneNumberId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "delayTimeout",
            "baseName": "delayTimeout",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "timeout",
            "baseName": "timeout",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "unreadOnly",
            "baseName": "unreadOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "countType",
            "baseName": "countType",
            "type": "WaitForSmsConditionsCountTypeEnum",
            "format": ""
        },
        {
            "name": "matches",
            "baseName": "matches",
            "type": "Array<SmsMatchOption>",
            "format": ""
        },
        {
            "name": "sortDirection",
            "baseName": "sortDirection",
            "type": "WaitForSmsConditionsSortDirectionEnum",
            "format": ""
        },
        {
            "name": "since",
            "baseName": "since",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "before",
            "baseName": "before",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return WaitForSmsConditions.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type WaitForSmsConditionsCountTypeEnum = "EXACTLY" | "ATLEAST" ;
export type WaitForSmsConditionsSortDirectionEnum = "ASC" | "DESC" ;

