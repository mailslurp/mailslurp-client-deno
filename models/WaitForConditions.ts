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

import { MatchOption } from './MatchOption.ts';
import { HttpFile } from '../http/http.ts';

/**
* Conditions that a `waitForXEmails` endpoint operates on. The methods wait until given conditions are met or a timeout is reached. If the conditions are met without needing to wait the results will be returned immediately. Can include `unreadOnly` to ignore already read emails that were returned in an API call or viewing in the dashboard. Can also include matches for emails containing `from`, `subject`, `hasAttachments` etc.
*/
export class WaitForConditions {
    /**
    * ISO Date Time latest time of email to consider. Filter for matching emails that were received before this date
    */
    'before'?: Date;
    /**
    * Number of results that should match conditions. Either exactly or at least this amount based on the `countType`. If count condition is not met and the timeout has not been reached the `waitFor` method will retry the operation.
    */
    'count'?: number;
    /**
    * How should the found count be compared to the expected count.
    */
    'countType'?: WaitForConditionsCountTypeEnum;
    /**
    * Max time in milliseconds to wait between retries if a `timeout` is specified.
    */
    'delayTimeout'?: number;
    /**
    * ID of inbox to search within and apply conditions to. Essentially filtering the emails found to give a count.
    */
    'inboxId': string;
    /**
    * Conditions that should be matched for an email to qualify for results. Each condition will be applied in order to each email within an inbox to filter a result list of matching emails you are waiting for.
    */
    'matches'?: Array<MatchOption>;
    /**
    * ISO Date Time earliest time of email to consider. Filter for matching emails that were received after this date
    */
    'since'?: Date;
    /**
    * Direction to sort matching emails by created time
    */
    'sortDirection'?: WaitForConditionsSortDirectionEnum;
    /**
    * Max time in milliseconds to retry the `waitFor` operation until conditions are met.
    */
    'timeout': number;
    /**
    * Apply conditions only to **unread** emails. All emails begin with `read=false`. An email is marked `read=true` when an `EmailDto` representation of it has been returned to the user at least once. For example you have called `getEmail` or `waitForLatestEmail` etc., or you have viewed the email in the dashboard.
    */
    'unreadOnly'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "before",
            "baseName": "before",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "countType",
            "baseName": "countType",
            "type": "WaitForConditionsCountTypeEnum",
            "format": ""
        },
        {
            "name": "delayTimeout",
            "baseName": "delayTimeout",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "inboxId",
            "baseName": "inboxId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "matches",
            "baseName": "matches",
            "type": "Array<MatchOption>",
            "format": ""
        },
        {
            "name": "since",
            "baseName": "since",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "sortDirection",
            "baseName": "sortDirection",
            "type": "WaitForConditionsSortDirectionEnum",
            "format": ""
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
        }    ];

    static getAttributeTypeMap() {
        return WaitForConditions.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type WaitForConditionsCountTypeEnum = "EXACTLY" | "ATLEAST" ;
export type WaitForConditionsSortDirectionEnum = "ASC" | "DESC" ;

