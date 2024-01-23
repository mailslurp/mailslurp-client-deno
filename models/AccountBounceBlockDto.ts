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

export class AccountBounceBlockDto {
    'isSendingBlocked': boolean;
    'bounceCount': number;
    'bounceCountToday': number;
    'maximumDailyBounces': number;
    'maximumAccountBounces': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isSendingBlocked",
            "baseName": "isSendingBlocked",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "bounceCount",
            "baseName": "bounceCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "bounceCountToday",
            "baseName": "bounceCountToday",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "maximumDailyBounces",
            "baseName": "maximumDailyBounces",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "maximumAccountBounces",
            "baseName": "maximumAccountBounces",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return AccountBounceBlockDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}
