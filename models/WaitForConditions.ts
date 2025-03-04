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

import { MatchOption } from './MatchOption.ts';
import { HttpFile } from '../http/http.ts';

/**
* Conditions to apply to emails that you are waiting for
*/
export class WaitForConditions {
    /**
    * ID of inbox to search within and apply conditions to. Essentially filtering the emails found to give a count.
    */
    'inboxId': string;
    /**
    * Number of results that should match conditions. Either exactly or at least this amount based on the `countType`. If count condition is not met and the timeout has not been reached the `waitFor` method will retry the operation.
    */
    'count'?: number;
    /**
    * Max time in milliseconds to wait between retries if a `timeout` is specified.
    */
    'delayTimeout'?: number;
    /**
    * Max time in milliseconds to retry the `waitFor` operation until conditions are met.
    */
    'timeout': number;
    /**
    * Apply conditions only to **unread** emails. All emails begin with `read=false`. An email is marked `read=true` when an `EmailDto` representation of it has been returned to the user at least once. For example you have called `getEmail` or `waitForLatestEmail` etc., or you have viewed the email in the dashboard.
    */
    'unreadOnly'?: boolean;
    /**
    * How result size should be compared with the expected size. Exactly or at-least matching result?
    */
    'countType'?: WaitForConditionsCountTypeEnum;
    /**
    * Conditions that should be matched for an email to qualify for results. Each condition will be applied in order to each email within an inbox to filter a result list of matching emails you are waiting for.
    */
    'matches'?: Array<MatchOption>;
    /**
    * Direction to sort matching emails by created time
    */
    'sortDirection'?: WaitForConditionsSortDirectionEnum;
    /**
    * ISO Date Time earliest time of email to consider. Filter for matching emails that were received after this date
    */
    'since'?: Date;
    /**
    * ISO Date Time latest time of email to consider. Filter for matching emails that were received before this date
    */
    'before'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inboxId",
            "baseName": "inboxId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int32"
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
            "type": "WaitForConditionsCountTypeEnum",
            "format": ""
        },
        {
            "name": "matches",
            "baseName": "matches",
            "type": "Array<MatchOption>",
            "format": ""
        },
        {
            "name": "sortDirection",
            "baseName": "sortDirection",
            "type": "WaitForConditionsSortDirectionEnum",
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
        return WaitForConditions.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type WaitForConditionsCountTypeEnum = "EXACTLY" | "ATLEAST" ;
export type WaitForConditionsSortDirectionEnum = "ASC" | "DESC" ;

