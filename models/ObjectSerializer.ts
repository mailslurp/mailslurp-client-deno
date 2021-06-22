export * from './AbstractWebhookPayload.ts';
export * from './Alias.ts';
export * from './AliasDto.ts';
export * from './AliasProjection.ts';
export * from './AttachmentMetaData.ts';
export * from './AttachmentProjection.ts';
export * from './BasicAuthOptions.ts';
export * from './BulkSendEmailOptions.ts';
export * from './ConditionOption.ts';
export * from './ContactDto.ts';
export * from './ContactProjection.ts';
export * from './ContentMatchOptions.ts';
export * from './CreateAliasOptions.ts';
export * from './CreateContactOptions.ts';
export * from './CreateDomainOptions.ts';
export * from './CreateGroupOptions.ts';
export * from './CreateInboxDto.ts';
export * from './CreateTemplateOptions.ts';
export * from './CreateWebhookOptions.ts';
export * from './DNSLookupOptions.ts';
export * from './DNSLookupResult.ts';
export * from './DNSLookupResults.ts';
export * from './DescribeDomainOptions.ts';
export * from './DescribeMailServerDomainResult.ts';
export * from './DomainDto.ts';
export * from './DomainNameRecord.ts';
export * from './DomainPreview.ts';
export * from './DownloadAttachmentDto.ts';
export * from './Email.ts';
export * from './EmailAnalysis.ts';
export * from './EmailContentMatchResult.ts';
export * from './EmailPreview.ts';
export * from './EmailProjection.ts';
export * from './EmailTextLinesResult.ts';
export * from './EmailVerificationResult.ts';
export * from './ExpirationDefaults.ts';
export * from './ExpiredInboxDto.ts';
export * from './ExpiredInboxRecordProjection.ts';
export * from './ExportLink.ts';
export * from './ExportOptions.ts';
export * from './ForwardEmailOptions.ts';
export * from './GroupContactsDto.ts';
export * from './GroupDto.ts';
export * from './GroupProjection.ts';
export * from './HTMLValidationResult.ts';
export * from './IPAddressResult.ts';
export * from './Inbox.ts';
export * from './InboxProjection.ts';
export * from './MatchOption.ts';
export * from './MatchOptions.ts';
export * from './MissedEmail.ts';
export * from './MissedEmailProjection.ts';
export * from './NameServerRecord.ts';
export * from './OrganizationInboxProjection.ts';
export * from './PageAlias.ts';
export * from './PageAttachmentEntity.ts';
export * from './PageContactProjection.ts';
export * from './PageEmailPreview.ts';
export * from './PageEmailProjection.ts';
export * from './PageExpiredInboxRecordProjection.ts';
export * from './PageGroupProjection.ts';
export * from './PageInboxProjection.ts';
export * from './PageMissedEmailProjection.ts';
export * from './PageOrganizationInboxProjection.ts';
export * from './PageSentEmailProjection.ts';
export * from './PageTemplateProjection.ts';
export * from './PageThreadProjection.ts';
export * from './PageWebhookProjection.ts';
export * from './PageWebhookResult.ts';
export * from './Pageable.ts';
export * from './RawEmailJson.ts';
export * from './ReplyToAliasEmailOptions.ts';
export * from './ReplyToEmailOptions.ts';
export * from './SendEmailOptions.ts';
export * from './SentEmailDto.ts';
export * from './SentEmailProjection.ts';
export * from './SetInboxFavouritedOptions.ts';
export * from './SimpleSendEmailOptions.ts';
export * from './Sort.ts';
export * from './TemplateDto.ts';
export * from './TemplateProjection.ts';
export * from './TemplateVariable.ts';
export * from './ThreadProjection.ts';
export * from './UnreadCount.ts';
export * from './UpdateAliasOptions.ts';
export * from './UpdateDomainOptions.ts';
export * from './UpdateGroupContacts.ts';
export * from './UpdateInboxOptions.ts';
export * from './UploadAttachmentOptions.ts';
export * from './ValidationDto.ts';
export * from './ValidationMessage.ts';
export * from './VerifyEmailAddressOptions.ts';
export * from './WaitForConditions.ts';
export * from './WebhookDto.ts';
export * from './WebhookNewAttachmentPayload.ts';
export * from './WebhookNewContactPayload.ts';
export * from './WebhookNewEmailPayload.ts';
export * from './WebhookProjection.ts';
export * from './WebhookResultEntity.ts';
export * from './WebhookTestRequest.ts';
export * from './WebhookTestResponse.ts';
export * from './WebhookTestResult.ts';

import { AbstractWebhookPayload, AbstractWebhookPayloadEventNameEnum      } from './AbstractWebhookPayload.ts';
import { Alias } from './Alias.ts';
import { AliasDto } from './AliasDto.ts';
import { AliasProjection } from './AliasProjection.ts';
import { AttachmentMetaData } from './AttachmentMetaData.ts';
import { AttachmentProjection } from './AttachmentProjection.ts';
import { BasicAuthOptions } from './BasicAuthOptions.ts';
import { BulkSendEmailOptions } from './BulkSendEmailOptions.ts';
import { ConditionOption, ConditionOptionConditionEnum  , ConditionOptionValueEnum   } from './ConditionOption.ts';
import { ContactDto } from './ContactDto.ts';
import { ContactProjection } from './ContactProjection.ts';
import { ContentMatchOptions } from './ContentMatchOptions.ts';
import { CreateAliasOptions } from './CreateAliasOptions.ts';
import { CreateContactOptions } from './CreateContactOptions.ts';
import { CreateDomainOptions   , CreateDomainOptionsDomainTypeEnum   } from './CreateDomainOptions.ts';
import { CreateGroupOptions } from './CreateGroupOptions.ts';
import { CreateInboxDto      , CreateInboxDtoInboxTypeEnum      } from './CreateInboxDto.ts';
import { CreateTemplateOptions } from './CreateTemplateOptions.ts';
import { CreateWebhookOptions , CreateWebhookOptionsEventNameEnum     } from './CreateWebhookOptions.ts';
import { DNSLookupOptions  , DNSLookupOptionsRecordTypesEnum   } from './DNSLookupOptions.ts';
import { DNSLookupResult  , DNSLookupResultRecordTypeEnum    } from './DNSLookupResult.ts';
import { DNSLookupResults } from './DNSLookupResults.ts';
import { DescribeDomainOptions } from './DescribeDomainOptions.ts';
import { DescribeMailServerDomainResult } from './DescribeMailServerDomainResult.ts';
import { DomainDto     , DomainDtoDomainTypeEnum        } from './DomainDto.ts';
import { DomainNameRecord  , DomainNameRecordRecordTypeEnum    } from './DomainNameRecord.ts';
import { DomainPreview } from './DomainPreview.ts';
import { DownloadAttachmentDto } from './DownloadAttachmentDto.ts';
import { Email } from './Email.ts';
import { EmailAnalysis } from './EmailAnalysis.ts';
import { EmailContentMatchResult } from './EmailContentMatchResult.ts';
import { EmailPreview } from './EmailPreview.ts';
import { EmailProjection } from './EmailProjection.ts';
import { EmailTextLinesResult } from './EmailTextLinesResult.ts';
import { EmailVerificationResult } from './EmailVerificationResult.ts';
import { ExpirationDefaults } from './ExpirationDefaults.ts';
import { ExpiredInboxDto } from './ExpiredInboxDto.ts';
import { ExpiredInboxRecordProjection } from './ExpiredInboxRecordProjection.ts';
import { ExportLink } from './ExportLink.ts';
import { ExportOptions, ExportOptionsOutputFormatEnum        } from './ExportOptions.ts';
import { ForwardEmailOptions } from './ForwardEmailOptions.ts';
import { GroupContactsDto } from './GroupContactsDto.ts';
import { GroupDto } from './GroupDto.ts';
import { GroupProjection } from './GroupProjection.ts';
import { HTMLValidationResult } from './HTMLValidationResult.ts';
import { IPAddressResult } from './IPAddressResult.ts';
import { Inbox      , InboxInboxTypeEnum        } from './Inbox.ts';
import { InboxProjection    , InboxProjectionInboxTypeEnum      } from './InboxProjection.ts';
import { MatchOption, MatchOptionFieldEnum  , MatchOptionShouldEnum    } from './MatchOption.ts';
import { MatchOptions } from './MatchOptions.ts';
import { MissedEmail } from './MissedEmail.ts';
import { MissedEmailProjection } from './MissedEmailProjection.ts';
import { NameServerRecord } from './NameServerRecord.ts';
import { OrganizationInboxProjection    , OrganizationInboxProjectionInboxTypeEnum       } from './OrganizationInboxProjection.ts';
import { PageAlias } from './PageAlias.ts';
import { PageAttachmentEntity } from './PageAttachmentEntity.ts';
import { PageContactProjection } from './PageContactProjection.ts';
import { PageEmailPreview } from './PageEmailPreview.ts';
import { PageEmailProjection } from './PageEmailProjection.ts';
import { PageExpiredInboxRecordProjection } from './PageExpiredInboxRecordProjection.ts';
import { PageGroupProjection } from './PageGroupProjection.ts';
import { PageInboxProjection } from './PageInboxProjection.ts';
import { PageMissedEmailProjection } from './PageMissedEmailProjection.ts';
import { PageOrganizationInboxProjection } from './PageOrganizationInboxProjection.ts';
import { PageSentEmailProjection } from './PageSentEmailProjection.ts';
import { PageTemplateProjection } from './PageTemplateProjection.ts';
import { PageThreadProjection } from './PageThreadProjection.ts';
import { PageWebhookProjection } from './PageWebhookProjection.ts';
import { PageWebhookResult } from './PageWebhookResult.ts';
import { Pageable } from './Pageable.ts';
import { RawEmailJson } from './RawEmailJson.ts';
import { ReplyToAliasEmailOptions    , ReplyToAliasEmailOptionsSendStrategyEnum      } from './ReplyToAliasEmailOptions.ts';
import { ReplyToEmailOptions      , ReplyToEmailOptionsSendStrategyEnum      } from './ReplyToEmailOptions.ts';
import { SendEmailOptions         , SendEmailOptionsSendStrategyEnum          } from './SendEmailOptions.ts';
import { SentEmailDto } from './SentEmailDto.ts';
import { SentEmailProjection } from './SentEmailProjection.ts';
import { SetInboxFavouritedOptions } from './SetInboxFavouritedOptions.ts';
import { SimpleSendEmailOptions } from './SimpleSendEmailOptions.ts';
import { Sort } from './Sort.ts';
import { TemplateDto } from './TemplateDto.ts';
import { TemplateProjection } from './TemplateProjection.ts';
import { TemplateVariable , TemplateVariableVariableTypeEnum   } from './TemplateVariable.ts';
import { ThreadProjection } from './ThreadProjection.ts';
import { UnreadCount } from './UnreadCount.ts';
import { UpdateAliasOptions } from './UpdateAliasOptions.ts';
import { UpdateDomainOptions } from './UpdateDomainOptions.ts';
import { UpdateGroupContacts } from './UpdateGroupContacts.ts';
import { UpdateInboxOptions } from './UpdateInboxOptions.ts';
import { UploadAttachmentOptions } from './UploadAttachmentOptions.ts';
import { ValidationDto } from './ValidationDto.ts';
import { ValidationMessage } from './ValidationMessage.ts';
import { VerifyEmailAddressOptions } from './VerifyEmailAddressOptions.ts';
import { WaitForConditions , WaitForConditionsCountTypeEnum    , WaitForConditionsSortDirectionEnum     } from './WaitForConditions.ts';
import { WebhookDto  , WebhookDtoEventNameEnum    , WebhookDtoMethodEnum        } from './WebhookDto.ts';
import { WebhookNewAttachmentPayload   , WebhookNewAttachmentPayloadEventNameEnum       } from './WebhookNewAttachmentPayload.ts';
import { WebhookNewContactPayload    , WebhookNewContactPayloadEventNameEnum             } from './WebhookNewContactPayload.ts';
import { WebhookNewEmailPayload     , WebhookNewEmailPayloadEventNameEnum          } from './WebhookNewEmailPayload.ts';
import { WebhookProjection } from './WebhookProjection.ts';
import { WebhookResultEntity , WebhookResultEntityHttpMethodEnum          , WebhookResultEntityWebhookEventEnum     } from './WebhookResultEntity.ts';
import { WebhookTestRequest , WebhookTestRequestMethodEnum     } from './WebhookTestRequest.ts';
import { WebhookTestResponse } from './WebhookTestResponse.ts';
import { WebhookTestResult } from './WebhookTestResult.ts';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0
}

                 
let enumsMap: Set<string> = new Set<string>([
    "AbstractWebhookPayloadEventNameEnum",
    "ConditionOptionConditionEnum",
    "ConditionOptionValueEnum",
    "CreateDomainOptionsDomainTypeEnum",
    "CreateInboxDtoInboxTypeEnum",
    "CreateWebhookOptionsEventNameEnum",
    "DNSLookupOptionsRecordTypesEnum",
    "DNSLookupResultRecordTypeEnum",
    "DomainDtoDomainTypeEnum",
    "DomainNameRecordRecordTypeEnum",
    "ExportOptionsOutputFormatEnum",
    "InboxInboxTypeEnum",
    "InboxProjectionInboxTypeEnum",
    "MatchOptionFieldEnum",
    "MatchOptionShouldEnum",
    "OrganizationInboxProjectionInboxTypeEnum",
    "ReplyToAliasEmailOptionsSendStrategyEnum",
    "ReplyToEmailOptionsSendStrategyEnum",
    "SendEmailOptionsSendStrategyEnum",
    "TemplateVariableVariableTypeEnum",
    "WaitForConditionsCountTypeEnum",
    "WaitForConditionsSortDirectionEnum",
    "WebhookDtoEventNameEnum",
    "WebhookDtoMethodEnum",
    "WebhookNewAttachmentPayloadEventNameEnum",
    "WebhookNewContactPayloadEventNameEnum",
    "WebhookNewEmailPayloadEventNameEnum",
    "WebhookResultEntityHttpMethodEnum",
    "WebhookResultEntityWebhookEventEnum",
    "WebhookTestRequestMethodEnum",
]);

let typeMap: {[index: string]: any} = {
    "AbstractWebhookPayload": AbstractWebhookPayload,
    "Alias": Alias,
    "AliasDto": AliasDto,
    "AliasProjection": AliasProjection,
    "AttachmentMetaData": AttachmentMetaData,
    "AttachmentProjection": AttachmentProjection,
    "BasicAuthOptions": BasicAuthOptions,
    "BulkSendEmailOptions": BulkSendEmailOptions,
    "ConditionOption": ConditionOption,
    "ContactDto": ContactDto,
    "ContactProjection": ContactProjection,
    "ContentMatchOptions": ContentMatchOptions,
    "CreateAliasOptions": CreateAliasOptions,
    "CreateContactOptions": CreateContactOptions,
    "CreateDomainOptions": CreateDomainOptions,
    "CreateGroupOptions": CreateGroupOptions,
    "CreateInboxDto": CreateInboxDto,
    "CreateTemplateOptions": CreateTemplateOptions,
    "CreateWebhookOptions": CreateWebhookOptions,
    "DNSLookupOptions": DNSLookupOptions,
    "DNSLookupResult": DNSLookupResult,
    "DNSLookupResults": DNSLookupResults,
    "DescribeDomainOptions": DescribeDomainOptions,
    "DescribeMailServerDomainResult": DescribeMailServerDomainResult,
    "DomainDto": DomainDto,
    "DomainNameRecord": DomainNameRecord,
    "DomainPreview": DomainPreview,
    "DownloadAttachmentDto": DownloadAttachmentDto,
    "Email": Email,
    "EmailAnalysis": EmailAnalysis,
    "EmailContentMatchResult": EmailContentMatchResult,
    "EmailPreview": EmailPreview,
    "EmailProjection": EmailProjection,
    "EmailTextLinesResult": EmailTextLinesResult,
    "EmailVerificationResult": EmailVerificationResult,
    "ExpirationDefaults": ExpirationDefaults,
    "ExpiredInboxDto": ExpiredInboxDto,
    "ExpiredInboxRecordProjection": ExpiredInboxRecordProjection,
    "ExportLink": ExportLink,
    "ExportOptions": ExportOptions,
    "ForwardEmailOptions": ForwardEmailOptions,
    "GroupContactsDto": GroupContactsDto,
    "GroupDto": GroupDto,
    "GroupProjection": GroupProjection,
    "HTMLValidationResult": HTMLValidationResult,
    "IPAddressResult": IPAddressResult,
    "Inbox": Inbox,
    "InboxProjection": InboxProjection,
    "MatchOption": MatchOption,
    "MatchOptions": MatchOptions,
    "MissedEmail": MissedEmail,
    "MissedEmailProjection": MissedEmailProjection,
    "NameServerRecord": NameServerRecord,
    "OrganizationInboxProjection": OrganizationInboxProjection,
    "PageAlias": PageAlias,
    "PageAttachmentEntity": PageAttachmentEntity,
    "PageContactProjection": PageContactProjection,
    "PageEmailPreview": PageEmailPreview,
    "PageEmailProjection": PageEmailProjection,
    "PageExpiredInboxRecordProjection": PageExpiredInboxRecordProjection,
    "PageGroupProjection": PageGroupProjection,
    "PageInboxProjection": PageInboxProjection,
    "PageMissedEmailProjection": PageMissedEmailProjection,
    "PageOrganizationInboxProjection": PageOrganizationInboxProjection,
    "PageSentEmailProjection": PageSentEmailProjection,
    "PageTemplateProjection": PageTemplateProjection,
    "PageThreadProjection": PageThreadProjection,
    "PageWebhookProjection": PageWebhookProjection,
    "PageWebhookResult": PageWebhookResult,
    "Pageable": Pageable,
    "RawEmailJson": RawEmailJson,
    "ReplyToAliasEmailOptions": ReplyToAliasEmailOptions,
    "ReplyToEmailOptions": ReplyToEmailOptions,
    "SendEmailOptions": SendEmailOptions,
    "SentEmailDto": SentEmailDto,
    "SentEmailProjection": SentEmailProjection,
    "SetInboxFavouritedOptions": SetInboxFavouritedOptions,
    "SimpleSendEmailOptions": SimpleSendEmailOptions,
    "Sort": Sort,
    "TemplateDto": TemplateDto,
    "TemplateProjection": TemplateProjection,
    "TemplateVariable": TemplateVariable,
    "ThreadProjection": ThreadProjection,
    "UnreadCount": UnreadCount,
    "UpdateAliasOptions": UpdateAliasOptions,
    "UpdateDomainOptions": UpdateDomainOptions,
    "UpdateGroupContacts": UpdateGroupContacts,
    "UpdateInboxOptions": UpdateInboxOptions,
    "UploadAttachmentOptions": UploadAttachmentOptions,
    "ValidationDto": ValidationDto,
    "ValidationMessage": ValidationMessage,
    "VerifyEmailAddressOptions": VerifyEmailAddressOptions,
    "WaitForConditions": WaitForConditions,
    "WebhookDto": WebhookDto,
    "WebhookNewAttachmentPayload": WebhookNewAttachmentPayload,
    "WebhookNewContactPayload": WebhookNewContactPayload,
    "WebhookNewEmailPayload": WebhookNewEmailPayload,
    "WebhookProjection": WebhookProjection,
    "WebhookResultEntity": WebhookResultEntity,
    "WebhookTestRequest": WebhookTestRequest,
    "WebhookTestResponse": WebhookTestResponse,
    "WebhookTestResult": WebhookTestResult,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            
            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
