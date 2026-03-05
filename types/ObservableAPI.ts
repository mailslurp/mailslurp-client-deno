import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import * as models from '../models/all.ts';
import { Configuration} from '../configuration.ts'
import { Observable, of, from } from '../rxjsStub.ts';
import {mergeMap, map} from  '../rxjsStub.ts';
import { AIMappingMatchOption } from '../models/AIMappingMatchOption.ts';
import { AIMappingMatchOptions } from '../models/AIMappingMatchOptions.ts';
import { AITransformCreateOptions } from '../models/AITransformCreateOptions.ts';
import { AITransformDto } from '../models/AITransformDto.ts';
import { AITransformMappingDto } from '../models/AITransformMappingDto.ts';
import { AITransformMappingMatchResult } from '../models/AITransformMappingMatchResult.ts';
import { AITransformMappingProjection } from '../models/AITransformMappingProjection.ts';
import { AITransformProjection } from '../models/AITransformProjection.ts';
import { AITransformResultDto } from '../models/AITransformResultDto.ts';
import { AITransformResultProjectionDto } from '../models/AITransformResultProjectionDto.ts';
import { AbstractWebhookPayload } from '../models/AbstractWebhookPayload.ts';
import { AccountBounceBlockDto } from '../models/AccountBounceBlockDto.ts';
import { AliasDto } from '../models/AliasDto.ts';
import { AliasProjection } from '../models/AliasProjection.ts';
import { AliasThreadProjection } from '../models/AliasThreadProjection.ts';
import { AttachmentEntityDto } from '../models/AttachmentEntityDto.ts';
import { AttachmentMetaData } from '../models/AttachmentMetaData.ts';
import { AttachmentProjection } from '../models/AttachmentProjection.ts';
import { AuditLogEventDto } from '../models/AuditLogEventDto.ts';
import { AuditLogPageDto } from '../models/AuditLogPageDto.ts';
import { AuditLogSearchOptions } from '../models/AuditLogSearchOptions.ts';
import { BasicAuthOptions } from '../models/BasicAuthOptions.ts';
import { BounceProjection } from '../models/BounceProjection.ts';
import { BounceRecipientProjection } from '../models/BounceRecipientProjection.ts';
import { BouncedEmailDto } from '../models/BouncedEmailDto.ts';
import { BouncedRecipientDto } from '../models/BouncedRecipientDto.ts';
import { BulkSendEmailOptions } from '../models/BulkSendEmailOptions.ts';
import { CampaignProbeDto } from '../models/CampaignProbeDto.ts';
import { CampaignProbeInsightsDto } from '../models/CampaignProbeInsightsDto.ts';
import { CampaignProbeRunDto } from '../models/CampaignProbeRunDto.ts';
import { CampaignProbeRunDueResult } from '../models/CampaignProbeRunDueResult.ts';
import { CampaignProbeRunNowResult } from '../models/CampaignProbeRunNowResult.ts';
import { CampaignProbeSeriesDto } from '../models/CampaignProbeSeriesDto.ts';
import { CampaignProbeSeriesPointDto } from '../models/CampaignProbeSeriesPointDto.ts';
import { CanSendEmailResults } from '../models/CanSendEmailResults.ts';
import { CancelDevicePreviewRunOptions } from '../models/CancelDevicePreviewRunOptions.ts';
import { CancelDevicePreviewRunResult } from '../models/CancelDevicePreviewRunResult.ts';
import { CheckEmailBodyFeatureSupportResults } from '../models/CheckEmailBodyFeatureSupportResults.ts';
import { CheckEmailBodyResults } from '../models/CheckEmailBodyResults.ts';
import { CheckEmailClientSupportOptions } from '../models/CheckEmailClientSupportOptions.ts';
import { CheckEmailClientSupportResults } from '../models/CheckEmailClientSupportResults.ts';
import { CheckEmailFeaturesClientSupportOptions } from '../models/CheckEmailFeaturesClientSupportOptions.ts';
import { CheckEmailFeaturesClientSupportResults } from '../models/CheckEmailFeaturesClientSupportResults.ts';
import { CodeCandidate } from '../models/CodeCandidate.ts';
import { Complaint } from '../models/Complaint.ts';
import { ConditionOption } from '../models/ConditionOption.ts';
import { ConditionalStructuredContentResult } from '../models/ConditionalStructuredContentResult.ts';
import { ConnectorDto } from '../models/ConnectorDto.ts';
import { ConnectorEventDto } from '../models/ConnectorEventDto.ts';
import { ConnectorEventProjection } from '../models/ConnectorEventProjection.ts';
import { ConnectorImapConnectionDto } from '../models/ConnectorImapConnectionDto.ts';
import { ConnectorImapConnectionTestResult } from '../models/ConnectorImapConnectionTestResult.ts';
import { ConnectorProjection } from '../models/ConnectorProjection.ts';
import { ConnectorProviderSettingsDto } from '../models/ConnectorProviderSettingsDto.ts';
import { ConnectorSmtpConnectionDto } from '../models/ConnectorSmtpConnectionDto.ts';
import { ConnectorSmtpConnectionTestResult } from '../models/ConnectorSmtpConnectionTestResult.ts';
import { ConnectorSyncRequestResult } from '../models/ConnectorSyncRequestResult.ts';
import { ConnectorSyncResult } from '../models/ConnectorSyncResult.ts';
import { ConnectorSyncSettingsDto } from '../models/ConnectorSyncSettingsDto.ts';
import { ConsentStatusDto } from '../models/ConsentStatusDto.ts';
import { ContactDto } from '../models/ContactDto.ts';
import { ContactProjection } from '../models/ContactProjection.ts';
import { ContentMatchOptions } from '../models/ContentMatchOptions.ts';
import { CountDto } from '../models/CountDto.ts';
import { CreateAITransformerMappingOptions } from '../models/CreateAITransformerMappingOptions.ts';
import { CreateAliasOptions } from '../models/CreateAliasOptions.ts';
import { CreateCampaignProbeOptions } from '../models/CreateCampaignProbeOptions.ts';
import { CreateCampaignProbeRunOptions } from '../models/CreateCampaignProbeRunOptions.ts';
import { CreateConnectorImapConnectionOptions } from '../models/CreateConnectorImapConnectionOptions.ts';
import { CreateConnectorOptions } from '../models/CreateConnectorOptions.ts';
import { CreateConnectorSmtpConnectionOptions } from '../models/CreateConnectorSmtpConnectionOptions.ts';
import { CreateConnectorSyncSettingsOptions } from '../models/CreateConnectorSyncSettingsOptions.ts';
import { CreateConnectorWithOptions } from '../models/CreateConnectorWithOptions.ts';
import { CreateContactOptions } from '../models/CreateContactOptions.ts';
import { CreateDeliverabilitySimulationJobOptions } from '../models/CreateDeliverabilitySimulationJobOptions.ts';
import { CreateDeliverabilityTestOptions } from '../models/CreateDeliverabilityTestOptions.ts';
import { CreateDevicePreviewFeedbackOptions } from '../models/CreateDevicePreviewFeedbackOptions.ts';
import { CreateDevicePreviewOptions } from '../models/CreateDevicePreviewOptions.ts';
import { CreateDevicePreviewRunResult } from '../models/CreateDevicePreviewRunResult.ts';
import { CreateDomainMonitorAlertSinkOptions } from '../models/CreateDomainMonitorAlertSinkOptions.ts';
import { CreateDomainMonitorOptions } from '../models/CreateDomainMonitorOptions.ts';
import { CreateDomainOptions } from '../models/CreateDomainOptions.ts';
import { CreateEmergencyAddressOptions } from '../models/CreateEmergencyAddressOptions.ts';
import { CreateGroupOptions } from '../models/CreateGroupOptions.ts';
import { CreateInboxDto } from '../models/CreateInboxDto.ts';
import { CreateInboxForwarderOptions } from '../models/CreateInboxForwarderOptions.ts';
import { CreateInboxReplierOptions } from '../models/CreateInboxReplierOptions.ts';
import { CreateInboxRetentionPolicyForAccountOptions } from '../models/CreateInboxRetentionPolicyForAccountOptions.ts';
import { CreatePhoneNumberOptions } from '../models/CreatePhoneNumberOptions.ts';
import { CreatePortalOptions } from '../models/CreatePortalOptions.ts';
import { CreatePortalUserOptions } from '../models/CreatePortalUserOptions.ts';
import { CreateRulesetOptions } from '../models/CreateRulesetOptions.ts';
import { CreateTemplateOptions } from '../models/CreateTemplateOptions.ts';
import { CreateTotpDeviceBase32SecretKeyOptions } from '../models/CreateTotpDeviceBase32SecretKeyOptions.ts';
import { CreateTotpDeviceCustomOptions } from '../models/CreateTotpDeviceCustomOptions.ts';
import { CreateTotpDeviceOtpAuthUrlOptions } from '../models/CreateTotpDeviceOtpAuthUrlOptions.ts';
import { CreateTrackingPixelOptions } from '../models/CreateTrackingPixelOptions.ts';
import { CreateWebhookOptions } from '../models/CreateWebhookOptions.ts';
import { DNSLookupOptions } from '../models/DNSLookupOptions.ts';
import { DNSLookupResult } from '../models/DNSLookupResult.ts';
import { DNSLookupResults } from '../models/DNSLookupResults.ts';
import { DNSLookupsOptions } from '../models/DNSLookupsOptions.ts';
import { DeleteDevicePreviewRunResult } from '../models/DeleteDevicePreviewRunResult.ts';
import { DeleteResult } from '../models/DeleteResult.ts';
import { DeliverabilityAnalyticsRunDto } from '../models/DeliverabilityAnalyticsRunDto.ts';
import { DeliverabilityAnalyticsSeriesDto } from '../models/DeliverabilityAnalyticsSeriesDto.ts';
import { DeliverabilityAnalyticsSeriesPointDto } from '../models/DeliverabilityAnalyticsSeriesPointDto.ts';
import { DeliverabilityAnalyticsSummaryDto } from '../models/DeliverabilityAnalyticsSummaryDto.ts';
import { DeliverabilityEntityResultDto } from '../models/DeliverabilityEntityResultDto.ts';
import { DeliverabilityEntityResultPageDto } from '../models/DeliverabilityEntityResultPageDto.ts';
import { DeliverabilityExpectation } from '../models/DeliverabilityExpectation.ts';
import { DeliverabilityExpectationResultDto } from '../models/DeliverabilityExpectationResultDto.ts';
import { DeliverabilityFailureEntityHotspotDto } from '../models/DeliverabilityFailureEntityHotspotDto.ts';
import { DeliverabilityFailureHotspotsDto } from '../models/DeliverabilityFailureHotspotsDto.ts';
import { DeliverabilityFailurePhoneDimensionHotspotDto } from '../models/DeliverabilityFailurePhoneDimensionHotspotDto.ts';
import { DeliverabilityPollStatusResultDto } from '../models/DeliverabilityPollStatusResultDto.ts';
import { DeliverabilitySelectorOptions } from '../models/DeliverabilitySelectorOptions.ts';
import { DeliverabilitySimulationEmailOptions } from '../models/DeliverabilitySimulationEmailOptions.ts';
import { DeliverabilitySimulationJobConfigDto } from '../models/DeliverabilitySimulationJobConfigDto.ts';
import { DeliverabilitySimulationJobDto } from '../models/DeliverabilitySimulationJobDto.ts';
import { DeliverabilitySimulationJobErrorSummaryDto } from '../models/DeliverabilitySimulationJobErrorSummaryDto.ts';
import { DeliverabilitySimulationJobEventDto } from '../models/DeliverabilitySimulationJobEventDto.ts';
import { DeliverabilitySimulationJobEventPageDto } from '../models/DeliverabilitySimulationJobEventPageDto.ts';
import { DeliverabilitySimulationJobTopErrorDto } from '../models/DeliverabilitySimulationJobTopErrorDto.ts';
import { DeliverabilitySimulationSmsOptions } from '../models/DeliverabilitySimulationSmsOptions.ts';
import { DeliverabilityTestDto } from '../models/DeliverabilityTestDto.ts';
import { DeliverabilityTestPageDto } from '../models/DeliverabilityTestPageDto.ts';
import { DeliveryStatusDto } from '../models/DeliveryStatusDto.ts';
import { DescribeDomainOptions } from '../models/DescribeDomainOptions.ts';
import { DescribeMailServerDomainResult } from '../models/DescribeMailServerDomainResult.ts';
import { DevicePreviewFeedbackDto } from '../models/DevicePreviewFeedbackDto.ts';
import { DevicePreviewFeedbackListDto } from '../models/DevicePreviewFeedbackListDto.ts';
import { DevicePreviewProviderProgressDto } from '../models/DevicePreviewProviderProgressDto.ts';
import { DevicePreviewRunDto } from '../models/DevicePreviewRunDto.ts';
import { DevicePreviewRunResultsDto } from '../models/DevicePreviewRunResultsDto.ts';
import { DevicePreviewScreenshotDto } from '../models/DevicePreviewScreenshotDto.ts';
import { DevicePreviewTargetDto } from '../models/DevicePreviewTargetDto.ts';
import { DomainDto } from '../models/DomainDto.ts';
import { DomainGroup } from '../models/DomainGroup.ts';
import { DomainGroupsDto } from '../models/DomainGroupsDto.ts';
import { DomainInformation } from '../models/DomainInformation.ts';
import { DomainIssuesDto } from '../models/DomainIssuesDto.ts';
import { DomainMonitorAlertSinkDto } from '../models/DomainMonitorAlertSinkDto.ts';
import { DomainMonitorDto } from '../models/DomainMonitorDto.ts';
import { DomainMonitorInsightsDto } from '../models/DomainMonitorInsightsDto.ts';
import { DomainMonitorRunDto } from '../models/DomainMonitorRunDto.ts';
import { DomainMonitorRunDueResult } from '../models/DomainMonitorRunDueResult.ts';
import { DomainMonitorRunNowResult } from '../models/DomainMonitorRunNowResult.ts';
import { DomainMonitorSeriesDto } from '../models/DomainMonitorSeriesDto.ts';
import { DomainMonitorSeriesPointDto } from '../models/DomainMonitorSeriesPointDto.ts';
import { DomainNameRecord } from '../models/DomainNameRecord.ts';
import { DomainPreview } from '../models/DomainPreview.ts';
import { DomainRegionGroup } from '../models/DomainRegionGroup.ts';
import { DomainRegionGroupsDto } from '../models/DomainRegionGroupsDto.ts';
import { DomainRegionInformation } from '../models/DomainRegionInformation.ts';
import { DownloadAttachmentDto } from '../models/DownloadAttachmentDto.ts';
import { Email } from '../models/Email.ts';
import { EmailAnalysis } from '../models/EmailAnalysis.ts';
import { EmailAvailableResult } from '../models/EmailAvailableResult.ts';
import { EmailContentMatchResult } from '../models/EmailContentMatchResult.ts';
import { EmailContentPartResult } from '../models/EmailContentPartResult.ts';
import { EmailFeatureCategoryName } from '../models/EmailFeatureCategoryName.ts';
import { EmailFeatureFamilyName } from '../models/EmailFeatureFamilyName.ts';
import { EmailFeatureFamilyStatistics } from '../models/EmailFeatureFamilyStatistics.ts';
import { EmailFeatureNames } from '../models/EmailFeatureNames.ts';
import { EmailFeatureOverview } from '../models/EmailFeatureOverview.ts';
import { EmailFeaturePlatformName } from '../models/EmailFeaturePlatformName.ts';
import { EmailFeaturePlatformStatistics } from '../models/EmailFeaturePlatformStatistics.ts';
import { EmailFeatureSupportFlags } from '../models/EmailFeatureSupportFlags.ts';
import { EmailFeatureSupportResult } from '../models/EmailFeatureSupportResult.ts';
import { EmailFeatureSupportStatusPercentage } from '../models/EmailFeatureSupportStatusPercentage.ts';
import { EmailFeatureVersionStatistics } from '../models/EmailFeatureVersionStatistics.ts';
import { EmailHtmlDto } from '../models/EmailHtmlDto.ts';
import { EmailLinksResult } from '../models/EmailLinksResult.ts';
import { EmailPreview } from '../models/EmailPreview.ts';
import { EmailPreviewUrls } from '../models/EmailPreviewUrls.ts';
import { EmailProjection } from '../models/EmailProjection.ts';
import { EmailRecipients } from '../models/EmailRecipients.ts';
import { EmailRecipientsProjection } from '../models/EmailRecipientsProjection.ts';
import { EmailScreenshotResult } from '../models/EmailScreenshotResult.ts';
import { EmailSignature } from '../models/EmailSignature.ts';
import { EmailSignatureParseResult } from '../models/EmailSignatureParseResult.ts';
import { EmailTextLinesResult } from '../models/EmailTextLinesResult.ts';
import { EmailThreadDto } from '../models/EmailThreadDto.ts';
import { EmailThreadItem } from '../models/EmailThreadItem.ts';
import { EmailThreadItemsDto } from '../models/EmailThreadItemsDto.ts';
import { EmailThreadProjection } from '../models/EmailThreadProjection.ts';
import { EmailValidationRequestDto } from '../models/EmailValidationRequestDto.ts';
import { EmailVerificationResult } from '../models/EmailVerificationResult.ts';
import { EmergencyAddress } from '../models/EmergencyAddress.ts';
import { EmergencyAddressDto } from '../models/EmergencyAddressDto.ts';
import { EmptyResponseDto } from '../models/EmptyResponseDto.ts';
import { EntityAutomationItemProjection } from '../models/EntityAutomationItemProjection.ts';
import { EntityEventItemProjection } from '../models/EntityEventItemProjection.ts';
import { EntityFavouriteItemProjection } from '../models/EntityFavouriteItemProjection.ts';
import { ExpirationDefaults } from '../models/ExpirationDefaults.ts';
import { ExpiredInboxDto } from '../models/ExpiredInboxDto.ts';
import { ExpiredInboxRecordProjection } from '../models/ExpiredInboxRecordProjection.ts';
import { ExportLink } from '../models/ExportLink.ts';
import { ExportOptions } from '../models/ExportOptions.ts';
import { ExportTransformerOptions } from '../models/ExportTransformerOptions.ts';
import { ExportTransformerResponse } from '../models/ExportTransformerResponse.ts';
import { ExportTransformerResultJobDto } from '../models/ExportTransformerResultJobDto.ts';
import { ExtractAttachmentTextOptions } from '../models/ExtractAttachmentTextOptions.ts';
import { ExtractAttachmentTextResult } from '../models/ExtractAttachmentTextResult.ts';
import { ExtractCodesOptions } from '../models/ExtractCodesOptions.ts';
import { ExtractCodesResult } from '../models/ExtractCodesResult.ts';
import { FakeEmailDto } from '../models/FakeEmailDto.ts';
import { FakeEmailPreview } from '../models/FakeEmailPreview.ts';
import { FakeEmailResult } from '../models/FakeEmailResult.ts';
import { FilterBouncedRecipientsOptions } from '../models/FilterBouncedRecipientsOptions.ts';
import { FilterBouncedRecipientsResult } from '../models/FilterBouncedRecipientsResult.ts';
import { FlushExpiredInboxesResult } from '../models/FlushExpiredInboxesResult.ts';
import { ForwardEmailOptions } from '../models/ForwardEmailOptions.ts';
import { GenerateBimiRecordOptions } from '../models/GenerateBimiRecordOptions.ts';
import { GenerateBimiRecordResults } from '../models/GenerateBimiRecordResults.ts';
import { GenerateDmarcRecordOptions } from '../models/GenerateDmarcRecordOptions.ts';
import { GenerateDmarcRecordResults } from '../models/GenerateDmarcRecordResults.ts';
import { GenerateMtaStsRecordOptions } from '../models/GenerateMtaStsRecordOptions.ts';
import { GenerateMtaStsRecordResults } from '../models/GenerateMtaStsRecordResults.ts';
import { GenerateStructuredContentAttachmentOptions } from '../models/GenerateStructuredContentAttachmentOptions.ts';
import { GenerateStructuredContentEmailOptions } from '../models/GenerateStructuredContentEmailOptions.ts';
import { GenerateStructuredContentSmsOptions } from '../models/GenerateStructuredContentSmsOptions.ts';
import { GenerateTlsReportingRecordOptions } from '../models/GenerateTlsReportingRecordOptions.ts';
import { GenerateTlsReportingRecordResults } from '../models/GenerateTlsReportingRecordResults.ts';
import { GetEmailScreenshotOptions } from '../models/GetEmailScreenshotOptions.ts';
import { GravatarUrl } from '../models/GravatarUrl.ts';
import { GroupContactsDto } from '../models/GroupContactsDto.ts';
import { GroupDto } from '../models/GroupDto.ts';
import { GroupProjection } from '../models/GroupProjection.ts';
import { GuestPortalDto } from '../models/GuestPortalDto.ts';
import { GuestPortalUserCreateDto } from '../models/GuestPortalUserCreateDto.ts';
import { GuestPortalUserDto } from '../models/GuestPortalUserDto.ts';
import { GuestPortalUserProjection } from '../models/GuestPortalUserProjection.ts';
import { HTMLValidationResult } from '../models/HTMLValidationResult.ts';
import { IPAddressResult } from '../models/IPAddressResult.ts';
import { ImageIssue } from '../models/ImageIssue.ts';
import { ImapAccessDetails } from '../models/ImapAccessDetails.ts';
import { ImapEmailProjection } from '../models/ImapEmailProjection.ts';
import { ImapFlagOperationOptions } from '../models/ImapFlagOperationOptions.ts';
import { ImapMailboxStatus } from '../models/ImapMailboxStatus.ts';
import { ImapServerFetchItem } from '../models/ImapServerFetchItem.ts';
import { ImapServerFetchResult } from '../models/ImapServerFetchResult.ts';
import { ImapServerGetResult } from '../models/ImapServerGetResult.ts';
import { ImapServerListOptions } from '../models/ImapServerListOptions.ts';
import { ImapServerListResult } from '../models/ImapServerListResult.ts';
import { ImapServerMailboxResult } from '../models/ImapServerMailboxResult.ts';
import { ImapServerSearchOptions } from '../models/ImapServerSearchOptions.ts';
import { ImapServerSearchResult } from '../models/ImapServerSearchResult.ts';
import { ImapServerStatusOptions } from '../models/ImapServerStatusOptions.ts';
import { ImapServerStatusResult } from '../models/ImapServerStatusResult.ts';
import { ImapSmtpAccessDetails } from '../models/ImapSmtpAccessDetails.ts';
import { ImapSmtpAccessServers } from '../models/ImapSmtpAccessServers.ts';
import { ImapUpdateFlagsOptions } from '../models/ImapUpdateFlagsOptions.ts';
import { InboxByEmailAddressResult } from '../models/InboxByEmailAddressResult.ts';
import { InboxByNameResult } from '../models/InboxByNameResult.ts';
import { InboxDto } from '../models/InboxDto.ts';
import { InboxExistsDto } from '../models/InboxExistsDto.ts';
import { InboxForwarderDto } from '../models/InboxForwarderDto.ts';
import { InboxForwarderEventDto } from '../models/InboxForwarderEventDto.ts';
import { InboxForwarderEventProjection } from '../models/InboxForwarderEventProjection.ts';
import { InboxForwarderTestOptions } from '../models/InboxForwarderTestOptions.ts';
import { InboxForwarderTestResult } from '../models/InboxForwarderTestResult.ts';
import { InboxIdItem } from '../models/InboxIdItem.ts';
import { InboxIdsResult } from '../models/InboxIdsResult.ts';
import { InboxPreview } from '../models/InboxPreview.ts';
import { InboxReplierDto } from '../models/InboxReplierDto.ts';
import { InboxReplierEventProjection } from '../models/InboxReplierEventProjection.ts';
import { InboxRetentionPolicyDto } from '../models/InboxRetentionPolicyDto.ts';
import { InboxRetentionPolicyOptionalDto } from '../models/InboxRetentionPolicyOptionalDto.ts';
import { InboxRulesetTestResult } from '../models/InboxRulesetTestResult.ts';
import { InlineObject1 } from '../models/InlineObject1.ts';
import { InvokeTransformerOptions } from '../models/InvokeTransformerOptions.ts';
import { JSONSchemaDto } from '../models/JSONSchemaDto.ts';
import { LinkIssue } from '../models/LinkIssue.ts';
import { ListUnsubscribeRecipientProjection } from '../models/ListUnsubscribeRecipientProjection.ts';
import { LookupBimiDomainOptions } from '../models/LookupBimiDomainOptions.ts';
import { LookupBimiDomainResults } from '../models/LookupBimiDomainResults.ts';
import { LookupDmarcDomainOptions } from '../models/LookupDmarcDomainOptions.ts';
import { LookupDmarcDomainResults } from '../models/LookupDmarcDomainResults.ts';
import { LookupMtaStsDomainOptions } from '../models/LookupMtaStsDomainOptions.ts';
import { LookupMtaStsDomainResults } from '../models/LookupMtaStsDomainResults.ts';
import { LookupMxRecordsOptions } from '../models/LookupMxRecordsOptions.ts';
import { LookupMxRecordsResults } from '../models/LookupMxRecordsResults.ts';
import { LookupTlsReportingDomainOptions } from '../models/LookupTlsReportingDomainOptions.ts';
import { LookupTlsReportingDomainResults } from '../models/LookupTlsReportingDomainResults.ts';
import { MatchOption } from '../models/MatchOption.ts';
import { MatchOptions } from '../models/MatchOptions.ts';
import { MissedEmailDto } from '../models/MissedEmailDto.ts';
import { MissedEmailProjection } from '../models/MissedEmailProjection.ts';
import { MissedSmsDto } from '../models/MissedSmsDto.ts';
import { MissedSmsProjection } from '../models/MissedSmsProjection.ts';
import { NameServerRecord } from '../models/NameServerRecord.ts';
import { NewFakeEmailAddressResult } from '../models/NewFakeEmailAddressResult.ts';
import { OptInConsentOptions } from '../models/OptInConsentOptions.ts';
import { OptInConsentSendResult } from '../models/OptInConsentSendResult.ts';
import { OptInIdentityProjection } from '../models/OptInIdentityProjection.ts';
import { OptInSendingConsentDto } from '../models/OptInSendingConsentDto.ts';
import { OptionalConnectorDto } from '../models/OptionalConnectorDto.ts';
import { OptionalConnectorImapConnectionDto } from '../models/OptionalConnectorImapConnectionDto.ts';
import { OptionalConnectorSmtpConnectionDto } from '../models/OptionalConnectorSmtpConnectionDto.ts';
import { OptionalConnectorSyncSettingsDto } from '../models/OptionalConnectorSyncSettingsDto.ts';
import { OrganizationInboxProjection } from '../models/OrganizationInboxProjection.ts';
import { PageAITransformMappingProjection } from '../models/PageAITransformMappingProjection.ts';
import { PageAITransformProjection } from '../models/PageAITransformProjection.ts';
import { PageAITransformResultProjection } from '../models/PageAITransformResultProjection.ts';
import { PageAlias } from '../models/PageAlias.ts';
import { PageAliasThreadProjection } from '../models/PageAliasThreadProjection.ts';
import { PageAttachmentEntity } from '../models/PageAttachmentEntity.ts';
import { PageBouncedEmail } from '../models/PageBouncedEmail.ts';
import { PageBouncedRecipients } from '../models/PageBouncedRecipients.ts';
import { PageComplaint } from '../models/PageComplaint.ts';
import { PageConnector } from '../models/PageConnector.ts';
import { PageConnectorEvents } from '../models/PageConnectorEvents.ts';
import { PageContactProjection } from '../models/PageContactProjection.ts';
import { PageDeliveryStatus } from '../models/PageDeliveryStatus.ts';
import { PageDevicePreviewRunProjection } from '../models/PageDevicePreviewRunProjection.ts';
import { PageEmailPreview } from '../models/PageEmailPreview.ts';
import { PageEmailProjection } from '../models/PageEmailProjection.ts';
import { PageEmailThreadProjection } from '../models/PageEmailThreadProjection.ts';
import { PageEmailValidationRequest } from '../models/PageEmailValidationRequest.ts';
import { PageEntityAutomationItems } from '../models/PageEntityAutomationItems.ts';
import { PageEntityEventItems } from '../models/PageEntityEventItems.ts';
import { PageEntityFavouriteItems } from '../models/PageEntityFavouriteItems.ts';
import { PageExpiredInboxRecordProjection } from '../models/PageExpiredInboxRecordProjection.ts';
import { PageGroupProjection } from '../models/PageGroupProjection.ts';
import { PageGuestPortalUsers } from '../models/PageGuestPortalUsers.ts';
import { PageInboxForwarderDto } from '../models/PageInboxForwarderDto.ts';
import { PageInboxForwarderEvents } from '../models/PageInboxForwarderEvents.ts';
import { PageInboxProjection } from '../models/PageInboxProjection.ts';
import { PageInboxReplierDto } from '../models/PageInboxReplierDto.ts';
import { PageInboxReplierEvents } from '../models/PageInboxReplierEvents.ts';
import { PageInboxTags } from '../models/PageInboxTags.ts';
import { PageListUnsubscribeRecipients } from '../models/PageListUnsubscribeRecipients.ts';
import { PageMissedEmailProjection } from '../models/PageMissedEmailProjection.ts';
import { PageMissedSmsProjection } from '../models/PageMissedSmsProjection.ts';
import { PageOptInIdentityProjection } from '../models/PageOptInIdentityProjection.ts';
import { PageOrganizationInboxProjection } from '../models/PageOrganizationInboxProjection.ts';
import { PagePhoneMessageThreadItemProjection } from '../models/PagePhoneMessageThreadItemProjection.ts';
import { PagePhoneMessageThreadProjection } from '../models/PagePhoneMessageThreadProjection.ts';
import { PagePhoneNumberProjection } from '../models/PagePhoneNumberProjection.ts';
import { PagePhoneNumberReleaseProjection } from '../models/PagePhoneNumberReleaseProjection.ts';
import { PagePlusAddressProjection } from '../models/PagePlusAddressProjection.ts';
import { PageReputationItems } from '../models/PageReputationItems.ts';
import { PageRulesetDto } from '../models/PageRulesetDto.ts';
import { PageScheduledJobs } from '../models/PageScheduledJobs.ts';
import { PageSentEmailProjection } from '../models/PageSentEmailProjection.ts';
import { PageSentEmailWithQueueProjection } from '../models/PageSentEmailWithQueueProjection.ts';
import { PageSentSmsProjection } from '../models/PageSentSmsProjection.ts';
import { PageSmsProjection } from '../models/PageSmsProjection.ts';
import { PageTableData } from '../models/PageTableData.ts';
import { PageTemplateProjection } from '../models/PageTemplateProjection.ts';
import { PageTrackingPixelProjection } from '../models/PageTrackingPixelProjection.ts';
import { PageUnknownMissedEmailProjection } from '../models/PageUnknownMissedEmailProjection.ts';
import { PageWebhookEndpointProjection } from '../models/PageWebhookEndpointProjection.ts';
import { PageWebhookProjection } from '../models/PageWebhookProjection.ts';
import { PageWebhookResult } from '../models/PageWebhookResult.ts';
import { PageableObject } from '../models/PageableObject.ts';
import { Pagination } from '../models/Pagination.ts';
import { PhoneMessageThreadItemProjection } from '../models/PhoneMessageThreadItemProjection.ts';
import { PhoneMessageThreadProjection } from '../models/PhoneMessageThreadProjection.ts';
import { PhoneNumberDto } from '../models/PhoneNumberDto.ts';
import { PhoneNumberProjection } from '../models/PhoneNumberProjection.ts';
import { PhoneNumberReleaseProjection } from '../models/PhoneNumberReleaseProjection.ts';
import { PhoneNumberValidationDto } from '../models/PhoneNumberValidationDto.ts';
import { PhonePlanAvailability } from '../models/PhonePlanAvailability.ts';
import { PhonePlanAvailabilityItem } from '../models/PhonePlanAvailabilityItem.ts';
import { PhonePlanDto } from '../models/PhonePlanDto.ts';
import { PhoneSummaryCountryDto } from '../models/PhoneSummaryCountryDto.ts';
import { PhoneSummaryDto } from '../models/PhoneSummaryDto.ts';
import { PlanSummaryDto } from '../models/PlanSummaryDto.ts';
import { PlusAddressDto } from '../models/PlusAddressDto.ts';
import { PlusAddressProjection } from '../models/PlusAddressProjection.ts';
import { ProviderSettings } from '../models/ProviderSettings.ts';
import { RawEmailJson } from '../models/RawEmailJson.ts';
import { Recipient } from '../models/Recipient.ts';
import { RecipientProjection } from '../models/RecipientProjection.ts';
import { ReplyForSms } from '../models/ReplyForSms.ts';
import { ReplyToAliasEmailOptions } from '../models/ReplyToAliasEmailOptions.ts';
import { ReplyToEmailOptions } from '../models/ReplyToEmailOptions.ts';
import { ReputationItemProjection } from '../models/ReputationItemProjection.ts';
import { RulesetDto } from '../models/RulesetDto.ts';
import { RulesetTestOptions } from '../models/RulesetTestOptions.ts';
import { ScheduledJob } from '../models/ScheduledJob.ts';
import { ScheduledJobDto } from '../models/ScheduledJobDto.ts';
import { SearchEmailsOptions } from '../models/SearchEmailsOptions.ts';
import { SearchInboxesOptions } from '../models/SearchInboxesOptions.ts';
import { SendEmailBodyPart } from '../models/SendEmailBodyPart.ts';
import { SendEmailOptions } from '../models/SendEmailOptions.ts';
import { SendOptInConsentEmailOptions } from '../models/SendOptInConsentEmailOptions.ts';
import { SendSMTPEnvelopeOptions } from '../models/SendSMTPEnvelopeOptions.ts';
import { SendWithQueueResult } from '../models/SendWithQueueResult.ts';
import { Sender } from '../models/Sender.ts';
import { SenderProjection } from '../models/SenderProjection.ts';
import { SentEmailDto } from '../models/SentEmailDto.ts';
import { SentEmailProjection } from '../models/SentEmailProjection.ts';
import { SentSmsDto } from '../models/SentSmsDto.ts';
import { SentSmsProjection } from '../models/SentSmsProjection.ts';
import { ServerEndpoints } from '../models/ServerEndpoints.ts';
import { SetInboxFavouritedOptions } from '../models/SetInboxFavouritedOptions.ts';
import { SetPhoneFavouritedOptions } from '../models/SetPhoneFavouritedOptions.ts';
import { SimpleSendEmailOptions } from '../models/SimpleSendEmailOptions.ts';
import { SmsDto } from '../models/SmsDto.ts';
import { SmsMatchOption } from '../models/SmsMatchOption.ts';
import { SmsPreview } from '../models/SmsPreview.ts';
import { SmsProjection } from '../models/SmsProjection.ts';
import { SmsReplyOptions } from '../models/SmsReplyOptions.ts';
import { SmsSendOptions } from '../models/SmsSendOptions.ts';
import { SmtpAccessDetails } from '../models/SmtpAccessDetails.ts';
import { SortObject } from '../models/SortObject.ts';
import { SpellingIssue } from '../models/SpellingIssue.ts';
import { StructuredContentResultDto } from '../models/StructuredContentResultDto.ts';
import { StructuredOutputSchema } from '../models/StructuredOutputSchema.ts';
import { StructuredOutputSchemaValidation } from '../models/StructuredOutputSchemaValidation.ts';
import { TemplateDto } from '../models/TemplateDto.ts';
import { TemplatePreview } from '../models/TemplatePreview.ts';
import { TemplateProjection } from '../models/TemplateProjection.ts';
import { TemplateVariable } from '../models/TemplateVariable.ts';
import { TenantReputationFindingDto } from '../models/TenantReputationFindingDto.ts';
import { TenantReputationFindingsDto } from '../models/TenantReputationFindingsDto.ts';
import { TenantReputationStatusRowDto } from '../models/TenantReputationStatusRowDto.ts';
import { TenantReputationStatusSummaryDto } from '../models/TenantReputationStatusSummaryDto.ts';
import { TestInboxRulesetSendingOptions } from '../models/TestInboxRulesetSendingOptions.ts';
import { TestNewInboxForwarderOptions } from '../models/TestNewInboxForwarderOptions.ts';
import { TestNewInboxRulesetOptions } from '../models/TestNewInboxRulesetOptions.ts';
import { TestPhoneNumberOptions } from '../models/TestPhoneNumberOptions.ts';
import { TestRulesetReceivingOptions } from '../models/TestRulesetReceivingOptions.ts';
import { TestRulesetReceivingResult } from '../models/TestRulesetReceivingResult.ts';
import { TestRulesetSendingResult } from '../models/TestRulesetSendingResult.ts';
import { TotpDeviceCodeDto } from '../models/TotpDeviceCodeDto.ts';
import { TotpDeviceDto } from '../models/TotpDeviceDto.ts';
import { TotpDeviceOptionalDto } from '../models/TotpDeviceOptionalDto.ts';
import { TrackingPixelDto } from '../models/TrackingPixelDto.ts';
import { TrackingPixelProjection } from '../models/TrackingPixelProjection.ts';
import { UnknownMissedEmailProjection } from '../models/UnknownMissedEmailProjection.ts';
import { UnreadCount } from '../models/UnreadCount.ts';
import { UnseenErrorCountDto } from '../models/UnseenErrorCountDto.ts';
import { UpdateAliasOptions } from '../models/UpdateAliasOptions.ts';
import { UpdateCampaignProbeOptions } from '../models/UpdateCampaignProbeOptions.ts';
import { UpdateDeliverabilityTestOptions } from '../models/UpdateDeliverabilityTestOptions.ts';
import { UpdateDevicePreviewFeedbackOptions } from '../models/UpdateDevicePreviewFeedbackOptions.ts';
import { UpdateDomainMonitorOptions } from '../models/UpdateDomainMonitorOptions.ts';
import { UpdateDomainOptions } from '../models/UpdateDomainOptions.ts';
import { UpdateGroupContacts } from '../models/UpdateGroupContacts.ts';
import { UpdateImapAccessOptions } from '../models/UpdateImapAccessOptions.ts';
import { UpdateInboxOptions } from '../models/UpdateInboxOptions.ts';
import { UpdateInboxReplierOptions } from '../models/UpdateInboxReplierOptions.ts';
import { UpdatePhoneNumberOptions } from '../models/UpdatePhoneNumberOptions.ts';
import { UpdateSmtpAccessOptions } from '../models/UpdateSmtpAccessOptions.ts';
import { UploadAttachmentOptions } from '../models/UploadAttachmentOptions.ts';
import { UserInfoDto } from '../models/UserInfoDto.ts';
import { ValidateEmailAddressListOptions } from '../models/ValidateEmailAddressListOptions.ts';
import { ValidateEmailAddressListResult } from '../models/ValidateEmailAddressListResult.ts';
import { ValidatePhoneNumberOptions } from '../models/ValidatePhoneNumberOptions.ts';
import { ValidationDto } from '../models/ValidationDto.ts';
import { ValidationMessage } from '../models/ValidationMessage.ts';
import { VerifyEmailAddressOptions } from '../models/VerifyEmailAddressOptions.ts';
import { VerifyWebhookSignatureOptions } from '../models/VerifyWebhookSignatureOptions.ts';
import { VerifyWebhookSignatureResults } from '../models/VerifyWebhookSignatureResults.ts';
import { WaitForConditions } from '../models/WaitForConditions.ts';
import { WaitForSingleSmsOptions } from '../models/WaitForSingleSmsOptions.ts';
import { WaitForSmsConditions } from '../models/WaitForSmsConditions.ts';
import { WebhookBouncePayload } from '../models/WebhookBouncePayload.ts';
import { WebhookBounceRecipientPayload } from '../models/WebhookBounceRecipientPayload.ts';
import { WebhookDeliveryStatusPayload } from '../models/WebhookDeliveryStatusPayload.ts';
import { WebhookDto } from '../models/WebhookDto.ts';
import { WebhookEmailOpenedPayload } from '../models/WebhookEmailOpenedPayload.ts';
import { WebhookEmailReadPayload } from '../models/WebhookEmailReadPayload.ts';
import { WebhookEndpointProjection } from '../models/WebhookEndpointProjection.ts';
import { WebhookHeaderNameValue } from '../models/WebhookHeaderNameValue.ts';
import { WebhookHeaders } from '../models/WebhookHeaders.ts';
import { WebhookNewAITransformResultPayload } from '../models/WebhookNewAITransformResultPayload.ts';
import { WebhookNewAttachmentPayload } from '../models/WebhookNewAttachmentPayload.ts';
import { WebhookNewContactPayload } from '../models/WebhookNewContactPayload.ts';
import { WebhookNewEmailPayload } from '../models/WebhookNewEmailPayload.ts';
import { WebhookNewSmsPayload } from '../models/WebhookNewSmsPayload.ts';
import { WebhookProjection } from '../models/WebhookProjection.ts';
import { WebhookRedriveAllResult } from '../models/WebhookRedriveAllResult.ts';
import { WebhookRedriveResult } from '../models/WebhookRedriveResult.ts';
import { WebhookResultDto } from '../models/WebhookResultDto.ts';
import { WebhookTestRequest } from '../models/WebhookTestRequest.ts';
import { WebhookTestResponse } from '../models/WebhookTestResponse.ts';
import { WebhookTestResult } from '../models/WebhookTestResult.ts';

import { AIControllerApiRequestFactory, AIControllerApiResponseProcessor} from "../apis/AIControllerApi.ts";
export class ObservableAIControllerApi {
    private requestFactory: AIControllerApiRequestFactory;
    private responseProcessor: AIControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AIControllerApiRequestFactory,
        responseProcessor?: AIControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AIControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AIControllerApiResponseProcessor();
    }

    /**
     * Save an AI transform instructions and schema for use with webhooks and automations
     * Create a transformer for reuse in automations
     * @param aITransformCreateOptions 
     */
    public createTransformer(aITransformCreateOptions: AITransformCreateOptions, options?: Configuration): Observable<AITransformDto> {
        const requestContextPromise = this.requestFactory.createTransformer(aITransformCreateOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTransformer(rsp)));
            }));
    }
 
    /**
     * Create AI transformer mappings to other entities
     * Create transformer mapping
     * @param createAITransformerMappingOptions 
     */
    public createTransformerMappings(createAITransformerMappingOptions: CreateAITransformerMappingOptions, options?: Configuration): Observable<AITransformMappingDto> {
        const requestContextPromise = this.requestFactory.createTransformerMappings(createAITransformerMappingOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTransformerMappings(rsp)));
            }));
    }
 
    /**
     * Delete all AI transformer mappings
     * Delete all transformer mapping
     */
    public deleteAllTransformerMappings(options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllTransformerMappings(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllTransformerMappings(rsp)));
            }));
    }
 
    /**
     * Delete an AI transformer and schemas by ID
     * Delete a transformer
     * @param id 
     */
    public deleteTransformer(id: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteTransformer(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTransformer(rsp)));
            }));
    }
 
    /**
     * Delete an AI transformer mapping
     * Delete transformer mapping
     * @param id ID of transform mapping
     */
    public deleteTransformerMapping(id: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteTransformerMapping(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTransformerMapping(rsp)));
            }));
    }
 
    /**
     * Delete all AI transformers and schemas
     * Delete all transformers
     */
    public deleteTransformers(options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteTransformers(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTransformers(rsp)));
            }));
    }
 
    /**
     * Export AI transformer results in formats such as Excel, CSV, XML etc.
     * Export transformer results
     * @param exportTransformerOptions 
     */
    public exportTransformerResults(exportTransformerOptions: ExportTransformerOptions, options?: Configuration): Observable<ExportTransformerResponse> {
        const requestContextPromise = this.requestFactory.exportTransformerResults(exportTransformerOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportTransformerResults(rsp)));
            }));
    }
 
    /**
     * Use output schemas to extract data from an attachment using AI
     * Generate structured content for an attachment
     * @param generateStructuredContentAttachmentOptions 
     */
    public generateStructuredContentFromAttachment(generateStructuredContentAttachmentOptions: GenerateStructuredContentAttachmentOptions, options?: Configuration): Observable<StructuredContentResultDto> {
        const requestContextPromise = this.requestFactory.generateStructuredContentFromAttachment(generateStructuredContentAttachmentOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateStructuredContentFromAttachment(rsp)));
            }));
    }
 
    /**
     * Use output schemas to extract data from an email using AI
     * Generate structured content for an email
     * @param generateStructuredContentEmailOptions 
     */
    public generateStructuredContentFromEmail(generateStructuredContentEmailOptions: GenerateStructuredContentEmailOptions, options?: Configuration): Observable<StructuredContentResultDto> {
        const requestContextPromise = this.requestFactory.generateStructuredContentFromEmail(generateStructuredContentEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateStructuredContentFromEmail(rsp)));
            }));
    }
 
    /**
     * Use output schemas to extract data from an SMS using AI
     * Generate structured content for a TXT message
     * @param generateStructuredContentSmsOptions 
     */
    public generateStructuredContentFromSms(generateStructuredContentSmsOptions: GenerateStructuredContentSmsOptions, options?: Configuration): Observable<StructuredContentResultDto> {
        const requestContextPromise = this.requestFactory.generateStructuredContentFromSms(generateStructuredContentSmsOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateStructuredContentFromSms(rsp)));
            }));
    }
 
    /**
     * Get the job status for an export
     * Get export transformer results job
     * @param id 
     */
    public getExportTransformerResultsJob(id: string, options?: Configuration): Observable<ExportTransformerResultJobDto> {
        const requestContextPromise = this.requestFactory.getExportTransformerResultsJob(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExportTransformerResultsJob(rsp)));
            }));
    }
 
    /**
     * Get AI transformer and schemas by ID
     * Get a transformer
     * @param id 
     */
    public getTransformer(id: string, options?: Configuration): Observable<AITransformDto> {
        const requestContextPromise = this.requestFactory.getTransformer(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransformer(rsp)));
            }));
    }
 
    /**
     * Get an AI transformer mapping
     * Get transformer mapping
     * @param id ID of transform mapping
     */
    public getTransformerMapping(id: string, options?: Configuration): Observable<AITransformMappingDto> {
        const requestContextPromise = this.requestFactory.getTransformerMapping(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransformerMapping(rsp)));
            }));
    }
 
    /**
     * Get AI transformer mappings to other entities
     * Get transformer mappings
     * @param aiTransformId 
     * @param entityId 
     * @param entityType 
     * @param page 
     * @param size Optional page size. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getTransformerMappings(aiTransformId?: string, entityId?: string, entityType?: 'INBOX' | 'PHONE', page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Observable<PageAITransformMappingProjection> {
        const requestContextPromise = this.requestFactory.getTransformerMappings(aiTransformId, entityId, entityType, page, size, sort, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransformerMappings(rsp)));
            }));
    }
 
    /**
     * Get AI transformer result
     * Get transformer result
     * @param id ID of transform result
     */
    public getTransformerResult(id: string, options?: Configuration): Observable<AITransformResultDto> {
        const requestContextPromise = this.requestFactory.getTransformerResult(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransformerResult(rsp)));
            }));
    }
 
    /**
     * Get AI transformer results
     * Get transformer results
     * @param emailId 
     * @param smsId 
     * @param attachmentId 
     * @param aiTransformId 
     * @param aiTransformMappingId 
     * @param entityId 
     * @param entityType 
     * @param page 
     * @param size Optional page size. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getTransformerResults(emailId?: string, smsId?: string, attachmentId?: string, aiTransformId?: string, aiTransformMappingId?: string, entityId?: string, entityType?: 'INBOX' | 'PHONE', page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Observable<PageAITransformResultProjection> {
        const requestContextPromise = this.requestFactory.getTransformerResults(emailId, smsId, attachmentId, aiTransformId, aiTransformMappingId, entityId, entityType, page, size, sort, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransformerResults(rsp)));
            }));
    }
 
    /**
     * Get AI transformer results in table format
     * Get transformer results table
     * @param includeMetaData 
     * @param flattenArraysToRows 
     * @param emailId 
     * @param smsId 
     * @param attachmentId 
     * @param aiTransformId 
     * @param aiTransformMappingId 
     * @param entityId 
     * @param entityType 
     * @param page 
     * @param size Optional page size. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getTransformerResultsTable(includeMetaData: boolean, flattenArraysToRows: boolean, emailId?: string, smsId?: string, attachmentId?: string, aiTransformId?: string, aiTransformMappingId?: string, entityId?: string, entityType?: 'INBOX' | 'PHONE', page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Observable<PageTableData> {
        const requestContextPromise = this.requestFactory.getTransformerResultsTable(includeMetaData, flattenArraysToRows, emailId, smsId, attachmentId, aiTransformId, aiTransformMappingId, entityId, entityType, page, size, sort, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransformerResultsTable(rsp)));
            }));
    }
 
    /**
     * List all AI transforms
     * List transformers
     * @param page 
     * @param size Optional page size in SMS list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param include Optional list of IDs to include in result
     */
    public getTransformers(page?: number, size?: number, sort?: 'ASC' | 'DESC', include?: Array<string>, options?: Configuration): Observable<PageAITransformProjection> {
        const requestContextPromise = this.requestFactory.getTransformers(page, size, sort, include, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransformers(rsp)));
            }));
    }
 
    /**
     * Execute an AI transformer to generate structured content
     * Invoke a transformer
     * @param invokeTransformerOptions 
     */
    public invokeTransformer(invokeTransformerOptions: InvokeTransformerOptions, options?: Configuration): Observable<ConditionalStructuredContentResult> {
        const requestContextPromise = this.requestFactory.invokeTransformer(invokeTransformerOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.invokeTransformer(rsp)));
            }));
    }
 
    /**
     * Evaluate transform mapping match conditions for given email, sms, or attachment
     * Test transformer mapping match result
     * @param id ID of transform mapping
     * @param emailId 
     * @param smsId 
     * @param attachmentId 
     */
    public testTransformerMappingMatch(id: string, emailId?: string, smsId?: string, attachmentId?: string, options?: Configuration): Observable<AITransformMappingMatchResult> {
        const requestContextPromise = this.requestFactory.testTransformerMappingMatch(id, emailId, smsId, attachmentId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testTransformerMappingMatch(rsp)));
            }));
    }
 
    /**
     * Check if a schema is valid and can be used to extract data using AI
     * Validate structured content schema
     * @param structuredOutputSchema 
     */
    public validateStructuredOutputSchema(structuredOutputSchema: StructuredOutputSchema, options?: Configuration): Observable<StructuredOutputSchemaValidation> {
        const requestContextPromise = this.requestFactory.validateStructuredOutputSchema(structuredOutputSchema, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validateStructuredOutputSchema(rsp)));
            }));
    }
 
}

import { AliasControllerApiRequestFactory, AliasControllerApiResponseProcessor} from "../apis/AliasControllerApi.ts";
export class ObservableAliasControllerApi {
    private requestFactory: AliasControllerApiRequestFactory;
    private responseProcessor: AliasControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AliasControllerApiRequestFactory,
        responseProcessor?: AliasControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AliasControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AliasControllerApiResponseProcessor();
    }

    /**
     * Email aliases use a MailSlurp randomly generated email address (or a custom domain inbox that you provide) to mask or proxy a real email address. Emails sent to the alias address will be forwarded to the hidden email address it was created for. If you want to send a reply use the threadId attached
     * Create an email alias. Must be verified by clicking link inside verification email that will be sent to the address. Once verified the alias will be active.
     * @param createAliasOptions 
     */
    public createAlias(createAliasOptions: CreateAliasOptions, options?: Configuration): Observable<AliasDto> {
        const requestContextPromise = this.requestFactory.createAlias(createAliasOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAlias(rsp)));
            }));
    }
 
    /**
     * Delete an email alias
     * @param aliasId 
     */
    public deleteAlias(aliasId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAlias(aliasId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAlias(rsp)));
            }));
    }
 
    /**
     * Get an email alias by ID
     * Get an email alias
     * @param aliasId 
     */
    public getAlias(aliasId: string, options?: Configuration): Observable<AliasDto> {
        const requestContextPromise = this.requestFactory.getAlias(aliasId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAlias(rsp)));
            }));
    }
 
    /**
     * Get paginated emails for an alias by ID
     * Get emails for an alias
     * @param aliasId 
     * @param page Optional page index alias email list pagination
     * @param size Optional page size alias email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by sent after given date time
     * @param before Optional filter by sent before given date time
     */
    public getAliasEmails(aliasId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageEmailProjection> {
        const requestContextPromise = this.requestFactory.getAliasEmails(aliasId, page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAliasEmails(rsp)));
            }));
    }
 
    /**
     * Returns threads created for an email alias in paginated form
     * Get threads created for an alias
     * @param aliasId 
     * @param page Optional page index in thread list pagination
     * @param size Optional page size in thread list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by sent after given date time
     * @param before Optional filter by sent before given date time
     */
    public getAliasThreads(aliasId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageAliasThreadProjection> {
        const requestContextPromise = this.requestFactory.getAliasThreads(aliasId, page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAliasThreads(rsp)));
            }));
    }
 
    /**
     * Get all email aliases in paginated form
     * Get all email aliases you have created
     * @param search Optional search term
     * @param page Optional page index in alias list pagination
     * @param size Optional page size in alias list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAliases(search?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageAlias> {
        const requestContextPromise = this.requestFactory.getAliases(search, page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAliases(rsp)));
            }));
    }
 
    /**
     * Return a thread associated with an alias
     * Get a thread
     * @param threadId 
     */
    public getThread(threadId: string, options?: Configuration): Observable<AliasThreadProjection> {
        const requestContextPromise = this.requestFactory.getThread(threadId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getThread(rsp)));
            }));
    }
 
    /**
     * Returns threads created for all aliases in paginated form
     * Get all threads
     * @param page Optional page index in thread list pagination
     * @param size Optional page size in thread list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by sent after given date time
     * @param before Optional filter by sent before given date time
     */
    public getThreadsPaginated(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageAliasThreadProjection> {
        const requestContextPromise = this.requestFactory.getThreadsPaginated(page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getThreadsPaginated(rsp)));
            }));
    }
 
    /**
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * Reply to an email
     * @param aliasId ID of the alias that email belongs to
     * @param emailId ID of the email that should be replied to
     * @param replyToAliasEmailOptions 
     */
    public replyToAliasEmail(aliasId: string, emailId: string, replyToAliasEmailOptions: ReplyToAliasEmailOptions, options?: Configuration): Observable<SentEmailDto> {
        const requestContextPromise = this.requestFactory.replyToAliasEmail(aliasId, emailId, replyToAliasEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replyToAliasEmail(rsp)));
            }));
    }
 
    /**
     * Send an email from an alias. Replies to the email will be forwarded to the alias masked email address
     * Send an email from an alias inbox
     * @param aliasId 
     * @param sendEmailOptions 
     */
    public sendAliasEmail(aliasId: string, sendEmailOptions: SendEmailOptions, options?: Configuration): Observable<SentEmailDto> {
        const requestContextPromise = this.requestFactory.sendAliasEmail(aliasId, sendEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendAliasEmail(rsp)));
            }));
    }
 
    /**
     * Update an email alias
     * @param aliasId 
     * @param updateAliasOptions 
     */
    public updateAlias(aliasId: string, updateAliasOptions: UpdateAliasOptions, options?: Configuration): Observable<AliasDto> {
        const requestContextPromise = this.requestFactory.updateAlias(aliasId, updateAliasOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAlias(rsp)));
            }));
    }
 
}

import { ApiAuditLogControllerApiRequestFactory, ApiAuditLogControllerApiResponseProcessor} from "../apis/ApiAuditLogControllerApi.ts";
export class ObservableApiAuditLogControllerApi {
    private requestFactory: ApiAuditLogControllerApiRequestFactory;
    private responseProcessor: ApiAuditLogControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiAuditLogControllerApiRequestFactory,
        responseProcessor?: ApiAuditLogControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiAuditLogControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiAuditLogControllerApiResponseProcessor();
    }

    /**
     * @param eventId 
     * @param since 
     * @param before 
     */
    public getAuditLogByEventId(eventId: string, since?: Date, before?: Date, options?: Configuration): Observable<AuditLogEventDto> {
        const requestContextPromise = this.requestFactory.getAuditLogByEventId(eventId, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAuditLogByEventId(rsp)));
            }));
    }
 
    /**
     * @param since 
     * @param before 
     * @param action 
     * @param userId 
     * @param actorUserId 
     * @param targetUserId 
     * @param resourceType 
     * @param resourceId 
     * @param outcome 
     * @param requestId 
     * @param ipAddress 
     * @param pageSize 
     * @param cursor 
     */
    public getAuditLogs(since?: Date, before?: Date, action?: string, userId?: string, actorUserId?: string, targetUserId?: string, resourceType?: string, resourceId?: string, outcome?: string, requestId?: string, ipAddress?: string, pageSize?: number, cursor?: string, options?: Configuration): Observable<AuditLogPageDto> {
        const requestContextPromise = this.requestFactory.getAuditLogs(since, before, action, userId, actorUserId, targetUserId, resourceType, resourceId, outcome, requestId, ipAddress, pageSize, cursor, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAuditLogs(rsp)));
            }));
    }
 
    /**
     * @param auditLogSearchOptions 
     */
    public searchAuditLogs(auditLogSearchOptions: AuditLogSearchOptions, options?: Configuration): Observable<AuditLogPageDto> {
        const requestContextPromise = this.requestFactory.searchAuditLogs(auditLogSearchOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchAuditLogs(rsp)));
            }));
    }
 
}

import { AttachmentControllerApiRequestFactory, AttachmentControllerApiResponseProcessor} from "../apis/AttachmentControllerApi.ts";
export class ObservableAttachmentControllerApi {
    private requestFactory: AttachmentControllerApiRequestFactory;
    private responseProcessor: AttachmentControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AttachmentControllerApiRequestFactory,
        responseProcessor?: AttachmentControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AttachmentControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AttachmentControllerApiResponseProcessor();
    }

    /**
     * Delete all attachments
     * Delete all attachments
     */
    public deleteAllAttachments(options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllAttachments(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllAttachments(rsp)));
            }));
    }
 
    /**
     * Delete an attachment
     * Delete an attachment
     * @param attachmentId ID of attachment
     */
    public deleteAttachment(attachmentId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAttachment(attachmentId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAttachment(rsp)));
            }));
    }
 
    /**
     * Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
     * Get email attachment as base64 encoded string as alternative to binary responses. To read the content decode the Base64 encoded contents.
     * @param attachmentId ID of attachment
     */
    public downloadAttachmentAsBase64Encoded(attachmentId: string, options?: Configuration): Observable<DownloadAttachmentDto> {
        const requestContextPromise = this.requestFactory.downloadAttachmentAsBase64Encoded(attachmentId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadAttachmentAsBase64Encoded(rsp)));
            }));
    }
 
    /**
     * Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * Download attachments. Get email attachment bytes. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints.
     * @param attachmentId ID of attachment
     */
    public downloadAttachmentAsBytes(attachmentId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.downloadAttachmentAsBytes(attachmentId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadAttachmentAsBytes(rsp)));
            }));
    }
 
    /**
     * Extract text content from an attachment using the requested method. `NATIVE` decoding is available now for text-like files. OCR/LLM methods are wired for future use and may return not implemented unless fallback is enabled.
     * Extract text from an attachment
     * @param attachmentId ID of attachment
     * @param extractAttachmentTextOptions 
     */
    public extractAttachmentText(attachmentId: string, extractAttachmentTextOptions?: ExtractAttachmentTextOptions, options?: Configuration): Observable<ExtractAttachmentTextResult> {
        const requestContextPromise = this.requestFactory.extractAttachmentText(attachmentId, extractAttachmentTextOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.extractAttachmentText(rsp)));
            }));
    }
 
    /**
     * Get an attachment entity
     * @param attachmentId ID of attachment
     */
    public getAttachment(attachmentId: string, options?: Configuration): Observable<AttachmentEntityDto> {
        const requestContextPromise = this.requestFactory.getAttachment(attachmentId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAttachment(rsp)));
            }));
    }
 
    /**
     * Returns the metadata for an attachment. It is saved separately to the content of the attachment. Contains properties `name` and `content-type` and `content-length` in bytes for a given attachment.
     * Get email attachment metadata information
     * @param attachmentId ID of attachment
     */
    public getAttachmentInfo(attachmentId: string, options?: Configuration): Observable<AttachmentMetaData> {
        const requestContextPromise = this.requestFactory.getAttachmentInfo(attachmentId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAttachmentInfo(rsp)));
            }));
    }
 
    /**
     * Get all attachments in paginated response. Each entity contains meta data for the attachment such as `name` and `content-type`. Use the `attachmentId` and the download endpoints to get the file contents.
     * Get email attachments
     * @param page Optional page index for list pagination
     * @param size Optional page size for list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param fileNameFilter Optional file name and content type search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inboxId to filter attachments by
     * @param emailId Optional emailId to filter attachments by
     * @param sentEmailId Optional sentEmailId to filter attachments by
     * @param include Optional list of IDs to include in result
     */
    public getAttachments(page?: number, size?: number, sort?: 'ASC' | 'DESC', fileNameFilter?: string, since?: Date, before?: Date, inboxId?: string, emailId?: string, sentEmailId?: string, include?: Array<string>, options?: Configuration): Observable<PageAttachmentEntity> {
        const requestContextPromise = this.requestFactory.getAttachments(page, size, sort, fileNameFilter, since, before, inboxId, emailId, sentEmailId, include, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAttachments(rsp)));
            }));
    }
 
    /**
     * Upload an attachment for sending using base64 file encoding. Returns an array whose first element is the ID of the uploaded attachment.
     * @param uploadAttachmentOptions 
     */
    public uploadAttachment(uploadAttachmentOptions: UploadAttachmentOptions, options?: Configuration): Observable<Array<string>> {
        const requestContextPromise = this.requestFactory.uploadAttachment(uploadAttachmentOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadAttachment(rsp)));
            }));
    }
 
    /**
     * Upload an attachment for sending using file byte stream input octet stream. Returns an array whose first element is the ID of the uploaded attachment.
     * @param contentType 
     * @param contentType2 Optional contentType for file. For instance &#x60;application/pdf&#x60;
     * @param contentId Optional content ID (CID) to save upload with
     * @param filename Optional filename to save upload with
     * @param fileSize Optional byte length to save upload with
     * @param filename2 
     */
    public uploadAttachmentBytes(contentType?: string, contentType2?: string, contentId?: string, filename?: string, fileSize?: number, filename2?: string, options?: Configuration): Observable<Array<string>> {
        const requestContextPromise = this.requestFactory.uploadAttachmentBytes(contentType, contentType2, contentId, filename, fileSize, filename2, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadAttachmentBytes(rsp)));
            }));
    }
 
    /**
     * Upload an attachment for sending using a Multipart Form request. Returns an array whose first element is the ID of the uploaded attachment.
     * @param contentId Optional content ID of attachment
     * @param contentType Optional content type of attachment
     * @param filename Optional name of file
     * @param contentTypeHeader Optional content type header of attachment
     * @param xFilename Optional filename header of attachment
     * @param xFilenameRaw Optional raw filename header of attachment that will be converted to punycode
     * @param xFilesize Optional content size of attachment
     * @param inlineObject1 
     */
    public uploadMultipartForm(contentId?: string, contentType?: string, filename?: string, contentTypeHeader?: string, xFilename?: string, xFilenameRaw?: string, xFilesize?: number, inlineObject1?: InlineObject1, options?: Configuration): Observable<Array<string>> {
        const requestContextPromise = this.requestFactory.uploadMultipartForm(contentId, contentType, filename, contentTypeHeader, xFilename, xFilenameRaw, xFilesize, inlineObject1, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadMultipartForm(rsp)));
            }));
    }
 
}

import { BounceControllerApiRequestFactory, BounceControllerApiResponseProcessor} from "../apis/BounceControllerApi.ts";
export class ObservableBounceControllerApi {
    private requestFactory: BounceControllerApiRequestFactory;
    private responseProcessor: BounceControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BounceControllerApiRequestFactory,
        responseProcessor?: BounceControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BounceControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BounceControllerApiResponseProcessor();
    }

    /**
     * Prevent email sending errors by remove recipients who have resulted in past email bounces or complaints
     * Filter a list of email recipients and remove those who have bounced
     * @param filterBouncedRecipientsOptions 
     */
    public filterBouncedRecipient(filterBouncedRecipientsOptions: FilterBouncedRecipientsOptions, options?: Configuration): Observable<FilterBouncedRecipientsResult> {
        const requestContextPromise = this.requestFactory.filterBouncedRecipient(filterBouncedRecipientsOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filterBouncedRecipient(rsp)));
            }));
    }
 
    /**
     * Check if account block status prevents sending
     * Can account send email
     */
    public getAccountBounceBlockStatus(options?: Configuration): Observable<AccountBounceBlockDto> {
        const requestContextPromise = this.requestFactory.getAccountBounceBlockStatus(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountBounceBlockStatus(rsp)));
            }));
    }
 
    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get a bounced email.
     * @param id ID of the bounced email to fetch
     */
    public getBouncedEmail(id: string, options?: Configuration): Observable<BouncedEmailDto> {
        const requestContextPromise = this.requestFactory.getBouncedEmail(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBouncedEmail(rsp)));
            }));
    }
 
    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get paginated list of bounced emails.
     * @param page Optional page index
     * @param size Optional page size 
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getBouncedEmails(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageBouncedEmail> {
        const requestContextPromise = this.requestFactory.getBouncedEmails(page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBouncedEmails(rsp)));
            }));
    }
 
    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get a bounced email.
     * @param id ID of the bounced recipient
     */
    public getBouncedRecipient(id: string, options?: Configuration): Observable<BouncedRecipientDto> {
        const requestContextPromise = this.requestFactory.getBouncedRecipient(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBouncedRecipient(rsp)));
            }));
    }
 
    /**
     * Bounced recipients are email addresses that you have sent emails to that did not accept the sent email. Once a recipient is bounced you cannot send emails to that address.
     * Get paginated list of bounced recipients.
     * @param page Optional page index 
     * @param size Optional page size 
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getBouncedRecipients(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageBouncedRecipients> {
        const requestContextPromise = this.requestFactory.getBouncedRecipients(page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBouncedRecipients(rsp)));
            }));
    }
 
    /**
     * Get complaint
     * Get complaint
     * @param id ID of the complaint
     */
    public getComplaint(id: string, options?: Configuration): Observable<Complaint> {
        const requestContextPromise = this.requestFactory.getComplaint(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getComplaint(rsp)));
            }));
    }
 
    /**
     * SMTP complaints made against your account
     * Get paginated list of complaints.
     * @param page Optional page index 
     * @param size Optional page size 
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getComplaints(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageComplaint> {
        const requestContextPromise = this.requestFactory.getComplaints(page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getComplaints(rsp)));
            }));
    }
 
    /**
     * Unsubscribed recipient have unsubscribed from a mailing list for a user or domain and cannot be contacted again.
     * Get paginated list of unsubscribed recipients.
     * @param page Optional page index
     * @param size Optional page size 
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param domainId Filter by domainId
     */
    public getListUnsubscribeRecipients(page?: number, size?: number, sort?: 'ASC' | 'DESC', domainId?: string, options?: Configuration): Observable<PageListUnsubscribeRecipients> {
        const requestContextPromise = this.requestFactory.getListUnsubscribeRecipients(page, size, sort, domainId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getListUnsubscribeRecipients(rsp)));
            }));
    }
 
    /**
     * List of complaints and bounces
     * Get paginated list of reputation items.
     * @param page Optional page index
     * @param size Optional page size
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getReputationItems(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageReputationItems> {
        const requestContextPromise = this.requestFactory.getReputationItems(page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getReputationItems(rsp)));
            }));
    }
 
    /**
     * Get SES tenant reputation recommendations/findings for this user.
     * Get SES tenant reputation findings
     * @param accountRegion Optional account region filter
     */
    public getTenantReputationFindings(accountRegion?: 'US_WEST_2_ACCOUNT_STAGING' | 'US_EAST_1_ACCOUNT_STAGING' | 'EU_WEST_1_ACCOUNT_STAGING' | 'US_WEST_2_ACCOUNT_SES_1' | 'EU_WEST_1_ACCOUNT_SES_1' | 'US_WEST_2_ACCOUNT_SES_2' | 'EU_WEST_1_ACCOUNT_SES_2' | 'US_WEST_2_ACCOUNT_BYTEWISE' | 'EU_WEST_1_ACCOUNT_BYTEWISE' | 'US_WEST_2' | 'EU_WEST_1' | 'US_EAST_1', options?: Configuration): Observable<TenantReputationFindingsDto> {
        const requestContextPromise = this.requestFactory.getTenantReputationFindings(accountRegion, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTenantReputationFindings(rsp)));
            }));
    }
 
    /**
     * Get SES tenant sending and reputation status rows for this user. Includes complaint and bounce rates from CloudWatch.
     * Get SES tenant status summary
     * @param accountRegion Optional account region filter
     */
    public getTenantReputationStatusSummary(accountRegion?: 'US_WEST_2_ACCOUNT_STAGING' | 'US_EAST_1_ACCOUNT_STAGING' | 'EU_WEST_1_ACCOUNT_STAGING' | 'US_WEST_2_ACCOUNT_SES_1' | 'EU_WEST_1_ACCOUNT_SES_1' | 'US_WEST_2_ACCOUNT_SES_2' | 'EU_WEST_1_ACCOUNT_SES_2' | 'US_WEST_2_ACCOUNT_BYTEWISE' | 'EU_WEST_1_ACCOUNT_BYTEWISE' | 'US_WEST_2' | 'EU_WEST_1' | 'US_EAST_1', options?: Configuration): Observable<TenantReputationStatusSummaryDto> {
        const requestContextPromise = this.requestFactory.getTenantReputationStatusSummary(accountRegion, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTenantReputationStatusSummary(rsp)));
            }));
    }
 
}

import { BulkActionsControllerApiRequestFactory, BulkActionsControllerApiResponseProcessor} from "../apis/BulkActionsControllerApi.ts";
export class ObservableBulkActionsControllerApi {
    private requestFactory: BulkActionsControllerApiRequestFactory;
    private responseProcessor: BulkActionsControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BulkActionsControllerApiRequestFactory,
        responseProcessor?: BulkActionsControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BulkActionsControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BulkActionsControllerApiResponseProcessor();
    }

    /**
     * Bulk create Inboxes (email addresses)
     * @param count Number of inboxes to be created in bulk
     */
    public bulkCreateInboxes(count: number, options?: Configuration): Observable<Array<InboxDto>> {
        const requestContextPromise = this.requestFactory.bulkCreateInboxes(count, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bulkCreateInboxes(rsp)));
            }));
    }
 
    /**
     * Bulk Delete Inboxes
     * @param requestBody 
     */
    public bulkDeleteInboxes(requestBody: Array<string>, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.bulkDeleteInboxes(requestBody, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bulkDeleteInboxes(rsp)));
            }));
    }
 
    /**
     * Bulk Send Emails
     * @param bulkSendEmailOptions 
     */
    public bulkSendEmails(bulkSendEmailOptions: BulkSendEmailOptions, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.bulkSendEmails(bulkSendEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bulkSendEmails(rsp)));
            }));
    }
 
}

import { CampaignProbeControllerApiRequestFactory, CampaignProbeControllerApiResponseProcessor} from "../apis/CampaignProbeControllerApi.ts";
export class ObservableCampaignProbeControllerApi {
    private requestFactory: CampaignProbeControllerApiRequestFactory;
    private responseProcessor: CampaignProbeControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CampaignProbeControllerApiRequestFactory,
        responseProcessor?: CampaignProbeControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CampaignProbeControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CampaignProbeControllerApiResponseProcessor();
    }

    /**
     * Create campaign probe
     * @param createCampaignProbeOptions 
     */
    public createCampaignProbe(createCampaignProbeOptions: CreateCampaignProbeOptions, options?: Configuration): Observable<CampaignProbeDto> {
        const requestContextPromise = this.requestFactory.createCampaignProbe(createCampaignProbeOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCampaignProbe(rsp)));
            }));
    }
 
    /**
     * Delete campaign probe
     * @param probeId 
     */
    public deleteCampaignProbe(probeId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteCampaignProbe(probeId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCampaignProbe(rsp)));
            }));
    }
 
    /**
     * Get campaign probe
     * @param probeId 
     */
    public getCampaignProbe(probeId: string, options?: Configuration): Observable<CampaignProbeDto> {
        const requestContextPromise = this.requestFactory.getCampaignProbe(probeId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCampaignProbe(rsp)));
            }));
    }
 
    /**
     * Get campaign probe insights
     * @param probeId 
     * @param since 
     * @param before 
     */
    public getCampaignProbeInsights(probeId: string, since?: Date, before?: Date, options?: Configuration): Observable<CampaignProbeInsightsDto> {
        const requestContextPromise = this.requestFactory.getCampaignProbeInsights(probeId, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCampaignProbeInsights(rsp)));
            }));
    }
 
    /**
     * List campaign probe runs
     * @param probeId 
     * @param since 
     * @param before 
     * @param status 
     * @param limit 
     */
    public getCampaignProbeRuns(probeId: string, since?: Date, before?: Date, status?: 'HEALTHY' | 'WARNING' | 'FAILED', limit?: number, options?: Configuration): Observable<Array<CampaignProbeRunDto>> {
        const requestContextPromise = this.requestFactory.getCampaignProbeRuns(probeId, since, before, status, limit, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCampaignProbeRuns(rsp)));
            }));
    }
 
    /**
     * Get campaign probe trend series
     * @param probeId 
     * @param since 
     * @param before 
     * @param bucket 
     */
    public getCampaignProbeSeries(probeId: string, since?: Date, before?: Date, bucket?: 'HOUR' | 'DAY', options?: Configuration): Observable<CampaignProbeSeriesDto> {
        const requestContextPromise = this.requestFactory.getCampaignProbeSeries(probeId, since, before, bucket, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCampaignProbeSeries(rsp)));
            }));
    }
 
    /**
     * List campaign probes
     */
    public getCampaignProbes(options?: Configuration): Observable<Array<CampaignProbeDto>> {
        const requestContextPromise = this.requestFactory.getCampaignProbes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCampaignProbes(rsp)));
            }));
    }
 
    /**
     * Run campaign probe now
     * @param probeId 
     * @param createCampaignProbeRunOptions 
     */
    public runCampaignProbeNow(probeId: string, createCampaignProbeRunOptions: CreateCampaignProbeRunOptions, options?: Configuration): Observable<CampaignProbeRunNowResult> {
        const requestContextPromise = this.requestFactory.runCampaignProbeNow(probeId, createCampaignProbeRunOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.runCampaignProbeNow(rsp)));
            }));
    }
 
    /**
     * Run due campaign probes for user
     * @param maxRuns 
     */
    public runDueCampaignProbes(maxRuns?: number, options?: Configuration): Observable<CampaignProbeRunDueResult> {
        const requestContextPromise = this.requestFactory.runDueCampaignProbes(maxRuns, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.runDueCampaignProbes(rsp)));
            }));
    }
 
    /**
     * Update campaign probe
     * @param probeId 
     * @param updateCampaignProbeOptions 
     */
    public updateCampaignProbe(probeId: string, updateCampaignProbeOptions: UpdateCampaignProbeOptions, options?: Configuration): Observable<CampaignProbeDto> {
        const requestContextPromise = this.requestFactory.updateCampaignProbe(probeId, updateCampaignProbeOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCampaignProbe(rsp)));
            }));
    }
 
}

import { CommonActionsControllerApiRequestFactory, CommonActionsControllerApiResponseProcessor} from "../apis/CommonActionsControllerApi.ts";
export class ObservableCommonActionsControllerApi {
    private requestFactory: CommonActionsControllerApiRequestFactory;
    private responseProcessor: CommonActionsControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CommonActionsControllerApiRequestFactory,
        responseProcessor?: CommonActionsControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CommonActionsControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CommonActionsControllerApiResponseProcessor();
    }

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     * @param allowTeamAccess 
     * @param useDomainPool 
     * @param expiresAt 
     * @param expiresIn 
     * @param emailAddress 
     * @param inboxType 
     * @param description 
     * @param name 
     * @param tags 
     * @param favourite 
     * @param virtualInbox 
     * @param useShortAddress 
     * @param domainName 
     * @param domainId 
     * @param prefix 
     */
    public createNewEmailAddress(allowTeamAccess?: boolean, useDomainPool?: boolean, expiresAt?: Date, expiresIn?: number, emailAddress?: string, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', description?: string, name?: string, tags?: Array<string>, favourite?: boolean, virtualInbox?: boolean, useShortAddress?: boolean, domainName?: string, domainId?: string, prefix?: string, options?: Configuration): Observable<InboxDto> {
        const requestContextPromise = this.requestFactory.createNewEmailAddress(allowTeamAccess, useDomainPool, expiresAt, expiresIn, emailAddress, inboxType, description, name, tags, favourite, virtualInbox, useShortAddress, domainName, domainId, prefix, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNewEmailAddress(rsp)));
            }));
    }
 
    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     * @param allowTeamAccess 
     * @param useDomainPool 
     * @param expiresAt 
     * @param expiresIn 
     * @param emailAddress 
     * @param inboxType 
     * @param description 
     * @param name 
     * @param tags 
     * @param favourite 
     * @param virtualInbox 
     * @param useShortAddress 
     * @param domainName 
     * @param domainId 
     * @param prefix 
     */
    public createRandomInbox(allowTeamAccess?: boolean, useDomainPool?: boolean, expiresAt?: Date, expiresIn?: number, emailAddress?: string, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', description?: string, name?: string, tags?: Array<string>, favourite?: boolean, virtualInbox?: boolean, useShortAddress?: boolean, domainName?: string, domainId?: string, prefix?: string, options?: Configuration): Observable<InboxDto> {
        const requestContextPromise = this.requestFactory.createRandomInbox(allowTeamAccess, useDomainPool, expiresAt, expiresIn, emailAddress, inboxType, description, name, tags, favourite, virtualInbox, useShortAddress, domainName, domainId, prefix, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRandomInbox(rsp)));
            }));
    }
 
    /**
     * Deletes inbox email address
     * Delete inbox email address by inbox id
     * @param inboxId ID of inbox to delete
     */
    public deleteEmailAddress(inboxId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteEmailAddress(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEmailAddress(rsp)));
            }));
    }
 
    /**
     * Deletes all emails
     * Delete all emails in an inbox
     * @param inboxId ID of inbox to empty
     */
    public emptyInbox(inboxId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.emptyInbox(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.emptyInbox(rsp)));
            }));
    }
 
    /**
     * If no senderId or inboxId provided a random email address will be used to send from. Ensure your parameters are URL encoded.
     * Send an email using query parameters
     * @param to Email address to send to
     * @param senderId ID of inbox to send from. If null an inbox will be created for sending
     * @param body Body of the email message. Supports HTML
     * @param subject Subject line of the email
     */
    public sendEmailQuery(to: string, senderId?: string, body?: string, subject?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.sendEmailQuery(to, senderId, body, subject, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEmailQuery(rsp)));
            }));
    }
 
    /**
     * If no senderId or inboxId provided a random email address will be used to send from.
     * Send an email
     * @param simpleSendEmailOptions 
     */
    public sendEmailSimple(simpleSendEmailOptions: SimpleSendEmailOptions, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.sendEmailSimple(simpleSendEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEmailSimple(rsp)));
            }));
    }
 
}

import { ConnectorControllerApiRequestFactory, ConnectorControllerApiResponseProcessor} from "../apis/ConnectorControllerApi.ts";
export class ObservableConnectorControllerApi {
    private requestFactory: ConnectorControllerApiRequestFactory;
    private responseProcessor: ConnectorControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConnectorControllerApiRequestFactory,
        responseProcessor?: ConnectorControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConnectorControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConnectorControllerApiResponseProcessor();
    }

    /**
     * Sync emails between external mailboxes and MailSlurp inboxes
     * Create an inbox connector
     * @param createConnectorOptions 
     * @param inboxId Optional inbox ID to associate with the connector
     */
    public createConnector(createConnectorOptions: CreateConnectorOptions, inboxId?: string, options?: Configuration): Observable<ConnectorDto> {
        const requestContextPromise = this.requestFactory.createConnector(createConnectorOptions, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createConnector(rsp)));
            }));
    }
 
    /**
     * Allows the reading of emails in an external mailbox and syncing to a MailSlurp inbox
     * Create an inbox connector IMAP connection
     * @param id 
     * @param createConnectorImapConnectionOptions 
     */
    public createConnectorImapConnection(id: string, createConnectorImapConnectionOptions: CreateConnectorImapConnectionOptions, options?: Configuration): Observable<ConnectorImapConnectionDto> {
        const requestContextPromise = this.requestFactory.createConnectorImapConnection(id, createConnectorImapConnectionOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createConnectorImapConnection(rsp)));
            }));
    }
 
    /**
     * Allows sending via connector and email is routed to connected inbox and sent via SMTP
     * Create an inbox connector SMTP connection
     * @param id 
     * @param createConnectorSmtpConnectionOptions 
     */
    public createConnectorSmtpConnection(id: string, createConnectorSmtpConnectionOptions: CreateConnectorSmtpConnectionOptions, options?: Configuration): Observable<ConnectorSmtpConnectionDto> {
        const requestContextPromise = this.requestFactory.createConnectorSmtpConnection(id, createConnectorSmtpConnectionOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createConnectorSmtpConnection(rsp)));
            }));
    }
 
    /**
     * Configure automatic pull or emails from external inboxes using an interval or schedule
     * Create an inbox connector sync settings
     * @param id 
     * @param createConnectorSyncSettingsOptions 
     */
    public createConnectorSyncSettings(id: string, createConnectorSyncSettingsOptions: CreateConnectorSyncSettingsOptions, options?: Configuration): Observable<ConnectorSyncSettingsDto> {
        const requestContextPromise = this.requestFactory.createConnectorSyncSettings(id, createConnectorSyncSettingsOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createConnectorSyncSettings(rsp)));
            }));
    }
 
    /**
     * Sync emails between external mailboxes and MailSlurp inboxes
     * Create an inbox connector with options
     * @param createConnectorWithOptions 
     * @param inboxId Optional inbox ID to associate with the connector
     */
    public createConnectorWithOptions(createConnectorWithOptions: CreateConnectorWithOptions, inboxId?: string, options?: Configuration): Observable<ConnectorDto> {
        const requestContextPromise = this.requestFactory.createConnectorWithOptions(createConnectorWithOptions, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createConnectorWithOptions(rsp)));
            }));
    }
 
    /**
     * Delete all inbox connectors
     */
    public deleteAllConnector(options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllConnector(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllConnector(rsp)));
            }));
    }
 
    /**
     * Delete an inbox connector
     * @param id 
     */
    public deleteConnector(id: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteConnector(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteConnector(rsp)));
            }));
    }
 
    /**
     * Delete IMAP connection for external inbox
     * Delete an inbox connector IMAP connection
     * @param id 
     */
    public deleteConnectorImapConnection(id: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteConnectorImapConnection(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteConnectorImapConnection(rsp)));
            }));
    }
 
    /**
     * Delete SMTP connection for external inbox
     * Delete an inbox connector SMTP connection
     * @param id 
     */
    public deleteConnectorSmtpConnection(id: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteConnectorSmtpConnection(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteConnectorSmtpConnection(rsp)));
            }));
    }
 
    /**
     * Configure automatic pull or emails from external inboxes using an interval or schedule
     * Create an inbox connector sync settings
     * @param id 
     */
    public deleteConnectorSyncSettings(id: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteConnectorSyncSettings(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteConnectorSyncSettings(rsp)));
            }));
    }
 
    /**
     * Get all inbox connector events
     * @param id Optional connector ID
     * @param page Optional page index in connector list pagination
     * @param size Optional page size in connector list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param eventType Filter by event type
     */
    public getAllConnectorEvents(id?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, eventType?: 'SEND' | 'SYNC', options?: Configuration): Observable<PageConnectorEvents> {
        const requestContextPromise = this.requestFactory.getAllConnectorEvents(id, page, size, sort, since, before, eventType, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllConnectorEvents(rsp)));
            }));
    }
 
    /**
     * Get an inbox connector
     * @param id 
     */
    public getConnector(id: string, options?: Configuration): Observable<ConnectorDto> {
        const requestContextPromise = this.requestFactory.getConnector(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConnector(rsp)));
            }));
    }
 
    /**
     * Find an inbox connector by email address
     * Get connector by email address
     * @param emailAddress Email address to search for connector by
     */
    public getConnectorByEmailAddress(emailAddress: string, options?: Configuration): Observable<OptionalConnectorDto> {
        const requestContextPromise = this.requestFactory.getConnectorByEmailAddress(emailAddress, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConnectorByEmailAddress(rsp)));
            }));
    }
 
    /**
     * Find an inbox connector by inbox ID
     * Get connector by inbox ID
     * @param inboxId Inbox ID to search for connector by
     */
    public getConnectorByInboxId(inboxId: string, options?: Configuration): Observable<OptionalConnectorDto> {
        const requestContextPromise = this.requestFactory.getConnectorByInboxId(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConnectorByInboxId(rsp)));
            }));
    }
 
    /**
     * Find an inbox connector by name
     * Get connector by name
     * @param name Name to search for connector by
     */
    public getConnectorByName(name: string, options?: Configuration): Observable<OptionalConnectorDto> {
        const requestContextPromise = this.requestFactory.getConnectorByName(name, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConnectorByName(rsp)));
            }));
    }
 
    /**
     * Get an inbox connector event
     * @param id 
     */
    public getConnectorEvent(id: string, options?: Configuration): Observable<ConnectorEventDto> {
        const requestContextPromise = this.requestFactory.getConnectorEvent(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConnectorEvent(rsp)));
            }));
    }
 
    /**
     * Get an inbox connector events
     * @param id 
     * @param page Optional page index in connector list pagination
     * @param size Optional page size in connector list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param eventType Filter by event type
     */
    public getConnectorEvents(id: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, eventType?: 'SEND' | 'SYNC', options?: Configuration): Observable<PageConnectorEvents> {
        const requestContextPromise = this.requestFactory.getConnectorEvents(id, page, size, sort, since, before, eventType, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConnectorEvents(rsp)));
            }));
    }
 
    /**
     * Get IMAP connection for external inbox
     * Get an inbox connector IMAP connection
     * @param id 
     */
    public getConnectorImapConnection(id: string, options?: Configuration): Observable<OptionalConnectorImapConnectionDto> {
        const requestContextPromise = this.requestFactory.getConnectorImapConnection(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConnectorImapConnection(rsp)));
            }));
    }
 
    /**
     * Get common mail provider SMTP and IMAP connection settings
     * Get SMTP and IMAP connection settings for common mail providers
     */
    public getConnectorProviderSettings(options?: Configuration): Observable<ConnectorProviderSettingsDto> {
        const requestContextPromise = this.requestFactory.getConnectorProviderSettings(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConnectorProviderSettings(rsp)));
            }));
    }
 
    /**
     * Get SMTP connection for external inbox
     * Get an inbox connector SMTP connection
     * @param id 
     */
    public getConnectorSmtpConnection(id: string, options?: Configuration): Observable<OptionalConnectorSmtpConnectionDto> {
        const requestContextPromise = this.requestFactory.getConnectorSmtpConnection(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConnectorSmtpConnection(rsp)));
            }));
    }
 
    /**
     * Get sync settings for connection with external inbox
     * Get an inbox connector sync settings
     * @param id 
     */
    public getConnectorSyncSettings(id: string, options?: Configuration): Observable<OptionalConnectorSyncSettingsDto> {
        const requestContextPromise = this.requestFactory.getConnectorSyncSettings(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConnectorSyncSettings(rsp)));
            }));
    }
 
    /**
     * List inbox connectors that sync external emails to MailSlurp inboxes
     * Get inbox connectors
     * @param page Optional page index in connector list pagination
     * @param size Optional page size in connector list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getConnectors(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageConnector> {
        const requestContextPromise = this.requestFactory.getConnectors(page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConnectors(rsp)));
            }));
    }
 
    /**
     * Send from an inbox connector
     * @param id 
     * @param sendEmailOptions 
     * @param useFallback 
     */
    public sendEmailFromConnector(id: string, sendEmailOptions: SendEmailOptions, useFallback?: boolean, options?: Configuration): Observable<SentEmailDto> {
        const requestContextPromise = this.requestFactory.sendEmailFromConnector(id, sendEmailOptions, useFallback, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEmailFromConnector(rsp)));
            }));
    }
 
    /**
     * Sync an inbox connector
     * @param id 
     * @param since Date to request emails since
     * @param folder Which folder to sync emails with
     * @param logging Enable or disable logging for the sync operation
     */
    public syncConnector(id: string, since?: Date, folder?: string, logging?: boolean, options?: Configuration): Observable<ConnectorSyncRequestResult> {
        const requestContextPromise = this.requestFactory.syncConnector(id, since, folder, logging, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.syncConnector(rsp)));
            }));
    }
 
    /**
     * Test the IMAP connection for a connector
     * Test an inbox connector IMAP connection
     * @param id 
     * @param createConnectorImapConnectionOptions 
     */
    public testConnectorImapConnection(id: string, createConnectorImapConnectionOptions?: CreateConnectorImapConnectionOptions, options?: Configuration): Observable<ConnectorImapConnectionTestResult> {
        const requestContextPromise = this.requestFactory.testConnectorImapConnection(id, createConnectorImapConnectionOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testConnectorImapConnection(rsp)));
            }));
    }
 
    /**
     * Test the IMAP connection options for a connector
     * Test an inbox connector IMAP connection options
     * @param createConnectorImapConnectionOptions 
     */
    public testConnectorImapConnectionOptions(createConnectorImapConnectionOptions: CreateConnectorImapConnectionOptions, options?: Configuration): Observable<ConnectorImapConnectionTestResult> {
        const requestContextPromise = this.requestFactory.testConnectorImapConnectionOptions(createConnectorImapConnectionOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testConnectorImapConnectionOptions(rsp)));
            }));
    }
 
    /**
     * Test the SMTP connection for a connector
     * Test an inbox connector SMTP connection
     * @param id 
     * @param createConnectorSmtpConnectionOptions 
     */
    public testConnectorSmtpConnection(id: string, createConnectorSmtpConnectionOptions?: CreateConnectorSmtpConnectionOptions, options?: Configuration): Observable<ConnectorSmtpConnectionTestResult> {
        const requestContextPromise = this.requestFactory.testConnectorSmtpConnection(id, createConnectorSmtpConnectionOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testConnectorSmtpConnection(rsp)));
            }));
    }
 
    /**
     * Test the SMTP connection options for a connector
     * Test an inbox connector SMTP connection options
     * @param createConnectorSmtpConnectionOptions 
     */
    public testConnectorSmtpConnectionOptions(createConnectorSmtpConnectionOptions: CreateConnectorSmtpConnectionOptions, options?: Configuration): Observable<ConnectorSmtpConnectionTestResult> {
        const requestContextPromise = this.requestFactory.testConnectorSmtpConnectionOptions(createConnectorSmtpConnectionOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testConnectorSmtpConnectionOptions(rsp)));
            }));
    }
 
    /**
     * Update an inbox connector
     * @param id 
     * @param createConnectorOptions 
     */
    public updateConnector(id: string, createConnectorOptions: CreateConnectorOptions, options?: Configuration): Observable<ConnectorDto> {
        const requestContextPromise = this.requestFactory.updateConnector(id, createConnectorOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateConnector(rsp)));
            }));
    }
 
    /**
     * Update IMAP connection for external inbox
     * Update an inbox connector IMAP connection
     * @param id 
     * @param createConnectorImapConnectionOptions 
     */
    public updateConnectorImapConnection(id: string, createConnectorImapConnectionOptions: CreateConnectorImapConnectionOptions, options?: Configuration): Observable<ConnectorImapConnectionDto> {
        const requestContextPromise = this.requestFactory.updateConnectorImapConnection(id, createConnectorImapConnectionOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateConnectorImapConnection(rsp)));
            }));
    }
 
    /**
     * Update SMTP connection for external inbox
     * Update an inbox connector SMTP connection
     * @param id 
     * @param createConnectorSmtpConnectionOptions 
     */
    public updateConnectorSmtpConnection(id: string, createConnectorSmtpConnectionOptions: CreateConnectorSmtpConnectionOptions, options?: Configuration): Observable<ConnectorSmtpConnectionDto> {
        const requestContextPromise = this.requestFactory.updateConnectorSmtpConnection(id, createConnectorSmtpConnectionOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateConnectorSmtpConnection(rsp)));
            }));
    }
 
}

import { ConsentControllerApiRequestFactory, ConsentControllerApiResponseProcessor} from "../apis/ConsentControllerApi.ts";
export class ObservableConsentControllerApi {
    private requestFactory: ConsentControllerApiRequestFactory;
    private responseProcessor: ConsentControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConsentControllerApiRequestFactory,
        responseProcessor?: ConsentControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConsentControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConsentControllerApiResponseProcessor();
    }

    /**
     * @param emailAddress Email address to check consent for
     */
    public checkSendingConsentForEmailAddress(emailAddress: string, options?: Configuration): Observable<OptInSendingConsentDto> {
        const requestContextPromise = this.requestFactory.checkSendingConsentForEmailAddress(emailAddress, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkSendingConsentForEmailAddress(rsp)));
            }));
    }
 
    /**
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getOptInIdentities(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Observable<PageOptInIdentityProjection> {
        const requestContextPromise = this.requestFactory.getOptInIdentities(page, size, sort, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOptInIdentities(rsp)));
            }));
    }
 
    /**
     * @param emailAddress Email address to revoke consent for
     */
    public revokeOptInConsentForEmailAddress(emailAddress: string, options?: Configuration): Observable<OptInSendingConsentDto> {
        const requestContextPromise = this.requestFactory.revokeOptInConsentForEmailAddress(emailAddress, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.revokeOptInConsentForEmailAddress(rsp)));
            }));
    }
 
    /**
     * Send double-opt in consent for an email address
     * Send a verification code to a user once they have explicitly submitted their email address
     * @param optInConsentOptions 
     */
    public sendOptInConsentForEmailAddress(optInConsentOptions: OptInConsentOptions, options?: Configuration): Observable<OptInConsentSendResult> {
        const requestContextPromise = this.requestFactory.sendOptInConsentForEmailAddress(optInConsentOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendOptInConsentForEmailAddress(rsp)));
            }));
    }
 
}

import { ContactControllerApiRequestFactory, ContactControllerApiResponseProcessor} from "../apis/ContactControllerApi.ts";
export class ObservableContactControllerApi {
    private requestFactory: ContactControllerApiRequestFactory;
    private responseProcessor: ContactControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContactControllerApiRequestFactory,
        responseProcessor?: ContactControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContactControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContactControllerApiResponseProcessor();
    }

    /**
     * Create a contact
     * @param createContactOptions 
     */
    public createContact(createContactOptions: CreateContactOptions, options?: Configuration): Observable<ContactDto> {
        const requestContextPromise = this.requestFactory.createContact(createContactOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createContact(rsp)));
            }));
    }
 
    /**
     * Delete contact
     * @param contactId 
     */
    public deleteContact(contactId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteContact(contactId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteContact(rsp)));
            }));
    }
 
    /**
     * Get all contacts
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param search Search terms
     */
    public getAllContacts(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, options?: Configuration): Observable<PageContactProjection> {
        const requestContextPromise = this.requestFactory.getAllContacts(page, size, sort, since, before, search, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllContacts(rsp)));
            }));
    }
 
    /**
     * Get contact
     * @param contactId 
     */
    public getContact(contactId: string, options?: Configuration): Observable<ContactDto> {
        const requestContextPromise = this.requestFactory.getContact(contactId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContact(rsp)));
            }));
    }
 
    /**
     * Get contact vCard vcf file
     * @param contactId 
     */
    public getContactVCard(contactId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.getContactVCard(contactId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContactVCard(rsp)));
            }));
    }
 
    /**
     * Get all contacts
     */
    public getContacts(options?: Configuration): Observable<Array<ContactProjection>> {
        const requestContextPromise = this.requestFactory.getContacts(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContacts(rsp)));
            }));
    }
 
}

import { DeliverabilityTestControllerApiRequestFactory, DeliverabilityTestControllerApiResponseProcessor} from "../apis/DeliverabilityTestControllerApi.ts";
export class ObservableDeliverabilityTestControllerApi {
    private requestFactory: DeliverabilityTestControllerApiRequestFactory;
    private responseProcessor: DeliverabilityTestControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DeliverabilityTestControllerApiRequestFactory,
        responseProcessor?: DeliverabilityTestControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DeliverabilityTestControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DeliverabilityTestControllerApiResponseProcessor();
    }

    /**
     * Cancel a running or paused simulation job.
     * Cancel deliverability simulation job
     * @param testId 
     * @param jobId 
     */
    public cancelDeliverabilitySimulationJob(testId: string, jobId: string, options?: Configuration): Observable<DeliverabilitySimulationJobDto> {
        const requestContextPromise = this.requestFactory.cancelDeliverabilitySimulationJob(testId, jobId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelDeliverabilitySimulationJob(rsp)));
            }));
    }
 
    /**
     * Create and start a simulation job for a running deliverability test. Only one active simulation job is allowed per user.
     * Create deliverability simulation job
     * @param testId 
     * @param createDeliverabilitySimulationJobOptions 
     */
    public createDeliverabilitySimulationJob(testId: string, createDeliverabilitySimulationJobOptions: CreateDeliverabilitySimulationJobOptions, options?: Configuration): Observable<DeliverabilitySimulationJobDto> {
        const requestContextPromise = this.requestFactory.createDeliverabilitySimulationJob(testId, createDeliverabilitySimulationJobOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDeliverabilitySimulationJob(rsp)));
            }));
    }
 
    /**
     * Create a deliverability test for inboxes or phone numbers using ALL, PATTERN, or EXPLICIT selector scope.
     * Create deliverability/load test
     * @param createDeliverabilityTestOptions 
     */
    public createDeliverabilityTest(createDeliverabilityTestOptions: CreateDeliverabilityTestOptions, options?: Configuration): Observable<DeliverabilityTestDto> {
        const requestContextPromise = this.requestFactory.createDeliverabilityTest(createDeliverabilityTestOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDeliverabilityTest(rsp)));
            }));
    }
 
    /**
     * Delete test and all persisted entity-level results.
     * Delete deliverability/load test
     * @param testId 
     */
    public deleteDeliverabilityTest(testId: string, options?: Configuration): Observable<DeleteResult> {
        const requestContextPromise = this.requestFactory.deleteDeliverabilityTest(testId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDeliverabilityTest(rsp)));
            }));
    }
 
    /**
     * Create a fresh deliverability test using an existing test configuration, including selector scope, exclusions, and expectations.
     * Duplicate deliverability/load test
     * @param testId 
     */
    public duplicateDeliverabilityTest(testId: string, options?: Configuration): Observable<DeliverabilityTestDto> {
        const requestContextPromise = this.requestFactory.duplicateDeliverabilityTest(testId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.duplicateDeliverabilityTest(rsp)));
            }));
    }
 
    /**
     * Export a PDF report for a terminal deliverability test (COMPLETE, FAILED, or STOPPED), including configuration, summary outcomes, and detailed entity-level results.
     * Export deliverability/load test report as PDF
     * @param testId 
     */
    public exportDeliverabilityTestReport(testId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.exportDeliverabilityTestReport(testId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportDeliverabilityTestReport(rsp)));
            }));
    }
 
    /**
     * Export per-entity deliverability results including expectation-level pass/fail counts. The latest status is evaluated with the same polling safeguards before export.
     * Export deliverability/load test entity results as CSV
     * @param testId 
     * @param matched 
     */
    public exportDeliverabilityTestResults(testId: string, matched?: boolean, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.exportDeliverabilityTestResults(testId, matched, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportDeliverabilityTestResults(rsp)));
            }));
    }
 
    /**
     * Compare deliverability runs over a time range with bucketed chart metrics and run-level rows for table views.
     * Get deliverability analytics time series
     * @param since 
     * @param before 
     * @param scope 
     * @param bucket 
     * @param runLimit 
     */
    public getDeliverabilityAnalyticsSeries(since?: Date, before?: Date, scope?: 'INBOX' | 'PHONE', bucket?: 'HOUR' | 'DAY', runLimit?: number, options?: Configuration): Observable<DeliverabilityAnalyticsSeriesDto> {
        const requestContextPromise = this.requestFactory.getDeliverabilityAnalyticsSeries(since, before, scope, bucket, runLimit, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDeliverabilityAnalyticsSeries(rsp)));
            }));
    }
 
    /**
     * Find commonly failing entities and phone country/variant dimensions across deliverability runs in a time range.
     * Get deliverability failure hotspots
     * @param since 
     * @param before 
     * @param scope 
     * @param limit 
     */
    public getDeliverabilityFailureHotspots(since?: Date, before?: Date, scope?: 'INBOX' | 'PHONE', limit?: number, options?: Configuration): Observable<DeliverabilityFailureHotspotsDto> {
        const requestContextPromise = this.requestFactory.getDeliverabilityFailureHotspots(since, before, scope, limit, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDeliverabilityFailureHotspots(rsp)));
            }));
    }
 
    /**
     * Get simulation job status and progress counters.
     * Get deliverability simulation job
     * @param testId 
     * @param jobId 
     */
    public getDeliverabilitySimulationJob(testId: string, jobId: string, options?: Configuration): Observable<DeliverabilitySimulationJobDto> {
        const requestContextPromise = this.requestFactory.getDeliverabilitySimulationJob(testId, jobId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDeliverabilitySimulationJob(rsp)));
            }));
    }
 
    /**
     * Get paged simulation events including send successes and failures.
     * Get deliverability simulation job events
     * @param testId 
     * @param jobId 
     * @param page 
     * @param size 
     * @param sort 
     */
    public getDeliverabilitySimulationJobEvents(testId: string, jobId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Observable<DeliverabilitySimulationJobEventPageDto> {
        const requestContextPromise = this.requestFactory.getDeliverabilitySimulationJobEvents(testId, jobId, page, size, sort, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDeliverabilitySimulationJobEvents(rsp)));
            }));
    }
 
    /**
     * Get deliverability test configuration and latest progress counters.
     * Get deliverability/load test
     * @param testId 
     */
    public getDeliverabilityTest(testId: string, options?: Configuration): Observable<DeliverabilityTestDto> {
        const requestContextPromise = this.requestFactory.getDeliverabilityTest(testId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDeliverabilityTest(rsp)));
            }));
    }
 
    /**
     * Get paged per-entity expectation results with optional matched/unmatched filtering.
     * Get deliverability/load test entity results
     * @param testId 
     * @param matched 
     * @param page 
     * @param size 
     * @param sort 
     */
    public getDeliverabilityTestResults(testId: string, matched?: boolean, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Observable<DeliverabilityEntityResultPageDto> {
        const requestContextPromise = this.requestFactory.getDeliverabilityTestResults(testId, matched, page, size, sort, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDeliverabilityTestResults(rsp)));
            }));
    }
 
    /**
     * List deliverability tests for the authenticated account.
     * List deliverability/load tests
     * @param page Page index
     * @param size Page size
     * @param sort Sort direction
     */
    public getDeliverabilityTests(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Observable<DeliverabilityTestPageDto> {
        const requestContextPromise = this.requestFactory.getDeliverabilityTests(page, size, sort, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDeliverabilityTests(rsp)));
            }));
    }
 
    /**
     * Get the most recent simulation job for a deliverability test.
     * Get latest deliverability simulation job
     * @param testId 
     */
    public getLatestDeliverabilitySimulationJob(testId: string, options?: Configuration): Observable<DeliverabilitySimulationJobDto> {
        const requestContextPromise = this.requestFactory.getLatestDeliverabilitySimulationJob(testId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLatestDeliverabilitySimulationJob(rsp)));
            }));
    }
 
    /**
     * Pause a running simulation job.
     * Pause deliverability simulation job
     * @param testId 
     * @param jobId 
     */
    public pauseDeliverabilitySimulationJob(testId: string, jobId: string, options?: Configuration): Observable<DeliverabilitySimulationJobDto> {
        const requestContextPromise = this.requestFactory.pauseDeliverabilitySimulationJob(testId, jobId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pauseDeliverabilitySimulationJob(rsp)));
            }));
    }
 
    /**
     * Pause a RUNNING or SCHEDULED deliverability test.
     * Pause deliverability/load test
     * @param testId 
     */
    public pauseDeliverabilityTest(testId: string, options?: Configuration): Observable<DeliverabilityTestDto> {
        const requestContextPromise = this.requestFactory.pauseDeliverabilityTest(testId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pauseDeliverabilityTest(rsp)));
            }));
    }
 
    /**
     * Poll test progress. Evaluation is throttled with a 5-second cache window to protect backing data stores.
     * Poll deliverability/load test status
     * @param testId 
     */
    public pollDeliverabilityTestStatus(testId: string, options?: Configuration): Observable<DeliverabilityPollStatusResultDto> {
        const requestContextPromise = this.requestFactory.pollDeliverabilityTestStatus(testId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pollDeliverabilityTestStatus(rsp)));
            }));
    }
 
    /**
     * Resume a paused simulation job.
     * Resume deliverability simulation job
     * @param testId 
     * @param jobId 
     */
    public resumeDeliverabilitySimulationJob(testId: string, jobId: string, options?: Configuration): Observable<DeliverabilitySimulationJobDto> {
        const requestContextPromise = this.requestFactory.resumeDeliverabilitySimulationJob(testId, jobId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resumeDeliverabilitySimulationJob(rsp)));
            }));
    }
 
    /**
     * Start a CREATED test or resume a PAUSED/SCHEDULED test.
     * Start or resume deliverability/load test
     * @param testId 
     */
    public startDeliverabilityTest(testId: string, options?: Configuration): Observable<DeliverabilityTestDto> {
        const requestContextPromise = this.requestFactory.startDeliverabilityTest(testId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startDeliverabilityTest(rsp)));
            }));
    }
 
    /**
     * Stop a deliverability test and mark it terminal.
     * Stop deliverability/load test
     * @param testId 
     */
    public stopDeliverabilityTest(testId: string, options?: Configuration): Observable<DeliverabilityTestDto> {
        const requestContextPromise = this.requestFactory.stopDeliverabilityTest(testId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stopDeliverabilityTest(rsp)));
            }));
    }
 
    /**
     * Update metadata, timeout, and expectations for a non-running non-terminal test.
     * Update deliverability/load test
     * @param testId 
     * @param updateDeliverabilityTestOptions 
     */
    public updateDeliverabilityTest(testId: string, updateDeliverabilityTestOptions: UpdateDeliverabilityTestOptions, options?: Configuration): Observable<DeliverabilityTestDto> {
        const requestContextPromise = this.requestFactory.updateDeliverabilityTest(testId, updateDeliverabilityTestOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDeliverabilityTest(rsp)));
            }));
    }
 
}

import { DevicePreviewsControllerApiRequestFactory, DevicePreviewsControllerApiResponseProcessor} from "../apis/DevicePreviewsControllerApi.ts";
export class ObservableDevicePreviewsControllerApi {
    private requestFactory: DevicePreviewsControllerApiRequestFactory;
    private responseProcessor: DevicePreviewsControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DevicePreviewsControllerApiRequestFactory,
        responseProcessor?: DevicePreviewsControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DevicePreviewsControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DevicePreviewsControllerApiResponseProcessor();
    }

    /**
     * Cancel a running device preview run
     * @param runId 
     * @param cancelDevicePreviewRunOptions 
     */
    public cancelDevicePreviewRun(runId: string, cancelDevicePreviewRunOptions?: CancelDevicePreviewRunOptions, options?: Configuration): Observable<CancelDevicePreviewRunResult> {
        const requestContextPromise = this.requestFactory.cancelDevicePreviewRun(runId, cancelDevicePreviewRunOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelDevicePreviewRun(rsp)));
            }));
    }
 
    /**
     * Create device preview feedback
     * @param createDevicePreviewFeedbackOptions 
     */
    public createDevicePreviewFeedback(createDevicePreviewFeedbackOptions: CreateDevicePreviewFeedbackOptions, options?: Configuration): Observable<DevicePreviewFeedbackDto> {
        const requestContextPromise = this.requestFactory.createDevicePreviewFeedback(createDevicePreviewFeedbackOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDevicePreviewFeedback(rsp)));
            }));
    }
 
    /**
     * Create a new device preview run for an email
     * @param emailId 
     * @param createDevicePreviewOptions 
     */
    public createDevicePreviewRun(emailId: string, createDevicePreviewOptions?: CreateDevicePreviewOptions, options?: Configuration): Observable<CreateDevicePreviewRunResult> {
        const requestContextPromise = this.requestFactory.createDevicePreviewRun(emailId, createDevicePreviewOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDevicePreviewRun(rsp)));
            }));
    }
 
    /**
     * Delete local device preview run data
     * @param runId 
     */
    public deleteDevicePreviewRun(runId: string, options?: Configuration): Observable<DeleteDevicePreviewRunResult> {
        const requestContextPromise = this.requestFactory.deleteDevicePreviewRun(runId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDevicePreviewRun(rsp)));
            }));
    }
 
    /**
     * Return active run for email or create one when none exists
     * @param emailId 
     * @param createDevicePreviewOptions 
     */
    public ensureDevicePreviewRun(emailId: string, createDevicePreviewOptions?: CreateDevicePreviewOptions, options?: Configuration): Observable<CreateDevicePreviewRunResult> {
        const requestContextPromise = this.requestFactory.ensureDevicePreviewRun(emailId, createDevicePreviewOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.ensureDevicePreviewRun(rsp)));
            }));
    }
 
    /**
     * Get a single device preview feedback item
     * @param feedbackId 
     */
    public getDevicePreviewFeedback(feedbackId: string, options?: Configuration): Observable<DevicePreviewFeedbackDto> {
        const requestContextPromise = this.requestFactory.getDevicePreviewFeedback(feedbackId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDevicePreviewFeedback(rsp)));
            }));
    }
 
    /**
     * List device preview feedback
     * @param page 
     * @param size 
     * @param source 
     * @param runId 
     * @param status 
     * @param provider 
     * @param category 
     * @param search 
     */
    public getDevicePreviewFeedbackItems(page?: number, size?: number, source?: 'API_SERVICE' | 'LAB_USER' | 'END_USER' | 'SYSTEM', runId?: string, status?: 'OPEN' | 'ACKNOWLEDGED' | 'RESOLVED' | 'DISMISSED', provider?: 'GMAIL' | 'OUTLOOK' | 'YAHOO', category?: 'GENERAL' | 'RUN_QUALITY' | 'SCREENSHOT_QUALITY' | 'PROVIDER_ISSUE' | 'BUG_REPORT' | 'FEATURE_REQUEST' | 'NOTE', search?: string, options?: Configuration): Observable<DevicePreviewFeedbackListDto> {
        const requestContextPromise = this.requestFactory.getDevicePreviewFeedbackItems(page, size, source, runId, status, provider, category, search, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDevicePreviewFeedbackItems(rsp)));
            }));
    }
 
    /**
     * Get device preview run status
     * @param runId 
     */
    public getDevicePreviewRun(runId: string, options?: Configuration): Observable<DevicePreviewRunDto> {
        const requestContextPromise = this.requestFactory.getDevicePreviewRun(runId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDevicePreviewRun(rsp)));
            }));
    }
 
    /**
     * Get provider-level progress for a device preview run
     * @param runId 
     * @param provider 
     */
    public getDevicePreviewRunProviderProgress(runId: string, provider: 'GMAIL' | 'OUTLOOK' | 'YAHOO', options?: Configuration): Observable<DevicePreviewProviderProgressDto> {
        const requestContextPromise = this.requestFactory.getDevicePreviewRunProviderProgress(runId, provider, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDevicePreviewRunProviderProgress(rsp)));
            }));
    }
 
    /**
     * Get device preview run results
     * @param runId 
     */
    public getDevicePreviewRunResults(runId: string, options?: Configuration): Observable<DevicePreviewRunResultsDto> {
        const requestContextPromise = this.requestFactory.getDevicePreviewRunResults(runId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDevicePreviewRunResults(rsp)));
            }));
    }
 
    /**
     * Get a seeded device preview screenshot image
     * @param runId 
     * @param screenshotId 
     */
    public getDevicePreviewRunScreenshot(runId: string, screenshotId: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getDevicePreviewRunScreenshot(runId, screenshotId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDevicePreviewRunScreenshot(rsp)));
            }));
    }
 
    /**
     * List previous device preview runs for an email
     * @param emailId 
     * @param limit 
     */
    public getDevicePreviewRuns(emailId: string, limit?: number, options?: Configuration): Observable<Array<DevicePreviewRunDto>> {
        const requestContextPromise = this.requestFactory.getDevicePreviewRuns(emailId, limit, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDevicePreviewRuns(rsp)));
            }));
    }
 
    /**
     * List previous device preview runs for account
     * @param limit 
     */
    public getDevicePreviewRunsForAccount(limit?: number, options?: Configuration): Observable<Array<DevicePreviewRunDto>> {
        const requestContextPromise = this.requestFactory.getDevicePreviewRunsForAccount(limit, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDevicePreviewRunsForAccount(rsp)));
            }));
    }
 
    /**
     * List previous device preview runs for an email in paginated form
     * @param emailId 
     * @param page Optional page index in list pagination
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getDevicePreviewRunsOffsetPaginated(emailId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Observable<PageDevicePreviewRunProjection> {
        const requestContextPromise = this.requestFactory.getDevicePreviewRunsOffsetPaginated(emailId, page, size, sort, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDevicePreviewRunsOffsetPaginated(rsp)));
            }));
    }
 
    /**
     * Update device preview feedback
     * @param feedbackId 
     * @param updateDevicePreviewFeedbackOptions 
     */
    public updateDevicePreviewFeedback(feedbackId: string, updateDevicePreviewFeedbackOptions: UpdateDevicePreviewFeedbackOptions, options?: Configuration): Observable<DevicePreviewFeedbackDto> {
        const requestContextPromise = this.requestFactory.updateDevicePreviewFeedback(feedbackId, updateDevicePreviewFeedbackOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDevicePreviewFeedback(rsp)));
            }));
    }
 
}

import { DomainControllerApiRequestFactory, DomainControllerApiResponseProcessor} from "../apis/DomainControllerApi.ts";
export class ObservableDomainControllerApi {
    private requestFactory: DomainControllerApiRequestFactory;
    private responseProcessor: DomainControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DomainControllerApiRequestFactory,
        responseProcessor?: DomainControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DomainControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DomainControllerApiResponseProcessor();
    }

    /**
     * Add a catch all inbox to a domain so that any emails sent to it that cannot be matched will be sent to the catch all inbox generated
     * Add catch all wild card inbox to domain
     * @param id 
     */
    public addDomainWildcardCatchAll(id: string, options?: Configuration): Observable<DomainDto> {
        const requestContextPromise = this.requestFactory.addDomainWildcardCatchAll(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addDomainWildcardCatchAll(rsp)));
            }));
    }
 
    /**
     * Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider's DNS setup to verify the domain.
     * Create Domain
     * @param createDomainOptions 
     */
    public createDomain(createDomainOptions: CreateDomainOptions, options?: Configuration): Observable<DomainDto> {
        const requestContextPromise = this.requestFactory.createDomain(createDomainOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDomain(rsp)));
            }));
    }
 
    /**
     * Delete a domain. This will disable any existing inboxes that use this domain.
     * Delete a domain
     * @param id 
     */
    public deleteDomain(id: string, options?: Configuration): Observable<Array<string>> {
        const requestContextPromise = this.requestFactory.deleteDomain(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDomain(rsp)));
            }));
    }
 
    /**
     * List all domains available for use with email address creation, including account-region and create/send enablement flags.
     * Get all usable domains with account region status
     * @param inboxType 
     */
    public getAvailableDomainRegions(inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', options?: Configuration): Observable<DomainRegionGroupsDto> {
        const requestContextPromise = this.requestFactory.getAvailableDomainRegions(inboxType, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAvailableDomainRegions(rsp)));
            }));
    }
 
    /**
     * List all domains available for use with email address creation
     * Get all usable domains
     * @param inboxType 
     */
    public getAvailableDomains(inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', options?: Configuration): Observable<DomainGroupsDto> {
        const requestContextPromise = this.requestFactory.getAvailableDomains(inboxType, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAvailableDomains(rsp)));
            }));
    }
 
    /**
     * Returns domain verification status and tokens for a given domain
     * Get a domain
     * @param id 
     * @param checkForErrors 
     */
    public getDomain(id: string, checkForErrors?: boolean, options?: Configuration): Observable<DomainDto> {
        const requestContextPromise = this.requestFactory.getDomain(id, checkForErrors, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDomain(rsp)));
            }));
    }
 
    /**
     * List domain issues for domains you have created
     * Get domain issues
     */
    public getDomainIssues(options?: Configuration): Observable<DomainIssuesDto> {
        const requestContextPromise = this.requestFactory.getDomainIssues(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDomainIssues(rsp)));
            }));
    }
 
    /**
     * Get the catch all inbox for a domain for missed emails
     * Get catch all wild card inbox for domain
     * @param id 
     */
    public getDomainWildcardCatchAllInbox(id: string, options?: Configuration): Observable<InboxDto> {
        const requestContextPromise = this.requestFactory.getDomainWildcardCatchAllInbox(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDomainWildcardCatchAllInbox(rsp)));
            }));
    }
 
    /**
     * List all custom domains you have created
     * Get domains
     */
    public getDomains(options?: Configuration): Observable<Array<DomainPreview>> {
        const requestContextPromise = this.requestFactory.getDomains(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDomains(rsp)));
            }));
    }
 
    /**
     * List all MailSlurp domains used with non-custom email addresses
     * Get MailSlurp domains
     * @param inboxType 
     */
    public getMailSlurpDomains(inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', options?: Configuration): Observable<DomainGroupsDto> {
        const requestContextPromise = this.requestFactory.getMailSlurpDomains(inboxType, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMailSlurpDomains(rsp)));
            }));
    }
 
    /**
     * Update values on a domain. Note you cannot change the domain name as it is immutable. Recreate the domain if you need to alter this.
     * Update a domain
     * @param id 
     * @param updateDomainOptions 
     */
    public updateDomain(id: string, updateDomainOptions: UpdateDomainOptions, options?: Configuration): Observable<DomainDto> {
        const requestContextPromise = this.requestFactory.updateDomain(id, updateDomainOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDomain(rsp)));
            }));
    }
 
}

import { DomainMonitorControllerApiRequestFactory, DomainMonitorControllerApiResponseProcessor} from "../apis/DomainMonitorControllerApi.ts";
export class ObservableDomainMonitorControllerApi {
    private requestFactory: DomainMonitorControllerApiRequestFactory;
    private responseProcessor: DomainMonitorControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DomainMonitorControllerApiRequestFactory,
        responseProcessor?: DomainMonitorControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DomainMonitorControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DomainMonitorControllerApiResponseProcessor();
    }

    /**
     * Create domain monitor
     * @param createDomainMonitorOptions 
     */
    public createDomainMonitor(createDomainMonitorOptions: CreateDomainMonitorOptions, options?: Configuration): Observable<DomainMonitorDto> {
        const requestContextPromise = this.requestFactory.createDomainMonitor(createDomainMonitorOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDomainMonitor(rsp)));
            }));
    }
 
    /**
     * Create alert sink for monitor
     * @param monitorId 
     * @param createDomainMonitorAlertSinkOptions 
     */
    public createDomainMonitorAlertSink(monitorId: string, createDomainMonitorAlertSinkOptions: CreateDomainMonitorAlertSinkOptions, options?: Configuration): Observable<DomainMonitorAlertSinkDto> {
        const requestContextPromise = this.requestFactory.createDomainMonitorAlertSink(monitorId, createDomainMonitorAlertSinkOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDomainMonitorAlertSink(rsp)));
            }));
    }
 
    /**
     * Delete domain monitor
     * @param monitorId 
     */
    public deleteDomainMonitor(monitorId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteDomainMonitor(monitorId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDomainMonitor(rsp)));
            }));
    }
 
    /**
     * Delete monitor alert sink
     * @param monitorId 
     * @param sinkId 
     */
    public deleteDomainMonitorAlertSink(monitorId: string, sinkId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteDomainMonitorAlertSink(monitorId, sinkId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDomainMonitorAlertSink(rsp)));
            }));
    }
 
    /**
     * Get domain monitor
     * @param monitorId 
     */
    public getDomainMonitor(monitorId: string, options?: Configuration): Observable<DomainMonitorDto> {
        const requestContextPromise = this.requestFactory.getDomainMonitor(monitorId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDomainMonitor(rsp)));
            }));
    }
 
    /**
     * List alert sinks for monitor
     * @param monitorId 
     */
    public getDomainMonitorAlertSinks(monitorId: string, options?: Configuration): Observable<Array<DomainMonitorAlertSinkDto>> {
        const requestContextPromise = this.requestFactory.getDomainMonitorAlertSinks(monitorId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDomainMonitorAlertSinks(rsp)));
            }));
    }
 
    /**
     * Get monitor insights
     * @param monitorId 
     * @param since 
     * @param before 
     */
    public getDomainMonitorInsights(monitorId: string, since?: Date, before?: Date, options?: Configuration): Observable<DomainMonitorInsightsDto> {
        const requestContextPromise = this.requestFactory.getDomainMonitorInsights(monitorId, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDomainMonitorInsights(rsp)));
            }));
    }
 
    /**
     * List monitor runs
     * @param monitorId 
     * @param since 
     * @param before 
     * @param status 
     * @param limit 
     */
    public getDomainMonitorRuns(monitorId: string, since?: Date, before?: Date, status?: 'HEALTHY' | 'DEGRADED' | 'CRITICAL' | 'FAILED', limit?: number, options?: Configuration): Observable<Array<DomainMonitorRunDto>> {
        const requestContextPromise = this.requestFactory.getDomainMonitorRuns(monitorId, since, before, status, limit, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDomainMonitorRuns(rsp)));
            }));
    }
 
    /**
     * Get monitor trend series
     * @param monitorId 
     * @param since 
     * @param before 
     * @param bucket 
     */
    public getDomainMonitorSeries(monitorId: string, since?: Date, before?: Date, bucket?: 'HOUR' | 'DAY', options?: Configuration): Observable<DomainMonitorSeriesDto> {
        const requestContextPromise = this.requestFactory.getDomainMonitorSeries(monitorId, since, before, bucket, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDomainMonitorSeries(rsp)));
            }));
    }
 
    /**
     * List domain monitors
     */
    public getDomainMonitors(options?: Configuration): Observable<Array<DomainMonitorDto>> {
        const requestContextPromise = this.requestFactory.getDomainMonitors(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDomainMonitors(rsp)));
            }));
    }
 
    /**
     * Run monitor now
     * @param monitorId 
     */
    public runDomainMonitorNow(monitorId: string, options?: Configuration): Observable<DomainMonitorRunNowResult> {
        const requestContextPromise = this.requestFactory.runDomainMonitorNow(monitorId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.runDomainMonitorNow(rsp)));
            }));
    }
 
    /**
     * Run due monitors for user
     * @param maxRuns 
     */
    public runDueDomainMonitors(maxRuns?: number, options?: Configuration): Observable<DomainMonitorRunDueResult> {
        const requestContextPromise = this.requestFactory.runDueDomainMonitors(maxRuns, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.runDueDomainMonitors(rsp)));
            }));
    }
 
    /**
     * Update domain monitor
     * @param monitorId 
     * @param updateDomainMonitorOptions 
     */
    public updateDomainMonitor(monitorId: string, updateDomainMonitorOptions: UpdateDomainMonitorOptions, options?: Configuration): Observable<DomainMonitorDto> {
        const requestContextPromise = this.requestFactory.updateDomainMonitor(monitorId, updateDomainMonitorOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDomainMonitor(rsp)));
            }));
    }
 
}

import { EmailControllerApiRequestFactory, EmailControllerApiResponseProcessor} from "../apis/EmailControllerApi.ts";
export class ObservableEmailControllerApi {
    private requestFactory: EmailControllerApiRequestFactory;
    private responseProcessor: EmailControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailControllerApiRequestFactory,
        responseProcessor?: EmailControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EmailControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EmailControllerApiResponseProcessor();
    }

    /**
     * Applies RFC3501 IMAP flag operations on a message. Current implementation supports read/unread semantics via the `\\\\Seen` flag only.
     * Set IMAP flags associated with a message. Only supports '\\Seen' flag.
     * @param emailId 
     * @param imapFlagOperationOptions 
     */
    public applyImapFlagOperation(emailId: string, imapFlagOperationOptions: ImapFlagOperationOptions, options?: Configuration): Observable<EmailPreview> {
        const requestContextPromise = this.requestFactory.applyImapFlagOperation(emailId, imapFlagOperationOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applyImapFlagOperation(rsp)));
            }));
    }
 
    /**
     * Validates sender/inbox context and recipient eligibility before attempting a send. Useful for preflight checks in UI or test workflows.
     * Check whether an email send would be accepted
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendEmailOptions 
     */
    public canSend(inboxId: string, sendEmailOptions: SendEmailOptions, options?: Configuration): Observable<CanSendEmailResults> {
        const requestContextPromise = this.requestFactory.canSend(inboxId, sendEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.canSend(rsp)));
            }));
    }
 
    /**
     * Runs content quality checks against hydrated email body content. This endpoint performs outbound HTTP checks for linked resources, so avoid use with sensitive or stateful URLs.
     * Check email body for broken links, images, and spelling issues
     * @param emailId 
     */
    public checkEmailBody(emailId: string, options?: Configuration): Observable<CheckEmailBodyResults> {
        const requestContextPromise = this.requestFactory.checkEmailBody(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkEmailBody(rsp)));
            }));
    }
 
    /**
     * Detects HTML/CSS features in the target email body and reports compatibility across major email clients and devices.
     * Check client support for features used in a stored email body
     * @param emailId 
     */
    public checkEmailBodyFeatureSupport(emailId: string, options?: Configuration): Observable<CheckEmailBodyFeatureSupportResults> {
        const requestContextPromise = this.requestFactory.checkEmailBodyFeatureSupport(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkEmailBodyFeatureSupport(rsp)));
            }));
    }
 
    /**
     * Evaluates HTML/CSS features in the supplied body and reports support coverage across major email clients and platforms.
     * Check email-client support for a provided HTML body
     * @param checkEmailClientSupportOptions 
     */
    public checkEmailClientSupport(checkEmailClientSupportOptions: CheckEmailClientSupportOptions, options?: Configuration): Observable<CheckEmailClientSupportResults> {
        const requestContextPromise = this.requestFactory.checkEmailClientSupport(checkEmailClientSupportOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkEmailClientSupport(rsp)));
            }));
    }
 
    /**
     * Deletes all emails for the authenticated account context. This operation is destructive and cannot be undone.
     * Delete all emails in all inboxes.
     */
    public deleteAllEmails(options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllEmails(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllEmails(rsp)));
            }));
    }
 
    /**
     * Deletes a single email from account scope. Operation is destructive and not reversible.
     * Delete an email
     * @param emailId ID of email to delete
     */
    public deleteEmail(emailId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteEmail(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEmail(rsp)));
            }));
    }
 
    /**
     * Returns attachment bytes by attachment ID. Use attachment IDs from email payloads or attachment listing endpoints.
     * Get email attachment bytes. Returned as `octet-stream` with content type header. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints and convert the base 64 encoded content to a file or string.
     * @param emailId ID of email
     * @param attachmentId ID of attachment
     * @param apiKey Can pass apiKey in url for this request if you wish to download the file in a browser. Content type will be set to original content type of the attachment file. This is so that browsers can download the file correctly.
     */
    public downloadAttachment(emailId: string, attachmentId: string, apiKey?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.downloadAttachment(emailId, attachmentId, apiKey, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadAttachment(rsp)));
            }));
    }
 
    /**
     * Returns attachment payload as base64 in JSON. Useful for clients that cannot reliably consume binary streaming responses.
     * Get email attachment as base64 encoded string as an alternative to binary responses. Decode the `base64FileContents` as a `utf-8` encoded string or array of bytes depending on the `contentType`.
     * @param emailId ID of email
     * @param attachmentId ID of attachment
     */
    public downloadAttachmentBase64(emailId: string, attachmentId: string, options?: Configuration): Observable<DownloadAttachmentDto> {
        const requestContextPromise = this.requestFactory.downloadAttachmentBase64(emailId, attachmentId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadAttachmentBase64(rsp)));
            }));
    }
 
    /**
     * Returns hydrated email body text as a string with content type aligned to the underlying body format.
     * Get email body as string. Returned as `plain/text` with content type header.
     * @param emailId ID of email
     */
    public downloadBody(emailId: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.downloadBody(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadBody(rsp)));
            }));
    }
 
    /**
     * Streams hydrated email body bytes with content type derived from the message body format.
     * Get email body in bytes. Returned as `octet-stream` with content type header.
     * @param emailId ID of email
     */
    public downloadBodyBytes(emailId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.downloadBodyBytes(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadBodyBytes(rsp)));
            }));
    }
 
    /**
     * Forwards an existing email to new recipients. Uses the owning inbox context unless overridden by allowed sender options.
     * Forward email to recipients
     * @param emailId ID of email
     * @param forwardEmailOptions 
     */
    public forwardEmail(emailId: string, forwardEmailOptions: ForwardEmailOptions, options?: Configuration): Observable<SentEmailDto> {
        const requestContextPromise = this.requestFactory.forwardEmail(emailId, forwardEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.forwardEmail(rsp)));
            }));
    }
 
    /**
     * Returns metadata for a specific attachment ID (name, content type, and size fields).
     * Get email attachment metadata. This is the `contentType` and `contentLength` of an attachment. To get the individual attachments  use the `downloadAttachment` methods.
     * @param emailId ID of email
     * @param attachmentId ID of attachment
     */
    public getAttachmentMetaData(emailId: string, attachmentId: string, options?: Configuration): Observable<AttachmentMetaData> {
        const requestContextPromise = this.requestFactory.getAttachmentMetaData(emailId, attachmentId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAttachmentMetaData(rsp)));
            }));
    }
 
    /**
     * Returns parsed email content including headers and body fields. Accessing hydrated content may mark the email as read depending on read-state rules.
     * Get hydrated email (headers and body)
     * @param emailId 
     */
    public getEmail(emailId: string, options?: Configuration): Observable<Email> {
        const requestContextPromise = this.requestFactory.getEmail(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmail(rsp)));
            }));
    }
 
    /**
     * Returns metadata for all attachment IDs associated with the email (name, content type, size, and IDs).
     * List attachment metadata for an email
     * @param emailId ID of email
     */
    public getEmailAttachments(emailId: string, options?: Configuration): Observable<Array<AttachmentMetaData>> {
        const requestContextPromise = this.requestFactory.getEmailAttachments(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailAttachments(rsp)));
            }));
    }
 
    /**
     * Extracts one-time passcodes and similar tokens from email content. Supports deterministic extraction now with method/fallback flags (`AUTO`, `PATTERN`, `LLM`, `OCR`, `OCR_THEN_LLM`) for QA and future advanced pipelines.
     * Extract verification codes from an email
     * @param emailId ID of email to extract codes from
     * @param extractCodesOptions 
     */
    public getEmailCodes(emailId: string, extractCodesOptions?: ExtractCodesOptions, options?: Configuration): Observable<ExtractCodesResult> {
        const requestContextPromise = this.requestFactory.getEmailCodes(emailId, extractCodesOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailCodes(rsp)));
            }));
    }
 
    /**
     * Executes a Java regex pattern over hydrated email body text and returns the full match plus capture groups. Pattern syntax follows Java `Pattern` rules.
     * Run regex against hydrated email body and return matches
     * @param emailId ID of email to match against
     * @param contentMatchOptions 
     */
    public getEmailContentMatch(emailId: string, contentMatchOptions: ContentMatchOptions, options?: Configuration): Observable<EmailContentMatchResult> {
        const requestContextPromise = this.requestFactory.getEmailContentMatch(emailId, contentMatchOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailContentMatch(rsp)));
            }));
    }
 
    /**
     * Extracts one MIME body part by `contentType` and optional `index`, returned in a structured DTO with metadata.
     * Get email content part by content type
     * @param emailId ID of email to match against
     * @param contentType Content type
     * @param strict Strict content type match
     * @param index Index of content type part if multiple
     */
    public getEmailContentPart(emailId: string, contentType: string, strict?: boolean, index?: number, options?: Configuration): Observable<EmailContentPartResult> {
        const requestContextPromise = this.requestFactory.getEmailContentPart(emailId, contentType, strict, index, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailContentPart(rsp)));
            }));
    }
 
    /**
     * Extracts one MIME body part by `contentType` and optional `index`, and returns raw content with matching response content type when valid.
     * Get multipart content part as raw response
     * @param emailId ID of email to match against
     * @param contentType Content type
     * @param strict Strict content type match
     * @param index Index of content type part if multiple. Starts from 0 and applies to the result list after selecting for your content type. Content type parts are sorted by order found in original MIME message.
     */
    public getEmailContentPartContent(emailId: string, contentType: string, strict?: boolean, index?: number, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getEmailContentPartContent(emailId, contentType, strict, index, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailContentPartContent(rsp)));
            }));
    }
 
    /**
     * Returns total email count for the authenticated user, or count scoped to a specific inbox when `inboxId` is provided.
     * Get email count
     * @param inboxId 
     */
    public getEmailCount(inboxId?: string, options?: Configuration): Observable<CountDto> {
        const requestContextPromise = this.requestFactory.getEmailCount(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailCount(rsp)));
            }));
    }
 
    /**
     * Returns hydrated HTML body directly with `text/html` content type. Supports temporary access/browser usage and optional CID replacement for inline asset rendering.
     * Get hydrated email HTML for browser rendering
     * @param emailId 
     * @param replaceCidImages 
     */
    public getEmailHTML(emailId: string, replaceCidImages?: boolean, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getEmailHTML(emailId, replaceCidImages, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailHTML(rsp)));
            }));
    }
 
    /**
     * Returns hydrated HTML body and subject in a JSON DTO. Useful for API clients that need structured response payloads instead of raw HTML responses.
     * Get hydrated email HTML wrapped in JSON
     * @param emailId 
     * @param replaceCidImages 
     */
    public getEmailHTMLJson(emailId: string, replaceCidImages?: boolean, options?: Configuration): Observable<EmailHtmlDto> {
        const requestContextPromise = this.requestFactory.getEmailHTMLJson(emailId, replaceCidImages, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailHTMLJson(rsp)));
            }));
    }
 
    /**
     * Applies a JSoup/CSS selector to hydrated HTML email body and returns matching text lines.
     * Query hydrated HTML body and return matching text lines
     * @param emailId ID of email to perform HTML query on
     * @param htmlSelector HTML selector to search for. Uses JQuery/JSoup/CSS style selector like &#39;.my-div&#39; to match content. See https://jsoup.org/apidocs/org/jsoup/select/Selector.html for more information.
     */
    public getEmailHTMLQuery(emailId: string, htmlSelector: string, options?: Configuration): Observable<EmailTextLinesResult> {
        const requestContextPromise = this.requestFactory.getEmailHTMLQuery(emailId, htmlSelector, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailHTMLQuery(rsp)));
            }));
    }
 
    /**
     * Parses HTML content and extracts link URLs (`href`). For non-HTML emails this endpoint returns a validation error.
     * Extract links from an email HTML body
     * @param emailId ID of email to fetch text for
     * @param selector Optional HTML query selector for links
     */
    public getEmailLinks(emailId: string, selector?: string, options?: Configuration): Observable<EmailLinksResult> {
        const requestContextPromise = this.requestFactory.getEmailLinks(emailId, selector, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailLinks(rsp)));
            }));
    }
 
    /**
     * Returns precomputed URLs for preview and raw message access for the specified email.
     * Get email URLs for viewing in browser or downloading
     * @param emailId 
     */
    public getEmailPreviewURLs(emailId: string, options?: Configuration): Observable<EmailPreviewUrls> {
        const requestContextPromise = this.requestFactory.getEmailPreviewURLs(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailPreviewURLs(rsp)));
            }));
    }
 
    /**
     * Renders the email in a browser engine and returns PNG data as base64. Useful for APIs and dashboards that cannot easily stream binary responses.
     * Take a screenshot of an email in a browser and return base64 encoded string
     * @param emailId 
     * @param getEmailScreenshotOptions 
     */
    public getEmailScreenshotAsBase64(emailId: string, getEmailScreenshotOptions: GetEmailScreenshotOptions, options?: Configuration): Observable<EmailScreenshotResult> {
        const requestContextPromise = this.requestFactory.getEmailScreenshotAsBase64(emailId, getEmailScreenshotOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailScreenshotAsBase64(rsp)));
            }));
    }
 
    /**
     * Renders the email in a browser engine and returns PNG bytes. Intended for visual QA and rendering regression checks.
     * Take a screenshot of an email in a browser
     * @param emailId 
     * @param getEmailScreenshotOptions 
     */
    public getEmailScreenshotAsBinary(emailId: string, getEmailScreenshotOptions: GetEmailScreenshotOptions, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.getEmailScreenshotAsBinary(emailId, getEmailScreenshotOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailScreenshotAsBinary(rsp)));
            }));
    }
 
    /**
     * Attempts to parse a sender signature block from an email body. Uses raw MIME content parts when possible and falls back to hydrated body parsing. This is heuristic and may not be accurate for all email clients or formats.
     * Extract signature from an inbound email
     * @param emailId ID of email to extract signature from
     */
    public getEmailSignature(emailId: string, options?: Configuration): Observable<EmailSignatureParseResult> {
        const requestContextPromise = this.requestFactory.getEmailSignature(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailSignature(rsp)));
            }));
    }
 
    /**
     * Returns lightweight metadata and headers for an email. Use `getEmail` for hydrated body content or `getRawEmail` for original SMTP content.
     * Get email summary (headers/metadata only)
     * @param emailId 
     * @param decode Deprecated and ignored. Retained for backwards compatibility.
     */
    public getEmailSummary(emailId: string, decode?: boolean, options?: Configuration): Observable<EmailPreview> {
        const requestContextPromise = this.requestFactory.getEmailSummary(emailId, decode, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailSummary(rsp)));
            }));
    }
 
    /**
     * Converts email body content to line-based plain text with optional HTML entity decoding and custom line separator.
     * Extract normalized text lines from email body
     * @param emailId ID of email to fetch text for
     * @param decodeHtmlEntities Decode HTML entities
     * @param lineSeparator Line separator character
     */
    public getEmailTextLines(emailId: string, decodeHtmlEntities?: boolean, lineSeparator?: string, options?: Configuration): Observable<EmailTextLinesResult> {
        const requestContextPromise = this.requestFactory.getEmailTextLines(emailId, decodeHtmlEntities, lineSeparator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailTextLines(rsp)));
            }));
    }
 
    /**
     * Returns thread metadata built from RFC 5322 `Message-ID`, `In-Reply-To`, and `References` headers. Use `getEmailThreadItems` to fetch the thread messages.
     * Get email thread metadata by thread ID
     * @param threadId 
     */
    public getEmailThread(threadId: string, options?: Configuration): Observable<EmailThreadDto> {
        const requestContextPromise = this.requestFactory.getEmailThread(threadId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailThread(rsp)));
            }));
    }
 
    /**
     * Returns all messages in a thread ordered by `createdAt` using the requested sort direction.
     * Get messages in a specific email thread
     * @param threadId 
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getEmailThreadItems(threadId: string, sort?: 'ASC' | 'DESC', options?: Configuration): Observable<EmailThreadItemsDto> {
        const requestContextPromise = this.requestFactory.getEmailThreadItems(threadId, sort, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailThreadItems(rsp)));
            }));
    }
 
    /**
     * Lists conversation threads inferred from `Message-ID`, `In-Reply-To`, and `References`. Supports filtering by inbox, search text, and time range.
     * List email threads in paginated form
     * @param htmlSelector Optional inbox filter. Query parameter name is &#x60;htmlSelector&#x60; for legacy compatibility.
     * @param page Optional page index in email thread pagination
     * @param size Optional page size in email thread pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter search filter for email threads.
     * @param since Optional filter email threads created since time
     * @param before Optional filter emails threads created before given date time
     */
    public getEmailThreads(htmlSelector?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageEmailThreadProjection> {
        const requestContextPromise = this.requestFactory.getEmailThreads(htmlSelector, page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailThreads(rsp)));
            }));
    }
 
    /**
     * Offset-style pagination endpoint for listing emails across inboxes. Supports inbox filters, unread-only, search, date boundaries, favourites, connector sync, plus-address filtering, and explicit include IDs.
     * Get all emails in all inboxes in paginated form. Email API list all.
     * @param inboxId Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
     * @param page Optional page index in email list pagination
     * @param size Optional page size in email list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param unreadOnly Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly
     * @param searchFilter Optional search filter. Full email addresses match sender and receiving inbox email or receiving plus-address full address exactly. Address-like fragments containing @ (for example +alias@) also match sender, receiving inbox email, and receiving plus-address full address by contains. General text search matches sender, subject, and ID.
     * @param since Optional filter emails received after given date time
     * @param before Optional filter emails received before given date time
     * @param favourited Optional filter emails that are favourited
     * @param syncConnectors Sync connectors
     * @param plusAddressId Optional plus address ID filter
     * @param include Optional list of IDs to include in result
     */
    public getEmailsOffsetPaginated(inboxId?: Array<string>, page?: number, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, searchFilter?: string, since?: Date, before?: Date, favourited?: boolean, syncConnectors?: boolean, plusAddressId?: string, include?: Array<string>, options?: Configuration): Observable<PageEmailProjection> {
        const requestContextPromise = this.requestFactory.getEmailsOffsetPaginated(inboxId, page, size, sort, unreadOnly, searchFilter, since, before, favourited, syncConnectors, plusAddressId, include, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailsOffsetPaginated(rsp)));
            }));
    }
 
    /**
     * Primary paginated email listing endpoint. Returns emails across inboxes with support for inbox filters, unread-only, search, date boundaries, favourites, connector sync, and plus-address filtering.
     * Get all emails in all inboxes in paginated form. Email API list all.
     * @param inboxId Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
     * @param page Optional page index in email list pagination
     * @param size Optional page size in email list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param unreadOnly Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly
     * @param searchFilter Optional search filter. Full email addresses match sender and receiving inbox email or receiving plus-address full address exactly. Address-like fragments containing @ (for example +alias@) also match sender, receiving inbox email, and receiving plus-address full address by contains. General text search matches sender, subject, and ID.
     * @param since Optional filter emails received after given date time. If unset will use time 24hours prior to now.
     * @param before Optional filter emails received before given date time
     * @param syncConnectors Sync connectors
     * @param plusAddressId Optional plus address ID filter
     * @param favourited Optional filter emails that are favourited
     */
    public getEmailsPaginated(inboxId?: Array<string>, page?: number, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, searchFilter?: string, since?: Date, before?: Date, syncConnectors?: boolean, plusAddressId?: string, favourited?: boolean, options?: Configuration): Observable<PageEmailProjection> {
        const requestContextPromise = this.requestFactory.getEmailsPaginated(inboxId, page, size, sort, unreadOnly, searchFilter, since, before, syncConnectors, plusAddressId, favourited, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailsPaginated(rsp)));
            }));
    }
 
    /**
     * Builds a Gravatar image URL from the provided email address and optional size. This endpoint does not fetch image bytes; it only returns the computed URL.
     * Get Gravatar URL for an email address
     * @param emailAddress 
     * @param size 
     */
    public getGravatarUrlForEmailAddress(emailAddress: string, size?: string, options?: Configuration): Observable<GravatarUrl> {
        const requestContextPromise = this.requestFactory.getGravatarUrlForEmailAddress(emailAddress, size, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGravatarUrlForEmailAddress(rsp)));
            }));
    }
 
    /**
     * Returns the most recently received email across all inboxes or an optional subset of inbox IDs.
     * Get latest email in all inboxes. Most recently received.
     * @param inboxIds Optional set of inboxes to filter by. Only get the latest email from these inbox IDs. If not provided will search across all inboxes
     */
    public getLatestEmail(inboxIds?: Array<string>, options?: Configuration): Observable<Email> {
        const requestContextPromise = this.requestFactory.getLatestEmail(inboxIds, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLatestEmail(rsp)));
            }));
    }
 
    /**
     * Returns the newest email for the specified inbox ID. For polling/wait semantics use wait endpoints.
     * Get latest email in an inbox. Use `WaitForController` to get emails that may not have arrived yet.
     * @param inboxId ID of the inbox you want to get the latest email from
     */
    public getLatestEmailInInbox1(inboxId: string, options?: Configuration): Observable<Email> {
        const requestContextPromise = this.requestFactory.getLatestEmailInInbox1(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLatestEmailInInbox1(rsp)));
            }));
    }
 
    /**
     * Returns paginated emails visible through organization/team access. Supports inbox filtering, unread-only filtering, search, favourites, plus-address filtering, and optional connector sync.
     * List organization-visible emails
     * @param inboxId Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
     * @param page Optional page index in email list pagination
     * @param size Optional page size in email list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param unreadOnly Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly
     * @param searchFilter Optional search filter search filter for emails.
     * @param since Optional filter emails received after given date time. If unset will use time 24hours prior to now.
     * @param before Optional filter emails received before given date time
     * @param syncConnectors Sync connectors
     * @param favourited Search only favorited emails
     * @param plusAddressId Optional plus address ID filter
     */
    public getOrganizationEmailsPaginated(inboxId?: Array<string>, page?: number, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, searchFilter?: string, since?: Date, before?: Date, syncConnectors?: boolean, favourited?: boolean, plusAddressId?: string, options?: Configuration): Observable<PageEmailProjection> {
        const requestContextPromise = this.requestFactory.getOrganizationEmailsPaginated(inboxId, page, size, sort, unreadOnly, searchFilter, since, before, syncConnectors, favourited, plusAddressId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationEmailsPaginated(rsp)));
            }));
    }
 
    /**
     * Returns the original unparsed SMTP/MIME message as `text/plain`. Use JSON variant if your client expects JSON transport.
     * Get raw email string. Returns unparsed raw SMTP message with headers and body.
     * @param emailId ID of email
     */
    public getRawEmailContents(emailId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.getRawEmailContents(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRawEmailContents(rsp)));
            }));
    }
 
    /**
     * Returns the original unparsed SMTP/MIME message wrapped in a JSON DTO for API clients that avoid plain-text stream responses.
     * Get raw email in JSON. Unparsed SMTP message in JSON wrapper format.
     * @param emailId ID of email
     */
    public getRawEmailJson(emailId: string, options?: Configuration): Observable<RawEmailJson> {
        const requestContextPromise = this.requestFactory.getRawEmailJson(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRawEmailJson(rsp)));
            }));
    }
 
    /**
     * Returns unread email count. An email is considered read after dashboard/API retrieval depending on your read workflow.
     * Get unread email count
     * @param inboxId Inbox ID filter for unread count scope
     */
    public getUnreadEmailCount(inboxId?: string, options?: Configuration): Observable<UnreadCount> {
        const requestContextPromise = this.requestFactory.getUnreadEmailCount(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUnreadEmailCount(rsp)));
            }));
    }
 
    /**
     * Sets read state for all emails, optionally scoped to one inbox. Use `read=false` to reset unread state in bulk.
     * Mark all emails as read or unread
     * @param read What value to assign to email read property. Default true.
     * @param inboxId Optional inbox ID filter
     */
    public markAllAsRead(read?: boolean, inboxId?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.markAllAsRead(read, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.markAllAsRead(rsp)));
            }));
    }
 
    /**
     * Sets read state for one email. Useful when implementing custom mailbox workflows that treat viewed messages as unread.
     * Mark an email as read or unread
     * @param emailId 
     * @param read What value to assign to email read property. Default true.
     */
    public markAsRead(emailId: string, read?: boolean, options?: Configuration): Observable<EmailPreview> {
        const requestContextPromise = this.requestFactory.markAsRead(emailId, read, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.markAsRead(rsp)));
            }));
    }
 
    /**
     * Sends a reply using the original conversation context (subject/thread headers). Reply target resolution honors sender/reply-to semantics.
     * Reply to an email
     * @param emailId ID of the email that should be replied to
     * @param replyToEmailOptions 
     */
    public replyToEmail(emailId: string, replyToEmailOptions: ReplyToEmailOptions, options?: Configuration): Observable<SentEmailDto> {
        const requestContextPromise = this.requestFactory.replyToEmail(emailId, replyToEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replyToEmail(rsp)));
            }));
    }
 
    /**
     * Searches emails by sender/recipient/address/subject/id fields and returns paginated matches. Does not perform full-text body search.
     * Get all emails by search criteria. Return in paginated form.
     * @param searchEmailsOptions 
     * @param syncConnectors Sync connectors
     * @param favourited Search only favourited emails
     * @param plusAddressId Optional plus address ID filter
     */
    public searchEmails(searchEmailsOptions: SearchEmailsOptions, syncConnectors?: boolean, favourited?: boolean, plusAddressId?: string, options?: Configuration): Observable<PageEmailProjection> {
        const requestContextPromise = this.requestFactory.searchEmails(searchEmailsOptions, syncConnectors, favourited, plusAddressId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchEmails(rsp)));
            }));
    }
 
    /**
     * Sends an email from an existing inbox, or creates a temporary inbox when `inboxId` is not provided. Supports `useDomainPool` and `virtualSend` inbox creation behavior for convenience sends.
     * Send email
     * @param sendEmailOptions 
     * @param inboxId ID of the inbox you want to send the email from
     * @param useDomainPool Use domain pool. Optionally create inbox to send from using the mailslurp domain pool.
     * @param virtualSend Optionally create inbox to send from that is a virtual inbox and won&#39;t send to external addresses
     */
    public sendEmailSourceOptional(sendEmailOptions: SendEmailOptions, inboxId?: string, useDomainPool?: boolean, virtualSend?: boolean, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.sendEmailSourceOptional(sendEmailOptions, inboxId, useDomainPool, virtualSend, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEmailSourceOptional(rsp)));
            }));
    }
 
    /**
     * Sets favourite state for an email for dashboard/search workflows.
     * Set email favourited state
     * @param emailId ID of email to set favourite state
     * @param favourited 
     */
    public setEmailFavourited(emailId: string, favourited: boolean, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.setEmailFavourited(emailId, favourited, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setEmailFavourited(rsp)));
            }));
    }
 
    /**
     * Runs HTML validation on the email body when HTML is present. Non-HTML emails are treated as valid for this check.
     * Validate email HTML contents
     * @param emailId ID of email
     */
    public validateEmail(emailId: string, options?: Configuration): Observable<ValidationDto> {
        const requestContextPromise = this.requestFactory.validateEmail(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validateEmail(rsp)));
            }));
    }
 
}

import { EmailVerificationControllerApiRequestFactory, EmailVerificationControllerApiResponseProcessor} from "../apis/EmailVerificationControllerApi.ts";
export class ObservableEmailVerificationControllerApi {
    private requestFactory: EmailVerificationControllerApiRequestFactory;
    private responseProcessor: EmailVerificationControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailVerificationControllerApiRequestFactory,
        responseProcessor?: EmailVerificationControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EmailVerificationControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EmailVerificationControllerApiResponseProcessor();
    }

    /**
     * Remove validation requests
     * Delete all validation requests
     */
    public deleteAllValidationRequests(options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllValidationRequests(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllValidationRequests(rsp)));
            }));
    }
 
    /**
     * Delete a validation record
     * Delete a validation record
     * @param id 
     */
    public deleteValidationRequest(id: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteValidationRequest(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteValidationRequest(rsp)));
            }));
    }
 
    /**
     * List email verification requests
     * Validate a list of email addresses. Per unit billing. See your plan for pricing.
     * @param page Optional page index in list pagination
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param isValid Filter where email is valid is true or false
     */
    public getValidationRequests(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, isValid?: boolean, options?: Configuration): Observable<PageEmailValidationRequest> {
        const requestContextPromise = this.requestFactory.getValidationRequests(page, size, sort, searchFilter, since, before, isValid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationRequests(rsp)));
            }));
    }
 
    /**
     * Verify a list of email addresses is valid and can be contacted.
     * Validate a list of email addresses. Per unit billing. See your plan for pricing.
     * @param validateEmailAddressListOptions 
     */
    public validateEmailAddressList(validateEmailAddressListOptions: ValidateEmailAddressListOptions, options?: Configuration): Observable<ValidateEmailAddressListResult> {
        const requestContextPromise = this.requestFactory.validateEmailAddressList(validateEmailAddressListOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validateEmailAddressList(rsp)));
            }));
    }
 
}

import { ExpiredControllerApiRequestFactory, ExpiredControllerApiResponseProcessor} from "../apis/ExpiredControllerApi.ts";
export class ObservableExpiredControllerApi {
    private requestFactory: ExpiredControllerApiRequestFactory;
    private responseProcessor: ExpiredControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExpiredControllerApiRequestFactory,
        responseProcessor?: ExpiredControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExpiredControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExpiredControllerApiResponseProcessor();
    }

    /**
     * Return default times used for inbox expiration
     * Get default expiration settings
     */
    public getExpirationDefaults(options?: Configuration): Observable<ExpirationDefaults> {
        const requestContextPromise = this.requestFactory.getExpirationDefaults(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExpirationDefaults(rsp)));
            }));
    }
 
    /**
     * Use the inboxId to return an ExpiredInboxRecord if an inbox has expired. Inboxes expire and are disabled if an expiration date is set or plan requires. Returns 404 if no expired inbox is found for the inboxId
     * Get expired inbox record for a previously existing inbox
     * @param inboxId ID of inbox you want to retrieve (not the inbox ID)
     */
    public getExpiredInboxByInboxId(inboxId: string, options?: Configuration): Observable<ExpiredInboxDto> {
        const requestContextPromise = this.requestFactory.getExpiredInboxByInboxId(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExpiredInboxByInboxId(rsp)));
            }));
    }
 
    /**
     * Inboxes created with an expiration date will expire after the given date and be moved to an ExpiredInbox entity. You can still read emails in the inbox but it can no longer send or receive emails. Fetch the expired inboxes to view the old inboxes properties
     * Get an expired inbox record
     * @param expiredId ID of the ExpiredInboxRecord you want to retrieve. This is different from the ID of the inbox you are interested in. See other methods for getting ExpiredInboxRecord for an inbox inboxId
     */
    public getExpiredInboxRecord(expiredId: string, options?: Configuration): Observable<ExpiredInboxDto> {
        const requestContextPromise = this.requestFactory.getExpiredInboxRecord(expiredId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExpiredInboxRecord(rsp)));
            }));
    }
 
    /**
     * Inboxes created with an expiration date will expire after the given date. An ExpiredInboxRecord is created that records the inboxes old ID and email address. You can still read emails in the inbox (using the inboxes old ID) but the email address associated with the inbox can no longer send or receive emails. Fetch expired inbox records to view the old inboxes properties
     * List records of expired inboxes
     * @param page Optional page index in inbox sent email list pagination
     * @param size Optional page size in inbox sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optionally filter by inbox ID
     */
    public getExpiredInboxes(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, inboxId?: string, options?: Configuration): Observable<PageExpiredInboxRecordProjection> {
        const requestContextPromise = this.requestFactory.getExpiredInboxes(page, size, sort, since, before, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExpiredInboxes(rsp)));
            }));
    }
 
}

import { ExportControllerApiRequestFactory, ExportControllerApiResponseProcessor} from "../apis/ExportControllerApi.ts";
export class ObservableExportControllerApi {
    private requestFactory: ExportControllerApiRequestFactory;
    private responseProcessor: ExportControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExportControllerApiRequestFactory,
        responseProcessor?: ExportControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExportControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExportControllerApiResponseProcessor();
    }

    /**
     * Export inboxes link callable via browser
     * @param exportType 
     * @param apiKey 
     * @param outputFormat 
     * @param filter 
     * @param listSeparatorToken 
     * @param excludePreviouslyExported 
     * @param createdEarliestTime 
     * @param createdOldestTime 
     */
    public exportEntities(exportType: 'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS', apiKey: string, outputFormat: 'CSV_DEFAULT' | 'CSV_EXCEL', filter?: string, listSeparatorToken?: string, excludePreviouslyExported?: boolean, createdEarliestTime?: Date, createdOldestTime?: Date, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.exportEntities(exportType, apiKey, outputFormat, filter, listSeparatorToken, excludePreviouslyExported, createdEarliestTime, createdOldestTime, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportEntities(rsp)));
            }));
    }
 
    /**
     * Get export link
     * @param exportType 
     * @param exportOptions 
     * @param apiKey 
     */
    public getExportLink(exportType: 'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS', exportOptions: ExportOptions, apiKey?: string, options?: Configuration): Observable<ExportLink> {
        const requestContextPromise = this.requestFactory.getExportLink(exportType, exportOptions, apiKey, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExportLink(rsp)));
            }));
    }
 
}

import { FormControllerApiRequestFactory, FormControllerApiResponseProcessor} from "../apis/FormControllerApi.ts";
export class ObservableFormControllerApi {
    private requestFactory: FormControllerApiRequestFactory;
    private responseProcessor: FormControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FormControllerApiRequestFactory,
        responseProcessor?: FormControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FormControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FormControllerApiResponseProcessor();
    }

    /**
     * This endpoint allows you to submit HTML forms and receive the field values and files via email.   #### Parameters The endpoint looks for special meta parameters in the form fields OR in the URL request parameters. The meta parameters can be used to specify the behaviour of the email.   You must provide at-least a `_to` email address to tell the endpoint where the form should be emailed. These can be submitted as hidden HTML input fields with the corresponding `name` attributes or as URL query parameters such as `?_to=test@example.com`  The endpoint takes all other form fields that are named and includes them in the message body of the email. Files are sent as attachments.  #### Submitting This endpoint accepts form submission via POST method. It accepts `application/x-www-form-urlencoded`, and `multipart/form-data` content-types.  #### HTML Example ```html <form    action=\"https://api.mailslurp.com/forms\"   method=\"post\" >   <input name=\"_to\" type=\"hidden\" value=\"test@example.com\"/>   <textarea name=\"feedback\"></textarea>   <button type=\"submit\">Submit</button> </form> ```  #### URL Example ```html <form    action=\"https://api.mailslurp.com/forms?_to=test@example.com\"   method=\"post\" >   <textarea name=\"feedback\"></textarea>   <button type=\"submit\">Submit</button> </form> ```    The email address is specified by a `_to` field OR is extracted from an email alias specified by a `_toAlias` field (see the alias controller for more information).  Endpoint accepts .  You can specify a content type in HTML forms using the `enctype` attribute, for instance: `<form enctype=\"multipart/form-data\">`.  
     * Submit a form to be parsed and sent as an email to an address determined by the form fields
     * @param to The email address that submitted form should be sent to.
     * @param subject Optional subject of the email that will be sent.
     * @param emailAddress Email address of the submitting user. Include this if you wish to record the submitters email address and reply to it later.
     * @param successMessage Optional success message to display if no _redirectTo present.
     * @param spamCheck Optional but recommended field that catches spammers out. Include as a hidden form field but LEAVE EMPTY. Spam-bots will usually fill every field. If the _spamCheck field is filled the form submission will be ignored.
     * @param otherParameters All other parameters or fields will be accepted and attached to the sent email. This includes files and any HTML form field with a name. These fields will become the body of the email that is sent.
     */
    public submitForm(to?: string, subject?: string, emailAddress?: string, successMessage?: string, spamCheck?: string, otherParameters?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.submitForm(to, subject, emailAddress, successMessage, spamCheck, otherParameters, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.submitForm(rsp)));
            }));
    }
 
}

import { GroupControllerApiRequestFactory, GroupControllerApiResponseProcessor} from "../apis/GroupControllerApi.ts";
export class ObservableGroupControllerApi {
    private requestFactory: GroupControllerApiRequestFactory;
    private responseProcessor: GroupControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupControllerApiRequestFactory,
        responseProcessor?: GroupControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GroupControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GroupControllerApiResponseProcessor();
    }

    /**
     * Add contacts to a group
     * @param groupId 
     * @param updateGroupContacts 
     */
    public addContactsToGroup(groupId: string, updateGroupContacts: UpdateGroupContacts, options?: Configuration): Observable<GroupContactsDto> {
        const requestContextPromise = this.requestFactory.addContactsToGroup(groupId, updateGroupContacts, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addContactsToGroup(rsp)));
            }));
    }
 
    /**
     * Create a group
     * @param createGroupOptions 
     */
    public createGroup(createGroupOptions: CreateGroupOptions, options?: Configuration): Observable<GroupDto> {
        const requestContextPromise = this.requestFactory.createGroup(createGroupOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createGroup(rsp)));
            }));
    }
 
    /**
     * Delete group
     * @param groupId 
     */
    public deleteGroup(groupId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteGroup(groupId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteGroup(rsp)));
            }));
    }
 
    /**
     * Get all Contact Groups in paginated format
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllGroups(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageGroupProjection> {
        const requestContextPromise = this.requestFactory.getAllGroups(page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllGroups(rsp)));
            }));
    }
 
    /**
     * Get group
     * @param groupId 
     */
    public getGroup(groupId: string, options?: Configuration): Observable<GroupDto> {
        const requestContextPromise = this.requestFactory.getGroup(groupId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGroup(rsp)));
            }));
    }
 
    /**
     * Get group and contacts belonging to it
     * @param groupId 
     */
    public getGroupWithContacts(groupId: string, options?: Configuration): Observable<GroupContactsDto> {
        const requestContextPromise = this.requestFactory.getGroupWithContacts(groupId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGroupWithContacts(rsp)));
            }));
    }
 
    /**
     * Get group and paginated contacts belonging to it
     * @param groupId 
     * @param page Optional page index in group contact pagination
     * @param size Optional page size in group contact pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getGroupWithContactsPaginated(groupId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageContactProjection> {
        const requestContextPromise = this.requestFactory.getGroupWithContactsPaginated(groupId, page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGroupWithContactsPaginated(rsp)));
            }));
    }
 
    /**
     * Get all groups
     */
    public getGroups(options?: Configuration): Observable<Array<GroupProjection>> {
        const requestContextPromise = this.requestFactory.getGroups(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGroups(rsp)));
            }));
    }
 
    /**
     * Remove contacts from a group
     * @param groupId 
     * @param updateGroupContacts 
     */
    public removeContactsFromGroup(groupId: string, updateGroupContacts: UpdateGroupContacts, options?: Configuration): Observable<GroupContactsDto> {
        const requestContextPromise = this.requestFactory.removeContactsFromGroup(groupId, updateGroupContacts, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeContactsFromGroup(rsp)));
            }));
    }
 
}

import { GuestPortalControllerApiRequestFactory, GuestPortalControllerApiResponseProcessor} from "../apis/GuestPortalControllerApi.ts";
export class ObservableGuestPortalControllerApi {
    private requestFactory: GuestPortalControllerApiRequestFactory;
    private responseProcessor: GuestPortalControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GuestPortalControllerApiRequestFactory,
        responseProcessor?: GuestPortalControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GuestPortalControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GuestPortalControllerApiResponseProcessor();
    }

    /**
     * Create a guest login page for customers or clients to access assigned email addresses
     * Create a portal page for your customers or clients to log into email accounts and view emails.
     * @param createPortalOptions 
     */
    public createGuestPortal(createPortalOptions: CreatePortalOptions, options?: Configuration): Observable<GuestPortalDto> {
        const requestContextPromise = this.requestFactory.createGuestPortal(createPortalOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createGuestPortal(rsp)));
            }));
    }
 
    /**
     * Add customer to portal
     * Create a portal guest user
     * @param portalId 
     * @param createPortalUserOptions 
     */
    public createGuestPortalUser(portalId: string, createPortalUserOptions: CreatePortalUserOptions, options?: Configuration): Observable<GuestPortalUserCreateDto> {
        const requestContextPromise = this.requestFactory.createGuestPortalUser(portalId, createPortalUserOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createGuestPortalUser(rsp)));
            }));
    }
 
    /**
     * Get all customers for a portal
     * Get all guest users for portal
     * @param portalId Optional portal ID
     * @param search Optional search term
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllGuestPortalUsers(portalId?: string, search?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageGuestPortalUsers> {
        const requestContextPromise = this.requestFactory.getAllGuestPortalUsers(portalId, search, page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllGuestPortalUsers(rsp)));
            }));
    }
 
    /**
     * Fetch a customer guest portal
     * Get a client email portal
     * @param portalId 
     */
    public getGuestPortal(portalId: string, options?: Configuration): Observable<GuestPortalDto> {
        const requestContextPromise = this.requestFactory.getGuestPortal(portalId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGuestPortal(rsp)));
            }));
    }
 
    /**
     * Get customer for portal
     * Get guest user for portal
     * @param portalId 
     * @param guestId 
     */
    public getGuestPortalUser(portalId: string, guestId: string, options?: Configuration): Observable<GuestPortalUserDto> {
        const requestContextPromise = this.requestFactory.getGuestPortalUser(portalId, guestId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGuestPortalUser(rsp)));
            }));
    }
 
    /**
     * Get customer by ID
     * Get guest user
     * @param guestId 
     */
    public getGuestPortalUserById(guestId: string, options?: Configuration): Observable<GuestPortalUserDto> {
        const requestContextPromise = this.requestFactory.getGuestPortalUserById(guestId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGuestPortalUserById(rsp)));
            }));
    }
 
    /**
     * Get customers for a portal
     * Get all guest users for portal
     * @param portalId 
     * @param search Optional search term
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getGuestPortalUsers(portalId: string, search?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageGuestPortalUsers> {
        const requestContextPromise = this.requestFactory.getGuestPortalUsers(portalId, search, page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGuestPortalUsers(rsp)));
            }));
    }
 
    /**
     * Get portals
     * Get guest portals
     */
    public getGuestPortals(options?: Configuration): Observable<Array<GuestPortalDto>> {
        const requestContextPromise = this.requestFactory.getGuestPortals(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGuestPortals(rsp)));
            }));
    }
 
}

import { ImapControllerApiRequestFactory, ImapControllerApiResponseProcessor} from "../apis/ImapControllerApi.ts";
export class ObservableImapControllerApi {
    private requestFactory: ImapControllerApiRequestFactory;
    private responseProcessor: ImapControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ImapControllerApiRequestFactory,
        responseProcessor?: ImapControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ImapControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ImapControllerApiResponseProcessor();
    }

    /**
     * Fetch message in an inbox
     * @param seqNum 
     * @param inboxId Inbox ID to search
     */
    public imapServerFetch(seqNum: number, inboxId?: string, options?: Configuration): Observable<ImapServerFetchResult> {
        const requestContextPromise = this.requestFactory.imapServerFetch(seqNum, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imapServerFetch(rsp)));
            }));
    }
 
    /**
     * Get a message by email ID
     * @param emailId Email ID to get
     * @param inboxId Inbox ID to search
     */
    public imapServerGet(emailId: string, inboxId?: string, options?: Configuration): Observable<ImapServerGetResult> {
        const requestContextPromise = this.requestFactory.imapServerGet(emailId, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imapServerGet(rsp)));
            }));
    }
 
    /**
     * List messages in an inbox
     * @param imapServerListOptions 
     * @param inboxId Inbox ID to list
     */
    public imapServerList(imapServerListOptions: ImapServerListOptions, inboxId?: string, options?: Configuration): Observable<ImapServerListResult> {
        const requestContextPromise = this.requestFactory.imapServerList(imapServerListOptions, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imapServerList(rsp)));
            }));
    }
 
    /**
     * Create a new mailbox if possible
     * @param name Inbox email address to create
     */
    public imapServerMailbox(name: string, options?: Configuration): Observable<ImapServerMailboxResult> {
        const requestContextPromise = this.requestFactory.imapServerMailbox(name, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imapServerMailbox(rsp)));
            }));
    }
 
    /**
     * Search messages in an inbox
     * @param imapServerSearchOptions 
     * @param inboxId Inbox ID to search
     */
    public imapServerSearch(imapServerSearchOptions: ImapServerSearchOptions, inboxId?: string, options?: Configuration): Observable<ImapServerSearchResult> {
        const requestContextPromise = this.requestFactory.imapServerSearch(imapServerSearchOptions, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imapServerSearch(rsp)));
            }));
    }
 
    /**
     * Get status for mailbox
     * @param imapServerStatusOptions 
     * @param inboxId Inbox ID to list
     */
    public imapServerStatus(imapServerStatusOptions: ImapServerStatusOptions, inboxId?: string, options?: Configuration): Observable<ImapServerStatusResult> {
        const requestContextPromise = this.requestFactory.imapServerStatus(imapServerStatusOptions, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imapServerStatus(rsp)));
            }));
    }
 
    /**
     * Update message flags
     * @param imapUpdateFlagsOptions 
     * @param inboxId 
     */
    public imapServerUpdateFlags(imapUpdateFlagsOptions: ImapUpdateFlagsOptions, inboxId?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.imapServerUpdateFlags(imapUpdateFlagsOptions, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imapServerUpdateFlags(rsp)));
            }));
    }
 
}

import { InboxControllerApiRequestFactory, InboxControllerApiResponseProcessor} from "../apis/InboxControllerApi.ts";
export class ObservableInboxControllerApi {
    private requestFactory: InboxControllerApiRequestFactory;
    private responseProcessor: InboxControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InboxControllerApiRequestFactory,
        responseProcessor?: InboxControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InboxControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InboxControllerApiResponseProcessor();
    }

    /**
     * Get a scheduled email job and cancel it. Will fail if status of job is already cancelled, failed, or complete.
     * Cancel a scheduled email job
     * @param jobId 
     */
    public cancelScheduledJob(jobId: string, options?: Configuration): Observable<ScheduledJobDto> {
        const requestContextPromise = this.requestFactory.cancelScheduledJob(jobId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelScheduledJob(rsp)));
            }));
    }
 
    /**
     * Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty. 
     * Create an inbox email address. An inbox has a real email address and can send and receive emails. Inboxes can be either `SMTP` or `HTTP` inboxes.
     * @param emailAddress A custom email address to use with the inbox. Defaults to null. When null MailSlurp will assign a random email address to the inbox such as &#x60;123@mailslurp.com&#x60;. If you use the &#x60;useDomainPool&#x60; option when the email address is null it will generate an email address with a more varied domain ending such as &#x60;123@mailslurp.info&#x60; or &#x60;123@mailslurp.biz&#x60;. When a custom email address is provided the address is split into a domain and the domain is queried against your user. If you have created the domain in the MailSlurp dashboard and verified it you can use any email address that ends with the domain. Note domain types must match the inbox type - so &#x60;SMTP&#x60; inboxes will only work with &#x60;SMTP&#x60; type domains. Avoid &#x60;SMTP&#x60; inboxes if you need to send emails as they can only receive. Send an email to this address and the inbox will receive and store it for you. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.
     * @param tags Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.
     * @param name Optional name of the inbox. Displayed in the dashboard for easier search and used as the sender name when sending emails.
     * @param description Optional description of the inbox for labelling purposes. Is shown in the dashboard and can be used with
     * @param useDomainPool Use the MailSlurp domain name pool with this inbox when creating the email address. Defaults to null. If enabled the inbox will be an email address with a domain randomly chosen from a list of the MailSlurp domains. This is useful when the default &#x60;@mailslurp.com&#x60; email addresses used with inboxes are blocked or considered spam by a provider or receiving service. When domain pool is enabled an email address will be generated ending in &#x60;@mailslurp.{world,info,xyz,...}&#x60; . This means a TLD is randomly selecting from a list of &#x60;.biz&#x60;, &#x60;.info&#x60;, &#x60;.xyz&#x60; etc to add variance to the generated email addresses. When null or false MailSlurp uses the default behavior of &#x60;@mailslurp.com&#x60; or custom email address provided by the emailAddress field. Note this feature is only available for &#x60;HTTP&#x60; inbox types.
     * @param favourite Is the inbox a favorite. Marking an inbox as a favorite is typically done in the dashboard for quick access or filtering
     * @param expiresAt Optional inbox expiration date. If null then this inbox is permanent and the emails in it won&#39;t be deleted. If an expiration date is provided or is required by your plan the inbox will be closed when the expiration time is reached. Expired inboxes still contain their emails but can no longer send or receive emails. An ExpiredInboxRecord is created when an inbox and the email address and inbox ID are recorded. The expiresAt property is a timestamp string in ISO DateTime Format yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX.
     * @param expiresIn Number of milliseconds that inbox should exist for
     * @param allowTeamAccess DEPRECATED (team access is always true). Grant team access to this inbox and the emails that belong to it for team members of your organization.
     * @param inboxType HTTP (default) or SMTP inbox type. HTTP inboxes are default and best solution for most cases. SMTP inboxes are more reliable for public inbound email consumption (but do not support sending emails). When using custom domains the domain type must match the inbox type. HTTP inboxes are processed by AWS SES while SMTP inboxes use a custom mail server running at &#x60;mxslurp.click&#x60;.
     * @param virtualInbox Virtual inbox prevents any outbound emails from being sent. It creates sent email records but will never send real emails to recipients. Great for testing and faking email sending.
     * @param useShortAddress Use a shorter email address under 31 characters
     * @param domainId ID of custom domain to use for email address.
     * @param domainName FQDN domain name for the domain you have verified. Will be appended with a randomly assigned recipient name. Use the &#x60;emailAddress&#x60; option instead to specify the full custom inbox.
     * @param prefix Prefix to add before the email address for easier labelling or identification.
     */
    public createInbox(emailAddress?: string, tags?: Array<string>, name?: string, description?: string, useDomainPool?: boolean, favourite?: boolean, expiresAt?: Date, expiresIn?: number, allowTeamAccess?: boolean, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', virtualInbox?: boolean, useShortAddress?: boolean, domainId?: string, domainName?: string, prefix?: string, options?: Configuration): Observable<InboxDto> {
        const requestContextPromise = this.requestFactory.createInbox(emailAddress, tags, name, description, useDomainPool, favourite, expiresAt, expiresIn, allowTeamAccess, inboxType, virtualInbox, useShortAddress, domainId, domainName, prefix, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInbox(rsp)));
            }));
    }
 
    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox ruleset
     * @param inboxId inboxId
     * @param createRulesetOptions 
     */
    public createInboxRuleset(inboxId: string, createRulesetOptions: CreateRulesetOptions, options?: Configuration): Observable<RulesetDto> {
        const requestContextPromise = this.requestFactory.createInboxRuleset(inboxId, createRulesetOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInboxRuleset(rsp)));
            }));
    }
 
    /**
     * Create an inbox with default options. Uses MailSlurp domain pool address and is private.
     */
    public createInboxWithDefaults(options?: Configuration): Observable<InboxDto> {
        const requestContextPromise = this.requestFactory.createInboxWithDefaults(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInboxWithDefaults(rsp)));
            }));
    }
 
    /**
     * Additional endpoint that allows inbox creation with request body options. Can be more flexible that other methods for some clients.
     * Create an inbox with options. Extended options for inbox creation.
     * @param createInboxDto 
     */
    public createInboxWithOptions(createInboxDto: CreateInboxDto, options?: Configuration): Observable<InboxDto> {
        const requestContextPromise = this.requestFactory.createInboxWithOptions(createInboxDto, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInboxWithOptions(rsp)));
            }));
    }
 
    /**
     * Deletes all emails in an inbox. Be careful as emails cannot be recovered
     * Delete all emails in a given inboxes.
     * @param inboxId 
     */
    public deleteAllInboxEmails(inboxId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllInboxEmails(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllInboxEmails(rsp)));
            }));
    }
 
    /**
     * Permanently delete all inboxes and associated email addresses. This will also delete all emails within the inboxes. Be careful as inboxes cannot be recovered once deleted. Note: deleting inboxes will not impact your usage limits. Monthly inbox creation limits are based on how many inboxes were created in the last 30 days, not how many inboxes you currently have.
     * Delete all inboxes
     */
    public deleteAllInboxes(options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllInboxes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllInboxes(rsp)));
            }));
    }
 
    /**
     * Permanently delete all inboxes by description
     * Delete inboxes by description
     * @param description 
     */
    public deleteAllInboxesByDescription(description: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllInboxesByDescription(description, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllInboxesByDescription(rsp)));
            }));
    }
 
    /**
     * Permanently delete all inboxes by name
     * Delete inboxes by name
     * @param name 
     */
    public deleteAllInboxesByName(name: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllInboxesByName(name, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllInboxesByName(rsp)));
            }));
    }
 
    /**
     * Permanently delete all inboxes by tag
     * Delete inboxes by tag
     * @param tag 
     */
    public deleteAllInboxesByTag(tag: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllInboxesByTag(tag, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllInboxesByTag(rsp)));
            }));
    }
 
    /**
     * Permanently delete an inbox and associated email address as well as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.
     * Delete inbox
     * @param inboxId 
     */
    public deleteInbox(inboxId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteInbox(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteInbox(rsp)));
            }));
    }
 
    /**
     * Check if inboxes exist by email address. Useful if you are sending emails to mailslurp addresses
     * Does inbox exist
     * @param emailAddress Email address
     * @param allowCatchAll Allow catch all
     * @param ipAddress IP address
     * @param sender Sender
     */
    public doesInboxExist(emailAddress: string, allowCatchAll?: boolean, ipAddress?: string, sender?: string, options?: Configuration): Observable<InboxExistsDto> {
        const requestContextPromise = this.requestFactory.doesInboxExist(emailAddress, allowCatchAll, ipAddress, sender, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doesInboxExist(rsp)));
            }));
    }
 
    /**
     * Check if an inbox has automations.
     * Does inbox have automations
     */
    public doesInboxHaveAutomations(options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.doesInboxHaveAutomations(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doesInboxHaveAutomations(rsp)));
            }));
    }
 
    /**
     * Remove any expired inboxes for your account (instead of waiting for scheduled removal on server)
     * Remove expired inboxes
     * @param before Optional expired at before flag to flush expired inboxes that have expired before the given time
     */
    public flushExpired(before?: Date, options?: Configuration): Observable<FlushExpiredInboxesResult> {
        const requestContextPromise = this.requestFactory.flushExpired(before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.flushExpired(rsp)));
            }));
    }
 
    /**
     * List inboxes in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results.
     * List All Inboxes Paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param favourite Optionally filter results for favourites only
     * @param search Optionally filter by search words partial matching name and email address
     * @param tag Optionally filter by tags. Will return inboxes that include given tags
     * @param teamAccess DEPRECATED. Optionally filter by team access.
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     * @param inboxType Optional filter by inbox type
     * @param inboxFunction Optional filter by inbox function
     * @param domainId Optional domain ID filter
     */
    public getAllInboxes(page?: number, size?: number, sort?: 'ASC' | 'DESC', favourite?: boolean, search?: string, tag?: string, teamAccess?: boolean, since?: Date, before?: Date, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', inboxFunction?: 'ALIAS' | 'THREAD' | 'CATCH_ALL' | 'CONNECTOR' | 'ACCOUNT' | 'GUEST' | 'OAUTH_CONNECTION_GMAIL', domainId?: string, options?: Configuration): Observable<PageInboxProjection> {
        const requestContextPromise = this.requestFactory.getAllInboxes(page, size, sort, favourite, search, tag, teamAccess, since, before, inboxType, inboxFunction, domainId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllInboxes(rsp)));
            }));
    }
 
    /**
     * List inboxes in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results.
     * List All Inboxes Offset Paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param favourite Optionally filter results for favourites only
     * @param search Optionally filter by search words partial matching name and email address
     * @param tag Optionally filter by tags. Will return inboxes that include given tags
     * @param teamAccess DEPRECATED. Optionally filter by team access.
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     * @param inboxType Optional filter by inbox type
     * @param inboxFunction Optional filter by inbox function
     * @param domainId Optional domain ID filter
     */
    public getAllInboxesOffsetPaginated(page?: number, size?: number, sort?: 'ASC' | 'DESC', favourite?: boolean, search?: string, tag?: string, teamAccess?: boolean, since?: Date, before?: Date, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', inboxFunction?: 'ALIAS' | 'THREAD' | 'CATCH_ALL' | 'CONNECTOR' | 'ACCOUNT' | 'GUEST' | 'OAUTH_CONNECTION_GMAIL', domainId?: string, options?: Configuration): Observable<PageInboxProjection> {
        const requestContextPromise = this.requestFactory.getAllInboxesOffsetPaginated(page, size, sort, favourite, search, tag, teamAccess, since, before, inboxType, inboxFunction, domainId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllInboxesOffsetPaginated(rsp)));
            }));
    }
 
    /**
     * Returns paginated list of all plus alias addresses found for in account based on received emails that used the inbox address with a +xyz alias.
     * Get all sub address plus address aliases for an inbox
     * @param page Optional page index in inbox tracking pixel list pagination
     * @param size Optional page size in inbox tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param inboxId Optional inboxId filter
     */
    public getAllPlusAddresses(page?: number, size?: number, sort?: 'ASC' | 'DESC', inboxId?: string, options?: Configuration): Observable<PagePlusAddressProjection> {
        const requestContextPromise = this.requestFactory.getAllPlusAddresses(page, size, sort, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllPlusAddresses(rsp)));
            }));
    }
 
    /**
     * Schedule sending of emails using scheduled jobs. These can be inbox or account level.
     * Get all scheduled email sending jobs for account
     * @param page Optional page index in scheduled job list pagination
     * @param size Optional page size in scheduled job list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId 
     */
    public getAllScheduledJobs(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, inboxId?: string, options?: Configuration): Observable<PageScheduledJobs> {
        const requestContextPromise = this.requestFactory.getAllScheduledJobs(page, size, sort, since, before, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllScheduledJobs(rsp)));
            }));
    }
 
    /**
     * Get all email delivery statuses for an inbox
     * @param inboxId 
     * @param page Optional page index in delivery status list pagination
     * @param size Optional page size in delivery status list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getDeliveryStatusesByInboxId(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageDeliveryStatus> {
        const requestContextPromise = this.requestFactory.getDeliveryStatusesByInboxId(inboxId, page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDeliveryStatusesByInboxId(rsp)));
            }));
    }
 
    /**
     * List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached
     * Get emails in an Inbox. This method is not idempotent as it allows retries and waits if you want certain conditions to be met before returning. For simple listing and sorting of known emails use the email controller instead.
     * @param inboxId Id of inbox that emails belongs to
     * @param size Alias for limit. Assessed first before assessing any passed limit.
     * @param limit Limit the result set, ordered by received date time sort direction. Maximum 100. For more listing options see the email controller
     * @param sort Sort the results by received date and direction ASC or DESC
     * @param retryTimeout Maximum milliseconds to spend retrying inbox database until minCount emails are returned
     * @param delayTimeout 
     * @param minCount Minimum acceptable email count. Will cause request to hang (and retry) until minCount is satisfied or retryTimeout is reached.
     * @param unreadOnly 
     * @param before Exclude emails received after this ISO 8601 date time
     * @param since Exclude emails received before this ISO 8601 date time
     */
    public getEmails(inboxId: string, size?: number, limit?: number, sort?: 'ASC' | 'DESC', retryTimeout?: number, delayTimeout?: number, minCount?: number, unreadOnly?: boolean, before?: Date, since?: Date, options?: Configuration): Observable<Array<EmailPreview>> {
        const requestContextPromise = this.requestFactory.getEmails(inboxId, size, limit, sort, retryTimeout, delayTimeout, minCount, unreadOnly, before, since, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmails(rsp)));
            }));
    }
 
    /**
     * Get IMAP access usernames and passwords
     * @param inboxId Inbox ID
     */
    public getImapAccess(inboxId?: string, options?: Configuration): Observable<ImapAccessDetails> {
        const requestContextPromise = this.requestFactory.getImapAccess(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getImapAccess(rsp)));
            }));
    }
 
    /**
     * Get IMAP and SMTP access usernames and passwords
     * @param inboxId Inbox ID
     */
    public getImapSmtpAccess(inboxId?: string, options?: Configuration): Observable<ImapSmtpAccessDetails> {
        const requestContextPromise = this.requestFactory.getImapSmtpAccess(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getImapSmtpAccess(rsp)));
            }));
    }
 
    /**
     * Get IMAP and SMTP access details in .env format
     * @param inboxId Inbox ID
     */
    public getImapSmtpAccessEnv(inboxId?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getImapSmtpAccessEnv(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getImapSmtpAccessEnv(rsp)));
            }));
    }
 
    /**
     * Get IMAP and SMTP server hosts
     */
    public getImapSmtpAccessServers(options?: Configuration): Observable<ImapSmtpAccessServers> {
        const requestContextPromise = this.requestFactory.getImapSmtpAccessServers(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getImapSmtpAccessServers(rsp)));
            }));
    }
 
    /**
     * Returns an inbox's properties, including its email address and ID.
     * Get Inbox. Returns properties of an inbox.
     * @param inboxId 
     */
    public getInbox(inboxId: string, options?: Configuration): Observable<InboxDto> {
        const requestContextPromise = this.requestFactory.getInbox(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInbox(rsp)));
            }));
    }
 
    /**
     * Get a inbox result by email address
     * Search for an inbox with the provided email address
     * @param emailAddress 
     */
    public getInboxByEmailAddress(emailAddress: string, options?: Configuration): Observable<InboxByEmailAddressResult> {
        const requestContextPromise = this.requestFactory.getInboxByEmailAddress(emailAddress, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxByEmailAddress(rsp)));
            }));
    }
 
    /**
     * Get a inbox result by name
     * Search for an inbox with the given name
     * @param name 
     */
    public getInboxByName(name: string, options?: Configuration): Observable<InboxByNameResult> {
        const requestContextPromise = this.requestFactory.getInboxByName(name, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxByName(rsp)));
            }));
    }
 
    /**
     * Get total inbox count
     */
    public getInboxCount(options?: Configuration): Observable<CountDto> {
        const requestContextPromise = this.requestFactory.getInboxCount(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxCount(rsp)));
            }));
    }
 
    /**
     * Get email count in inbox
     * @param inboxId Id of inbox that emails belongs to
     */
    public getInboxEmailCount(inboxId: string, options?: Configuration): Observable<CountDto> {
        const requestContextPromise = this.requestFactory.getInboxEmailCount(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxEmailCount(rsp)));
            }));
    }
 
    /**
     * Get a paginated list of emails in an inbox. Does not hold connections open.
     * Get inbox emails paginated
     * @param inboxId Id of inbox that emails belongs to
     * @param page Optional page index in inbox emails list pagination
     * @param size Optional page size in inbox emails list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by received after given date time
     * @param before Optional filter by received before given date time
     * @param syncConnectors Sync connectors before fetching emails
     */
    public getInboxEmailsPaginated(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, syncConnectors?: boolean, options?: Configuration): Observable<PageEmailPreview> {
        const requestContextPromise = this.requestFactory.getInboxEmailsPaginated(inboxId, page, size, sort, since, before, syncConnectors, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxEmailsPaginated(rsp)));
            }));
    }
 
    /**
     * Get list of inbox IDs
     * Get all inbox IDs
     */
    public getInboxIds(options?: Configuration): Observable<InboxIdsResult> {
        const requestContextPromise = this.requestFactory.getInboxIds(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxIds(rsp)));
            }));
    }
 
    /**
     * Returns a plus address object based on emails that used the inbox address with a +xyz alias.
     * Get sub address plus address for an inbox
     * @param plusAddressId ID of the plus address you want to fetch
     * @param inboxId ID of the inbox you want to fetch
     */
    public getInboxPlusAddress(plusAddressId: string, inboxId: string, options?: Configuration): Observable<PlusAddressDto> {
        const requestContextPromise = this.requestFactory.getInboxPlusAddress(plusAddressId, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxPlusAddress(rsp)));
            }));
    }
 
    /**
     * Returns a plus address object based on emails that used the inbox address with a +xyz alias.
     * Get sub address plus address by ID
     * @param plusAddressId ID of the plus address you want to fetch
     * @param inboxId ID of the inbox you want to filter for
     */
    public getInboxPlusAddressById(plusAddressId: string, inboxId?: string, options?: Configuration): Observable<PlusAddressDto> {
        const requestContextPromise = this.requestFactory.getInboxPlusAddressById(plusAddressId, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxPlusAddressById(rsp)));
            }));
    }
 
    /**
     * Returns paginated list of all emails for a given plus alias addresses found for an inbox based on received emails that used the inbox address with a +xyz alias.
     * Get emails for a given inbox plus address
     * @param plusAddress The plus address to fetch emails for. If your inbox address is &#x60;123@test.com&#x60; and the email was sent to &#x60;123+abc@test.com&#x60; then the plus address is &#x60;abc&#x60;
     * @param inboxId ID of the inbox you want to send the email from
     * @param page Optional page index in inbox tracking pixel list pagination
     * @param size Optional page size in inbox tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     */
    public getInboxPlusAddressEmails(plusAddress: string, inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageEmailPreview> {
        const requestContextPromise = this.requestFactory.getInboxPlusAddressEmails(plusAddress, inboxId, page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxPlusAddressEmails(rsp)));
            }));
    }
 
    /**
     * Returns paginated list of all emails for a given plus alias addresses found for an inbox based on received emails that used the inbox address with a +xyz alias.
     * Get emails for a given inbox plus address
     * @param plusAddressId The plus address ID to fetch emails for.
     * @param inboxId ID of the inbox you want to send the email from
     * @param page Optional page index in inbox tracking pixel list pagination
     * @param size Optional page size in inbox tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     */
    public getInboxPlusAddressEmailsForPlusAddressId(plusAddressId: string, inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageEmailPreview> {
        const requestContextPromise = this.requestFactory.getInboxPlusAddressEmailsForPlusAddressId(plusAddressId, inboxId, page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxPlusAddressEmailsForPlusAddressId(rsp)));
            }));
    }
 
    /**
     * Returns paginated list of all plus alias addresses found for an inbox based on received emails that used the inbox address with a +xyz alias.
     * Get sub address plus address aliases for an inbox
     * @param inboxId ID of the inbox you want to send the email from
     * @param page Optional page index in inbox tracking pixel list pagination
     * @param size Optional page size in inbox tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getInboxPlusAddresses(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Observable<PagePlusAddressProjection> {
        const requestContextPromise = this.requestFactory.getInboxPlusAddresses(inboxId, page, size, sort, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxPlusAddresses(rsp)));
            }));
    }
 
    /**
     * Get sent email count in inbox
     * @param inboxId Id of inbox that emails were sent from
     */
    public getInboxSentCount(inboxId: string, options?: Configuration): Observable<CountDto> {
        const requestContextPromise = this.requestFactory.getInboxSentCount(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxSentCount(rsp)));
            }));
    }
 
    /**
     * Returns an inbox's sent email receipts. Call individual sent email endpoints for more details. Note for privacy reasons the full body of sent emails is never stored. An MD5 hash hex is available for comparison instead.
     * Get Inbox Sent Emails
     * @param inboxId 
     * @param page Optional page index in inbox sent email list pagination
     * @param size Optional page size in inbox sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional sent email search
     * @param since Optional filter by sent after given date time
     * @param before Optional filter by sent before given date time
     */
    public getInboxSentEmails(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageSentEmailProjection> {
        const requestContextPromise = this.requestFactory.getInboxSentEmails(inboxId, page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxSentEmails(rsp)));
            }));
    }
 
    /**
     * Get all inbox tags
     * Get inbox tags
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     */
    public getInboxTags(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, options?: Configuration): Observable<Array<string>> {
        const requestContextPromise = this.requestFactory.getInboxTags(page, size, sort, searchFilter, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxTags(rsp)));
            }));
    }
 
    /**
     * Get all inbox tags paginated
     * Get inbox tags paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     */
    public getInboxTagsPaginated(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, options?: Configuration): Observable<PageInboxTags> {
        const requestContextPromise = this.requestFactory.getInboxTagsPaginated(page, size, sort, searchFilter, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxTagsPaginated(rsp)));
            }));
    }
 
    /**
     * List the inboxes you have created. Note use of the more advanced `getAllInboxes` is recommended and allows paginated access using a limit and sort parameter.
     * List Inboxes and email addresses
     * @param size Optional result size limit. Note an automatic limit of 100 results is applied. See the paginated &#x60;getAllEmails&#x60; for larger queries.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by created after given date time
     * @param excludeCatchAllInboxes Optional exclude catch all inboxes
     * @param before Optional filter by created before given date time
     * @param include Optional inboxIds to include in result
     */
    public getInboxes(size?: number, sort?: 'ASC' | 'DESC', since?: Date, excludeCatchAllInboxes?: boolean, before?: Date, include?: Array<string>, options?: Configuration): Observable<Array<InboxDto>> {
        const requestContextPromise = this.requestFactory.getInboxes(size, sort, since, excludeCatchAllInboxes, before, include, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxes(rsp)));
            }));
    }
 
    /**
     * Get all inboxes for a given inbox tag
     * Get inboxes for a tag
     * @param tag Tag to filter by
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     */
    public getInboxesByTag(tag: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, options?: Configuration): Observable<PageInboxProjection> {
        const requestContextPromise = this.requestFactory.getInboxesByTag(tag, page, size, sort, searchFilter, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxesByTag(rsp)));
            }));
    }
 
    /**
     * Get the newest email in an inbox or wait for one to arrive
     * Get latest email in an inbox. Use `WaitForController` to get emails that may not have arrived yet.
     * @param inboxId ID of the inbox you want to get the latest email from
     * @param timeoutMillis Timeout milliseconds to wait for latest email
     */
    public getLatestEmailInInbox(inboxId: string, timeoutMillis: number, options?: Configuration): Observable<Email> {
        const requestContextPromise = this.requestFactory.getLatestEmailInInbox(inboxId, timeoutMillis, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLatestEmailInInbox(rsp)));
            }));
    }
 
    /**
     * Looks up an inbox plus address using a full email address like `inbox+alias@domain.com`. Returns an existing plus address if found, otherwise creates one.
     * Get or create a plus address by full address
     * @param inboxId ID of the inbox you want to target
     * @param fullAddress Full recipient address including +suffix. Example: &#x60;inbox+alias@domain.com&#x60;
     */
    public getOrCreateInboxPlusAddress(inboxId: string, fullAddress: string, options?: Configuration): Observable<PlusAddressDto> {
        const requestContextPromise = this.requestFactory.getOrCreateInboxPlusAddress(inboxId, fullAddress, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrCreateInboxPlusAddress(rsp)));
            }));
    }
 
    /**
     * Looks up an inbox plus address using a full email address like `inbox+alias@domain.com`. Resolves the base inbox from the full address for the authenticated user, then returns an existing plus address if found, otherwise creates one.
     * Get or create a plus address by full address without inbox ID
     * @param fullAddress Full recipient address including +suffix. Example: &#x60;inbox+alias@domain.com&#x60;
     */
    public getOrCreatePlusAddressByFullAddress(fullAddress: string, options?: Configuration): Observable<PlusAddressDto> {
        const requestContextPromise = this.requestFactory.getOrCreatePlusAddressByFullAddress(fullAddress, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrCreatePlusAddressByFullAddress(rsp)));
            }));
    }
 
    /**
     * List organization inboxes in paginated form. These are inboxes created with `allowTeamAccess` flag enabled. Organization inboxes are `readOnly` for non-admin users. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). 
     * List Organization Inboxes Paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     */
    public getOrganizationInboxes(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageOrganizationInboxProjection> {
        const requestContextPromise = this.requestFactory.getOrganizationInboxes(page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationInboxes(rsp)));
            }));
    }
 
    /**
     * List inboxes that have sent emails
     * List all inboxes with sent emails
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getOutboxes(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Observable<PageInboxProjection> {
        const requestContextPromise = this.requestFactory.getOutboxes(page, size, sort, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOutboxes(rsp)));
            }));
    }
 
    /**
     * Get a scheduled email job details.
     * Get a scheduled email job
     * @param jobId 
     */
    public getScheduledJob(jobId: string, options?: Configuration): Observable<ScheduledJobDto> {
        const requestContextPromise = this.requestFactory.getScheduledJob(jobId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getScheduledJob(rsp)));
            }));
    }
 
    /**
     * Schedule sending of emails using scheduled jobs.
     * Get all scheduled email sending jobs for the inbox
     * @param inboxId 
     * @param page Optional page index in scheduled job list pagination
     * @param size Optional page size in scheduled job list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getScheduledJobsByInboxId(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageScheduledJobs> {
        const requestContextPromise = this.requestFactory.getScheduledJobsByInboxId(inboxId, page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getScheduledJobsByInboxId(rsp)));
            }));
    }
 
    /**
     * Get SMTP access usernames and passwords
     * @param inboxId Inbox ID
     */
    public getSmtpAccess(inboxId?: string, options?: Configuration): Observable<SmtpAccessDetails> {
        const requestContextPromise = this.requestFactory.getSmtpAccess(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSmtpAccess(rsp)));
            }));
    }
 
    /**
     * Returns whether an email address is available
     * Is email address available
     * @param emailAddress 
     */
    public isEmailAddressAvailable(emailAddress: string, options?: Configuration): Observable<EmailAvailableResult> {
        const requestContextPromise = this.requestFactory.isEmailAddressAvailable(emailAddress, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.isEmailAddressAvailable(rsp)));
            }));
    }
 
    /**
     * List all rulesets attached to an inbox
     * List inbox rulesets
     * @param inboxId 
     * @param page Optional page index in inbox ruleset list pagination
     * @param size Optional page size in inbox ruleset list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     */
    public listInboxRulesets(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageRulesetDto> {
        const requestContextPromise = this.requestFactory.listInboxRulesets(inboxId, page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listInboxRulesets(rsp)));
            }));
    }
 
    /**
     * List all tracking pixels sent from an inbox
     * List inbox tracking pixels
     * @param inboxId 
     * @param page Optional page index in inbox tracking pixel list pagination
     * @param size Optional page size in inbox tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     */
    public listInboxTrackingPixels(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageTrackingPixelProjection> {
        const requestContextPromise = this.requestFactory.listInboxTrackingPixels(inboxId, page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listInboxTrackingPixels(rsp)));
            }));
    }
 
    /**
     * Search inboxes and return in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results.
     * Search all inboxes and return matching inboxes
     * @param searchInboxesOptions 
     */
    public searchInboxes(searchInboxesOptions: SearchInboxesOptions, options?: Configuration): Observable<PageInboxProjection> {
        const requestContextPromise = this.requestFactory.searchInboxes(searchInboxesOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchInboxes(rsp)));
            }));
    }
 
    /**
     * Send an email from an inbox's email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox's id not the inbox's email address. See https://www.mailslurp.com/guides/ for more information on how to send emails. This method does not return a sent email entity due to legacy reasons. To send and get a sent email as returned response use the sister method `sendEmailAndConfirm`.
     * Send Email
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendEmailOptions 
     */
    public sendEmail(inboxId: string, sendEmailOptions: SendEmailOptions, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.sendEmail(inboxId, sendEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEmail(rsp)));
            }));
    }
 
    /**
     * Sister method for standard `sendEmail` method with the benefit of returning a `SentEmail` entity confirming the successful sending of the email with a link to the sent object created for it.
     * Send email and return sent confirmation
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendEmailOptions 
     */
    public sendEmailAndConfirm(inboxId: string, sendEmailOptions: SendEmailOptions, options?: Configuration): Observable<SentEmailDto> {
        const requestContextPromise = this.requestFactory.sendEmailAndConfirm(inboxId, sendEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEmailAndConfirm(rsp)));
            }));
    }
 
    /**
     * Send an email using a queue. Will place the email onto a queue that will then be processed and sent. Use this queue method to enable any failed email sending to be recovered. This will prevent lost emails when sending if your account encounters a block or payment issue.
     * Send email with queue
     * @param inboxId ID of the inbox you want to send the email from
     * @param validateBeforeEnqueue Validate before adding to queue
     * @param sendEmailOptions 
     */
    public sendEmailWithQueue(inboxId: string, validateBeforeEnqueue: boolean, sendEmailOptions: SendEmailOptions, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.sendEmailWithQueue(inboxId, validateBeforeEnqueue, sendEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEmailWithQueue(rsp)));
            }));
    }
 
    /**
     * Send email using an SMTP envelope containing RCPT TO, MAIL FROM, and a SMTP BODY.
     * Send email using an SMTP mail envelope and message body and return sent confirmation
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendSMTPEnvelopeOptions 
     */
    public sendSmtpEnvelope(inboxId: string, sendSMTPEnvelopeOptions: SendSMTPEnvelopeOptions, options?: Configuration): Observable<SentEmailDto> {
        const requestContextPromise = this.requestFactory.sendSmtpEnvelope(inboxId, sendSMTPEnvelopeOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendSmtpEnvelope(rsp)));
            }));
    }
 
    /**
     * Send an inbox a test email to test email receiving is working
     * Send a test email to inbox
     * @param inboxId 
     */
    public sendTestEmail(inboxId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.sendTestEmail(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendTestEmail(rsp)));
            }));
    }
 
    /**
     * Send an email using a delay. Will place the email onto a scheduler that will then be processed and sent. Use delays to schedule email sending.
     * Send email with with delay or schedule
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendEmailOptions 
     * @param sendAtTimestamp Sending timestamp
     * @param sendAtNowPlusSeconds Send after n seconds
     * @param validateBeforeEnqueue Validate before adding to queue
     */
    public sendWithSchedule(inboxId: string, sendEmailOptions: SendEmailOptions, sendAtTimestamp?: Date, sendAtNowPlusSeconds?: number, validateBeforeEnqueue?: boolean, options?: Configuration): Observable<ScheduledJobDto> {
        const requestContextPromise = this.requestFactory.sendWithSchedule(inboxId, sendEmailOptions, sendAtTimestamp, sendAtNowPlusSeconds, validateBeforeEnqueue, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendWithSchedule(rsp)));
            }));
    }
 
    /**
     * Set and return new favorite state for an inbox
     * Set inbox favourited state
     * @param inboxId ID of inbox to set favourite state
     * @param setInboxFavouritedOptions 
     */
    public setInboxFavourited(inboxId: string, setInboxFavouritedOptions: SetInboxFavouritedOptions, options?: Configuration): Observable<InboxDto> {
        const requestContextPromise = this.requestFactory.setInboxFavourited(inboxId, setInboxFavouritedOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setInboxFavourited(rsp)));
            }));
    }
 
    /**
     * Update IMAP access usernames and passwords
     * @param updateImapAccessOptions 
     * @param inboxId Inbox ID
     */
    public updateImapAccess(updateImapAccessOptions: UpdateImapAccessOptions, inboxId?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.updateImapAccess(updateImapAccessOptions, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateImapAccess(rsp)));
            }));
    }
 
    /**
     * Update editable fields on an inbox
     * Update Inbox. Change name and description. Email address is not editable.
     * @param inboxId 
     * @param updateInboxOptions 
     */
    public updateInbox(inboxId: string, updateInboxOptions: UpdateInboxOptions, options?: Configuration): Observable<InboxDto> {
        const requestContextPromise = this.requestFactory.updateInbox(inboxId, updateInboxOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateInbox(rsp)));
            }));
    }
 
    /**
     * Update SMTP access usernames and passwords
     * @param updateSmtpAccessOptions 
     * @param inboxId Inbox ID
     */
    public updateSmtpAccess(updateSmtpAccessOptions: UpdateSmtpAccessOptions, inboxId?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.updateSmtpAccess(updateSmtpAccessOptions, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSmtpAccess(rsp)));
            }));
    }
 
}

import { InboxForwarderControllerApiRequestFactory, InboxForwarderControllerApiResponseProcessor} from "../apis/InboxForwarderControllerApi.ts";
export class ObservableInboxForwarderControllerApi {
    private requestFactory: InboxForwarderControllerApiRequestFactory;
    private responseProcessor: InboxForwarderControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InboxForwarderControllerApiRequestFactory,
        responseProcessor?: InboxForwarderControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InboxForwarderControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InboxForwarderControllerApiResponseProcessor();
    }

    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox forwarder
     * @param createInboxForwarderOptions 
     * @param inboxId Inbox id to attach forwarder to
     */
    public createNewInboxForwarder(createInboxForwarderOptions: CreateInboxForwarderOptions, inboxId?: string, options?: Configuration): Observable<InboxForwarderDto> {
        const requestContextPromise = this.requestFactory.createNewInboxForwarder(createInboxForwarderOptions, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNewInboxForwarder(rsp)));
            }));
    }
 
    /**
     * Delete inbox forwarder
     * Delete an inbox forwarder
     * @param id ID of inbox forwarder
     */
    public deleteInboxForwarder(id: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteInboxForwarder(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteInboxForwarder(rsp)));
            }));
    }
 
    /**
     * Delete inbox forwarders. Accepts optional inboxId filter.
     * Delete inbox forwarders
     * @param inboxId Optional inbox id to attach forwarder to
     */
    public deleteInboxForwarders(inboxId?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteInboxForwarders(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteInboxForwarders(rsp)));
            }));
    }
 
    /**
     * Get all inbox forwarder events
     * Get all inbox forwarder events
     * @param page Optional page index in inbox forwarder event list pagination
     * @param size Optional page size in inbox forwarder event list pagination
     * @param inboxId Optional inbox ID to filter for
     * @param emailId Optional email ID to filter for
     * @param sentId Optional sent ID to filter for
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllInboxForwarderEvents(page?: number, size?: number, inboxId?: string, emailId?: string, sentId?: string, sort?: 'ASC' | 'DESC', options?: Configuration): Observable<PageInboxForwarderEvents> {
        const requestContextPromise = this.requestFactory.getAllInboxForwarderEvents(page, size, inboxId, emailId, sentId, sort, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllInboxForwarderEvents(rsp)));
            }));
    }
 
    /**
     * Get forwarder event
     * Get a forwarder event
     * @param eventId ID of inbox forwarder event
     */
    public getForwarderEvent(eventId: string, options?: Configuration): Observable<InboxForwarderEventDto> {
        const requestContextPromise = this.requestFactory.getForwarderEvent(eventId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getForwarderEvent(rsp)));
            }));
    }
 
    /**
     * Get inbox forwarder
     * Get an inbox forwarder
     * @param id ID of inbox forwarder
     */
    public getInboxForwarder(id: string, options?: Configuration): Observable<InboxForwarderDto> {
        const requestContextPromise = this.requestFactory.getInboxForwarder(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxForwarder(rsp)));
            }));
    }
 
    /**
     * Get inbox forwarder event
     * Get an inbox forwarder event
     * @param id ID of inbox forwarder
     * @param eventId ID of inbox forwarder event
     */
    public getInboxForwarderEvent(id: string, eventId: string, options?: Configuration): Observable<InboxForwarderEventDto> {
        const requestContextPromise = this.requestFactory.getInboxForwarderEvent(id, eventId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxForwarderEvent(rsp)));
            }));
    }
 
    /**
     * Get inbox forwarder events
     * Get an inbox forwarder event list
     * @param id ID of inbox forwarder
     * @param page Optional page index in inbox forwarder event list pagination
     * @param size Optional page size in inbox forwarder event list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getInboxForwarderEvents(id: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Observable<PageInboxForwarderEvents> {
        const requestContextPromise = this.requestFactory.getInboxForwarderEvents(id, page, size, sort, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxForwarderEvents(rsp)));
            }));
    }
 
    /**
     * List all forwarders attached to an inbox
     * List inbox forwarders
     * @param inboxId Optional inbox id to get forwarders from
     * @param page Optional page index in inbox forwarder list pagination
     * @param size Optional page size in inbox forwarder list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getInboxForwarders(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageInboxForwarderDto> {
        const requestContextPromise = this.requestFactory.getInboxForwarders(inboxId, page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxForwarders(rsp)));
            }));
    }
 
    /**
     * Test an inbox forwarder
     * Test an inbox forwarder
     * @param id ID of inbox forwarder
     * @param inboxForwarderTestOptions 
     */
    public testInboxForwarder(id: string, inboxForwarderTestOptions: InboxForwarderTestOptions, options?: Configuration): Observable<InboxForwarderTestResult> {
        const requestContextPromise = this.requestFactory.testInboxForwarder(id, inboxForwarderTestOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testInboxForwarder(rsp)));
            }));
    }
 
    /**
     * Test inbox forwarders for inbox
     * Test inbox forwarders for inbox
     * @param inboxId ID of inbox
     * @param inboxForwarderTestOptions 
     */
    public testInboxForwardersForInbox(inboxId: string, inboxForwarderTestOptions: InboxForwarderTestOptions, options?: Configuration): Observable<InboxForwarderTestResult> {
        const requestContextPromise = this.requestFactory.testInboxForwardersForInbox(inboxId, inboxForwarderTestOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testInboxForwardersForInbox(rsp)));
            }));
    }
 
    /**
     * Test new inbox forwarder
     * Test new inbox forwarder
     * @param testNewInboxForwarderOptions 
     */
    public testNewInboxForwarder(testNewInboxForwarderOptions: TestNewInboxForwarderOptions, options?: Configuration): Observable<InboxForwarderTestResult> {
        const requestContextPromise = this.requestFactory.testNewInboxForwarder(testNewInboxForwarderOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testNewInboxForwarder(rsp)));
            }));
    }
 
    /**
     * Update inbox forwarder
     * Update an inbox forwarder
     * @param id ID of inbox forwarder
     * @param createInboxForwarderOptions 
     */
    public updateInboxForwarder(id: string, createInboxForwarderOptions: CreateInboxForwarderOptions, options?: Configuration): Observable<InboxForwarderDto> {
        const requestContextPromise = this.requestFactory.updateInboxForwarder(id, createInboxForwarderOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateInboxForwarder(rsp)));
            }));
    }
 
}

import { InboxReplierControllerApiRequestFactory, InboxReplierControllerApiResponseProcessor} from "../apis/InboxReplierControllerApi.ts";
export class ObservableInboxReplierControllerApi {
    private requestFactory: InboxReplierControllerApiRequestFactory;
    private responseProcessor: InboxReplierControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InboxReplierControllerApiRequestFactory,
        responseProcessor?: InboxReplierControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InboxReplierControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InboxReplierControllerApiResponseProcessor();
    }

    /**
     * Create a new inbox rule for reply toing, blocking, and allowing emails when sending and receiving
     * Create an inbox replier
     * @param createInboxReplierOptions 
     */
    public createNewInboxReplier(createInboxReplierOptions: CreateInboxReplierOptions, options?: Configuration): Observable<InboxReplierDto> {
        const requestContextPromise = this.requestFactory.createNewInboxReplier(createInboxReplierOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNewInboxReplier(rsp)));
            }));
    }
 
    /**
     * Delete inbox replier
     * Delete an inbox replier
     * @param id ID of inbox replier
     */
    public deleteInboxReplier(id: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteInboxReplier(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteInboxReplier(rsp)));
            }));
    }
 
    /**
     * Delete inbox repliers. Accepts optional inboxId filter.
     * Delete inbox repliers
     * @param inboxId Optional inbox id to attach replier to
     */
    public deleteInboxRepliers(inboxId?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteInboxRepliers(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteInboxRepliers(rsp)));
            }));
    }
 
    /**
     * Get all inbox ruleset events
     * Get inbox replier event list
     * @param inboxReplierId ID of inbox replier
     * @param inboxId ID of inbox
     * @param emailId ID of email
     * @param sentId ID of sent
     * @param page Optional page index in inbox replier event list pagination
     * @param size Optional page size in inbox replier event list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllInboxReplierEvents(inboxReplierId?: string, inboxId?: string, emailId?: string, sentId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Observable<PageInboxReplierEvents> {
        const requestContextPromise = this.requestFactory.getAllInboxReplierEvents(inboxReplierId, inboxId, emailId, sentId, page, size, sort, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllInboxReplierEvents(rsp)));
            }));
    }
 
    /**
     * Get inbox ruleset
     * Get an inbox replier
     * @param id ID of inbox replier
     */
    public getInboxReplier(id: string, options?: Configuration): Observable<InboxReplierDto> {
        const requestContextPromise = this.requestFactory.getInboxReplier(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxReplier(rsp)));
            }));
    }
 
    /**
     * Get inbox ruleset events
     * Get an inbox replier event list
     * @param id ID of inbox replier
     * @param page Optional page index in inbox replier event list pagination
     * @param size Optional page size in inbox replier event list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getInboxReplierEvents(id: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Observable<PageInboxReplierEvents> {
        const requestContextPromise = this.requestFactory.getInboxReplierEvents(id, page, size, sort, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxReplierEvents(rsp)));
            }));
    }
 
    /**
     * List all repliers attached to an inbox
     * List inbox repliers
     * @param inboxId Optional inbox id to get repliers from
     * @param page Optional page index in inbox replier list pagination
     * @param size Optional page size in inbox replier list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getInboxRepliers(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageInboxReplierDto> {
        const requestContextPromise = this.requestFactory.getInboxRepliers(inboxId, page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxRepliers(rsp)));
            }));
    }
 
    /**
     * Update inbox ruleset
     * Update an inbox replier
     * @param id ID of inbox replier
     * @param updateInboxReplierOptions 
     */
    public updateInboxReplier(id: string, updateInboxReplierOptions: UpdateInboxReplierOptions, options?: Configuration): Observable<InboxReplierDto> {
        const requestContextPromise = this.requestFactory.updateInboxReplier(id, updateInboxReplierOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateInboxReplier(rsp)));
            }));
    }
 
}

import { MFAControllerApiRequestFactory, MFAControllerApiResponseProcessor} from "../apis/MFAControllerApi.ts";
export class ObservableMFAControllerApi {
    private requestFactory: MFAControllerApiRequestFactory;
    private responseProcessor: MFAControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MFAControllerApiRequestFactory,
        responseProcessor?: MFAControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MFAControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MFAControllerApiResponseProcessor();
    }

    /**
     * Create a virtual TOTP device for a given secret key. This is usually present as an alternative login option when pairing OTP devices.
     * Create a TOTP device from an base32 secret key
     * @param createTotpDeviceBase32SecretKeyOptions 
     */
    public createTotpDeviceForBase32SecretKey(createTotpDeviceBase32SecretKeyOptions: CreateTotpDeviceBase32SecretKeyOptions, options?: Configuration): Observable<TotpDeviceDto> {
        const requestContextPromise = this.requestFactory.createTotpDeviceForBase32SecretKey(createTotpDeviceBase32SecretKeyOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTotpDeviceForBase32SecretKey(rsp)));
            }));
    }
 
    /**
     * Create a virtual TOTP device for custom options specifying all parameters of the TOTP device.
     * Create a TOTP device from custom options
     * @param createTotpDeviceCustomOptions 
     */
    public createTotpDeviceForCustom(createTotpDeviceCustomOptions: CreateTotpDeviceCustomOptions, options?: Configuration): Observable<TotpDeviceDto> {
        const requestContextPromise = this.requestFactory.createTotpDeviceForCustom(createTotpDeviceCustomOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTotpDeviceForCustom(rsp)));
            }));
    }
 
    /**
     * Create a virtual TOTP device for a given OTP Auth URL such as otpauth://totp/MyApp:alice@example.com?secret=ABC123&issuer=MyApp&period=30&digits=6&algorithm=SHA1. You can provider overrides in the options for each component of the URL.
     * Create a TOTP device from an OTP Auth URL
     * @param createTotpDeviceOtpAuthUrlOptions 
     */
    public createTotpDeviceForOtpAuthUrl(createTotpDeviceOtpAuthUrlOptions: CreateTotpDeviceOtpAuthUrlOptions, options?: Configuration): Observable<TotpDeviceDto> {
        const requestContextPromise = this.requestFactory.createTotpDeviceForOtpAuthUrl(createTotpDeviceOtpAuthUrlOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTotpDeviceForOtpAuthUrl(rsp)));
            }));
    }
 
    /**
     * Get Time-Based One-Time Password (TOTP) device by its ID.
     * Get a TOTP device by ID
     * @param id 
     */
    public getTotpDevice(id: string, options?: Configuration): Observable<TotpDeviceDto> {
        const requestContextPromise = this.requestFactory.getTotpDevice(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTotpDevice(rsp)));
            }));
    }
 
    /**
     * Get Time-Based One-Time Password (TOTP) device by its username and issuer mapping.
     * Get a TOTP device by username, issuer, or name. Returns empty if not found.
     * @param name Optional name filter
     * @param issuer Optional issuer filter
     * @param username Optional username filter
     */
    public getTotpDeviceBy(name?: string, issuer?: string, username?: string, options?: Configuration): Observable<TotpDeviceOptionalDto> {
        const requestContextPromise = this.requestFactory.getTotpDeviceBy(name, issuer, username, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTotpDeviceBy(rsp)));
            }));
    }
 
    /**
     * Get Time-Based One-Time Password for a device by its ID.
     * Get a TOTP device code by device ID
     * @param id ID of the TOTP device to get the code for
     * @param at Optional time to get code for. If not provided, current time is used.
     * @param minSecondsUntilExpire Optional minimum time until code expires. Will hold thread open until period reached.
     */
    public getTotpDeviceCode(id: string, at?: Date, minSecondsUntilExpire?: number, options?: Configuration): Observable<TotpDeviceCodeDto> {
        const requestContextPromise = this.requestFactory.getTotpDeviceCode(id, at, minSecondsUntilExpire, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTotpDeviceCode(rsp)));
            }));
    }
 
}

import { MailServerControllerApiRequestFactory, MailServerControllerApiResponseProcessor} from "../apis/MailServerControllerApi.ts";
export class ObservableMailServerControllerApi {
    private requestFactory: MailServerControllerApiRequestFactory;
    private responseProcessor: MailServerControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MailServerControllerApiRequestFactory,
        responseProcessor?: MailServerControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MailServerControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MailServerControllerApiResponseProcessor();
    }

    /**
     * Get DNS Mail Server records for a domain
     * @param describeDomainOptions 
     */
    public describeMailServerDomain(describeDomainOptions: DescribeDomainOptions, options?: Configuration): Observable<DescribeMailServerDomainResult> {
        const requestContextPromise = this.requestFactory.describeMailServerDomain(describeDomainOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.describeMailServerDomain(rsp)));
            }));
    }
 
    /**
     * Lookup DNS records for a domain
     * @param dNSLookupOptions 
     */
    public getDnsLookup(dNSLookupOptions: DNSLookupOptions, options?: Configuration): Observable<DNSLookupResults> {
        const requestContextPromise = this.requestFactory.getDnsLookup(dNSLookupOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDnsLookup(rsp)));
            }));
    }
 
    /**
     * Lookup DNS records for multiple domains
     * @param dNSLookupsOptions 
     */
    public getDnsLookups(dNSLookupsOptions: DNSLookupsOptions, options?: Configuration): Observable<DNSLookupResults> {
        const requestContextPromise = this.requestFactory.getDnsLookups(dNSLookupsOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDnsLookups(rsp)));
            }));
    }
 
    /**
     * Get IP address for a domain
     * @param name 
     */
    public getIpAddress(name: string, options?: Configuration): Observable<IPAddressResult> {
        const requestContextPromise = this.requestFactory.getIpAddress(name, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getIpAddress(rsp)));
            }));
    }
 
    /**
     * Deprecated. Use the EmailVerificationController methods for more accurate and reliable functionality. Verify the existence of an email address at a given mail server.
     * @param verifyEmailAddressOptions 
     */
    public verifyEmailAddress(verifyEmailAddressOptions: VerifyEmailAddressOptions, options?: Configuration): Observable<EmailVerificationResult> {
        const requestContextPromise = this.requestFactory.verifyEmailAddress(verifyEmailAddressOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.verifyEmailAddress(rsp)));
            }));
    }
 
}

import { MissedEmailControllerApiRequestFactory, MissedEmailControllerApiResponseProcessor} from "../apis/MissedEmailControllerApi.ts";
export class ObservableMissedEmailControllerApi {
    private requestFactory: MissedEmailControllerApiRequestFactory;
    private responseProcessor: MissedEmailControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MissedEmailControllerApiRequestFactory,
        responseProcessor?: MissedEmailControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MissedEmailControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MissedEmailControllerApiResponseProcessor();
    }

    /**
     * Get all MissedEmails in paginated format
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox ID filter
     */
    public getAllMissedEmails(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, inboxId?: string, options?: Configuration): Observable<PageMissedEmailProjection> {
        const requestContextPromise = this.requestFactory.getAllMissedEmails(page, size, sort, searchFilter, since, before, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllMissedEmails(rsp)));
            }));
    }
 
    /**
     * Unknown missed emails are emails that were sent to MailSlurp but could not be assigned to an existing inbox.
     * Get all unknown missed emails in paginated format
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox ID filter
     */
    public getAllUnknownMissedEmails(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, inboxId?: string, options?: Configuration): Observable<PageUnknownMissedEmailProjection> {
        const requestContextPromise = this.requestFactory.getAllUnknownMissedEmails(page, size, sort, searchFilter, since, before, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllUnknownMissedEmails(rsp)));
            }));
    }
 
    /**
     * List emails that were missed due to plan limits.
     * Get MissedEmail
     * @param missedEmailId 
     */
    public getMissedEmail(missedEmailId: string, options?: Configuration): Observable<MissedEmailDto> {
        const requestContextPromise = this.requestFactory.getMissedEmail(missedEmailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMissedEmail(rsp)));
            }));
    }
 
    /**
     * If emails were missed due to a plan limit they are saved as missed emails. If support team enables the canRestore flag these emails can be reload into your account using this method.
     * Restore missed emails
     */
    public restoreMissedEmails(options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.restoreMissedEmails(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restoreMissedEmails(rsp)));
            }));
    }
 
    /**
     * Wait for 0 based index missed email
     * Wait for Nth missed email
     * @param index Zero based index of the email to wait for. If 1 missed email already and you want to wait for the 2nd email pass index&#x3D;1
     * @param inboxId Optional inbox ID filter
     * @param timeout Optional timeout milliseconds
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public waitForNthMissedEmail(index: number, inboxId?: string, timeout?: number, since?: Date, before?: Date, options?: Configuration): Observable<MissedEmailDto> {
        const requestContextPromise = this.requestFactory.waitForNthMissedEmail(index, inboxId, timeout, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.waitForNthMissedEmail(rsp)));
            }));
    }
 
}

import { MissedSmsControllerApiRequestFactory, MissedSmsControllerApiResponseProcessor} from "../apis/MissedSmsControllerApi.ts";
export class ObservableMissedSmsControllerApi {
    private requestFactory: MissedSmsControllerApiRequestFactory;
    private responseProcessor: MissedSmsControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MissedSmsControllerApiRequestFactory,
        responseProcessor?: MissedSmsControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MissedSmsControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MissedSmsControllerApiResponseProcessor();
    }

    /**
     * Get all missed SMS messages in paginated format
     * @param phoneNumber Optional receiving phone number to filter missed SMS for
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter missed SMS after given date time
     * @param before Optional filter missed SMS before given date time
     * @param search Optional search filter
     */
    public getAllMissedSmsMessages(phoneNumber?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, options?: Configuration): Observable<PageMissedSmsProjection> {
        const requestContextPromise = this.requestFactory.getAllMissedSmsMessages(phoneNumber, page, size, sort, since, before, search, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllMissedSmsMessages(rsp)));
            }));
    }
 
    /**
     * Get missed SMS count
     */
    public getMissedSmsCount(options?: Configuration): Observable<CountDto> {
        const requestContextPromise = this.requestFactory.getMissedSmsCount(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMissedSmsCount(rsp)));
            }));
    }
 
    /**
     * Returns a missed SMS with full content.
     * Get missed SMS content
     * @param missedSmsId 
     */
    public getMissedSmsMessage(missedSmsId: string, options?: Configuration): Observable<MissedSmsDto> {
        const requestContextPromise = this.requestFactory.getMissedSmsMessage(missedSmsId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMissedSmsMessage(rsp)));
            }));
    }
 
}

import { PhoneControllerApiRequestFactory, PhoneControllerApiResponseProcessor} from "../apis/PhoneControllerApi.ts";
export class ObservablePhoneControllerApi {
    private requestFactory: PhoneControllerApiRequestFactory;
    private responseProcessor: PhoneControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PhoneControllerApiRequestFactory,
        responseProcessor?: PhoneControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PhoneControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PhoneControllerApiResponseProcessor();
    }

    /**
     * Add an emergency address to a phone number
     * Create an emergency address
     * @param createEmergencyAddressOptions 
     */
    public createEmergencyAddress(createEmergencyAddressOptions: CreateEmergencyAddressOptions, options?: Configuration): Observable<EmergencyAddress> {
        const requestContextPromise = this.requestFactory.createEmergencyAddress(createEmergencyAddressOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEmergencyAddress(rsp)));
            }));
    }
 
    /**
     * Create new phone number
     * Add phone number to your account. Only works if you have already added a plan and an initial phone number in your account and acknowledged the pricing and terms of service by enabling API phone creation.
     * @param createPhoneNumberOptions 
     */
    public createPhoneNumber(createPhoneNumberOptions: CreatePhoneNumberOptions, options?: Configuration): Observable<PhoneNumberDto> {
        const requestContextPromise = this.requestFactory.createPhoneNumber(createPhoneNumberOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPhoneNumber(rsp)));
            }));
    }
 
    /**
     * Remove all phone number from account
     * Delete all phone numbers
     */
    public deleteAllPhoneNumber(options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllPhoneNumber(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllPhoneNumber(rsp)));
            }));
    }
 
    /**
     * Delete an emergency address
     * Delete an emergency address
     * @param addressId 
     */
    public deleteEmergencyAddress(addressId: string, options?: Configuration): Observable<EmptyResponseDto> {
        const requestContextPromise = this.requestFactory.deleteEmergencyAddress(addressId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEmergencyAddress(rsp)));
            }));
    }
 
    /**
     * Delete all messages in an SMS thread
     * Delete messages in a phone thread
     * @param phoneNumberId 
     * @param otherNumber 
     */
    public deletePhoneMessageThreadItems(phoneNumberId: string, otherNumber: string, options?: Configuration): Observable<EmptyResponseDto> {
        const requestContextPromise = this.requestFactory.deletePhoneMessageThreadItems(phoneNumberId, otherNumber, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePhoneMessageThreadItems(rsp)));
            }));
    }
 
    /**
     * Remove phone number from account
     * Delete a phone number
     * @param phoneNumberId 
     */
    public deletePhoneNumber(phoneNumberId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deletePhoneNumber(phoneNumberId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePhoneNumber(rsp)));
            }));
    }
 
    /**
     * List all message threads for all phones
     * Get the latest messages for all phones
     * @param page 
     * @param size 
     */
    public getAllPhoneMessageThreads(page?: number, size?: number, options?: Configuration): Observable<PagePhoneMessageThreadProjection> {
        const requestContextPromise = this.requestFactory.getAllPhoneMessageThreads(page, size, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllPhoneMessageThreads(rsp)));
            }));
    }
 
    /**
     * List released or deleted phone numbers
     * Get all phone number releases
     * @param page 
     * @param size 
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllPhoneNumberReleases(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Observable<PagePhoneNumberReleaseProjection> {
        const requestContextPromise = this.requestFactory.getAllPhoneNumberReleases(page, size, sort, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllPhoneNumberReleases(rsp)));
            }));
    }
 
    /**
     * Get the status of phone usage consent
     * Get consent status
     */
    public getConsentStatus(options?: Configuration): Observable<ConsentStatusDto> {
        const requestContextPromise = this.requestFactory.getConsentStatus(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConsentStatus(rsp)));
            }));
    }
 
    /**
     * Fetch an emergency address by ID
     * Get an emergency address
     * @param addressId 
     */
    public getEmergencyAddress(addressId: string, options?: Configuration): Observable<EmergencyAddress> {
        const requestContextPromise = this.requestFactory.getEmergencyAddress(addressId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmergencyAddress(rsp)));
            }));
    }
 
    /**
     * List emergency addresses
     * Get emergency addresses
     */
    public getEmergencyAddresses(options?: Configuration): Observable<Array<EmergencyAddressDto>> {
        const requestContextPromise = this.requestFactory.getEmergencyAddresses(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmergencyAddresses(rsp)));
            }));
    }
 
    /**
     * List message thread messages for a phone message thread
     * Get messages in a phone thread
     * @param phoneNumberId 
     * @param otherNumber 
     * @param page 
     * @param size 
     */
    public getPhoneMessageThreadItems(phoneNumberId: string, otherNumber: string, page?: number, size?: number, options?: Configuration): Observable<PagePhoneMessageThreadItemProjection> {
        const requestContextPromise = this.requestFactory.getPhoneMessageThreadItems(phoneNumberId, otherNumber, page, size, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPhoneMessageThreadItems(rsp)));
            }));
    }
 
    /**
     * List message threads for a phone
     * Get the latest message preview for a thread
     * @param phoneNumberId 
     * @param page 
     * @param size 
     */
    public getPhoneMessageThreads(phoneNumberId: string, page?: number, size?: number, options?: Configuration): Observable<PagePhoneMessageThreadProjection> {
        const requestContextPromise = this.requestFactory.getPhoneMessageThreads(phoneNumberId, page, size, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPhoneMessageThreads(rsp)));
            }));
    }
 
    /**
     * Get a phone number by ID
     * Get a phone number by ID
     * @param phoneNumberId 
     */
    public getPhoneNumber(phoneNumberId: string, options?: Configuration): Observable<PhoneNumberDto> {
        const requestContextPromise = this.requestFactory.getPhoneNumber(phoneNumberId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPhoneNumber(rsp)));
            }));
    }
 
    /**
     * Get a phone number by name
     * Get a phone number by name
     * @param name 
     */
    public getPhoneNumberByName(name: string, options?: Configuration): Observable<PhoneNumberDto> {
        const requestContextPromise = this.requestFactory.getPhoneNumberByName(name, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPhoneNumberByName(rsp)));
            }));
    }
 
    /**
     * Get a phone number by phone number
     * Get a phone number by phone number
     * @param phoneNumber 
     */
    public getPhoneNumberByPhoneNumber(phoneNumber: string, options?: Configuration): Observable<PhoneNumberDto> {
        const requestContextPromise = this.requestFactory.getPhoneNumberByPhoneNumber(phoneNumber, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPhoneNumberByPhoneNumber(rsp)));
            }));
    }
 
    /**
     * Get a released or deleted phone numbers
     * Get phone number release
     * @param releaseId 
     */
    public getPhoneNumberRelease(releaseId: string, options?: Configuration): Observable<PhoneNumberReleaseProjection> {
        const requestContextPromise = this.requestFactory.getPhoneNumberRelease(releaseId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPhoneNumberRelease(rsp)));
            }));
    }
 
    /**
     * List phone numbers for account
     * Get phone numbers
     * @param phoneCountry Optional phone country
     * @param page Optional page index for list pagination
     * @param size Optional page size for list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param search Optional search filter
     * @param include Optional phoneIds to include in result
     * @param favourite Optionally filter results for favourites only
     */
    public getPhoneNumbers(phoneCountry?: 'US' | 'GB' | 'AU' | 'CA' | 'EE' | 'HK' | 'PL' | 'PT' | 'NL' | 'IL' | 'FI' | 'SE', page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, include?: Array<string>, favourite?: boolean, options?: Configuration): Observable<PagePhoneNumberProjection> {
        const requestContextPromise = this.requestFactory.getPhoneNumbers(phoneCountry, page, size, sort, since, before, search, include, favourite, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPhoneNumbers(rsp)));
            }));
    }
 
    /**
     * Get phone number plans
     * Get phone plans
     */
    public getPhonePlans(options?: Configuration): Observable<Array<PhonePlanDto>> {
        const requestContextPromise = this.requestFactory.getPhonePlans(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPhonePlans(rsp)));
            }));
    }
 
    /**
     * Get phone plans availability
     */
    public getPhonePlansAvailability(options?: Configuration): Observable<PhonePlanAvailability> {
        const requestContextPromise = this.requestFactory.getPhonePlansAvailability(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPhonePlansAvailability(rsp)));
            }));
    }
 
    /**
     * Get overview of assigned phones
     * Get phone summary
     */
    public getPhoneSummary(options?: Configuration): Observable<PhoneSummaryDto> {
        const requestContextPromise = this.requestFactory.getPhoneSummary(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPhoneSummary(rsp)));
            }));
    }
 
    /**
     * Get sent SMS messages for a phone number
     * List sent TXT messages for a phone number
     * @param phoneNumberId 
     * @param page Optional page index in SMS list pagination
     * @param size Optional page size in SMS list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter SMSs received after given date time
     * @param before Optional filter SMSs received before given date time
     * @param search Optional search filter
     */
    public getSentSmsByPhoneNumber(phoneNumberId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, options?: Configuration): Observable<PageSentSmsProjection> {
        const requestContextPromise = this.requestFactory.getSentSmsByPhoneNumber(phoneNumberId, page, size, sort, since, before, search, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentSmsByPhoneNumber(rsp)));
            }));
    }
 
    /**
     * Get SMS messages for a phone number
     * List SMS messages for a phone number
     * @param phoneNumberId 
     * @param page Optional page index in SMS list pagination
     * @param size Optional page size in SMS list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param unreadOnly Optional filter for unread SMS only. All SMS are considered unread until they are viewed in the dashboard or requested directly
     * @param since Optional filter SMSs received after given date time
     * @param before Optional filter SMSs received before given date time
     * @param search Optional search filter
     * @param favourite Optionally filter results for favourites only
     */
    public getSmsByPhoneNumber(phoneNumberId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, since?: Date, before?: Date, search?: string, favourite?: boolean, options?: Configuration): Observable<PageSmsProjection> {
        const requestContextPromise = this.requestFactory.getSmsByPhoneNumber(phoneNumberId, page, size, sort, unreadOnly, since, before, search, favourite, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSmsByPhoneNumber(rsp)));
            }));
    }
 
    /**
     * Reassign phone number that was released or deleted
     * Reassign phone number release
     * @param releaseId 
     */
    public reassignPhoneNumberRelease(releaseId: string, options?: Configuration): Observable<PhoneNumberDto> {
        const requestContextPromise = this.requestFactory.reassignPhoneNumberRelease(releaseId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reassignPhoneNumberRelease(rsp)));
            }));
    }
 
    /**
     * Send SMS from a phone number
     * Send TXT message from a phone number
     * @param phoneNumberId 
     * @param smsSendOptions 
     */
    public sendSmsFromPhoneNumber(phoneNumberId: string, smsSendOptions: SmsSendOptions, options?: Configuration): Observable<SentSmsDto> {
        const requestContextPromise = this.requestFactory.sendSmsFromPhoneNumber(phoneNumberId, smsSendOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendSmsFromPhoneNumber(rsp)));
            }));
    }
 
    /**
     * Give or revoke consent for phone usage
     * Set consent status
     * @param agree 
     */
    public setConsentStatus(agree: boolean, options?: Configuration): Observable<ConsentStatusDto> {
        const requestContextPromise = this.requestFactory.setConsentStatus(agree, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setConsentStatus(rsp)));
            }));
    }
 
    /**
     * Set and return new favorite state for a phone
     * Set phone favourited state
     * @param phoneNumberId ID of phone to set favourite state
     * @param setPhoneFavouritedOptions 
     */
    public setPhoneFavourited(phoneNumberId: string, setPhoneFavouritedOptions: SetPhoneFavouritedOptions, options?: Configuration): Observable<PhoneNumberDto> {
        const requestContextPromise = this.requestFactory.setPhoneFavourited(phoneNumberId, setPhoneFavouritedOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setPhoneFavourited(rsp)));
            }));
    }
 
    /**
     * Test a phone number by sending an SMS to it. NOTE this is only for internal use to check that a phone number is working. For end-to-end phone testing see https://docs.mailslurp.com/txt-sms/
     * Test sending an SMS to a number
     * @param phoneNumberId 
     * @param testPhoneNumberOptions 
     * @param xTestId 
     */
    public testPhoneNumberSendSms(phoneNumberId: string, testPhoneNumberOptions: TestPhoneNumberOptions, xTestId?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.testPhoneNumberSendSms(phoneNumberId, testPhoneNumberOptions, xTestId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testPhoneNumberSendSms(rsp)));
            }));
    }
 
    /**
     * Set field for phone number
     * Update a phone number
     * @param phoneNumberId ID of phone to set favourite state
     * @param updatePhoneNumberOptions 
     */
    public updatePhoneNumber(phoneNumberId: string, updatePhoneNumberOptions: UpdatePhoneNumberOptions, options?: Configuration): Observable<PhoneNumberDto> {
        const requestContextPromise = this.requestFactory.updatePhoneNumber(phoneNumberId, updatePhoneNumberOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePhoneNumber(rsp)));
            }));
    }
 
    /**
     * Validate a phone number
     * Verify validity of a phone number
     * @param validatePhoneNumberOptions 
     */
    public validatePhoneNumber(validatePhoneNumberOptions: ValidatePhoneNumberOptions, options?: Configuration): Observable<PhoneNumberValidationDto> {
        const requestContextPromise = this.requestFactory.validatePhoneNumber(validatePhoneNumberOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validatePhoneNumber(rsp)));
            }));
    }
 
}

import { RulesetControllerApiRequestFactory, RulesetControllerApiResponseProcessor} from "../apis/RulesetControllerApi.ts";
export class ObservableRulesetControllerApi {
    private requestFactory: RulesetControllerApiRequestFactory;
    private responseProcessor: RulesetControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RulesetControllerApiRequestFactory,
        responseProcessor?: RulesetControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RulesetControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RulesetControllerApiResponseProcessor();
    }

    /**
     * Create a new inbox or phone number rule for forwarding, blocking, and allowing emails or SMS when sending and receiving
     * Create a ruleset
     * @param createRulesetOptions 
     * @param inboxId Inbox id to attach ruleset to
     * @param phoneId Phone id to attach ruleset to
     */
    public createNewRuleset(createRulesetOptions: CreateRulesetOptions, inboxId?: string, phoneId?: string, options?: Configuration): Observable<RulesetDto> {
        const requestContextPromise = this.requestFactory.createNewRuleset(createRulesetOptions, inboxId, phoneId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNewRuleset(rsp)));
            }));
    }
 
    /**
     * Delete ruleset
     * Delete a ruleset
     * @param id ID of ruleset
     */
    public deleteRuleset(id: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteRuleset(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteRuleset(rsp)));
            }));
    }
 
    /**
     * Delete rulesets. Accepts optional inboxId or phoneId filters.
     * Delete rulesets
     * @param inboxId Optional inbox id to attach ruleset to
     * @param phoneId 
     */
    public deleteRulesets(inboxId?: string, phoneId?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteRulesets(inboxId, phoneId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteRulesets(rsp)));
            }));
    }
 
    /**
     * Get ruleset
     * Get a ruleset
     * @param id ID of ruleset
     */
    public getRuleset(id: string, options?: Configuration): Observable<RulesetDto> {
        const requestContextPromise = this.requestFactory.getRuleset(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRuleset(rsp)));
            }));
    }
 
    /**
     * List all rulesets attached to an inbox or phone or account
     * List rulesets block and allow lists
     * @param inboxId Optional inbox id to get rulesets from
     * @param phoneId Optional phone id to get rulesets from
     * @param page Optional page index in inbox ruleset list pagination
     * @param size Optional page size in inbox ruleset list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getRulesets(inboxId?: string, phoneId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageRulesetDto> {
        const requestContextPromise = this.requestFactory.getRulesets(inboxId, phoneId, page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRulesets(rsp)));
            }));
    }
 
    /**
     * Test inbox rulesets for inbox
     * Test inbox rulesets for inbox
     * @param inboxId ID of inbox
     * @param rulesetTestOptions 
     */
    public testInboxRulesetsForInbox(inboxId: string, rulesetTestOptions: RulesetTestOptions, options?: Configuration): Observable<InboxRulesetTestResult> {
        const requestContextPromise = this.requestFactory.testInboxRulesetsForInbox(inboxId, rulesetTestOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testInboxRulesetsForInbox(rsp)));
            }));
    }
 
    /**
     * Test new ruleset
     * Test new ruleset
     * @param testNewInboxRulesetOptions 
     */
    public testNewRuleset(testNewInboxRulesetOptions: TestNewInboxRulesetOptions, options?: Configuration): Observable<InboxRulesetTestResult> {
        const requestContextPromise = this.requestFactory.testNewRuleset(testNewInboxRulesetOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testNewRuleset(rsp)));
            }));
    }
 
    /**
     * Test an inbox or phone ruleset
     * Test a ruleset
     * @param id ID of ruleset
     * @param rulesetTestOptions 
     */
    public testRuleset(id: string, rulesetTestOptions: RulesetTestOptions, options?: Configuration): Observable<InboxRulesetTestResult> {
        const requestContextPromise = this.requestFactory.testRuleset(id, rulesetTestOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testRuleset(rsp)));
            }));
    }
 
    /**
     * Test whether inbound emails from an email address would be blocked or allowed by inbox rulesets or test if phone number can receive SMS
     * Test receiving with rulesets
     * @param testRulesetReceivingOptions 
     */
    public testRulesetReceiving(testRulesetReceivingOptions: TestRulesetReceivingOptions, options?: Configuration): Observable<TestRulesetReceivingResult> {
        const requestContextPromise = this.requestFactory.testRulesetReceiving(testRulesetReceivingOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testRulesetReceiving(rsp)));
            }));
    }
 
    /**
     * Test whether outbound emails to an email address would be blocked or allowed by inbox rulesets or whether a phone number can send SMS
     * Test sending with rulesets
     * @param testInboxRulesetSendingOptions 
     */
    public testRulesetSending(testInboxRulesetSendingOptions: TestInboxRulesetSendingOptions, options?: Configuration): Observable<TestRulesetSendingResult> {
        const requestContextPromise = this.requestFactory.testRulesetSending(testInboxRulesetSendingOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testRulesetSending(rsp)));
            }));
    }
 
}

import { SentEmailsControllerApiRequestFactory, SentEmailsControllerApiResponseProcessor} from "../apis/SentEmailsControllerApi.ts";
export class ObservableSentEmailsControllerApi {
    private requestFactory: SentEmailsControllerApiRequestFactory;
    private responseProcessor: SentEmailsControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SentEmailsControllerApiRequestFactory,
        responseProcessor?: SentEmailsControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SentEmailsControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SentEmailsControllerApiResponseProcessor();
    }

    /**
     * Delete all sent email receipts
     */
    public deleteAllSentEmails(options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllSentEmails(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllSentEmails(rsp)));
            }));
    }
 
    /**
     * Delete sent email receipt
     * @param id 
     */
    public deleteSentEmail(id: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteSentEmail(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSentEmail(rsp)));
            }));
    }
 
    /**
     * Get all sent email tracking pixels in paginated form
     * @param page Optional page index in sent email tracking pixel list pagination
     * @param size Optional page size in sent email tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllSentTrackingPixels(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageTrackingPixelProjection> {
        const requestContextPromise = this.requestFactory.getAllSentTrackingPixels(page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllSentTrackingPixels(rsp)));
            }));
    }
 
    /**
     * Returns a raw, unparsed, and unprocessed sent email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawSentEmailJson endpoint
     * Get raw sent email string. Returns unparsed raw SMTP message with headers and body.
     * @param emailId ID of email
     */
    public getRawSentEmailContents(emailId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.getRawSentEmailContents(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRawSentEmailContents(rsp)));
            }));
    }
 
    /**
     * Returns a raw, unparsed, and unprocessed sent email wrapped in a JSON response object for easier handling when compared with the getRawSentEmail text/plain response
     * Get raw sent email in JSON. Unparsed SMTP message in JSON wrapper format.
     * @param emailId ID of email
     */
    public getRawSentEmailJson(emailId: string, options?: Configuration): Observable<RawEmailJson> {
        const requestContextPromise = this.requestFactory.getRawSentEmailJson(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRawSentEmailJson(rsp)));
            }));
    }
 
    /**
     * Get a sent email delivery status
     * @param deliveryId 
     */
    public getSentDeliveryStatus(deliveryId: string, options?: Configuration): Observable<DeliveryStatusDto> {
        const requestContextPromise = this.requestFactory.getSentDeliveryStatus(deliveryId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentDeliveryStatus(rsp)));
            }));
    }
 
    /**
     * Get all sent email delivery statuses
     * @param page Optional page index in delivery status list pagination
     * @param size Optional page size in delivery status list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getSentDeliveryStatuses(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageDeliveryStatus> {
        const requestContextPromise = this.requestFactory.getSentDeliveryStatuses(page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentDeliveryStatuses(rsp)));
            }));
    }
 
    /**
     * Get all sent email delivery statuses
     * @param sentId ID of the sent email that you want to get the delivery status of. Sent email object is returned when sending an email
     * @param page Optional page index in delivery status list pagination
     * @param size Optional page size in delivery status list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getSentDeliveryStatusesBySentId(sentId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageDeliveryStatus> {
        const requestContextPromise = this.requestFactory.getSentDeliveryStatusesBySentId(sentId, page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentDeliveryStatusesBySentId(rsp)));
            }));
    }
 
    /**
     * Get sent email receipt
     * @param id 
     */
    public getSentEmail(id: string, options?: Configuration): Observable<SentEmailDto> {
        const requestContextPromise = this.requestFactory.getSentEmail(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentEmail(rsp)));
            }));
    }
 
    /**
     * Get sent email HTML content
     * @param id 
     */
    public getSentEmailHTMLContent(id: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getSentEmailHTMLContent(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentEmailHTMLContent(rsp)));
            }));
    }
 
    /**
     * Get a list of URLs for sent email content as text/html or raw SMTP message for viewing the message in a browser.
     * Get sent email URL for viewing in browser or downloading
     * @param id 
     */
    public getSentEmailPreviewURLs(id: string, options?: Configuration): Observable<EmailPreviewUrls> {
        const requestContextPromise = this.requestFactory.getSentEmailPreviewURLs(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentEmailPreviewURLs(rsp)));
            }));
    }
 
    /**
     * Get all tracking pixels for a sent email in paginated form
     * @param id 
     * @param page Optional page index in sent email tracking pixel list pagination
     * @param size Optional page size in sent email tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getSentEmailTrackingPixels(id: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageTrackingPixelProjection> {
        const requestContextPromise = this.requestFactory.getSentEmailTrackingPixels(id, page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentEmailTrackingPixels(rsp)));
            }));
    }
 
    /**
     * Get all sent emails in paginated form
     * @param inboxId Optional inboxId to filter sender of sent emails by
     * @param page Optional page index in inbox sent email list pagination
     * @param size Optional page size in inbox sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getSentEmails(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageSentEmailProjection> {
        const requestContextPromise = this.requestFactory.getSentEmails(inboxId, page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentEmails(rsp)));
            }));
    }
 
    /**
     * Get results of email sent with queues in paginated form
     * @param page Optional page index in inbox sent email list pagination
     * @param size Optional page size in inbox sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getSentEmailsWithQueueResults(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageSentEmailWithQueueProjection> {
        const requestContextPromise = this.requestFactory.getSentEmailsWithQueueResults(page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentEmailsWithQueueResults(rsp)));
            }));
    }
 
    /**
     * Get all sent organization emails in paginated form
     * @param inboxId Optional inboxId to filter sender of sent emails by
     * @param page Optional page index in sent email list pagination
     * @param size Optional page size in sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getSentOrganizationEmails(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageSentEmailProjection> {
        const requestContextPromise = this.requestFactory.getSentOrganizationEmails(inboxId, page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentOrganizationEmails(rsp)));
            }));
    }
 
    /**
     * Wait for delivery statuses
     * @param sentId Optional sent email ID filter
     * @param inboxId Optional inbox ID filter
     * @param timeout Optional timeout milliseconds
     * @param index Zero based index of the delivery status to wait for. If 1 delivery status already and you want to wait for the 2nd pass index&#x3D;1
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public waitForDeliveryStatuses(sentId?: string, inboxId?: string, timeout?: number, index?: number, since?: Date, before?: Date, options?: Configuration): Observable<DeliveryStatusDto> {
        const requestContextPromise = this.requestFactory.waitForDeliveryStatuses(sentId, inboxId, timeout, index, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.waitForDeliveryStatuses(rsp)));
            }));
    }
 
}

import { SmsControllerApiRequestFactory, SmsControllerApiResponseProcessor} from "../apis/SmsControllerApi.ts";
export class ObservableSmsControllerApi {
    private requestFactory: SmsControllerApiRequestFactory;
    private responseProcessor: SmsControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SmsControllerApiRequestFactory,
        responseProcessor?: SmsControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SmsControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SmsControllerApiResponseProcessor();
    }

    /**
     * Delete a sent SMS message
     * Delete sent SMS message.
     * @param sentSmsId 
     */
    public deleteSentSmsMessage(sentSmsId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteSentSmsMessage(sentSmsId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSentSmsMessage(rsp)));
            }));
    }
 
    /**
     * Delete all sent SMS messages or all messages for a given phone number
     * Delete all sent SMS messages
     * @param phoneNumberId 
     */
    public deleteSentSmsMessages(phoneNumberId?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteSentSmsMessages(phoneNumberId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSentSmsMessages(rsp)));
            }));
    }
 
    /**
     * Delete an SMS message
     * Delete SMS message.
     * @param smsId 
     */
    public deleteSmsMessage(smsId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteSmsMessage(smsId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSmsMessage(rsp)));
            }));
    }
 
    /**
     * Delete all SMS messages or all messages for a given phone number
     * Delete all SMS messages
     * @param phoneNumberId 
     */
    public deleteSmsMessages(phoneNumberId?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteSmsMessages(phoneNumberId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSmsMessages(rsp)));
            }));
    }
 
    /**
     * @param phoneNumber Optional receiving phone number to filter SMS messages for
     * @param page Optional page index in SMS list pagination
     * @param size Optional page size in SMS list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter SMSs received after given date time
     * @param before Optional filter SMSs received before given date time
     * @param search Optional search filter
     * @param favourite Optionally filter results for favourites only
     * @param include Optional list of IDs to include in result
     */
    public getAllSmsMessages(phoneNumber?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, favourite?: boolean, include?: Array<string>, options?: Configuration): Observable<PageSmsProjection> {
        const requestContextPromise = this.requestFactory.getAllSmsMessages(phoneNumber, page, size, sort, since, before, search, favourite, include, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllSmsMessages(rsp)));
            }));
    }
 
    /**
     * Get reply for an SMS message.
     * Get reply for an SMS message
     * @param smsId 
     */
    public getReplyForSmsMessage(smsId: string, options?: Configuration): Observable<ReplyForSms> {
        const requestContextPromise = this.requestFactory.getReplyForSmsMessage(smsId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getReplyForSmsMessage(rsp)));
            }));
    }
 
    /**
     * Get number of sent SMS
     * Get sent SMS count
     */
    public getSentSmsCount(options?: Configuration): Observable<CountDto> {
        const requestContextPromise = this.requestFactory.getSentSmsCount(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentSmsCount(rsp)));
            }));
    }
 
    /**
     * Returns an SMS summary object with content.
     * Get sent SMS content including body. Expects sent SMS to exist by ID.
     * @param sentSmsId 
     */
    public getSentSmsMessage(sentSmsId: string, options?: Configuration): Observable<SentSmsDto> {
        const requestContextPromise = this.requestFactory.getSentSmsMessage(sentSmsId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentSmsMessage(rsp)));
            }));
    }
 
    /**
     * By default returns all SMS messages across all phone numbers sorted by ascending created at date. Responses are paginated. You can restrict results to a list of phone number IDs. You can also filter out read messages
     * Get all SMS messages in all phone numbers in paginated form. .
     * @param phoneNumber Optional phone number to filter sent SMS messages for
     * @param page Optional page index in SMS list pagination
     * @param size Optional page size in SMS list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter SMSs received after given date time
     * @param before Optional filter SMSs received before given date time
     * @param search Optional search filter
     */
    public getSentSmsMessagesPaginated(phoneNumber?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, options?: Configuration): Observable<PageSentSmsProjection> {
        const requestContextPromise = this.requestFactory.getSentSmsMessagesPaginated(phoneNumber, page, size, sort, since, before, search, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentSmsMessagesPaginated(rsp)));
            }));
    }
 
    /**
     * Extract one-time passcodes and verification tokens from SMS body content. Deterministic `PATTERN` extraction is available now. Use method flags to control fallback behavior for QA.
     * Extract verification codes from an SMS
     * @param smsId ID of SMS to extract codes from
     * @param extractCodesOptions 
     */
    public getSmsCodes(smsId: string, extractCodesOptions?: ExtractCodesOptions, options?: Configuration): Observable<ExtractCodesResult> {
        const requestContextPromise = this.requestFactory.getSmsCodes(smsId, extractCodesOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSmsCodes(rsp)));
            }));
    }
 
    /**
     * Get number of SMS
     * Get SMS count
     */
    public getSmsCount(options?: Configuration): Observable<CountDto> {
        const requestContextPromise = this.requestFactory.getSmsCount(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSmsCount(rsp)));
            }));
    }
 
    /**
     * Returns a SMS summary object with content.
     * Get SMS content including body. Expects SMS to exist by ID. For SMS that may not have arrived yet use the WaitForController.
     * @param smsId 
     */
    public getSmsMessage(smsId: string, options?: Configuration): Observable<SmsDto> {
        const requestContextPromise = this.requestFactory.getSmsMessage(smsId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSmsMessage(rsp)));
            }));
    }
 
    /**
     * Get number of SMS unread. Unread means has not been viewed in dashboard or returned in an email API response
     * Get unread SMS count
     */
    public getUnreadSmsCount(options?: Configuration): Observable<UnreadCount> {
        const requestContextPromise = this.requestFactory.getUnreadSmsCount(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUnreadSmsCount(rsp)));
            }));
    }
 
    /**
     * Reply to an SMS message.
     * Send a reply to a received SMS message. Replies are sent from the receiving number.
     * @param smsId 
     * @param smsReplyOptions 
     */
    public replyToSmsMessage(smsId: string, smsReplyOptions: SmsReplyOptions, options?: Configuration): Observable<SentSmsDto> {
        const requestContextPromise = this.requestFactory.replyToSmsMessage(smsId, smsReplyOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replyToSmsMessage(rsp)));
            }));
    }
 
    /**
     * @param smsSendOptions 
     * @param fromPhoneNumber Phone number to send from in E.164 format
     * @param fromPhoneId Phone number ID to send from in UUID form
     */
    public sendSms(smsSendOptions: SmsSendOptions, fromPhoneNumber?: string, fromPhoneId?: string, options?: Configuration): Observable<SentSmsDto> {
        const requestContextPromise = this.requestFactory.sendSms(smsSendOptions, fromPhoneNumber, fromPhoneId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendSms(rsp)));
            }));
    }
 
    /**
     * @param smsId ID of SMS to set favourite state
     * @param favourited 
     */
    public setSmsFavourited(smsId: string, favourited: boolean, options?: Configuration): Observable<SmsDto> {
        const requestContextPromise = this.requestFactory.setSmsFavourited(smsId, favourited, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setSmsFavourited(rsp)));
            }));
    }
 
}

import { TemplateControllerApiRequestFactory, TemplateControllerApiResponseProcessor} from "../apis/TemplateControllerApi.ts";
export class ObservableTemplateControllerApi {
    private requestFactory: TemplateControllerApiRequestFactory;
    private responseProcessor: TemplateControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TemplateControllerApiRequestFactory,
        responseProcessor?: TemplateControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TemplateControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TemplateControllerApiResponseProcessor();
    }

    /**
     * Create an email template with variables for use with templated transactional emails.
     * Create a Template
     * @param createTemplateOptions 
     */
    public createTemplate(createTemplateOptions: CreateTemplateOptions, options?: Configuration): Observable<TemplateDto> {
        const requestContextPromise = this.requestFactory.createTemplate(createTemplateOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTemplate(rsp)));
            }));
    }
 
    /**
     * Delete template
     * Delete email template
     * @param templateId Template ID
     */
    public deleteTemplate(templateId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteTemplate(templateId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTemplate(rsp)));
            }));
    }
 
    /**
     * Get all templates in paginated format
     * List templates
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllTemplates(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageTemplateProjection> {
        const requestContextPromise = this.requestFactory.getAllTemplates(page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllTemplates(rsp)));
            }));
    }
 
    /**
     * Get email template
     * Get template
     * @param templateId Template ID
     */
    public getTemplate(templateId: string, options?: Configuration): Observable<TemplateDto> {
        const requestContextPromise = this.requestFactory.getTemplate(templateId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTemplate(rsp)));
            }));
    }
 
    /**
     * Get email template preview with passed template variables in HTML format for browsers. Pass template variables as query params.
     * Get template preview HTML
     * @param templateId Template ID
     */
    public getTemplatePreviewHtml(templateId: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getTemplatePreviewHtml(templateId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTemplatePreviewHtml(rsp)));
            }));
    }
 
    /**
     * Get email template preview with passed template variables in JSON format. Pass template variables as query params.
     * Get template preview Json
     * @param templateId Template ID
     */
    public getTemplatePreviewJson(templateId: string, options?: Configuration): Observable<TemplatePreview> {
        const requestContextPromise = this.requestFactory.getTemplatePreviewJson(templateId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTemplatePreviewJson(rsp)));
            }));
    }
 
    /**
     * Get all templates
     * List templates
     */
    public getTemplates(options?: Configuration): Observable<Array<TemplateProjection>> {
        const requestContextPromise = this.requestFactory.getTemplates(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTemplates(rsp)));
            }));
    }
 
    /**
     * Update email template
     * Update template
     * @param templateId Template ID
     * @param createTemplateOptions 
     */
    public updateTemplate(templateId: string, createTemplateOptions: CreateTemplateOptions, options?: Configuration): Observable<TemplateDto> {
        const requestContextPromise = this.requestFactory.updateTemplate(templateId, createTemplateOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTemplate(rsp)));
            }));
    }
 
}

import { ToolsControllerApiRequestFactory, ToolsControllerApiResponseProcessor} from "../apis/ToolsControllerApi.ts";
export class ObservableToolsControllerApi {
    private requestFactory: ToolsControllerApiRequestFactory;
    private responseProcessor: ToolsControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ToolsControllerApiRequestFactory,
        responseProcessor?: ToolsControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ToolsControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ToolsControllerApiResponseProcessor();
    }

    /**
     * Check email client support for email HTML and CSS features
     * @param checkEmailFeaturesClientSupportOptions 
     */
    public checkEmailFeaturesClientSupport(checkEmailFeaturesClientSupportOptions: CheckEmailFeaturesClientSupportOptions, options?: Configuration): Observable<CheckEmailFeaturesClientSupportResults> {
        const requestContextPromise = this.requestFactory.checkEmailFeaturesClientSupport(checkEmailFeaturesClientSupportOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkEmailFeaturesClientSupport(rsp)));
            }));
    }
 
    /**
     * Create a new email address using the fake email domains
     */
    public createNewFakeEmailAddress(options?: Configuration): Observable<NewFakeEmailAddressResult> {
        const requestContextPromise = this.requestFactory.createNewFakeEmailAddress(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNewFakeEmailAddress(rsp)));
            }));
    }
 
    /**
     * Delete a fake email address using the fake email domains
     * Delete a fake email address using the fake email domains
     * @param emailAddress 
     */
    public deleteNewFakeEmailAddress(emailAddress: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteNewFakeEmailAddress(emailAddress, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteNewFakeEmailAddress(rsp)));
            }));
    }
 
    /**
     * Create a BIMI record policy
     * @param generateBimiRecordOptions 
     */
    public generateBimiRecord(generateBimiRecordOptions: GenerateBimiRecordOptions, options?: Configuration): Observable<GenerateBimiRecordResults> {
        const requestContextPromise = this.requestFactory.generateBimiRecord(generateBimiRecordOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateBimiRecord(rsp)));
            }));
    }
 
    /**
     * Create a DMARC record policy
     * @param generateDmarcRecordOptions 
     */
    public generateDmarcRecord(generateDmarcRecordOptions: GenerateDmarcRecordOptions, options?: Configuration): Observable<GenerateDmarcRecordResults> {
        const requestContextPromise = this.requestFactory.generateDmarcRecord(generateDmarcRecordOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateDmarcRecord(rsp)));
            }));
    }
 
    /**
     * Create a TLS reporting record policy
     * @param generateMtaStsRecordOptions 
     */
    public generateMtaStsRecord(generateMtaStsRecordOptions: GenerateMtaStsRecordOptions, options?: Configuration): Observable<GenerateMtaStsRecordResults> {
        const requestContextPromise = this.requestFactory.generateMtaStsRecord(generateMtaStsRecordOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateMtaStsRecord(rsp)));
            }));
    }
 
    /**
     * Create a TLS reporting record policy
     * @param generateTlsReportingRecordOptions 
     */
    public generateTlsReportingRecord(generateTlsReportingRecordOptions: GenerateTlsReportingRecordOptions, options?: Configuration): Observable<GenerateTlsReportingRecordResults> {
        const requestContextPromise = this.requestFactory.generateTlsReportingRecord(generateTlsReportingRecordOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateTlsReportingRecord(rsp)));
            }));
    }
 
    /**
     * @param emailAddress 
     */
    public getFakeEmailByEmailAddress(emailAddress: string, options?: Configuration): Observable<FakeEmailResult> {
        const requestContextPromise = this.requestFactory.getFakeEmailByEmailAddress(emailAddress, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFakeEmailByEmailAddress(rsp)));
            }));
    }
 
    /**
     * Get a fake email by its ID
     * Get a fake email by its ID
     * @param id 
     */
    public getFakeEmailById(id: string, options?: Configuration): Observable<FakeEmailResult> {
        const requestContextPromise = this.requestFactory.getFakeEmailById(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFakeEmailById(rsp)));
            }));
    }
 
    /**
     * Retrieve the raw content of a fake email by its ID
     * Get raw fake email content
     * @param id 
     */
    public getFakeEmailRaw(id: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getFakeEmailRaw(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFakeEmailRaw(rsp)));
            }));
    }
 
    /**
     * Get fake emails for an address
     * Get fake emails for an address
     * @param emailAddress 
     * @param page 
     */
    public getFakeEmailsForAddress(emailAddress: string, page?: number, options?: Configuration): Observable<Array<FakeEmailPreview>> {
        const requestContextPromise = this.requestFactory.getFakeEmailsForAddress(emailAddress, page, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFakeEmailsForAddress(rsp)));
            }));
    }
 
    /**
     * Lookup a BIMI record policy
     * @param lookupBimiDomainOptions 
     */
    public lookupBimiDomain(lookupBimiDomainOptions: LookupBimiDomainOptions, options?: Configuration): Observable<LookupBimiDomainResults> {
        const requestContextPromise = this.requestFactory.lookupBimiDomain(lookupBimiDomainOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.lookupBimiDomain(rsp)));
            }));
    }
 
    /**
     * Lookup a DMARC record policy
     * @param lookupDmarcDomainOptions 
     */
    public lookupDmarcDomain(lookupDmarcDomainOptions: LookupDmarcDomainOptions, options?: Configuration): Observable<LookupDmarcDomainResults> {
        const requestContextPromise = this.requestFactory.lookupDmarcDomain(lookupDmarcDomainOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.lookupDmarcDomain(rsp)));
            }));
    }
 
    /**
     * Lookup a MTA-STS domain policy
     * @param lookupMtaStsDomainOptions 
     */
    public lookupMtaStsDomain(lookupMtaStsDomainOptions: LookupMtaStsDomainOptions, options?: Configuration): Observable<LookupMtaStsDomainResults> {
        const requestContextPromise = this.requestFactory.lookupMtaStsDomain(lookupMtaStsDomainOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.lookupMtaStsDomain(rsp)));
            }));
    }
 
    /**
     * Lookup a MX records for a domain
     * @param lookupMxRecordsOptions 
     */
    public lookupMxRecord(lookupMxRecordsOptions: LookupMxRecordsOptions, options?: Configuration): Observable<LookupMxRecordsResults> {
        const requestContextPromise = this.requestFactory.lookupMxRecord(lookupMxRecordsOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.lookupMxRecord(rsp)));
            }));
    }
 
    /**
     * Lookup a TLS reporting domain policy
     * @param lookupTlsReportingDomainOptions 
     */
    public lookupTlsReportingDomain(lookupTlsReportingDomainOptions: LookupTlsReportingDomainOptions, options?: Configuration): Observable<LookupTlsReportingDomainResults> {
        const requestContextPromise = this.requestFactory.lookupTlsReportingDomain(lookupTlsReportingDomainOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.lookupTlsReportingDomain(rsp)));
            }));
    }
 
}

import { TrackingControllerApiRequestFactory, TrackingControllerApiResponseProcessor} from "../apis/TrackingControllerApi.ts";
export class ObservableTrackingControllerApi {
    private requestFactory: TrackingControllerApiRequestFactory;
    private responseProcessor: TrackingControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TrackingControllerApiRequestFactory,
        responseProcessor?: TrackingControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TrackingControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TrackingControllerApiResponseProcessor();
    }

    /**
     * Create a tracking pixel. A tracking pixel is an image that can be embedded in an email. When the email is viewed and the image is seen MailSlurp will mark the pixel as seen. Use tracking pixels to monitor email open events. You can receive open notifications via webhook or by fetching the pixel.
     * Create tracking pixel
     * @param createTrackingPixelOptions 
     */
    public createTrackingPixel(createTrackingPixelOptions: CreateTrackingPixelOptions, options?: Configuration): Observable<TrackingPixelDto> {
        const requestContextPromise = this.requestFactory.createTrackingPixel(createTrackingPixelOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTrackingPixel(rsp)));
            }));
    }
 
    /**
     * List tracking pixels in paginated form
     * Get tracking pixels
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllTrackingPixels(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageTrackingPixelProjection> {
        const requestContextPromise = this.requestFactory.getAllTrackingPixels(page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllTrackingPixels(rsp)));
            }));
    }
 
    /**
     * Get pixel
     * @param id 
     */
    public getTrackingPixel(id: string, options?: Configuration): Observable<TrackingPixelDto> {
        const requestContextPromise = this.requestFactory.getTrackingPixel(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTrackingPixel(rsp)));
            }));
    }
 
}

import { UserControllerApiRequestFactory, UserControllerApiResponseProcessor} from "../apis/UserControllerApi.ts";
export class ObservableUserControllerApi {
    private requestFactory: UserControllerApiRequestFactory;
    private responseProcessor: UserControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserControllerApiRequestFactory,
        responseProcessor?: UserControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserControllerApiResponseProcessor();
    }

    /**
     * Create inbox retention policy for your global account
     * @param createInboxRetentionPolicyForAccountOptions 
     */
    public createOrUpdateInboxRetentionPolicyForAccount(createInboxRetentionPolicyForAccountOptions: CreateInboxRetentionPolicyForAccountOptions, options?: Configuration): Observable<InboxRetentionPolicyDto> {
        const requestContextPromise = this.requestFactory.createOrUpdateInboxRetentionPolicyForAccount(createInboxRetentionPolicyForAccountOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrUpdateInboxRetentionPolicyForAccount(rsp)));
            }));
    }
 
    /**
     * Delete inbox retention policy for your global account
     */
    public deleteInboxRetentionPolicyForAccount(options?: Configuration): Observable<EmptyResponseDto> {
        const requestContextPromise = this.requestFactory.deleteInboxRetentionPolicyForAccount(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteInboxRetentionPolicyForAccount(rsp)));
            }));
    }
 
    /**
     * @param page Optional page index
     * @param size Optional page size
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox ID
     * @param phoneId Optional phone ID
     * @param filter Optional automation type filter
     */
    public getEntityAutomations(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, inboxId?: string, phoneId?: string, filter?: 'INBOX_FORWARDER' | 'INBOX_REPLIER' | 'INBOX_RULESET', options?: Configuration): Observable<PageEntityAutomationItems> {
        const requestContextPromise = this.requestFactory.getEntityAutomations(page, size, sort, since, before, inboxId, phoneId, filter, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEntityAutomations(rsp)));
            }));
    }
 
    /**
     * @param page Optional page index
     * @param size Optional page size
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox ID
     * @param emailId Optional email ID
     * @param phoneId Optional phone ID
     * @param smsId Optional SMS ID
     * @param attachmentId Optional attachment ID
     * @param filter Optional type filter
     */
    public getEntityEvents(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, inboxId?: string, emailId?: string, phoneId?: string, smsId?: string, attachmentId?: string, filter?: 'WEBHOOK_EVENT' | 'INBOX_FORWARDER_EVENT' | 'INBOX_REPLIER_EVENT' | 'INBOX_RULESET_EVENT' | 'ALIAS_EVENT', options?: Configuration): Observable<PageEntityEventItems> {
        const requestContextPromise = this.requestFactory.getEntityEvents(page, size, sort, since, before, inboxId, emailId, phoneId, smsId, attachmentId, filter, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEntityEvents(rsp)));
            }));
    }
 
    /**
     * @param page Optional page index
     * @param size Optional page size
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param filter Optional type filter
     */
    public getEntityFavorites(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, filter?: 'INBOX' | 'EMAIL' | 'ATTACHMENT' | 'PHONE' | 'SMS', options?: Configuration): Observable<PageEntityFavouriteItems> {
        const requestContextPromise = this.requestFactory.getEntityFavorites(page, size, sort, since, before, filter, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEntityFavorites(rsp)));
            }));
    }
 
    /**
     * Get inbox retention policy for your global account
     */
    public getInboxRetentionPolicyForAccount(options?: Configuration): Observable<InboxRetentionPolicyOptionalDto> {
        const requestContextPromise = this.requestFactory.getInboxRetentionPolicyForAccount(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxRetentionPolicyForAccount(rsp)));
            }));
    }
 
    /**
     * Utility function to extract properties from JSON objects in language where this is cumbersome.
     * @param property JSON property name or dot separated path selector such as &#x60;a.b.c&#x60;
     * @param body 
     */
    public getJsonPropertyAsString(property: string, body: any, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getJsonPropertyAsString(property, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJsonPropertyAsString(rsp)));
            }));
    }
 
    /**
     * Get account information for your user
     */
    public getUserInfo(options?: Configuration): Observable<UserInfoDto> {
        const requestContextPromise = this.requestFactory.getUserInfo(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserInfo(rsp)));
            }));
    }
 
}

import { WaitForControllerApiRequestFactory, WaitForControllerApiResponseProcessor} from "../apis/WaitForControllerApi.ts";
export class ObservableWaitForControllerApi {
    private requestFactory: WaitForControllerApiRequestFactory;
    private responseProcessor: WaitForControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WaitForControllerApiRequestFactory,
        responseProcessor?: WaitForControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WaitForControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WaitForControllerApiResponseProcessor();
    }

    /**
     * Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met
     * Wait for an email to match the provided filter conditions such as subject contains keyword.
     * @param waitForConditions 
     */
    public waitFor(waitForConditions: WaitForConditions, options?: Configuration): Observable<Array<EmailPreview>> {
        const requestContextPromise = this.requestFactory.waitFor(waitForConditions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.waitFor(rsp)));
            }));
    }
 
    /**
     * If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
     * Wait for and return count number of emails. Hold connection until inbox count matches expected or timeout occurs
     * @param inboxId Id of the inbox we are fetching emails from
     * @param count Number of emails to wait for. Must be greater that 1
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only
     * @param before Filter for emails that were received before the given timestamp
     * @param since Filter for emails that were received after the given timestamp
     * @param sort Sort direction
     * @param delay Max milliseconds delay between calls
     */
    public waitForEmailCount(inboxId: string, count: number, timeout?: number, unreadOnly?: boolean, before?: Date, since?: Date, sort?: 'ASC' | 'DESC', delay?: number, options?: Configuration): Observable<Array<EmailPreview>> {
        const requestContextPromise = this.requestFactory.waitForEmailCount(inboxId, count, timeout, unreadOnly, before, since, sort, delay, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.waitForEmailCount(rsp)));
            }));
    }
 
    /**
     * Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set `unreadOnly=true` or see the other receive methods such as `waitForNthEmail` or `waitForEmailCount`.
     * Fetch inbox's latest email or if empty wait for an email to arrive
     * @param inboxId Id of the inbox we are fetching emails from
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only.
     * @param before Filter for emails that were before after the given timestamp
     * @param since Filter for emails that were received after the given timestamp
     * @param sort Sort direction
     * @param delay Max milliseconds delay between calls
     */
    public waitForLatestEmail(inboxId?: string, timeout?: number, unreadOnly?: boolean, before?: Date, since?: Date, sort?: 'ASC' | 'DESC', delay?: number, options?: Configuration): Observable<Email> {
        const requestContextPromise = this.requestFactory.waitForLatestEmail(inboxId, timeout, unreadOnly, before, since, sort, delay, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.waitForLatestEmail(rsp)));
            }));
    }
 
    /**
     * Wait until a phone number meets given conditions or return immediately if already met
     * Wait for the latest SMS message to match the provided filter conditions such as body contains keyword.
     * @param waitForSingleSmsOptions 
     */
    public waitForLatestSms(waitForSingleSmsOptions: WaitForSingleSmsOptions, options?: Configuration): Observable<SmsDto> {
        const requestContextPromise = this.requestFactory.waitForLatestSms(waitForSingleSmsOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.waitForLatestSms(rsp)));
            }));
    }
 
    /**
     * Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait or return list of emails that match simple matching patterns
     * @param inboxId Id of the inbox we are fetching emails from
     * @param count Number of emails to wait for. Must be greater or equal to 1
     * @param matchOptions 
     * @param before Filter for emails that were received before the given timestamp
     * @param since Filter for emails that were received after the given timestamp
     * @param sort Sort direction
     * @param delay Max milliseconds delay between calls
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only
     */
    public waitForMatchingEmails(inboxId: string, count: number, matchOptions: MatchOptions, before?: Date, since?: Date, sort?: 'ASC' | 'DESC', delay?: number, timeout?: number, unreadOnly?: boolean, options?: Configuration): Observable<Array<EmailPreview>> {
        const requestContextPromise = this.requestFactory.waitForMatchingEmails(inboxId, count, matchOptions, before, since, sort, delay, timeout, unreadOnly, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.waitForMatchingEmails(rsp)));
            }));
    }
 
    /**
     * Perform a search of emails in an inbox with the given patterns. If a result if found then return or else retry the search until a result is found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait for or return the first email that matches provided MatchOptions array
     * @param inboxId Id of the inbox we are matching an email for
     * @param matchOptions 
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only
     * @param since Filter for emails that were received after the given timestamp
     * @param before Filter for emails that were received before the given timestamp
     * @param sort Sort direction
     * @param delay Max milliseconds delay between calls
     */
    public waitForMatchingFirstEmail(inboxId: string, matchOptions: MatchOptions, timeout?: number, unreadOnly?: boolean, since?: Date, before?: Date, sort?: 'ASC' | 'DESC', delay?: number, options?: Configuration): Observable<Email> {
        const requestContextPromise = this.requestFactory.waitForMatchingFirstEmail(inboxId, matchOptions, timeout, unreadOnly, since, before, sort, delay, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.waitForMatchingFirstEmail(rsp)));
            }));
    }
 
    /**
     * If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
     * Wait for or fetch the email with a given index in the inbox specified. If index doesn't exist waits for it to exist or timeout to occur.
     * @param inboxId Id of the inbox you are fetching emails from
     * @param index Zero based index of the email to wait for. If an inbox has 1 email already and you want to wait for the 2nd email pass index&#x3D;1
     * @param timeout Max milliseconds to wait for the nth email if not already present
     * @param unreadOnly Optional filter for unread only
     * @param since Filter for emails that were received after the given timestamp
     * @param before Filter for emails that were received before the given timestamp
     * @param sort Sort direction
     * @param delay Max milliseconds delay between calls
     */
    public waitForNthEmail(inboxId?: string, index?: number, timeout?: number, unreadOnly?: boolean, since?: Date, before?: Date, sort?: 'ASC' | 'DESC', delay?: number, options?: Configuration): Observable<Email> {
        const requestContextPromise = this.requestFactory.waitForNthEmail(inboxId, index, timeout, unreadOnly, since, before, sort, delay, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.waitForNthEmail(rsp)));
            }));
    }
 
    /**
     * Generic waitFor method that will wait until a phone number meets given conditions or return immediately if already met
     * Wait for an SMS message to match the provided filter conditions such as body contains keyword.
     * @param waitForSmsConditions 
     */
    public waitForSms(waitForSmsConditions: WaitForSmsConditions, options?: Configuration): Observable<Array<SmsPreview>> {
        const requestContextPromise = this.requestFactory.waitForSms(waitForSmsConditions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.waitForSms(rsp)));
            }));
    }
 
}

import { WebhookControllerApiRequestFactory, WebhookControllerApiResponseProcessor} from "../apis/WebhookControllerApi.ts";
export class ObservableWebhookControllerApi {
    private requestFactory: WebhookControllerApiRequestFactory;
    private responseProcessor: WebhookControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookControllerApiRequestFactory,
        responseProcessor?: WebhookControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WebhookControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WebhookControllerApiResponseProcessor();
    }

    /**
     * Get notified of account level events such as bounce and bounce recipient.
     * Attach a WebHook URL to an inbox
     * @param createWebhookOptions 
     */
    public createAccountWebhook(createWebhookOptions: CreateWebhookOptions, options?: Configuration): Observable<WebhookDto> {
        const requestContextPromise = this.requestFactory.createAccountWebhook(createWebhookOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAccountWebhook(rsp)));
            }));
    }
 
    /**
     * Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
     * Attach a WebHook URL to an inbox
     * @param inboxId 
     * @param createWebhookOptions 
     */
    public createWebhook(inboxId: string, createWebhookOptions: CreateWebhookOptions, options?: Configuration): Observable<WebhookDto> {
        const requestContextPromise = this.requestFactory.createWebhook(inboxId, createWebhookOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWebhook(rsp)));
            }));
    }
 
    /**
     * Get notified whenever AI transformation pipeline converts and email or SMS into structured data via a WebHook URL.
     * Attach a WebHook URL to an AI transformer
     * @param transformerId 
     * @param createWebhookOptions 
     */
    public createWebhookForAITransformer(transformerId: string, createWebhookOptions: CreateWebhookOptions, options?: Configuration): Observable<WebhookDto> {
        const requestContextPromise = this.requestFactory.createWebhookForAITransformer(transformerId, createWebhookOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWebhookForAITransformer(rsp)));
            }));
    }
 
    /**
     * Get notified whenever a phone number receives an SMS via a WebHook URL.
     * Attach a WebHook URL to a phone number
     * @param phoneNumberId 
     * @param createWebhookOptions 
     */
    public createWebhookForPhoneNumber(phoneNumberId: string, createWebhookOptions: CreateWebhookOptions, options?: Configuration): Observable<WebhookDto> {
        const requestContextPromise = this.requestFactory.createWebhookForPhoneNumber(phoneNumberId, createWebhookOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWebhookForPhoneNumber(rsp)));
            }));
    }
 
    /**
     * Delete all webhooks
     * @param before before
     */
    public deleteAllWebhooks(before?: Date, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllWebhooks(before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllWebhooks(rsp)));
            }));
    }
 
    /**
     * Delete and disable a Webhook for an Inbox
     * @param inboxId 
     * @param webhookId 
     */
    public deleteWebhook(inboxId: string, webhookId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteWebhook(inboxId, webhookId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteWebhook(rsp)));
            }));
    }
 
    /**
     * Delete a webhook
     * @param webhookId 
     */
    public deleteWebhookById(webhookId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteWebhookById(webhookId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteWebhookById(rsp)));
            }));
    }
 
    /**
     * List account webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List account webhooks Paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param eventType Optional event type
     * @param health Filter by webhook health
     * @param searchFilter Optional search filter
     */
    public getAllAccountWebhooks(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, eventType?: 'EMAIL_RECEIVED' | 'NEW_AI_TRANSFORM_RESULT' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS' | 'NEW_GUEST_USER', health?: 'HEALTHY' | 'UNHEALTHY', searchFilter?: string, options?: Configuration): Observable<PageWebhookProjection> {
        const requestContextPromise = this.requestFactory.getAllAccountWebhooks(page, size, sort, since, before, eventType, health, searchFilter, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllAccountWebhooks(rsp)));
            }));
    }
 
    /**
     * List webhooks URL in paginated form. Allows for page index, page size, and sort direction.
     * List Webhooks endpoints Paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param inboxId Filter by inboxId
     * @param phoneId Filter by phoneId
     * @param before Filter by created at before the given timestamp
     * @param health Filter by webhook health
     * @param eventType Optional event type
     */
    public getAllWebhookEndpoints(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, inboxId?: string, phoneId?: string, before?: Date, health?: 'HEALTHY' | 'UNHEALTHY', eventType?: 'EMAIL_RECEIVED' | 'NEW_AI_TRANSFORM_RESULT' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS' | 'NEW_GUEST_USER', options?: Configuration): Observable<PageWebhookEndpointProjection> {
        const requestContextPromise = this.requestFactory.getAllWebhookEndpoints(page, size, sort, searchFilter, since, inboxId, phoneId, before, health, eventType, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllWebhookEndpoints(rsp)));
            }));
    }
 
    /**
     * Get results for all webhooks
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param unseenOnly Filter for unseen exceptions only
     * @param resultType Filter by result type
     * @param eventName Filter by event name
     * @param minStatusCode Minimum response status
     * @param maxStatusCode Maximum response status
     * @param inboxId Inbox ID
     * @param smsId Sms ID
     * @param attachmentId Attachment ID
     * @param emailId Email ID
     * @param phoneId Phone ID
     * @param aiTransformerId AI Transformer ID
     */
    public getAllWebhookResults(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, unseenOnly?: boolean, resultType?: 'BAD_RESPONSE' | 'EXCEPTION' | 'SUCCESS' | 'REDRIVEN', eventName?: 'EMAIL_RECEIVED' | 'NEW_AI_TRANSFORM_RESULT' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS' | 'NEW_GUEST_USER', minStatusCode?: number, maxStatusCode?: number, inboxId?: string, smsId?: string, attachmentId?: string, emailId?: string, phoneId?: string, aiTransformerId?: string, options?: Configuration): Observable<PageWebhookResult> {
        const requestContextPromise = this.requestFactory.getAllWebhookResults(page, size, sort, searchFilter, since, before, unseenOnly, resultType, eventName, minStatusCode, maxStatusCode, inboxId, smsId, attachmentId, emailId, phoneId, aiTransformerId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllWebhookResults(rsp)));
            }));
    }
 
    /**
     * List webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List Webhooks Paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param inboxId Filter by inboxId
     * @param aiTransformerId Filter by aiTransformerId
     * @param phoneId Filter by phoneId
     * @param before Filter by created at before the given timestamp
     * @param health Filter by webhook health
     * @param eventType Optional event type
     * @param url Optional url endpoint filter
     * @param eventTypeSource Webhook source type category such as phone, inbox, aiTranformer
     * @param includeAccountWide Include account scope webhooks when passing phoneId, inboxId, or aiTransformerId filters
     */
    public getAllWebhooks(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, inboxId?: string, aiTransformerId?: string, phoneId?: string, before?: Date, health?: 'HEALTHY' | 'UNHEALTHY', eventType?: 'EMAIL_RECEIVED' | 'NEW_AI_TRANSFORM_RESULT' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS' | 'NEW_GUEST_USER', url?: string, eventTypeSource?: 'INBOX' | 'PHONE' | 'AI_TRANSFORMER', includeAccountWide?: boolean, options?: Configuration): Observable<PageWebhookProjection> {
        const requestContextPromise = this.requestFactory.getAllWebhooks(page, size, sort, searchFilter, since, inboxId, aiTransformerId, phoneId, before, health, eventType, url, eventTypeSource, includeAccountWide, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllWebhooks(rsp)));
            }));
    }
 
    /**
     * Get paginated webhooks for an Inbox
     * @param inboxId 
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param health Filter by webhook health
     * @param eventType Optional event type
     * @param includeAccountWide Include account scope inbox webhooks
     */
    public getInboxWebhooksPaginated(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, health?: 'HEALTHY' | 'UNHEALTHY', eventType?: 'EMAIL_RECEIVED' | 'NEW_AI_TRANSFORM_RESULT' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS' | 'NEW_GUEST_USER', includeAccountWide?: boolean, options?: Configuration): Observable<PageWebhookProjection> {
        const requestContextPromise = this.requestFactory.getInboxWebhooksPaginated(inboxId, page, size, sort, searchFilter, since, before, health, eventType, includeAccountWide, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxWebhooksPaginated(rsp)));
            }));
    }
 
    /**
     * Get JSON Schema definition for webhook payload by event
     * @param event 
     */
    public getJsonSchemaForWebhookEvent(event: 'EMAIL_RECEIVED' | 'NEW_AI_TRANSFORM_RESULT' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS' | 'NEW_GUEST_USER', options?: Configuration): Observable<JSONSchemaDto> {
        const requestContextPromise = this.requestFactory.getJsonSchemaForWebhookEvent(event, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJsonSchemaForWebhookEvent(rsp)));
            }));
    }
 
    /**
     * Get JSON Schema definition for webhook payload
     * @param webhookId 
     */
    public getJsonSchemaForWebhookPayload(webhookId: string, options?: Configuration): Observable<JSONSchemaDto> {
        const requestContextPromise = this.requestFactory.getJsonSchemaForWebhookPayload(webhookId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJsonSchemaForWebhookPayload(rsp)));
            }));
    }
 
    /**
     * Get paginated webhooks for a phone number
     * @param phoneId 
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param eventType Optional event type
     * @param searchFilter Optional search filter
     * @param health Filter by webhook health
     * @param includeAccountWide Include account scope phone webhooks
     */
    public getPhoneNumberWebhooksPaginated(phoneId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, eventType?: 'EMAIL_RECEIVED' | 'NEW_AI_TRANSFORM_RESULT' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS' | 'NEW_GUEST_USER', searchFilter?: string, health?: 'HEALTHY' | 'UNHEALTHY', includeAccountWide?: boolean, options?: Configuration): Observable<PageWebhookProjection> {
        const requestContextPromise = this.requestFactory.getPhoneNumberWebhooksPaginated(phoneId, page, size, sort, since, before, eventType, searchFilter, health, includeAccountWide, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPhoneNumberWebhooksPaginated(rsp)));
            }));
    }
 
    /**
     * Get test webhook payload example. Response content depends on eventName passed. Uses `EMAIL_RECEIVED` as default.
     * @param eventName 
     */
    public getTestWebhookPayload(eventName?: 'EMAIL_RECEIVED' | 'NEW_AI_TRANSFORM_RESULT' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS' | 'NEW_GUEST_USER', options?: Configuration): Observable<AbstractWebhookPayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayload(eventName, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayload(rsp)));
            }));
    }
 
    /**
     * Get webhook test payload for bounce
     */
    public getTestWebhookPayloadBounce(options?: Configuration): Observable<WebhookBouncePayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayloadBounce(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayloadBounce(rsp)));
            }));
    }
 
    /**
     * Get webhook test payload for bounce recipient
     */
    public getTestWebhookPayloadBounceRecipient(options?: Configuration): Observable<WebhookBounceRecipientPayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayloadBounceRecipient(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayloadBounceRecipient(rsp)));
            }));
    }
 
    /**
     * Get webhook test payload for delivery status event
     */
    public getTestWebhookPayloadDeliveryStatus(options?: Configuration): Observable<WebhookDeliveryStatusPayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayloadDeliveryStatus(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayloadDeliveryStatus(rsp)));
            }));
    }
 
    /**
     * Get webhook test payload for email opened event
     */
    public getTestWebhookPayloadEmailOpened(options?: Configuration): Observable<WebhookEmailOpenedPayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayloadEmailOpened(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayloadEmailOpened(rsp)));
            }));
    }
 
    /**
     * Get webhook test payload for email opened event
     */
    public getTestWebhookPayloadEmailRead(options?: Configuration): Observable<WebhookEmailReadPayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayloadEmailRead(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayloadEmailRead(rsp)));
            }));
    }
 
    /**
     * Get example payload for webhook
     * @param webhookId 
     */
    public getTestWebhookPayloadForWebhook(webhookId: string, options?: Configuration): Observable<AbstractWebhookPayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayloadForWebhook(webhookId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayloadForWebhook(rsp)));
            }));
    }
 
    /**
     * Get webhook test payload for new ai transform result event
     */
    public getTestWebhookPayloadNewAITransformResult(options?: Configuration): Observable<WebhookNewAITransformResultPayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayloadNewAITransformResult(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayloadNewAITransformResult(rsp)));
            }));
    }
 
    /**
     * Get webhook test payload for new attachment event
     */
    public getTestWebhookPayloadNewAttachment(options?: Configuration): Observable<WebhookNewAttachmentPayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayloadNewAttachment(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayloadNewAttachment(rsp)));
            }));
    }
 
    /**
     * Get webhook test payload for new contact event
     */
    public getTestWebhookPayloadNewContact(options?: Configuration): Observable<WebhookNewContactPayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayloadNewContact(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayloadNewContact(rsp)));
            }));
    }
 
    /**
     * Get webhook test payload for new email event
     */
    public getTestWebhookPayloadNewEmail(options?: Configuration): Observable<WebhookNewEmailPayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayloadNewEmail(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayloadNewEmail(rsp)));
            }));
    }
 
    /**
     * Get webhook test payload for new sms event
     */
    public getTestWebhookPayloadNewSms(options?: Configuration): Observable<WebhookNewSmsPayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayloadNewSms(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayloadNewSms(rsp)));
            }));
    }
 
    /**
     * Get a webhook
     * @param webhookId 
     */
    public getWebhook(webhookId: string, options?: Configuration): Observable<WebhookDto> {
        const requestContextPromise = this.requestFactory.getWebhook(webhookId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWebhook(rsp)));
            }));
    }
 
    /**
     * Get a webhook result for a webhook
     * @param webhookResultId Webhook Result ID
     */
    public getWebhookResult(webhookResultId: string, options?: Configuration): Observable<WebhookResultDto> {
        const requestContextPromise = this.requestFactory.getWebhookResult(webhookResultId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWebhookResult(rsp)));
            }));
    }
 
    /**
     * Get a webhook results for a webhook
     * @param webhookId ID of webhook to get results for
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param unseenOnly Filter for unseen exceptions only
     * @param resultType Filter by result type
     * @param eventName Filter by event name
     * @param minStatusCode Minimum response status
     * @param maxStatusCode Maximum response status
     * @param inboxId Inbox ID
     * @param smsId Sms ID
     * @param attachmentId Attachment ID
     * @param emailId Email ID
     * @param phoneId Phone ID
     * @param aiTransformerId AI Transformer ID
     */
    public getWebhookResults(webhookId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, unseenOnly?: boolean, resultType?: 'BAD_RESPONSE' | 'EXCEPTION' | 'SUCCESS' | 'REDRIVEN', eventName?: 'EMAIL_RECEIVED' | 'NEW_AI_TRANSFORM_RESULT' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS' | 'NEW_GUEST_USER', minStatusCode?: number, maxStatusCode?: number, inboxId?: string, smsId?: string, attachmentId?: string, emailId?: string, phoneId?: string, aiTransformerId?: string, options?: Configuration): Observable<PageWebhookResult> {
        const requestContextPromise = this.requestFactory.getWebhookResults(webhookId, page, size, sort, searchFilter, since, before, unseenOnly, resultType, eventName, minStatusCode, maxStatusCode, inboxId, smsId, attachmentId, emailId, phoneId, aiTransformerId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWebhookResults(rsp)));
            }));
    }
 
    /**
     * Get a webhook results count for a webhook
     * @param webhookId ID of webhook to get results for
     */
    public getWebhookResultsCount(webhookId: string, options?: Configuration): Observable<CountDto> {
        const requestContextPromise = this.requestFactory.getWebhookResultsCount(webhookId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWebhookResultsCount(rsp)));
            }));
    }
 
    /**
     * Get count of unseen webhook results with error status
     */
    public getWebhookResultsUnseenErrorCount(options?: Configuration): Observable<UnseenErrorCountDto> {
        const requestContextPromise = this.requestFactory.getWebhookResultsUnseenErrorCount(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWebhookResultsUnseenErrorCount(rsp)));
            }));
    }
 
    /**
     * Get all webhooks for an Inbox
     * @param inboxId 
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getWebhooks(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Observable<Array<WebhookProjection>> {
        const requestContextPromise = this.requestFactory.getWebhooks(inboxId, page, size, sort, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWebhooks(rsp)));
            }));
    }
 
    /**
     * Allows you to resend webhook payloads for any recorded webhook result that failed to deliver the payload.
     * Redrive all webhook results that have failed status
     */
    public redriveAllWebhookResults(options?: Configuration): Observable<WebhookRedriveAllResult> {
        const requestContextPromise = this.requestFactory.redriveAllWebhookResults(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.redriveAllWebhookResults(rsp)));
            }));
    }
 
    /**
     * Allows you to resend a webhook payload that was already sent. Webhooks that fail are retried automatically for 24 hours and then put in a dead letter queue. You can retry results manually using this method.
     * Get a webhook result and try to resend the original webhook payload
     * @param webhookResultId Webhook Result ID
     */
    public redriveWebhookResult(webhookResultId: string, options?: Configuration): Observable<WebhookRedriveResult> {
        const requestContextPromise = this.requestFactory.redriveWebhookResult(webhookResultId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.redriveWebhookResult(rsp)));
            }));
    }
 
    /**
     * Send webhook test data
     * @param webhookId 
     */
    public sendTestData(webhookId: string, options?: Configuration): Observable<WebhookTestResult> {
        const requestContextPromise = this.requestFactory.sendTestData(webhookId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendTestData(rsp)));
            }));
    }
 
    /**
     * Update a webhook
     * @param webhookId 
     * @param createWebhookOptions 
     * @param inboxId 
     * @param aiTransformerId 
     * @param phoneNumberId 
     * @param overrideAuth 
     */
    public updateWebhook(webhookId: string, createWebhookOptions: CreateWebhookOptions, inboxId?: string, aiTransformerId?: string, phoneNumberId?: string, overrideAuth?: boolean, options?: Configuration): Observable<WebhookDto> {
        const requestContextPromise = this.requestFactory.updateWebhook(webhookId, createWebhookOptions, inboxId, aiTransformerId, phoneNumberId, overrideAuth, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWebhook(rsp)));
            }));
    }
 
    /**
     * Update a webhook request headers
     * @param webhookId 
     * @param webhookHeaders 
     */
    public updateWebhookHeaders(webhookId: string, webhookHeaders: WebhookHeaders, options?: Configuration): Observable<WebhookDto> {
        const requestContextPromise = this.requestFactory.updateWebhookHeaders(webhookId, webhookHeaders, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWebhookHeaders(rsp)));
            }));
    }
 
    /**
     * Verify a webhook payload using the messageId and signature. This allows you to be sure that MailSlurp sent the payload and not another server.
     * Verify a webhook payload signature
     * @param verifyWebhookSignatureOptions 
     */
    public verifyWebhookSignature(verifyWebhookSignatureOptions: VerifyWebhookSignatureOptions, options?: Configuration): Observable<VerifyWebhookSignatureResults> {
        const requestContextPromise = this.requestFactory.verifyWebhookSignature(verifyWebhookSignatureOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.verifyWebhookSignature(rsp)));
            }));
    }
 
    /**
     * Wait for webhook results for a webhook
     * @param webhookId ID of webhook to get results for
     * @param expectedCount Expected result count
     * @param timeout Max time to wait in milliseconds
     */
    public waitForWebhookResults(webhookId: string, expectedCount: number, timeout: number, options?: Configuration): Observable<Array<WebhookResultDto>> {
        const requestContextPromise = this.requestFactory.waitForWebhookResults(webhookId, expectedCount, timeout, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.waitForWebhookResults(rsp)));
            }));
    }
 
}
